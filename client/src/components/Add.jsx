import React from 'react';

class Add extends React.Component{
 constructor(props){
   super(props);
   this.state = {add: ''};

   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleChange = this.handleChange.bind(this);
 }

 handleChange(event){
  this.setState({add: event.target.value});
 }

 handleSubmit(event){
  this.props.cb(this.state.add);
  event.preventDefault();
 }

 render(){
   return(
   <form onSubmit={this.handleSubmit}>
     <input type="test" placeholder="Add..." value={this.state.add} onChange={this.handleChange}/>
     <input type="submit" value="Add"/>
   </form>);
 }
} 

export default Add;