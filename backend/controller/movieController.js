const { isValidObjectId } = require("mongoose");
const path = require('path');

const Movie = require("../model/movieModel");
const { createMovieValidation } = require("../validation/movieValidation");
const { movieUploader } = require('../utils/videoUploader');


//! Get Request
exports.allMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json({ status: 200, movies, message: "All movies" });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};

exports.singleMovie = async (req, res) => {
    const movieId = req.params.id;

    try {
        const movie = await Movie.findById(movieId).populate("actors director");
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }
        res.status(200).json({ status: 200, movie, message: "Movie fetch successfully" });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};


//! Post Request
// exports.createMovie = [upload.fields([{ name: 'thumbnail', maxCount: 1 }, { name: "cover", maxCount: 1 }, { name: 'trailer', maxCount: 1 }, { name: 'files' }]), async (req, res) => {
exports.createMovie = [movieUploader, async (req, res) => {
    try {
        const thumbnailUrl = req.files.thumbnail[0].filename;
        const trailerUrl = req.files.trailer[0].filename;
        if (req.files.files) {
            const fileUrls = req.files.files.map(file => file.filename);
            req.body.files = fileUrls.map((url, index) => ({
                quality: "1080p",
                url
            }));
        }

        const coverUrl = req.files.cover[0].filename

        req.body.thumbnail = thumbnailUrl;
        req.body.trailer = trailerUrl;
        req.body.cover = coverUrl;

        const newMovie = await Movie.create(req.body);
        await newMovie.save();

        res.status(201).json({ status: 201, message: "Movie created successfully", movie: newMovie });
    }
    catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
}]


//! Put Request
exports.updateMovie = async (req, res) => {
    const movieId = req.params.id;

    try {
        const movie = await movieModel.findById(movieId);
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }

        if (createMovieValidation(req.body).error)
            return res.status(400).json({ text: createMovieValidation(req.body).error.message });

        await movieModel.findByIdAndUpdate(movieId, req.body, { new: true });
        res.status(200).json({ status: 200, message: "Movie updated" });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};

//! Delete Request
exports.deleteMovie = async (req, res) => {
    const movieId = req.params.id;

    try {
        const movie = await Movie.findByIdAndDelete(movieId);
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }
        res.status(200).json({ status: 200, message: "Movie deleted successfully" });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};