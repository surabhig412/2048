import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-material-responsive-grid';

export default class Board extends Component {
  renderSquare(value) {
    return(
      <Col lg={3} className="square">{value}</Col>
    );
  }
  render () {
    return (
      <Grid>
        <Row >
            {this.renderSquare(this.props.tiles[0])}
            {this.renderSquare(this.props.tiles[1])}
            {this.renderSquare(this.props.tiles[2])}
            {this.renderSquare(this.props.tiles[3])}
        </Row>
        <Row>
            {this.renderSquare(this.props.tiles[4])}
            {this.renderSquare(this.props.tiles[5])}
            {this.renderSquare(this.props.tiles[6])}
            {this.renderSquare(this.props.tiles[7])}
        </Row>
        <Row>
            {this.renderSquare(this.props.tiles[8])}
            {this.renderSquare(this.props.tiles[9])}
            {this.renderSquare(this.props.tiles[10])}
            {this.renderSquare(this.props.tiles[11])}
        </Row>
        <Row>
            {this.renderSquare(this.props.tiles[12])}
            {this.renderSquare(this.props.tiles[13])}
            {this.renderSquare(this.props.tiles[14])}
            {this.renderSquare(this.props.tiles[15])}
        </Row>
      </Grid>
    );
  }
}
