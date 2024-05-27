const Director = require('../model/directorModel');

exports.getAllDirectors = async (req, res) => {
    try {
        const directors = await Director.find();
        res.status(200).json({
            status: 200,
            message: "fetch data successfully",
            results: directors.length,
            data: {
                directors
            }
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
            data: {
                director
            }
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
            data: {
                director: newDirector
            }
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
            data: {
                director
            }
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
        await Director.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 204,
            message: "Director deleted successfully",
            data: null
        });
    } catch (err) {
        res.status(404).json({
            status: 404,
            message: err
        });
    }
};