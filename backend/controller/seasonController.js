const Season = require('../model/seasonModel');


//! Get Request
exports.getSeason = async (req, res) => {
    try {
        const season = await Season.findById(req.params.id).populate('episodes');
        res.status(200).json({
            status: 200,
            message: "fetch data successfully",
            data: {
                season
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

exports.getSeasonsBySeries = async (req, res) => {
    try {
        const seasons = await Season.find({ series: req.params.seriesId }).populate('episodes');
        res.status(200).json({
            status: 200,
            message: "fetch data successfully",
            data: {
                seasons
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



//! Post Request
exports.createSeason = async (req, res) => {
    try {
        const newSeason = await Season.create(req.body);
        res.status(201).json({
            status: 200,
            message: "season created successfully",
            data: {
                season: newSeason
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



//! Patch Request
exports.updateSeason = async (req, res) => {
    try {
        const season = await Season.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 200,
            message: "season updated successfully",
            data: {
                season
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



//! Delete Request
exports.deleteSeason = async (req, res) => {
    try {
        await Season.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 200,
            message: "season deleted successfully",
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