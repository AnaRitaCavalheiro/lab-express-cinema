const express = require('express');
const movie = require('../models/Movie.model.js');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
   movie.find()
   .then((alltheMoviesFromMongoDB) => {
       res.render('movies', {movies: alltheMoviesFromMongoDB});
   })
   .catch((err) => {
       res.render('error', {err});
   })
});

router.get('/movies/:movieId', (req, res) => {
let movieId = req.params.movieId;

    movie.findById(movieId)
    .then((theMovieFound) => {
        res.render('movie-details', {movie: theMovieFound})
    })
    .catch((err) => {
        res.render('error', {err});
      })
});

module.exports = router;
