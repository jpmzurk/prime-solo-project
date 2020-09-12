const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
  console.log('req.user:', req.user);

  const queryText = 
        `SELECT song_id, title, date, lyrics, preview_audio, notes, org_date, org_title, org_title, org_lyrics,
        ARRAY_AGG (url_path) 
        FROM songs
        JOIN "recordings" ON "recordings".song_id = "songs".id
        WHERE user_id = $1
        GROUP BY song_id, title, date, lyrics, preview_audio, notes, org_date, org_title, org_title, org_lyrics
        `;
  pool.query(queryText, [req.user.id])
    .then((result) => { 
      console.log(result.rows);
      res.send((result.rows)); 
    })
    .catch((err) => {
      console.log('Error completing SELECT songs query', err);
      res.sendStatus(500);
    });
});


/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  // POST route code here
  console.log(req.body)
  console.log(req.user.id);
  const song = req.body;

  const queryText = `INSERT INTO "songs" (
                        user_id, title, notes, lyrics, preview_audio, org_title, org_notes, org_lyrics
                     )
                     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
                     RETURNING "id"`;
  pool.query(queryText, [req.user.id, song.title, song.notes, song.lyrics, song.url_path, song.title, song.notes, song.lyrics])

    .then(result => {
    console.log('new song id:', result.rows[0].id); 
    
    const newSongId = result.rows[0].id

    // Depending on how you make your junction table, this insert COULD change.
    const recordingQueryText = `
      INSERT INTO "recordings" ("song_id", "url_path")
      VALUES  ($1, $2);
      `
      // SECOND QUERY MAKES GENRE FOR THAT NEW MOVIE
      pool.query(recordingQueryText, [newSongId, song.url_path]).then(result => {
        //Now that both are done, send back success!
        res.sendStatus(201);
      }).catch(err => {
        // catch for second query
        console.log(err);
        res.sendStatus(500)
      })
    }).catch((err) => console.log('Error completing SELECT songs query', err), res.sendStatus(500));
});

module.exports = router;


// router.get('/:id', (req, res) => {
//     const id = req.params.id
//     console.log('in get songs with id', id);
  
//     const queryText = `
//       SELECT * FROM songs 
//     //JOIN recordings ON recordings.song_id = songs.id
//       WHERE songs.id = $1`
//     ;
//     pool.query(queryText, [id])
//       .then((result) => { 
//         console.log(result.rows);
//         res.send(result.rows); 
//       })
//       .catch((err) => {
//         console.log('Error completing get song by ID query', err);
//         res.sendStatus(500);
//       });
//   });