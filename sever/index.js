const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const db = require('../database/index.js');
const bodyParser = require('body-parser');
const MovieDB = require('../api/moviedb.js');

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/movies', (req, res) => {
  db.movieDB.retrieve((err, data) => {
    if(err){
      res.status(400).send();
    } else {
      res.status(200).send(data);
    }
  });
});

app.post('/movies', (req, res) => {
  MovieDB.getMovie(req.body);
  // db.movieDB.save(req.body, (err) => {
  //   if(err){
  //     res.status(400).send();
  //   } else {
  //     res.status(200).send();
  //   }
  // });
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`));
