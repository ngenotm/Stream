const Series = require('../model/seriesModel');
const { seriesUploader } = require('../utils/videoUploader');


exports.getAllSeries = async (req, res) => {
    console.log("first")
    try {
        const series = await Series.find().populate('director seasons actors');
        res.status(200).json({
            status: 'success',
            total: series.length,
            series
        });
    } catch (err) {
        res.status(500).json({
            status: '500',
            message: err
        });
    }
};

exports.getSeries = async (req, res) => {
    try {
        const series = await Series.findById(req.params.id).populate("director actors").populate({
            path: 'seasons',
            model: 'Seasons',
            populate: {
                path: 'episodes',
                model: 'Episodes'
            }
        });
        if (!series) return res.status(404).json({ message: "Series not found" });
        res.status(200).json({
            status: 'success',
            series
        });
    } catch (err) {
        res.status(500).json({
            status: '500',
            message: err
        });
    }
};

exports.createSeries = [seriesUploader, async (req, res) => {
    try {
        const thumbnailUrl = req.files.thumbnail[0].filename;
        const trailerUrl = req.files.trailer[0].filename;
        const coverUrl = req.files.cover[0].filename

        req.body.thumbnail = thumbnailUrl;
        req.body.trailer = trailerUrl;
        req.body.cover = coverUrl;

        const newSeries = await Series.create(req.body);
        res.status(201).json({
            status: 'success',
            series: newSeries
        });
    } catch (err) {
        res.status(500).json({
            status: '500',
            message: err
        });
    }
}];

//! must test and change the controller
exports.updateSeries = async (req, res) => {
    try {
        const series = await Series.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'success',
            data: {
                series
            }
        });
    } catch (err) {
        res.status(500).json({
            status: '500',
            message: err
        });
    }
};

exports.deleteSeries = async (req, res) => {
    try {
        const series = await Series.findByIdAndDelete(req.params.id);
        if (!series) return res.status(404).json({ message: "Series not found" });

        //! must delete all episodes and season in the series

        res.status(200).json({
            status: '200',
            message: "Series deleted successfully",
            data: null
        });
    } catch (err) {
        res.status(500).json({
            status: '500',
            message: err
        });
    }
};