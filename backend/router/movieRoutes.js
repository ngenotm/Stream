const { Router } = require('express');
const { allMovies, singleMovie, createMovie, updateMovie, deleteMovie } = require('../controller/movieController');
const ValidateObjectId = require('../middleware/ValidateObjectId');

const router = Router();

router.route("/")
    .get(allMovies)
    .post(createMovie);


// router.post("/createMovie", createMovie);

router.route("/:id")
    .get(ValidateObjectId, singleMovie)
    .put(ValidateObjectId, updateMovie)
    .delete(ValidateObjectId, deleteMovie);

module.exports = router;