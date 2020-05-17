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
    let queryString = `
    SELECT * FROM "movies" 
    ORDER BY "id";`;
    pool.query(queryString)
    .then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    });
});

//Get genres from database.
app.get('/genres/:id', (req, res) => {
    let queryString = `
    SELECT "name" FROM "movies"
    JOIN "movie_genre" ON "movies"."id" = "movie_genre"."movie_id"
    JOIN "genres" ON "movie_genre"."genre_id" = "genres"."id"
    WHERE "movies"."id" = '${req.params.id}';`;
    pool.query(queryString)
    .then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    });
});


// Update movie details.
app.put('/movie', (req, res) => {
    let queryString = `
    UPDATE "movies"
    SET "title" = $1, description = $2
    WHERE "id" = $3;`;
    pool.query(queryString, [req.body.title, req.body.description, req.body.id])
    .then(result => {
        res.sendStatus(201);
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    })
})

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});