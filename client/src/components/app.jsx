import React from 'react';
import Static from './static.jsx';
import {ajax} from 'jquery';
import MoviesList from './MoviesList.jsx';
import Search from './Search.jsx';
import Add from './Add.jsx';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {movies: [], concat: []};

    this.getMovies = this.getMovies.bind(this);
    this.postMovies = this.postMovies.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
  }

  searchMovies(query){
    let arr = [];
    this.state.movies.map(({title}, key) => {
      if(title.toLowerCase().includes(query.toLowerCase())){
        arr.push({title: title});
      }
    });
    this.setState({concat: arr});
  }

  getMovies(){
    ajax({
      url: '/movies',
      method: 'GET',
      success: (data) => this.setState({movies: data, concat: data}),
      error: () => {
        console.log('Erros in app.jsx')
      }
    })
  }

  postMovies(insert){
    ajax({
      url: '/movies',
      method: 'POST',
      data: {title: insert},
      success: () => this.getMovies(),
      error: () => console.log('Error: posting movie') 
    })
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    return(<div>
      <Static/>
      <Add cb={this.postMovies}/>
      <Search cb={this.searchMovies}/>
      <MoviesList movies={this.state.concat}/>
    </div>);
  }
}

export default App;