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
      prevRoom: '',
      rooms: rooms,
      inventory: {
        'coins': 0,
        'jar of wasps': 1
      },
      roomStyle: {
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        flexBasis: '90%'
      }
    }
    this.handleDoorClick = this.handleDoorClick.bind(this)
    this.changeRooms = this.changeRooms.bind(this)
  }
  changeRooms(roomTo) {
    this.setState({currentRoom: roomTo})
    this.props.onRoomSwitch()
  }
  handleDoorClick(door) {
    const doorStatus = door.status
    if (doorStatus === 'open') {
      // if (door.position === 'forward' && this.state.currentRoom === 'R') {
        // console.log('are you sure?')
      // } else {
        this.changeRooms(door.roomTo)
      // }
    } else if (doorStatus === 'locked') {
      if (this.props.inventory.key) {
        const _rooms = this.state.rooms
        _rooms[this.state.currentRoom].doors[door.position].status = 'open'
        this.setState({rooms: _rooms})
        this.props.useKey()
      } else {
        console.log('you need a key')
      }
    } else {
      console.log('not yet handled')
    }
  }
  render() {
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
      <div style={this.state.roomStyle}>
        <div>{this.state.currentRoom}</div>
        <div style={threeDoorsStyle}>
          <Door door={doors.left} onDoorClick={this.handleDoorClick} />
          <Door door={doors.forward} onDoorClick={this.handleDoorClick} />
          <Door door={doors.right} onDoorClick={this.handleDoorClick} />
        </div>
        <div style={floorStyle}>
          <FloorItem item={floorItems.left.item} prize={floorItems.left.prize} onPickUp={this.props.handleInventory} />
          <FloorItem item={floorItems.right.item} prize={floorItems.right.prize} onPickUp={this.props.handleInventory} />
        </div>
        <Player />
        <Door door={doors.back} onDoorClick={this.handleDoorClick} />
      </div>
    )
  }
}