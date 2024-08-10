const express = require('express');
const { getAllSeries, createSeries, getSeries, updateSeries, deleteSeries, topRatedSeries, trendingSeries, seriesCategories } = require('../controller/seriesController');
const ValidateObjectId = require('../middleware/ValidateObjectId');
const Authenticate = require('../middleware/Authenticate');
const Authorize = require('../middleware/Authorize');

const router = express.Router();


router
    .route('/')
    .get(getAllSeries)
    .post([Authenticate, Authorize(["admin"])], createSeries);

router.get("/categories", seriesCategories);
// router.get("/top-rated", topRatedMovies);
// router.get("/trending-movies", trendingMovies);
// router.get("/new-released", newReleased);
// router.get("/popular-movies", popularMovies);

router
    .route('/:id')
    .get(ValidateObjectId, getSeries)
    .put([Authenticate, Authorize(["admin"])], ValidateObjectId, updateSeries)
    .delete([Authenticate, Authorize(["admin"])], ValidateObjectId, deleteSeries);



module.exports = router;