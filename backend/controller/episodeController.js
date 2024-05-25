const Episode = require('../models/episodeModel');

exports.getEpisode = async (req, res) => {
    try {
        const episode = await Episode.findById(req.params.id).populate('season');
        res.status(200).json({
            status: 200,
            message: "fetch data successfully",
            data: {
                episode
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 404,
            message: "fail",
            message: err
        });
    }
};

exports.createEpisode = async (req, res) => {
    try {
        const newEpisode = await Episode.create(req.body);
        res.status(201).json({
            status: 201,
            message: 'Episode created successfully',
            data: {
                episode: newEpisode
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 404,
            message: "fail",
            message: err
        });
    }
};

exports.updateEpisode = async (req, res) => {
    try {
        const episode = await Episode.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 200,
            message: "Episode updated successfully",
            data: {
                episode
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 404,
            message: "fail",
            message: err
        });
    }
};

exports.deleteEpisode = async (req, res) => {
    try {
        await Episode.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 204,
            message: "Episode deleted successfully",
            data: null
        });
    } catch (err) {
        res.status(404).json({
            status: 404,
            message: "fail",
            message: err
        });
    }
};