import { Component } from 'react'
import Room from './Room'

export default class Dungeon extends Component {
  render() {
    const dungeonStyle = {
      textAlign: 'center',
      width: '500px'
    }
    return (
      <div style={dungeonStyle}>
        <Room />
      </div>
    )
  }
}