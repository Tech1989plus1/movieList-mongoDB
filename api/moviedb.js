const config = require('./config.js');
const axios = require('axios');

var getMovie = ({title}) => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/550?api_key=${config.TOKEN}`,

  }
}

module.exports.getMovie = getMovie;