const express = require('express');
const { createEpisode, getEpisodeById, updateEpisode, deleteEpisode, getEpisodeByEpisodeNumber, } = require('../controller/episodeController');
const ValidateObjectId = require('../middleware/ValidateObjectId');

const router = express.Router();

router
    .route('/')
    .post(createEpisode);

router
    .route('/:id')
    .get(ValidateObjectId, getEpisodeById)
    .put(ValidateObjectId, updateEpisode)
    .delete(ValidateObjectId, deleteEpisode);

router.get("/:series/:season/:episodeNumber", getEpisodeByEpisodeNumber);

module.exports = router;