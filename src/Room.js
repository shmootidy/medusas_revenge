import { Component } from 'react'
import Door from './Door'
import FloorItem from './FloorItem'
import Player from './Player'
import UniqueItem from './UniqueItem'

import rooms from './room-data'

export default class Room extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentRoom: 'R',
      prevRoom: '',
      rooms: rooms,
      
    }
    this.handleDoorClick = this.handleDoorClick.bind(this)
    this.handleWriting = this.handleWriting.bind(this)
    this.changeRooms = this.changeRooms.bind(this)
    this.handleFloorItems = this.handleFloorItems.bind(this)
    this.selectItemOption = this.selectItemOption.bind(this)
  }
  selectItemOption(option, keyUsed, prizeEarned, itemPosition) {
    const _rooms = this.state.rooms
    /* update uniqueItem to selected option */
    _rooms[this.state.currentRoom].uniqueItems[itemPosition].item = _rooms[this.state.currentRoom].uniqueItems[itemPosition].options[option].item ? _rooms[this.state.currentRoom].uniqueItems[itemPosition].options[option].item : _rooms[this.state.currentRoom].uniqueItems[itemPosition].options[option].leftover ? _rooms[this.state.currentRoom].uniqueItems[itemPosition].options[option].leftover : null
    /* set end marker when end of interaction is reached */
    _rooms[this.state.currentRoom].uniqueItems[itemPosition].end = _rooms[this.state.currentRoom].uniqueItems[itemPosition].options[option].leftover ? true : false
    /* change uniqueItemContent to display updated message */
    _rooms[this.state.currentRoom].uniqueItems[itemPosition].content = _rooms[this.state.currentRoom].uniqueItems[itemPosition].options[option].message
    /* assign a key to the uniqueItem, if applicable */
    _rooms[this.state.currentRoom].uniqueItems[itemPosition]._key = ( _rooms[this.state.currentRoom].uniqueItems[itemPosition].options[option]._options && _rooms[this.state.currentRoom].uniqueItems[itemPosition].options[option]._options._key ) ? _rooms[this.state.currentRoom].uniqueItems[itemPosition].options[option]._options._key : null
    /* update options with suboptions, if applicable */
    _rooms[this.state.currentRoom].uniqueItems[itemPosition].options = _rooms[this.state.currentRoom].uniqueItems[itemPosition].options[option]._options ? _rooms[this.state.currentRoom].uniqueItems[itemPosition].options[option]._options : null
    this.setState({rooms: _rooms})
    /* update inventory, if applicable */
    if (keyUsed) this.props.useKey(keyUsed)
    if (prizeEarned) this.props.handleInventory(prizeEarned)
  }
  handleWriting(content, position) {
    const _rooms = this.state.rooms
    _rooms[this.state.currentRoom].uniqueItems[position] = {
      item: 'wall writing',
      content: 'there is writing scribbled here: "' + content + '"'
    }
    this.props.useKey('chalky skull fragments')
    this.setState({rooms: _rooms})
  }
  handleFloorItems(item, position) {
    const _rooms = this.state.rooms
    /* remove items from room when picked up */
    _rooms[this.state.currentRoom].floorItems[position] = {item: null, prize: null}
    this.setState({rooms: _rooms})
    /* add items to inventory */
    this.props.handleInventory(item)
  }
  changeRooms(roomTo) {
    this.setState({currentRoom: roomTo})
    this.props.onRoomSwitch()
  }
  handleDoorClick(door) {
    const doorStatus = door.status
    if (doorStatus === 'open') {
      this.changeRooms(door.roomTo)
    } else if (doorStatus === 'locked') {
      const keyNeeded = door.levelLock ? 'levelKey' : 'key'
      if (this.props.inventory[keyNeeded]) {
        const _rooms = this.state.rooms
        _rooms[this.state.currentRoom].doors[door.position].status = 'open'
        this.setState({rooms: _rooms})
        this.props.useKey(keyNeeded)
      } else {
        console.log('you need a key')
      }
    } else {
      console.log('not yet handled')
    }
  }
  componentDidUpdate() {
    // console.log(this.state.rooms[this.state.currentRoom].uniqueItems)
  }
  render() {
    const floorStyle = {
      display: 'flex',
      justifyContent: 'space-between'
    }
    const threeDoorsStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
    }
    const roomStyle = {
      height: '300px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      flexBasis: '90%',
      position: 'relative'
    }
    if (this.state.rooms[this.state.currentRoom]) {
      const doors = this.state.rooms[this.state.currentRoom].doors
      const floorItems = this.state.rooms[this.state.currentRoom].floorItems
  
      return (
        <div style={roomStyle}>
          <div>{this.state.currentRoom}</div>
          <UniqueItem room={this.state.currentRoom} position="ceiling" item={this.state.rooms[this.state.currentRoom].uniqueItems} onSelect={this.selectItemOption} inventory={this.props.inventory} handleWriting={this.handleWriting} />
          <div style={threeDoorsStyle}>
            <Door door={doors.left} onDoorClick={this.handleDoorClick} />
            <UniqueItem room={this.state.currentRoom} position="left-wall" item={this.state.rooms[this.state.currentRoom].uniqueItems} onSelect={this.selectItemOption} inventory={this.props.inventory} handleWriting={this.handleWriting} />
            <Door door={doors.forward} onDoorClick={this.handleDoorClick} />
            <UniqueItem room={this.state.currentRoom} position="right-wall" item={this.state.rooms[this.state.currentRoom].uniqueItems} onSelect={this.selectItemOption} inventory={this.props.inventory} handleWriting={this.handleWriting} />
            <Door door={doors.right} onDoorClick={this.handleDoorClick} />
          </div>
          <div style={floorStyle}>
            <UniqueItem room={this.state.currentRoom} position="left-door" item={this.state.rooms[this.state.currentRoom].uniqueItems} onSelect={this.selectItemOption} inventory={this.props.inventory} handleWriting={this.handleWriting} />
            <FloorItem item={floorItems.left.item} prize={floorItems.left.prize} position='left' onPickUp={this.handleFloorItems} />
            <UniqueItem room={this.state.currentRoom} position="forward-door" item={this.state.rooms[this.state.currentRoom].uniqueItems} onSelect={this.selectItemOption} inventory={this.props.inventory} handleWriting={this.handleWriting} />
            <FloorItem item={floorItems.right.item} prize={floorItems.right.prize} position='right' onPickUp={this.handleFloorItems} />
            <UniqueItem room={this.state.currentRoom} position="right-door" item={this.state.rooms[this.state.currentRoom].uniqueItems} onSelect={this.selectItemOption} inventory={this.props.inventory} handleWriting={this.handleWriting} />
          </div>
          <Player />
          <Door door={doors.back} onDoorClick={this.handleDoorClick} />
        </div>
      )
    } else {
      return <div>you made it outside</div>
    }
  }
}