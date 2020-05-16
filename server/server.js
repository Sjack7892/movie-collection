const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const pool = require('./modules/pool')

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
// Get movies from database.
app.get('/movies', (req, res) => {
    console.log('get request received');
    let queryString = `SELECT * FROM "movies";`;
    pool.query(queryString)
    .then(result => {
        console.log('getting movies from database:', result.rows);
        res.send(result.rows);
    }).catch(error => {
        console.log(error);
        res.send(500);
    });
});

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});