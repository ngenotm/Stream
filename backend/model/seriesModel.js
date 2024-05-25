const mongoose = require('mongoose');

const seriesModel = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    director: {
        type: mongoose.Schema.Types.ObjectId,
        default: "",
        ref: "Director"
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
    seasons: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Season'
    }],
    genre: [{
        type: String,
        required: [true, 'Genre is required'],
    }],
    cast: [{
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Cast is required'],
        ref: "Actor"
    }],
    country: {
        type: String,
        required: [true, 'Country is required']
    },
    language: {
        type: String,
        required: [true, 'Language is required']
    },
    ageRating: {
        type: String,
        required: [true, 'Age Rating is required']
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
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }]
    //! Add awards
});

module.exports = mongoose.model('Series', seriesModel);