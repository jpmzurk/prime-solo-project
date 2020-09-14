const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//get songs from SongCardsAll
router.get('/', rejectUnauthenticated, (req, res) => {

  console.log('req.user:', req.user);

  const queryText =
    `SELECT song_id, song_title, date, lyrics, preview_audio, notes, org_date, org_title, org_lyrics, org_audio,
        ARRAY_AGG (src)
        FROM songs
        JOIN "recordings" ON "recordings".song_id = "songs".id
        WHERE user_id = $1
        GROUP BY song_id, song_title, date, lyrics, preview_audio, notes, org_date, org_title, org_lyrics, org_audio
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

//Post new song from AddSong
router.post('/', rejectUnauthenticated, (req, res) => {
  console.log(req.body)
  console.log(req.user.id);
  const song = req.body;

  const queryText = `INSERT INTO "songs" (
                        user_id, song_title, notes, lyrics, preview_audio, org_title, org_notes, org_lyrics, org_audio
                     )
                     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
                     RETURNING "id"`;
  pool.query(queryText, [req.user.id, song.title, song.notes, song.lyrics, song.src, song.title, song.notes, song.lyrics, song.src])

    .then(result => {
      console.log('new song id:', result.rows[0].id);

      const newSongId = result.rows[0].id

      // Depending on how you make your junction table, this insert COULD change.
      const recordingQueryText = `
      INSERT INTO "recordings" ("song_id", "src", "title")
      VALUES  ($1, $2, $3);
      `
      // SECOND QUERY MAKES GENRE FOR THAT NEW MOVIE
      pool.query(recordingQueryText, [newSongId, song.src, song.title]).then(result => {
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


router.put('/', rejectUnauthenticated, (req, res) => {

  console.log('in put songs title', req.body.id);
  let sqlText = `UPDATE songs 
                 SET song_title = $2 
                 WHERE id = $1;`

  pool.query(sqlText, [req.body.id, req.body.song_title])
    .then(result => {
      console.log(result);
      res.sendStatus(201);
    }).catch(error => {
      console.log('error in put', error);
      res.sendStatus(500);
    });
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const id = req.params.id;

  console.log('in delete song', id);
  let sqlText = `DELETE FROM recordings
                WHERE song_id = $1;;`

  pool.query(sqlText, [id])
    .then(result => {
      console.log(result);

      let sqlText = `DELETE FROM songs
                     WHERE id = $1;;`

      pool.query(sqlText, [id])
        .then(result => {
          console.log(result);
          res.sendStatus(201);
        }).catch(error => {
          console.log('error in put', error);
          res.sendStatus(500);
        });

      console.log(result);
      res.sendStatus(201);
    }).catch(error => {
      console.log('error in put', error);
      res.sendStatus(500);
    });
});

