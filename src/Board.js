import React, { Component } from 'react';
import Square from './Square';

export default class Board extends Component {
  renderSquare(value) {
    return(
      <Square value={value}/>
    );
  }
  render () {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(this.props.tiles[0])}
          {this.renderSquare(this.props.tiles[1])}
          {this.renderSquare(this.props.tiles[2])}
          {this.renderSquare(this.props.tiles[3])}
        </div>
        <div className="board-row">
          {this.renderSquare(this.props.tiles[4])}
          {this.renderSquare(this.props.tiles[5])}
          {this.renderSquare(this.props.tiles[6])}
          {this.renderSquare(this.props.tiles[7])}
        </div>
        <div className="board-row">
          {this.renderSquare(this.props.tiles[8])}
          {this.renderSquare(this.props.tiles[9])}
          {this.renderSquare(this.props.tiles[10])}
          {this.renderSquare(this.props.tiles[11])}
        </div>
        <div className="board-row">
          {this.renderSquare(this.props.tiles[12])}
          {this.renderSquare(this.props.tiles[13])}
          {this.renderSquare(this.props.tiles[14])}
          {this.renderSquare(this.props.tiles[15])}
        </div>
      </div>
    );
  }
}
