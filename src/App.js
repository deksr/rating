import React, { Component } from 'react';
// import items from './items.json';
import ItemLists from './itemlists'
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
    return (
      <div className="App">
        <div> same image that repeats + song name </div>
        {this.state.data.map(function(object){
          return (
            <ItemLists key={object.id} data={object}/>
          )
        })}
      </div>
    );
  }
}

export default App;

