const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
    directorId: {
        type: String,
        required: [true, 'director id is required'],
    },
    fullName: {
        type: String,
        required: [true, 'full name is required'],
    },
    birthDate: {
        type: String, //!Date
        required: [true, 'birth date is required'],
    },
    birthPlace: {
        type: String,
        required: [true, 'birth place is required'],
    },
    bio: {
        type: String,
        default: ""
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: [true, 'gender is required'],
    },
    country: {
        type: String,
        required: [true, 'country is required'],
    },
    profile: {
        type: String,
        required: [true, 'Profile is required'],
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

module.exports = mongoose.model('Directors', directorSchema);