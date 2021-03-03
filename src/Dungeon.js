import { Component } from 'react'
import Room from './Room'
import rooms from './room-data'

export default class Dungeon extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
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