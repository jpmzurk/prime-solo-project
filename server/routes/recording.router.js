const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/:id', rejectUnauthenticated, (req, res) => {
  const id = req.params.id;

  const queryText = `
                    SELECT * FROM recordings
                    WHERE song_id = $1
                    `

  pool.query(queryText, [id])
  .then (result => {
    console.log(result.rows);
    res.send(result.rows)
  })
  .catch(err =>{ 
    console.log('Error complete select song', err);
  })
})



router.post('/', rejectUnauthenticated, (req, res) => {
  const recording = req.body;

  const queryText = `INSERT INTO "recordings" (
                        song_id, src, title
                     )
                     VALUES ($1, $2, $3)`;
  pool.query(queryText, [recording.song_id, recording.src, recording.title])

    .then(result => {
      res.sendStatus(201);
      console.log(result);

    }).catch(err => {
      // catch for second query
      console.log(err);
      res.sendStatus(500)
    })
  })

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const id = req.params.id

  let sqlText = `DELETE FROM recordings 
                 WHERE id = $1;`

  pool.query(sqlText, [id])
      .then(result => {
          console.log(result);
          res.sendStatus(201);
      }).catch(error => {
          console.log('error in put', error);
          res.sendStatus(500);
      });
});


module.exports = router;