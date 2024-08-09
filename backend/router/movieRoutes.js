const { Router } = require('express');
const { allMovies, singleMovie, createMovie, updateMovie, deleteMovie, movieCategories, topRatedMovies ,trendingMovies} = require('../controller/movieController');
const ValidateObjectId = require('../middleware/ValidateObjectId');
const Authorize = require('../middleware/Authorize');
const Authenticate = require('../middleware/Authenticate');
const Movie = require('../model/movieModel');

const router = Router();

// router.get('/trending', );
router.route("/")
    .get(allMovies)
    .post([Authenticate, Authorize(["admin"])], createMovie);

router.route("/categories")
    .get(movieCategories);

router.get("/top-rated", topRatedMovies);
router.get("/trending-movies", trendingMovies)

// router.route("/categories/:category", async (req, res) => {
//     const category = req.params.category;
//     const movies = await Movie.find({ category: category });
//     res.status(200).json({ movies });
// });


router.route("/:id", ValidateObjectId)
    .get(singleMovie)
    .put([Authenticate, Authorize(["admin"])], updateMovie)
    .delete([Authenticate, Authorize(["admin"])], deleteMovie);

module.exports = router;