let router = require('express').Router(); // DO NOT MODIFY
let pg = require('pg'); // DO NOT MODIFY
let config = require('../db');

let pool = new pg.Pool(config); // DO NOT MODIFY

// GET /treats
// Only modify IF you are doing Eye of the Tiger
router.get('/', (req, res) => {
  pool.connect( (err, client, done) => {
    if (err) {
      console.log('Error connecting to the DB', err);
      res.sendStatus(500);
      done();
      return;
    }

    client.query('SELECT * FROM treats;', (err, result) =>{
      done();
      if (err) {
        console.log('Error querying the DB', err);
        res.sendStatus(500);
        return;
      }

      console.log('Got rows from the DB:', result.rows);
      res.send(result.rows);
    });
  });
});

/** ---- PUT YOUR CODE BELOW ---- **/

// POST /treats

// PUT /treats/<id>

// DELETE /treats/<id>

/** ---- DO NOT MODIFY BELOW ---- **/
module.exports = router;
