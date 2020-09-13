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
      console.log(result);

    }).catch(err => {
      // catch for second query
      console.log(err);
      res.sendStatus(500)
    })
  })



router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const id = req.params.id;
  // const newUrl = req.body

  console.log('in put recordings url', id);
  let sqlText = `DELETE FROM recordings 
                 WHERE song_id = $1;`

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