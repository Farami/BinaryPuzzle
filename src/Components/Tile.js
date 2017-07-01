import React, { Component } from 'react';
import '../App.css';

export default class Tile extends Component {
  constructor(props) {
    super(props);
    this.stateMap = { "0": "0", "-1": "", "1": "1" };
  }

  render() {
    return (
      <div className="Tile UserInput" onClick={() => this.props.userInput ? this.props.toggleState(this.props.id) : () => { }}>
        <p>{this.stateMap[this.props.state.toString()]}</p>
      </div>
    );
  }
}