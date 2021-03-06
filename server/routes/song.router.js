const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//get songs from SongCardsAll
router.get('/', rejectUnauthenticated, (req, res) => {

  const queryText =
    `SELECT song_id, song_title, date, lyrics, preview_audio, notes, org_date, org_title, org_lyrics, org_audio, color, position_x, position_y,
        ARRAY_AGG (src)
        FROM songs
        JOIN "recordings" ON "recordings".song_id = "songs".id
        WHERE user_id = $1
        GROUP BY song_id, song_title, date, lyrics, preview_audio, notes, org_date, org_title, org_lyrics, org_audio, color, position_x, position_y
        ORDER BY song_id ASC
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
router.post('/', rejectUnauthenticated, async (req, res) => {
  const client = await pool.connect();
  const userId = req.user.id;
  const { song_title, notes, lyrics, src, color, title } = req.body;

  try {
    await client.query('BEGIN');
    const firstQuery = `
                        INSERT INTO "songs" (
                        user_id, song_title, notes, lyrics, preview_audio, org_title, org_notes, org_lyrics, org_audio, color
                        )
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
                        RETURNING "id"`;

    const result = await client.query(firstQuery, [userId, song_title, notes, lyrics, src, song_title, notes, lyrics, src, color]);

    const newSongId = result.rows[0].id;
    const secondQueryText = ` 
                            INSERT INTO "recordings" ("song_id", "src", "title")
                            VALUES  ($1, $2, $3);
                            `

    await client.query(secondQueryText, [newSongId, src, title]);

    await client.query('COMMIT');

    res.sendStatus(201)

  } catch (error) {
    await client.query('ROLLBACK')
    console.log('Error completing POST', error),
    res.sendStatus(500)

  } finally {
    //ends pool.connect
    client.release();
  }

})

router.put('/:id', rejectUnauthenticated, (req, res) => {
  const id = req.params.id;
  const songInfo = req.body

  // get key : value pairs out of songInfo
  const songValuePairs = Object.entries(songInfo);

  // loop over array to get keys and values for all items in songInfo 
  for (let [key, value] of songValuePairs) {
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


router.put('/coordinates/:id', rejectUnauthenticated, (req, res) => {
  const id = req.params.id;
  const xValue = req.body.x
  const yValue = req.body.y

  console.log(`in update coordinates, changing: id: ${id} values: ${xValue}, ${yValue}`);

  let sqlText = `         UPDATE songs 
                   SET position_x = $2,
                       position_y = $3
                         WHERE id = $1;`

  pool.query(sqlText, [id, xValue, yValue])
    .then(result => {
      console.log(result);
      res.sendStatus(201);
    }).catch(error => {
      console.log('error in put', error);
      res.sendStatus(500);
    });
});

router.put('/reset/:id', rejectUnauthenticated, (req, res) => {
  const id = req.user.id;
  const xValue = 0;
  const yValue = 0;

  console.log(`in reset all coordinates, id`);

  let sqlText = 
                `         UPDATE songs 
                   SET position_x = $2,
                       position_y = $3
                    WHERE user_id = $1;`

  pool.query(sqlText, [id, xValue, yValue])
    .then(result => {
      console.log(result);
      res.sendStatus(201);
    }).catch(error => {
      console.log('error in put', error);
      res.sendStatus(500);
    });
});


module.exports = router;