const express = require('express');
const { createEpisode, getEpisode, updateEpisode, deleteEpisode } = require('../controller/episodeController');
const ValidateObjectId = require('../middleware/ValidateObjectId');

const router = express.Router();

router
    .route('/')
    .post(createEpisode);

router
    .route('/:id')
    .get(ValidateObjectId ,getEpisode)
    .patch(ValidateObjectId ,updateEpisode)
    .delete(ValidateObjectId ,deleteEpisode);

module.exports = router;