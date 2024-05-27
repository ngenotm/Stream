const mongoose = require('mongoose');

const seasonModel = mongoose.Schema({
    series: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Series is required'],
        ref: 'Series'
    },
    seasonNumber: {
        type: Number,
        required: [true, 'Season number is required'],
    },
    episodes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Episodes'
    }]
});

module.exports = mongoose.model('Seasons', seasonModel);

// Season
//     .findOne({ seasonNumber: 1 })
//     .populate('episodes')
//     .exec(function (err, season) {
//         if (err) return handleError(err);
//         console.log('The episodes are %s', season.episodes);
//     });