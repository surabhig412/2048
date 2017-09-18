import React, { Component } from 'react';
import ArrowKeysReact from 'arrow-keys-react';
import Board from './Board';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: Array(16).fill(null),
      startTiles: 2
    };
  }
  addRandomTile() {
    var availableSquares = []
    this.state.tiles.map((tile, index) => {
      if(tile === null) {
        availableSquares.push(index)
      }
    });
    var rand = Math.floor((Math.random() * availableSquares.length));
    this.state.tiles[availableSquares[rand]] =  (Math.random() < 0.9 ? 2 : 4)
  }
  addStartTiles() {
    for(var i = 0; i < this.state.startTiles; i++) {
      this.addRandomTile()
    }
  }
  handleKeyDown(event) {
    switch (event.keyCode) {
      case 37: //left
        console.log("left key pressed");
        break;
      case 38: //up
        console.log("up key pressed");
        break;
      case 39: //right
        console.log("right key pressed");
        break;
      case 40: //down
        console.log("down key pressed");
        break;
      default:
        return;
    }
  }
  componentDidMount(){
     document.addEventListener("keydown", this.handleKeyDown.bind(this));
   }
  render() {
    this.addStartTiles();
    return(
      <Board tiles={this.state.tiles} />
    );
  }
}
