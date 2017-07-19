import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { CardList } from './CardList.js';
// import { Loading } from './Loading.js';

class App extends Component {
  constructor(props){
    super()
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/houses')
    .then(res => res.json())
    .then(houses => {
      console.log('houses', houses)
    })
  }

  render() {

    return (
      <div className='App'>
        <div className='App-header'>

          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
        </div>
      </div>
    );
  }
}

export default App;
