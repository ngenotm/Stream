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
    releaseDate: {
        type: String,
        required: [true, 'Release Date is required'],
    },
    duration: {
        type: Number,
        required: [true, 'Duration is required'],
    },
    genres: {
        type: [String],
        required: [true, 'Genres is required'],
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
    ageRating: {
        type: String,
        required: [true, 'Age Rating is required']
    },
    productionCompany: {
        type: String,
        required: [false, 'Production Company is required']
    },
    rottenRating: {
        type: Number,
        required: [true, 'Rotten Rating is required']
    },
    imdbRating: {
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
    boxOffice: {
        budget: {
            type: Number,
            required: false
        },
        gross: {
            type: Number,
            required: false
        }
    },
    top250rank: {
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
    files: [{
        quality: {
            type: String,
            required: true,
            enum: ['360p', '480p', '720p', '1080p', '4K']
        },
        url: {
            type: String,
            required: true
        }
    }],
    releaseStatus: {
        type: String,
        enum: ['coming soon', 'now showing'],
        required: [true, 'Release Status is required']
    },
    actors: {
        type: [mongoose.Schema.Types.ObjectId],
        default: [],
        required: false,
        ref: "Actors"
    },
    //! Add awards

})

module.exports = mongoose.model('Movies', movieModel);




// const Movie = require('./models/movieModel');
// const cron = require('node-cron');

// cron.schedule('0 0 * * *', async () => {
//     const now = new Date();
//     now.setHours(0, 0, 0, 0);

//     const movies = await Movie.find({
//         release_status: 'coming soon',
//         release_date: { $lte: now }
//     });

//     movies.forEach(async (movie) => {
//         movie.release_status = 'now showing';
//         await movie.save();
//     });
// });