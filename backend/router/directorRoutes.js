const express = require('express');
const { getAllDirectors, createDirector, getDirector, updateDirector, deleteDirector } = require('../controller/directorController');
const ValidateObjectId = require('../middleware/ValidateObjectId');

const router = express.Router();

router.get("/directorList", getAllDirectors);
router.post("/createDirector", createDirector);

router
    .route('/:id')
    .get(getDirector)
    .put(updateDirector)
    .delete(deleteDirector);

module.exports = router;