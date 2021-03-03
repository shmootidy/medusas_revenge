import { Component } from 'react'
import Room from './Room'

export default class Dungeon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerLocation: [2, 0],
      rooms: [[0,2], [1,0], [1,1], [1,2], [2,0], [2,1], [2,2], [3,0], [3,1], [3,2]]
    }
  }
  render() {
    const dungeonStyle = {
      textAlign: 'center'    }
    return (
      <div style={dungeonStyle}>
        <div>{this.state.playerLocation[0]} - {this.state.playerLocation[1]}</div>
        <Room room={this.state.playerLocation} />
      </div>
    )
  }
}