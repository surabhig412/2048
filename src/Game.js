import React, { Component } from 'react';
import Board from './Board';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: Array(16).fill(null),
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
    const tiles = this.state.tiles.slice();
    tiles[availableSquares[rand]] =  (Math.random() < 0.9 ? 2 : 4)
    return tiles;
  }
  addStartTiles() {
    var tiles = this.addRandomTile()
    this.setState({tiles}, () => {
      tiles = this.addRandomTile()
      this.setState({tiles})
    });
  }
  merge(sequence) {
    for(var i = 0; i < sequence.length; i++) {
      if(sequence[i] === sequence[i+1]) {
        sequence[i] *= 2;
        sequence[i+1] = null;
        var j = i+1;
        while(j < sequence.length - 1) {
          sequence[j] = sequence[j+1]
          j++;
        }
      }
    }
    return sequence;
  }
  findXsequence(x) {
    let sequence = []
    for(var i = x; i < x+4; i++) {
      if(this.state.tiles[i] != null) {
        sequence.push(this.state.tiles[i])
      }
    }
    return sequence
  }
  findYsequence(y) {
    let sequence = []
    for(var i = y; i < 16; i+=4) {
      if(this.state.tiles[i] != null) {
        sequence.push(this.state.tiles[i])
      }
    }
    return sequence
  }
  handleKeyDown(event) {
    switch (event.keyCode) {
      case 37: //left
        console.log("left key pressed");
        for(var k = 0; k < 15; k+=4) {
          var sequence = this.findXsequence(k)
          sequence = this.merge(sequence)
          const tiles = this.state.tiles.slice();
          for(var j = k; j<k+4; j++) {
            if(j-k <= sequence.length - 1) {
              tiles[j] = sequence[j-k]
            } else {
              tiles[j] = null
            }
          }
          this.setState({tiles})
        }
        break;
      case 38: //up
        console.log("up key pressed");
        for(k = 0; k < 4; k++) {
          sequence = this.findYsequence(k);
          sequence = this.merge(sequence)
          const tiles = this.state.tiles.slice();
          for(j = k; j<16; j+=4) {
            if(Math.floor(j/4) <= sequence.length - 1) {
              tiles[j] = sequence[Math.floor(j/4)]
            } else {
              tiles[j] = null
            }
          }
          this.setState({tiles})
        }
        break;
      case 39: //right
        console.log("right key pressed");
        for(k = 0; k < 15; k+=4) {
          var sequence = this.findXsequence(k)
          sequence.reverse()
          sequence = this.merge(sequence)
          const tiles = this.state.tiles.slice();
          for(j = k+3; j>=k; j--) {
            if(k+3-j <= sequence.length - 1) {
              tiles[j] = sequence[k+3-j]
            } else {
              tiles[j] = null
            }
          }
          this.setState({tiles})
        }
        break;
      case 40: //down
        console.log("down key pressed");
        for(k = 0; k < 4; k++) {
          sequence = this.findYsequence(k);
          sequence.reverse()
          sequence = this.merge(sequence)
          const tiles = this.state.tiles.slice();
          for(j = k+12; j>=0; j-=4) {
            if(Math.floor((k+12-j)/4) <= sequence.length - 1) {
              tiles[j] = sequence[Math.floor((k+12-j)/4)]
            } else {
              tiles[j] = null
            }
          }
          this.setState({tiles})
        }
        break;
      default:
        return;
    }
  }
  componentDidMount(){
     document.addEventListener("keydown", this.handleKeyDown.bind(this));
   }
   componentWillMount(){
     this.addStartTiles();
   }
  render() {
    return(
      <Board tiles={this.state.tiles} />
    );
  }
}
