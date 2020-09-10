const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated } = require('../modules/authentication-middleware');
/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
  console.log('req.user:', req.user);

  const queryText = 
        `SELECT * FROM songs 
        JOIN "recordings" ON "recordings".song_id = "songs".id
        WHERE user_id = $1
        `;
  pool.query(queryText, [req.user.id])
    .then((result) => { 
      console.log(result.rows);
      res.send(result.rows); 
    })
    .catch((err) => {
      console.log('Error completing SELECT songs query', err);
      res.sendStatus(500);
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id
    console.log('in get songs with id', id);
  
    const queryText = `
      SELECT genres.name
      FROM movies 
    //   JOIN movies_genres ON movies_genres.movie_id = movies.id
      WHERE movies.id = $1`
    ;
    pool.query(queryText, [id])
      .then((result) => { 
        console.log(result.rows);
        res.send(result.rows); 
      })
      .catch((err) => {
        console.log('Error completing get song by ID query', err);
        res.sendStatus(500);
      });
  });

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  console.log(req.body)
  res.sendStatus(200)
});

module.exports = router;