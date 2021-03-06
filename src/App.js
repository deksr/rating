import React, { Component } from 'react';
// import items from './items.json';
import NameTitle from './Components/NameTitle/NameTitle'
import './App.css';


class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {    
    fetch('items.json')
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response");
      }
      return response.json();
    })
    .then(response => {
      // console.log(Array.isArray(response));
      // console.log(response)
      this.setState({data: response.data});
    });
  }


  render() {  
    // console.log(this.state.data)
    return (
      <div className="App">
      <NameTitle 
        songinfo={this.state.data}/> 
      </div>
    );
  }
}

export default App;

