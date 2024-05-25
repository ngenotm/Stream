const Review = require('../models/reviewModel');

exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).json({
            status: 200,
            message: "fetch data successfully",
            results: reviews.length,
            data: {
                reviews
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 404,
            message: err
        });
    }
};

exports.getReview = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        res.status(200).json({
            status: 200,
            message: "fetch data successfully",
            data: {
                review
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 404,
            message: err
        });
    }
};

exports.createReview = async (req, res) => {
    try {
        const newReview = await Review.create(req.body);
        res.status(201).json({
            status: 201,
            message: 'Review created successfully',
            data: {
                review: newReview
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 404,
            message: err
        });
    }
};

exports.updateReview = async (req, res) => {
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 200,
            message: 'Review updated successfully',
            data: {
                review
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 404,
            message: err
        });
    }
};

exports.deleteReview = async (req, res) => {
    try {
        await Review.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 204,
            message: 'Review deleted successfully',
            data: null
        });
    } catch (err) {
        res.status(404).json({
            status: 404,
            message: err
        });
    }
};