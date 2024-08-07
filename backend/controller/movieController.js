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

exports.movieCategories = async (req, res) => {
    try {
        // Fetch distinct categories from the Movie model
        const categories = await Movie.distinct('category');

        // Initialize an object to store images for each category
        const categoryImages = {};

        // Loop through each category
        for (const category of categories) {
            // Fetch movies for the current category
            const movies = await Movie.find({ category }).limit(4);
            // Select four images from the fetched movies
            const images = movies.map(movie => movie.thumbnail).slice(0, 4);
            // Store the selected images in the object
            categoryImages[category] = images;
        }

        // Send the object as a response
        setTimeout(() => {
            res.status(200).json(categoryImages);
        }, 1000);
    } catch (error) {
        console.error('Error fetching movie categories:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


//! Post Request
exports.createMovie = [movieUploader, createMovieValidation, async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);

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