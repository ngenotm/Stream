const userModel = require("../model/userModel");
const jwt = require('jsonwebtoken');
const { queryValidation } = require("../validation/queryValidation");
const bcrypt = require('bcrypt');
const { isValidObjectId } = require("mongoose");
const { createUserValidation, loginValidation } = require("../validation/userValidation");


//! Get Request
exports.allUser = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json({ status: 200, users, message: "All Users" });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
}

exports.singleUser = async (req, res) => {
    if (!isValidObjectId(req.params.id)) return res.status(400).json({ status: 400, message: "Invalid User ID" });

    const userId = req.params.id;

    try {
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ status: 200, user, message: "User found" });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
    res.send("test")
};


//! Post Request
exports.createUser = async (req, res) => {
    const { fullName, email, password } = req.body;

    try {
        const user = await userModel.findOne({ email });
        if (user) {
            return res.status(400).json({ status: 400, message: "User already exists" });
        }

        if (createUserValidation(req.body).error)
            return res.status(400).json({ status: 400, message: createUserValidation(req.body).error.message });

        const newUser = new userModel({
            fullName,
            email,
            password
        });
        await newUser.save();
        res.status(201).json({ status: 201, message: "User created", user: newUser });
    }
    catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};


//? Login
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (loginValidation(req.body).error)
            return res.status(400).json({ status: 400, message: loginValidation(req.body).error.message });
        
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
        res.header("Access-Control-Expose-headers", "x-auth-token").header("x-auth-token", token)
            .status(200).json({ status: 200, message: "Login Successful" });
    }
    catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};


//! Delete Request
exports.deleteUser = async (req, res) => {
    const userId = req.params.id;

    queryValidation(userId, res, "Invalid User ID");

    try {
        const user = await userModel.findByIdAndRemove(userId);
        if (!user) {
            return res.status(404).json({ status: 404, message: "User not found" });
        }
        res.status(200).json({ status: 200, message: "User deleted" });
    }
    catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
}