const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
    category_id: {
        type: String,
        required: [true, 'category id is required'],
    },
    name: {
        type: String,
        required: [true, 'name is required'],
    },
    description: {
        type: String,
        required: [true, 'description is required'],
    },
    image: {
        type: String,
        required: [true, 'image is required'],
    },
    // awards:{},  //TODO: Add awards
    movies: {
        type: [mongoose.Schema.Types.ObjectId],
        required: [true, 'movies is required'],
        ref: ['Movie', 'Series']
    },
});