const { Router } = require('express');
const { allMovies, singleMovie, createMovie, updateMovie, deleteMovie } = require('../controller/movieController');
const ValidateObjectId = require('../middleware/ValidateObjectId');
const Authorize = require('../middleware/Authorize');
const Authenticate = require('../middleware/Authenticate');

const router = Router();

router.route("/")
    .get(allMovies)
    .post([Authenticate, Authorize(["admin"])], createMovie);


// router.post("/createMovie", createMovie);

router.route("/:id", ValidateObjectId)
    .get(singleMovie)
    .put([Authenticate, Authorize(["admin"])], updateMovie)
    .delete([Authenticate, Authorize(["admin"])], deleteMovie);

module.exports = router;