const express = require('express');
const { getAllReviews, createReview, getReview, updateReview, deleteReview, getMovieReview } = require('../controller/reviewController');
const ValidateObjectId = require('../middleware/ValidateObjectId');

const router = express.Router();

router.get("/allReview", getAllReviews);

router.route("/")
    .post(createReview);
// router
//     .route('/')
//     .get(getAllReviews)
//     .post(createReview);

router
    .route('/:id')
    .get(ValidateObjectId, getMovieReview)
    .get(ValidateObjectId, getReview)
    .patch(ValidateObjectId, updateReview)
    .delete(ValidateObjectId, deleteReview);

module.exports = router;