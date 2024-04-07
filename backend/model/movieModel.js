const mongoose = require('mongoose');


const movieModel = mongoose.Schema({
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
        type: String,
        required: [true, 'Release Date is required'],
    },
    duration: {
        type: Number,
        required: [true, 'Duration is required'],
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
    cover: {
        type: String,
        required: [true, 'Cover is required!']
    },
    trailer: {
        type: String,
        required: [true, 'Trailer is required']
    },
    release_status: {
        type: String,
        enum: ['now showing', 'coming soon', 'expired'],
        required: [true, 'Release Status is required']
    },
    actors: {
        type: [mongoose.Schema.Types.ObjectId],
        default: [],
        required: false,
        ref: "Actor"
    },
})

module.exports = mongoose.model('Movie', movieModel);