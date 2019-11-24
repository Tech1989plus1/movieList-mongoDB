import React from 'react';
import Movie from './Movie.jsx';

const MoviesList = (props) => {
  return(<ul>
    {props.movies.map(({title}, key) =>
      <Movie title={title} key={key}/>
    )}
  </ul>);
}

export default MoviesList;