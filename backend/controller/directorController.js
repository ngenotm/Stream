const Director = require('../model/directorModel');
const uploadImage = require('../utils/upload');


//! config uploader
const upload = uploadImage({
    fieldName: "profile",
    fileSize: "4000000",
    destination: '../public/director/',
    width: 600,
    height: 600,
    quality: 80
});

exports.createNewDirector = [upload, async (req, res) => {
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

exports.createDirector = async (req, res) => {
    try {
        const newDirector = await Director.create(req.body);
        res.status(201).json({
            status: 201,
            message: 'Director created successfully',
            director: newDirector
        });
    } catch (err) {
        res.status(400).json({
            status: 404,
            message: err
        });
    }
};

exports.updateDirector = async (req, res) => {
    try {
        const director = await Director.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 200,
            message: "Director updated successfully",
            director
        });
    } catch (err) {
        res.status(404).json({
            status: 404,
            message: err
        });
    }
};

exports.deleteDirector = async (req, res) => {
    try {
        const director = await Director.findByIdAndDelete(req.params.id);
        if (!director) {
            return res.status(404).json({ status: 404, message: "Actor not found" })
        }
        res.status(204).json({
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