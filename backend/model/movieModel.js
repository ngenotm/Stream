const mongoose = require('mongoose');


const movieModel = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    director: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Directors',
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
    genres: {
        type: [String],
        required: [true, 'Genre is required'],
    },
    category: {
        type: [String],
        required: [true, 'Category is required']
    },
    country: {
        type: String,
        required: [true, 'Country is required']
    },
    language: {
        type: String,
        required: [true, 'Language is required']
    },
    age_rating: {
        type: String,
        required: [true, 'Age Rating is required']
    },
    production_company: {
        type: String,
        required: [true, 'Production Company is required']
    },
    rotten_rating: {
        type: Number,
        required: [true, 'Rotten Rating is required']
    },
    imdb_rating: {
        type: Number,
        required: [true, 'IMDB Rating is required']
    },
    awards: [{
        name: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        }
    }],
    box_office: {
        budget: {
            type: Number,
            required: true
        },
        gross: {
            type: Number,
            required: true
        }
    },
    top_250_rank: {
        type: Number,
        required: false,
        min: 1,
        max: 250
    },
    pictures: {
        type: [String],
        required: false
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
        ref: "Actors"
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reviews'
    }]
})

module.exports = mongoose.model('Movies', movieModel);