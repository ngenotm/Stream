const express = require('express');
const { getAllSeries, createSeries, getSeries, updateSeries, deleteSeries, topRatedSeries, trendingSeries, seriesCategories, newReleasedSeries, popularSeries } = require('../controller/seriesController');
const ValidateObjectId = require('../middleware/ValidateObjectId');
const Authenticate = require('../middleware/Authenticate');
const Authorize = require('../middleware/Authorize');

const router = express.Router();


router
    .route('/')
    .get(getAllSeries)
    .post([Authenticate, Authorize(["admin"])], createSeries);

router.get("/categories", seriesCategories);
router.get("/top-rated", topRatedSeries);
router.get("/trending-series", trendingSeries);
router.get("/new-released", newReleasedSeries);
router.get("/popular-series", popularSeries);

router
    .route('/:id')
    .get(ValidateObjectId, getSeries)
    .put([Authenticate, Authorize(["admin"])], ValidateObjectId, updateSeries)
    .delete([Authenticate, Authorize(["admin"])], ValidateObjectId, deleteSeries);



module.exports = router;