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
  const url_path = decodeURIComponent(req.params.id)
  console.log('req.body : ', url_path);
  

  console.log('in delete recordings url', url_path);
  let sqlText = `DELETE FROM recordings 
                 WHERE url_path = $1;`

  pool.query(sqlText, [url_path])
      .then(result => {
          console.log(result);
          res.sendStatus(201);
      }).catch(error => {
          console.log('error in put', error);
          res.sendStatus(500);
      });
});


module.exports = router;