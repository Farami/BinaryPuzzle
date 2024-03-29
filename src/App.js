import React, { Component } from 'react';
import Board from './Components/Board.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Binary Puzzle</h2>
        </div>
        <Board />
      </div>
    );
  }
}

export default App;
