import { Component } from 'react'
import Door from './Door'
import FloorItem from './FloorItem'
import Player from './Player'
import rooms from './room-data'

export default class Room extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentRoom: 'R',
      rooms: rooms
    }
    this.handleInventory = this.handleInventory.bind(this)
  }
  handleInventory(beep) {
    console.log(beep)
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
    const doors = this.state.rooms[this.state.currentRoom].doors
    const floorItems = this.state.rooms[this.state.currentRoom].floorItems

    return (
      <div style={roomStyle}>
        <div style={threeDoorsStyle}>
          <Door door={doors.left} />
          <Door door={doors.forward} />
          <Door door={doors.right} />
        </div>
        <div style={floorStyle}>
          <FloorItem item={floorItems.left.item} prize={floorItems.left.prize} onPickUp={this.handleInventory} />
          <FloorItem item={floorItems.right.item} prize={floorItems.right.prize} onPickUp={this.handleInventory} />
        </div>
        <Player />
        <Door door={doors.back} />
      </div>
    )
  }
}