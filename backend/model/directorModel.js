const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
    director_id: {
        type: String,
        required: [true, 'director id is required'],
    },
    full_name: {
        type: String,
        required: [true, 'full name is required'],
    },
    birth_date: {
        type: Date,
        required: [true, 'birth date is required'],
    },
    birth_place: {
        type: String,
        required: [true, 'birth place is required'],
    },
    bio: {
        type: String,
        required: [true, 'bio is required'],
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
    image: {
        type: String,
        required: [true, 'image is required'],
    },
    // awards:{},  //TODO: Add awards
    movies: [{
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Movies is required'],
        ref: "Movies"
    }],
    series: [{
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Series is required'],
        ref: "Series"
    }],
});

module.exports = mongoose.model('Directors', directorSchema);