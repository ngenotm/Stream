const express = require('express');
const { getAllSeries, createSeries, getSeries, updateSeries, deleteSeries } = require('../controller/seriesController');

const router = express.Router();

router
    .route('/')
    .get(getAllSeries)
    .post(createSeries);

router
    .route('/:id')
    .get(getSeries)
    .patch(updateSeries)
    .delete(deleteSeries);

module.exports = router;