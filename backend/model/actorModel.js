const mongoose = require('mongoose');

const actorModel = mongoose.Schema({
    actor_id: {
        type: String,
        required: [true, 'Actor ID is required'],
    },
    fullName: {
        type: String,
        required: [true, 'Full Name is required'],
    },
    date_of_birth: {
        type: String,
        required: [true, 'Date of Birth is required'],
    },
    place_of_birth: {
        type: String,
        required: [true, 'Place of Birth is required'],
    },
    biography: {
        type: String,
        default: "",
        required: false,
    },
    gender: {
        type: String,
        required: [true, 'Gender is required'],
    },
    // awards:{},  //TODO: Add awards
    image: {
        type: String,
        required: [true, 'Image is required']
    },
    //! I might have created a table for actors from all countries.
    country: {
        type: String,
        required: [true, 'Country is required']
    },
    movies: [{
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Movies is required'],
        ref: "Movie"
    }],
    series: [{
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Series is required'],
        ref: "Series"
    }],
});

module.exports = mongoose.model('Actor', actorModel);