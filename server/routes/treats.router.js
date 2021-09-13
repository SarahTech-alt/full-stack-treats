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
// Navigate to the item with specific 'id'
router.delete('/:id', (req,res) => {
    // Checking inputs from the client
    console.log(req.body);
    console.log(req.params);
    // get id parameter and set to itemId
    const itemId = req.params.id;
    // write text to send to database
    const queryText = `DELETE FROM "treats" 
                        WHERE "id" = $1;`
    // send query to database with requested id
    // send back to client with status of success or error
    pool.query(queryText, [itemId]).then(result => {
        res.sendStatus(200);
    }).catch(error => {
        res.sendStatus(500);
    })
})

module.exports = router;
