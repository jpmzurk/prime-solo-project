const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//get songs from SongCardsAll
router.get('/', rejectUnauthenticated, (req, res) => {

  console.log('req.user:', req.user);

  const queryText =
    `SELECT song_id, song_title, date, lyrics, preview_audio, notes, org_date, org_title, org_lyrics, org_audio, color,
        ARRAY_AGG (src)
        FROM songs
        JOIN "recordings" ON "recordings".song_id = "songs".id
        WHERE user_id = $1
        GROUP BY song_id, song_title, date, lyrics, preview_audio, notes, org_date, org_title, org_lyrics, org_audio, color
        ORDER BY song_id DESC
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

//getting the selected song
router.get('/:id', rejectUnauthenticated, (req, res) => {
  if (req.params.id == 'undefined') {
    return null
  } else {
  console.log('in recording get by id: ', req.params.id);
  const id = req.params.id;

  const queryText = `
                    SELECT * FROM songs
                    WHERE id = $1
                    `
  pool.query(queryText, [id])
    .then(result => {
      console.log(result.rows);
      res.send(result.rows)
    })
    .catch(err => {
      console.log('Error complete select song', err);
    })
  }
})

//Post new song from AddSong
router.post('/', rejectUnauthenticated, (req, res) => {
  console.log('in song post. the song and user id are', req.body, req.user.id);

  const song = req.body;

  const queryText = `INSERT INTO "songs" (
                        user_id, song_title, notes, lyrics, preview_audio, org_title, org_notes, org_lyrics, org_audio
                     )
                     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
                     RETURNING "id"`;
  pool.query(queryText, [req.user.id, song.song_title, song.notes, song.lyrics, song.src, song.song_title, song.notes, song.lyrics, song.src])

    .then(result => {
      console.log('new song id:', result.rows[0].id);

      const newSongId = result.rows[0].id

      const recordingQueryText = ` 
      INSERT INTO "recordings" ("song_id", "src", "title")
      VALUES  ($1, $2, $3);
      `

      pool.query(recordingQueryText, [newSongId, song.src, song.title]).then(result => {
        //Now that both are done, send back success!
        console.log(result);
        res.sendStatus(201)

        // catch for second query
      }).catch(err => { console.log('Error completing POST song in recordings table', err), res.sendStatus(500) })

    }).catch((err) => console.log('Error completing POST songs query', err), res.sendStatus(500));
});



router.put('/:id', rejectUnauthenticated, (req, res) => {
  const id = req.params.id;
  const songInfo = req.body

  // get key : value pairs out of songInfo
  const songValuePairs = Object.entries(songInfo);

  // loop over array to get keys and values for all items in songInfo 
  for (let [key, value] of songValuePairs){
    console.log(`in put songs its changing: id: ${id}, key: ${key}`);

    let sqlText = `UPDATE songs 
                   SET ${key} = $2 
                   WHERE id = $1;`

    pool.query(sqlText, [id, value])
      .then(result => {
        console.log(result);
        res.sendStatus(201);
      }).catch(error => {
        console.log('error in put', error);
        res.sendStatus(500);
      });

    }
});


router.put('/color/:id', rejectUnauthenticated, (req, res) => {
  const id = req.params.id;
  const hexValue = req.body.color

    console.log(`in update cardColor its changing: id: ${id}, key: ${hexValue}`);

    let sqlText = `UPDATE songs 
                   SET color = $2 
                   WHERE id = $1;`

    pool.query(sqlText, [id, hexValue])
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

module.exports = router;