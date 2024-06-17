const fs = require('fs');
const path = require('path');

const Director = require('../model/directorModel');
const uploadImage = require('../utils/upload');
const { createValidation, editValidation } = require('../validation/directorValidation');



//! config uploader
const upload = uploadImage({
    fieldName: "profile",
    fileSize: "4000000",
    destination: '../public/director/',
    width: 600,
    height: 600,
    quality: 80
});




exports.getAllDirectors = async (req, res) => {
    try {
        const directors = await Director.find();
        res.status(200).json({
            status: 200,
            message: "fetch data successfully",
            results: directors.length,
            directors
        });
    } catch (err) {
        res.status(404).json({
            status: 404,
            message: err
        });
    }
};

exports.getDirector = async (req, res) => {
    try {
        const director = await Director.findById(req.params.id);
        res.status(200).json({
            status: 200,
            message: "fetch data successfully",
            director
        });
    } catch (err) {
        res.status(404).json({
            status: 404,
            message: err
        });
    }
};

exports.createDirector = [upload, createValidation, async (req, res) => {
    try {
        const newDirector = await Director.create(req.body);
        res.status(201).json({
            status: 201,
            message: "Director created successfully",
            director: newDirector
        });
    } catch (err) {
        res.status(400).json({
            status: 404,
            message: err
        });
    }
}];

exports.updateDirector = [upload, editValidation, async (req, res) => {
    const directorId = req.params.id;

    try {
        const director = await Director.findById(directorId);
        if(!director) return res.status(404).json({ status: 404, message: "Director not found" });

        if (req.body.profile && director.profile) {
            fs.unlinkSync(path.join(__dirname, '../public/director/', director.profile));
        }

        const updatedDirector = await Director.findByIdAndUpdate(directorId, req.body, {
            new: true,
        });

        res.status(200).json({ status: 200, message: "Director updated", director: updatedDirector });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
}];

exports.deleteDirector = async (req, res) => {
    try {
        const director = await Director.findByIdAndDelete(req.params.id);
        if (!director) {
            return res.status(404).json({ status: 404, message: "Actor not found" })
        }
        res.status(200).json({
            status: 204,
            message: "Director deleted successfully",
        });
    } catch (err) {
        res.status(404).json({
            status: 404,
            message: err
        });
    }
};