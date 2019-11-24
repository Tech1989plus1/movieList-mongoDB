import React from 'react';
import Static from './static.jsx';
import {ajax} from 'jquery';
import MoviesList from './MoviesList.jsx';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {movies: []};

    this.getMovies = this.getMovies.bind(this);
    this.postMovies = this.postMovies.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
  }

  searchMovies(){

  }

  getMovies(){
    ajax({
      url: '/movies',
      method: 'GET',
      success: (data) => this.setState({movies: data}),
      error: () => {
        console.log('Erros in app.jsx')
      }
    })
  }

  postMovies(movie = 'Mean Girls'){
    ajax({
      url: '/movies',
      method: 'POST',
      data: {title: movie},
      success: () => console.log('Success posting movie'),
      error: () => console.log('Error: posting movie') 
    })
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    return(<div>
      <Static/>
      <MoviesList movies={this.state.movies}/>
    </div>);
  }
}

export default App;