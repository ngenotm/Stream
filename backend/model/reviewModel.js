const mongoose = require('mongoose');

const reviewModel = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'User is required'],
        ref: 'User'
    },
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie'
    },
    series: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Series'
    },
    text: {
        type: String,
        required: [true, 'Text is required'],
    },
    rating: {
        type: Number,
        required: [true, 'Rating is required'],
        min: 0,
        max: 5
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Review', reviewModel);