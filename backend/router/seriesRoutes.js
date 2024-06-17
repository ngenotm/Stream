const express = require('express');
const { getAllSeries, createSeries, getSeries, updateSeries, deleteSeries } = require('../controller/seriesController');
const ValidateObjectId = require('../middleware/ValidateObjectId');

const router = express.Router();

router
    .route('/')
    .get(getAllSeries)
    .post(createSeries);

router
    .route('/:id')
    .get(ValidateObjectId, getSeries)
    .put(ValidateObjectId, updateSeries)
    .delete(ValidateObjectId, deleteSeries);

module.exports = router;