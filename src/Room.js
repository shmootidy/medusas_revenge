import { Component } from 'react'
import Door from './Door'
import FloorItem from './FloorItem'
import Player from './Player'
import rooms from './room-data'

export default class Room extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentRoom: 'R'
    }
  }
  render() {
    const roomStyle = {
      height: '300px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around'
    }
    const floorStyle = {
      display: 'flex',
      justifyContent: 'space-evenly'
    }
    const threeDoorsStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
    }
    const doors = rooms[this.state.currentRoom]

    return (
      <div style={roomStyle}>
        <div style={threeDoorsStyle}>
          <Door door={doors.doors.left} />
          <Door door={doors.doors.forward} />
          <Door door={doors.doors.right} />
        </div>
        <div style={floorStyle}>
          {/* <FloorItem item={this.state.floorLeft} />
          <FloorItem item={this.state.floorRight} /> */}
        </div>
        <Player />
        <Door door={doors.doors.back} />
      </div>
    )
  }
}