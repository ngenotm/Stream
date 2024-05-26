const express = require('express');
const { getAllDirectors, createDirector, getDirector, updateDirector, deleteDirector } = require('../controller/directorController');

const router = express.Router();

router
    .route('/')
    .get(getAllDirectors)
    .post(createDirector);

router
    .route('/:id')
    .get(getDirector)
    .patch(updateDirector)
    .delete(deleteDirector);

module.exports = router;