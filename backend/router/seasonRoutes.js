const express = require('express');
const { createSeason, getSeason, updateSeason, deleteSeason } = require('../controller/seasonController');

const router = express.Router();

router.route('/')
    .post(createSeason);

router.route('/series/:seriesId')
    .get(seasonController.getSeasonsBySeries);

router.route('/:id')
    .get(getSeason)
    .patch(updateSeason)
    .delete(deleteSeason);

module.exports = router;