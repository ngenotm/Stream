const express = require('express');
const { getAllDirectors, createDirector, getDirector, updateDirector, deleteDirector } = require('../controller/directorController');
const ValidateObjectId = require('../middleware/ValidateObjectId');

const router = express.Router();

router
    .route('/')
    .get(getAllDirectors)
    .post(createDirector);

router
    .route('/:id')
    .get(ValidateObjectId ,getDirector)
    .patch(ValidateObjectId ,updateDirector)
    .delete(ValidateObjectId ,deleteDirector);

module.exports = router;