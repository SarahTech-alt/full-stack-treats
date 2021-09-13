const router = require('express').Router();
const pool = require('../modules/pool');


// GET /treats

router.get('/', (req,res) => {
    console.log(req.body);
    
    // text to send to database
    const queryText = `SELECT * FROM "treats" LIMIT 100;`
    // input the query text into the database and send 
    // results back to client if successful, else send error status code
    pool.query(queryText).then(result => {
        res.send(result.rows)
    }).catch(error => {
        console.log('There was an error getting treats', error);
        res.sendStatus(500);
    })
})

// POST /treats

// PUT /treats/<id>

// DELETE /treats/<id>

module.exports = router;
