import { Component } from 'react'
import Room from './Room'

export default class Dungeon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerLocation: [2, 0],
      rooms: [[0,2], [1,0], [1,1], [1,2], [2,0], [2,1], [2,2], [3,0], [3,1], [3,2]],
      rooms2: ['L', 'A', 'B', 'Y', 'R', 'I', 'N', 'T', 'H']
      }
  }
  componentDidMount() {
    
  }
  render() {
    const dungeonStyle = {
      textAlign: 'center',
      width: '500px'
    }
    return (
      <div style={dungeonStyle}>
        <div>{this.state.playerLocation[0]} - {this.state.playerLocation[1]}</div>
        <Room room={this.state.playerLocation} />
      </div>
    )
  }
}