/** ---- DO NOT MODIFY THIS FILE ---- **/
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let path = require('path');

let treats = require('./routes/treats');

app.use(express.static('assignment/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/treats', treats);

app.get('/', ( req, res ) => {
  res.sendFile(path.join(__dirname, '/public', '/views', 'index.html'));
});

let server = app.listen(3000, ( req, res ) => {
  console.log('Now listening on port 3000.');
  console.log('Go to localhost:3000 to see site.');
  console.log('Ctrl+C shuts down server.');
});

module.exports = server;
