const express = require('express');
const { createEpisode, getEpisode, updateEpisode, deleteEpisode } = require('../controller/episodeController');

const router = express.Router();

router
    .route('/')
    .post(createEpisode);

router
    .route('/:id')
    .get(getEpisode)
    .patch(updateEpisode)
    .delete(deleteEpisode);

module.exports = router;