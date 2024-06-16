const express = require('express');
const { createSeason, getSeason, updateSeason, deleteSeason, getSeasonsBySeries } = require('../controller/seasonController');
const ValidateObjectId = require('../middleware/ValidateObjectId');

const router = express.Router();

router.route('/')
    .post(createSeason);

router.route('/series/:seriesId')
    .get(getSeasonsBySeries);

router.route('/:id')
    .get(ValidateObjectId, getSeason)
    .put(ValidateObjectId, updateSeason)
    .delete(ValidateObjectId, deleteSeason);

module.exports = router;