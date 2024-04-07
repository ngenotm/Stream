const { isValidObjectId } = require("mongoose");
const movieModel = require("../model/movieModel");
const { createMovieValidation } = require("../validation/movieValidation");


//! Get Request
exports.allMovies = async (req, res) => {
    try {
        const movies = await movieModel.find();
        res.status(200).json({ status: 200, movies, message: "All movies" });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};

exports.singleMovie = async (req, res) => {
    const movieId = req.params.id;

    if (!isValidObjectId(movieId)) return res.status(400).json({ message: "Invalid Movie ID" });

    try {
        const movie = await movieModel.findById(movieId).populate("actors");
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }
        res.status(200).json({ status: 200, movie, message: "Movie found" });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};

//! Post Request

exports.createMovie = async (req, res) => {
    const { title, director, description, release_date, duration, genre, country, rotten_rating, imdb_rating, thumbnail, cover, trailer, release_status } = req.body;

    try {
        if (createMovieValidation(req.body).error)
            return res.status(400).json({ text: createMovieValidation(req.body).error.message });

        const newMovie = new movieModel({
            title,
            director,
            description,
            release_date,
            duration,
            genre,
            country,
            rotten_rating,
            imdb_rating,
            thumbnail,
            cover,
            trailer,
            release_status
        });
        await newMovie.save();
        res.status(201).json({ status: 201, message: "Movie created", movie: newMovie });
    }
    catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
}

//! Put Request
exports.updateMovie = async (req, res) => {
    const movieId = req.params.id;
    const { title, director, description, release_date, duration, genre, country, rotten_rating, imdb_rating, thumbnail, cover, trailer, release_status } = req.body;

    if (!isValidObjectId(movieId)) return res.status(400).json({ message: "Invalid Movie ID" });

    try {
        const movie = await movieModel.findById(movieId);
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }

        if (createMovieValidation(req.body).error)
            return res.status(400).json({ text: createMovieValidation(req.body).error.message });

        await movieModel.findByIdAndUpdate(movieId, {
            title,
            director,
            description,
            release_date,
            duration,
            genre,
            country,
            rotten_rating,
            imdb_rating,
            thumbnail,
            cover,
            trailer,
            release_status
        }, { new: true });
        res.status(200).json({ status: 200, message: "Movie updated" });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};

//! Delete Request
exports.deleteMovie = async (req, res) => {
    const movieId = req.params.id;

    if (!isValidObjectId(movieId)) return res.status(400).json({ message: "Invalid Movie ID" });

    try {
        const movie = await movieModel.findByIdAndRemove(movieId);
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }
        res.status(200).json({ status: 200, message: "Movie deleted" });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};