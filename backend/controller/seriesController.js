const Review = require('../model/reviewModel');
const Series = require('../model/seriesModel');
const { seriesUploader } = require('../utils/videoUploader');
const { createSeriesValidation } = require('../validation/seriesValidation');


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

exports.singleSeries = async (req, res) => {
    const seriesId = req.params.id;

    try {
        const series = await Series.findById(seriesId).populate("director actors").populate({ path: 'seasons', model: 'Seasons', populate: { path: 'episodes', model: 'Episodes' } });
        if (!series) return res.status(404).json({ message: "Series not found" });

        series.views += 1;
        await series.save();

        res.status(200).json({ status: 200, series, message: "Series fetch successfully" });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
}

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


exports.topRatedSeries = async (req, res) => {
    try {
        // Fetch distinct categories from the Series model
        const categories = await Series.distinct('category');

        // Initialize an object to store top-rated series for each category
        const topRatedSeries = {};

        // Loop through each category
        for (const category of categories) {
            // Aggregate reviews to calculate the average rating for each series in the current category
            const series = await Review.aggregate([
                {
                    $lookup: {
                        from: 'series',
                        localField: 'media',
                        foreignField: '_id',
                        as: 'seriesDetails'
                    }
                },
                { $unwind: '$seriesDetails' },
                { $match: { 'seriesDetails.category': category } },
                {
                    $group: {
                        _id: '$media',
                        averageRating: { $avg: '$rating' },
                        seriesDetails: { $first: '$seriesDetails' }
                    }
                },
                { $sort: { averageRating: -1 } },
                { $limit: 10 }
            ]);

            // Store the top-rated series in the object
            topRatedSeries[category] = series.map(serie => ({
                title: serie.seriesDetails.title,
                averageRating: serie.averageRating,
                thumbnail: serie.seriesDetails.thumbnail
            }));
        }

        res.status(200).json(topRatedSeries);
    } catch (error) {
        console.error('Error fetching top-rated series:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.trendingSeries = async () => {
    const currentDate = new Date();
    const recentSeries = await Series.find({
        publish_date: { $gte: new Date(currentDate.setDate(currentDate.getDate() - 30)) }
    }).sort({ views: -1 })
        .limit(12);

    return recentSeries;
};


//! Post Request
exports.createSeries = [seriesUploader, createSeriesValidation, async (req, res) => {
    try {
        const newSeries = await Series.create(req.body);
        res.status(201).json({
            status: '201',
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