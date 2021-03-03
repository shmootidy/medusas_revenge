import { Component } from 'react'
import Door from './Door'
import FloorItem from './FloorItem'
import Player from './Player'
import Inventory from './Inventory'
import rooms from './room-data'

export default class Room extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentRoom: 'R',
      rooms: rooms,
      inventory: {
        'jar of wasps': 1,
      },
    }
    this.handleInventory = this.handleInventory.bind(this)
    this.handleRoomChange = this.handleRoomChange.bind(this)
    this.changeRooms = this.changeRooms.bind(this)
  }
  changeRooms(roomTo) {
    this.setState({currentRoom: roomTo})
  }
  handleInventory(item) {
    const inventory = this.state.inventory
    inventory[item] = inventory[item] ? inventory[item] + 1 : 1
    this.setState({inventory})
  }
  handleRoomChange(door) {
    const doorStatus = door.status
    if (doorStatus === 'open') {
      this.changeRooms(door.roomTo)
    } else if (doorStatus === 'locked') {
      if (this.state.inventory.key) {
        const inventory = this.state.inventory
        inventory.key = inventory.key - 1
        this.setState(inventory)
        // change the status of the door from 'locked' to 'open'
        const _rooms = this.state.rooms
        _rooms[this.state.currentRoom].doors[door.position].status = 'open'
        this.setState({rooms: _rooms})
        this.changeRooms(door.roomTo)
      } else {
        console.log('you need a key')
      }
    } else {
      console.log('not yet handled')
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
    const doors = this.state.rooms[this.state.currentRoom].doors
    const floorItems = this.state.rooms[this.state.currentRoom].floorItems

    return (
      <div style={roomStyle}>
        <div>{this.state.currentRoom}</div>
        <div style={threeDoorsStyle}>
          <Door door={doors.left} onDoorClick={this.handleRoomChange} />
          <Door door={doors.forward} onDoorClick={this.handleRoomChange} />
          <Door door={doors.right} onDoorClick={this.handleRoomChange} />
        </div>
        <div style={floorStyle}>
          <FloorItem item={floorItems.left.item} prize={floorItems.left.prize} onPickUp={this.handleInventory} />
          <FloorItem item={floorItems.right.item} prize={floorItems.right.prize} onPickUp={this.handleInventory} />
        </div>
        <Player />
        <Door door={doors.back} onDoorClick={this.handleRoomChange} />
        <Inventory inventory={this.state.inventory} />
      </div>
    )
  }
}