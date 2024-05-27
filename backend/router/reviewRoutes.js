const express = require('express');
const { getAllReviews, createReview, getReview, updateReview, deleteReview } = require('../controller/reviewController');
const ValidateObjectId = require('../middleware/ValidateObjectId');

const router = express.Router();

router
    .route('/')
    .get(getAllReviews)
    .post(createReview);

router
    .route('/:id')
    .get(ValidateObjectId ,getReview)
    .patch(ValidateObjectId ,updateReview)
    .delete(ValidateObjectId ,deleteReview);

module.exports = router;