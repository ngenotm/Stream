const express = require('express');
const { getAllSeries, createSeries, getSeries, updateSeries, deleteSeries, topRatedSeries, trendingSeries } = require('../controller/seriesController');
const ValidateObjectId = require('../middleware/ValidateObjectId');

const router = express.Router();

router.get("/top-rated", topRatedSeries);
router.get("/trending-series", trendingSeries)

router
    .route('/')
    .get(getAllSeries)
    .post(createSeries);

router
    .route('/:id')
    .get(ValidateObjectId, getSeries)
    .put(ValidateObjectId, updateSeries)
    .delete(ValidateObjectId, deleteSeries);

// router.get("/categories", movieCategories);
// router.get("/top-rated", topRatedMovies);
// router.get("/trending-movies", trendingMovies);
// router.get("/new-released", newReleased);
// router.get("/popular-movies", popularMovies);


module.exports = router;