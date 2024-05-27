const Series = require('../model/seriesModel');

exports.getAllSeries = async (req, res) => {
    try {
        const series = await Series.find().populate('director seasons cast reviews');
        res.status(200).json({
            status: 'success',
            results: series.length,
            data: {
                series
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.getSeries = async (req, res) => {
    try {
        const series = await Series.findById(req.params.id).populate('director seasons cast reviews');
        res.status(200).json({
            status: 'success',
            data: {
                series
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.createSeries = async (req, res) => {
    try {
        const newSeries = await Series.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                series: newSeries
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};

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
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.deleteSeries = async (req, res) => {
    try {
        await Series.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};