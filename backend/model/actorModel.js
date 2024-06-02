const mongoose = require('mongoose');

const actorModel = mongoose.Schema({
    actorId: {
        type: String,
        required: [true, 'Actor ID is required'],
    },
    fullName: {
        type: String,
        required: [true, 'Full Name is required'],
    },
    birthDate: {
        type: String,
        required: [true, 'Date of Birth is required'],
    },
    birthPlace: {
        type: String,
        required: [true, 'Place of Birth is required'],
    },
    bio: {
        type: String,
        default: "",
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: [true, 'Gender is required'],
    },
    country: {
        type: String,
        required: [true, 'Country is required']
    },
    profile: {
        type: String,
        required: [true, 'Profile is required']
    },
    awards: [{
        name: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
    }],
    movies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movies"
    }],
    series: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Series"
    }],
    deathDate: {
        type: Date,
        required: false
    },
});

module.exports = mongoose.model('Actors', actorModel);