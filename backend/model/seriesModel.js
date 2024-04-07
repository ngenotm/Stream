const mongoose = require('mongoose');

const seriesModel = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    director: {
        type: String,
        required: [true, 'Director is required'],
    },
    description: {
        type: String,
        default: "",
        require: false
    },
    release_date: {
        type: Date,
        required: [true, 'Release Date is required'],
    },
    number_of_seasons: {
        type: Number,
        required: [true, 'Number of Seasons is required'],
    },
    genre: {
        type: String,
        required: [true, 'Genre is required'],
    },
    country: {
        type: String,
        required: [true, 'Country is required']
    },
    rotten_rating: {
        type: Number,
        required: [true, 'Rotten Rating is required']
    },
    imdb_rating: {
        type: Number,
        required: [true, 'IMDB Rating is required']
    },
    thumbnail: {
        type: String,
        required: [true, 'Thumbnail is required']
    },
    image: {
        type: String,
        required: [true, 'Image is required']
    },
    trailer: {
        type: String,
        required: [true, 'Trailer is required']
    },
    release_status: {
        type: String,
        enum: ['Now Showing', 'Coming Soon', 'Expired'],
        required: [true, 'Release Status is required']
    },
});

module.exports = mongoose.model('Series', seriesModel);