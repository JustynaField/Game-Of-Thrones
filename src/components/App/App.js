import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import { CardList } from '../CardList/CardList';
// import { Loading } from './Loading.js';

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/houses')
    .then(res => res.json())
    .then(data => {
      this.props.displayHouses(data)
    })
    .catch(e => {
      console.log('error obtaining houses data:', e)
    })
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />

          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          <CardList houses={this.props.homes} />
        </div>
      </div>
    );
  }
}

export default App;
