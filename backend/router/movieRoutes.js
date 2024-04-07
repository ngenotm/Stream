const { Router } = require('express');
const { allMovies, singleMovie, createMovie, updateMovie, deleteMovie } = require('../controller/movieController');

const router = Router();

router.get('/movie', allMovies);
router.get("/movie/:id", singleMovie);

router.post('/movie', createMovie);

router.put('/movie/:id', updateMovie);

router.delete('/movie/:id', deleteMovie);


module.exports = router;