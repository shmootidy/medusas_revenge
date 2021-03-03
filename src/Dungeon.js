import { Component } from 'react'
import Room from './Room'
import Player from './Player'

export default class Dungeon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerPosition: [2, 0],
      rooms: [[0,2], [1,0], [1,1], [1,2], [2,0], [2,1], [2,2], [3,0], [3,1], [3,2]]
    }
  }
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <Room room={this.state.playerPosition} />
        <Player />
      </div>
    )
  }
}