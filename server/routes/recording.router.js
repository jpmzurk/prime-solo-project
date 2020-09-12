const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated } = require('../modules/authentication-middleware');

router.post('/', rejectUnauthenticated, (req, res) => {
  // POST route code here
  console.log(req.body)
  const recording = req.body;

  const queryText = `INSERT INTO "recordings" (
                        song_id, url_path
                     )
                     VALUES ($1, $2)`;
  pool.query(queryText, [recording.song_id, recording.url_path])

    .then(result => {
      res.sendStatus(201);
    }).catch(err => {
      // catch for second query
      console.log(err);
      res.sendStatus(500)
    })
  })



router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const id = req.params.id;
  const newUrl = req.body

  console.log('in put recordings url', id);
  let sqlText = `SELECT id FROM recordings 
                 SET url_path = $2 
                 WHERE id = $1;`

  pool.query(sqlText, [id, newUrl])
      .then(result => {
          console.log(result);
          res.sendStatus(201);
      }).catch(error => {
          console.log('error in put', error);
          res.sendStatus(500);
      });
});

// router.get('/', rejectUnauthenticated, (req, res) => {
//   console.log('req.user:', req.user);
//   const queryText = 
//         `SELECT song_id, title, date, lyrics, preview_audio, notes, org_date, org_title, org_title, org_lyrics,
//         ARRAY_AGG (url_path) 
//         FROM songs
//         JOIN "recordings" ON "recordings".song_id = "songs".id
//         WHERE user_id = $1
//         GROUP BY song_id, title, date, lyrics, preview_audio, notes, org_date, org_title, org_title, org_lyrics
//         `;
//   pool.query(queryText, [req.user.id])
//     .then((result) => { 
//       console.log(result.rows);
//       res.send((result.rows)); 
//     })
//     .catch((err) => {
//       console.log('Error completing SELECT songs query', err);
//       res.sendStatus(500);
//     });
// });


module.exports = router;