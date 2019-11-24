const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies', {useNewUrlParser: true});
var Schema = mongoose.Schema;

var movieSchema = new Schema({
  title: String
});

var Movie = mongoose.model('Movie', movieSchema);

var movieDB  = {
  retrieve: (cb) => {
    Movie.find({},{title: 1, _id: 0},(err, data) => {
      if(err){
        cb(err);
      } else {
        cb(null, data);
      }
    });
  }, 
  save: (movie, cb) => {
    let arr = [];
    arr.push(movie);
    Movie.insertMany(arr, (err) => {
      if(err){
        cb(err);
      } else {
        cb(null);
      }
    });
  }
}

module.exports.movieDB = movieDB;