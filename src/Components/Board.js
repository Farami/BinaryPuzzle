import React, { Component } from 'react';
import Tile from './Tile.js';
import '../App.css';

export default class Board extends Component {
  constructor(props) {
    super(props);

    let tiles = [];
    let id = 0;
    for (var y = 0; y < 6; y++) {
      for (var x = 0; x < 6; x++) {
        tiles.push({ id: id++, state: -1, userInput: true });
      }
    }

    this.state = { tiles: tiles };
  }

  toggleState(id) {
    let tiles = this.state.tiles.slice();
    console.log(id);
    for (var tile of tiles) {
      if (tile.id === id) {
        tile.state = tile.state === 1 ? -1 : tile.state + 1;
      }
    }

    this.setState({ tiles: tiles });
  }

  render() {
    let tiles = this.state.tiles.map((tile) => <Tile key={tile.id} {...tile} toggleState={this.toggleState.bind(this)} />)

    return (
      <div className="Board">
        {tiles}
      </div>
    );
  }
}