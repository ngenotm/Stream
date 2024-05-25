const mongoose = require('mongoose');

const episodeModel = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
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
    runtime: {
        type: Number,
        required: [true, 'Runtime is required'],
    },
    season: {
        type: Number,
        required: [true, 'Season is required'],
    },
    series: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Series is required'],
        ref: "Series"
    },
    thumbnail: {
        type: String,
        required: [true, 'Thumbnail is required']
    },
    video: {
        type: String,
        required: [true, 'Video is required']
    },
});

module.exports = mongoose.model('Episode', episodeModel);