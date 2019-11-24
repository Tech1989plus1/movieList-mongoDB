import React from 'react';
import { throws } from 'assert';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {search: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    this.props.cb(this.state.search);
    event.preventDefault();
  }

  handleChange(event){
    this.setState({search: event.target.value});
  }

  render(){
    return(
    <form onSubmit={this.handleClick}>
      <input type="text" placeholder="Search..." value={this.state.search} onChange={this.handleChange}/>
      <input type="submit" value="Go!"/>
    </form>);
  }
}


export default Search;