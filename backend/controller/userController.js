const userModel = require("../model/userModel");
const jwt = require('jsonwebtoken');
const { queryValidation } = require("../validation/queryValidation");
const bcrypt = require('bcrypt');
const { isValidObjectId } = require("mongoose");
const { createUserValidation, loginValidation } = require("../validation/userValidation");
const ValidateObjectId = require("../middleware/ValidateObjectId");

//! Get Request
exports.allUser = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json({ status: 200, users, message: "User list fetch successfully" });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
}

exports.singleUser = async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ status: 200, user, message: "User fetch successfully" });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};

exports.getWatchList = async (req, res) => {
    const userId = req.params.id;
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const limit = 12;
    const skip = (page - 1) * limit;

    if (!isValidObjectId(userId)) return res.status(400).json({ status: 400, message: "Invalid User ID" });

    try {
        const user = await userModel.findById(userId)
            .select('watchList')
            .populate({
                path: 'watchList.item',
                options: {
                    skip: skip,
                    limit: limit
                }
            });

        if (!user) {
            return res.status(404).json({ status: 404, message: "User not found" });
        }

        res.status(200).json({ status: 200, watchList: user.watchList, message: "Watchlist fetched" });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};



//! Post Request
exports.registerUser = async (req, res) => {
    const { fullName, email, password, remember } = req.body;

    try {
        const user = await userModel.findOne({ email });
        if (user) {
            return res.status(400).json({ status: 400, message: "User already exists" });
        }

        // if (createUserValidation(req.body).error)
        //     return res.status(400).json({ status: 400, message: createUserValidation(req.body).error.message });

        const newUser = new userModel({
            fullName,
            email,
            password
        });

        const tokenData = {
            id: newUser._id,
            email: newUser.email,
            role: newUser.role,
        }

        const token = jwt.sign(tokenData, process.env.JWT_SECRET);

        await newUser.save();

        if (remember) {
            const refreshToken = jwt.sign(tokenData, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '30d' });

            newUser.refreshToken = refreshToken; //! Save refresh token to user database
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                sameSite: 'strict',
                secure: process.env.NODE_ENV == "production",
                maxAge: 86400000 * 30, // 30 day
                path: '/api/user/refreshToken'   //! This is important and should be the same as the route path
            });
        }
        res.cookie('token', token, {
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV == "production",
            maxAge: 86400000 // 1 day
        });

        res.status(201).json({ status: 201, message: "User created", user: newUser });
    }
    catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};


//? Login
exports.login = async (req, res) => {
    const { email, password, remember } = req.body;

    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ status: 404, message: "User not found" });
        }
        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ status: 401, message: "Invalid Credentials" });
        }
        const tokenData = {
            id: user._id,
            email: user.email,
            role: user.role,
        }

        const token = jwt.sign(tokenData, process.env.JWT_SECRET);
        const refreshToken = jwt.sign(tokenData, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '30d' });

        user.refreshToken = refreshToken; //! Save refresh token to user database
        await user.save();

        // Set HTTP Only cookie for refreshToken
        if (remember) {
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                sameSite: 'strict',
                secure: process.env.NODE_ENV == "production",
                maxAge: 86400000 * 30, // 30 day
                path: '/api/user/refreshToken'   //! This is important and should be the same as the route path
            });
        }
        res.cookie('token', token, {
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV == "production",
            maxAge: 86400000 // 1 day
        });

        // Set HTTP Only cookie for token (access token)
        res.status(200).json({ status: 200, message: "Login Successfully" });
    }
    catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};


exports.refreshToken = async (req, res) => {
    const { refreshToken } = req.cookies
    if (!refreshToken) return res.status(401).json({ status: 401, message: "No refresh token provided" });

    try {
        //! Verify the refresh token
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        const user = await userModel.findById(decoded.id);

        if (!user || user.refreshToken !== refreshToken) {
            return res.status(403).json({ status: 403, message: "Invalid refresh token" });
        }

        // Generate a new access token
        const newTokenData = { id: user._id, email: user.email, role: user.role };
        const newToken = jwt.sign(newTokenData, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Optionally generate a new refresh token
        const newRefreshToken = jwt.sign(newTokenData, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '30d' });
        user.refreshToken = newRefreshToken; // Update the refresh token in the database
        await user.save();

        // Set HTTP Only cookies for the new tokens
        res.cookie('refreshToken', newRefreshToken, {
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV == "production",
            path: '/api/user/refreshToken'   //! This is important and should be the same as the route path
        });
        res.cookie('token', newToken, {
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV == "production",
            maxAge: 3600000 // 1 hour
        });

        res.status(200).json({ status: 200, message: "Tokens refreshed successfully" });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};

exports.logout = (req, res) => {
    try {
        res.cookie('token', '', { httpOnly: true, sameSite: 'strict', expires: new Date(0) });
        res.status(200).json({ status: 200, message: "Logout Successfully" });
    }
    catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};



//! must add edit user controller here


//! Delete Request
exports.deleteUser = async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await userModel.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).json({ status: 404, message: "User not found" });
        }
        res.status(200).json({ status: 200, message: "User deleted" });
    }
    catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
}