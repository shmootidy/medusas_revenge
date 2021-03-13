import { Component } from 'react'
import Door from './Door'
// import FloorItem from './FloorItem'
import Player from './Player'
// import UniqueItem from './UniqueItem'
import InteractableItem from './InteractableItem'

import _background from './assets/dungeon_background.png'
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

    this.handleItem = this.handleItem.bind(this)
    this.handleOptionSelect = this.handleOptionSelect.bind(this)
  }
  handleItem(position) {
    const _rooms = this.state.rooms
    /* if item is at end state, move item to inventory */
    if (_rooms[this.state.currentRoom].interactableItems[position].end) {
      const prizeEarned = [_rooms[this.state.currentRoom].interactableItems[position].item, _rooms[this.state.currentRoom].interactableItems[position].volume]
      this.props.handleInventory(prizeEarned)
    }
    /* replace item with its prize */
    _rooms[this.state.currentRoom].interactableItems[position].item = _rooms[this.state.currentRoom].interactableItems[position].prize ? _rooms[this.state.currentRoom].interactableItems[position].prize[0] : ''
    /* save values of prize's volume to object */
    _rooms[this.state.currentRoom].interactableItems[position].volume = _rooms[this.state.currentRoom].interactableItems[position].prize ? _rooms[this.state.currentRoom].interactableItems[position].prize[1] : ''
    /* remove prize from object, since it is now in the item position */
    _rooms[this.state.currentRoom].interactableItems[position].prize = ''
    /* set item to 'end' state */
    _rooms[this.state.currentRoom].interactableItems[position].end = true
    this.setState({rooms: _rooms})
  }
  handleOptionSelect(position, option) {
    const _rooms = this.state.rooms
    /* create 'message' value in item object to be displayed instead of original content and options, if available */
    _rooms[this.state.currentRoom].interactableItems[position].message = _rooms[this.state.currentRoom].interactableItems[position].options[option].message ? _rooms[this.state.currentRoom].interactableItems[position].options[option].message : null
    this.setState({rooms: _rooms})
      // change the item if appropriate
    /* replace item object with selected option */
    // _rooms[this.state.currentRoom].interactableItems[position] = _rooms[this.state.currentRoom].interactableItems[position].options[option]
    /* if item has a 'leftover' key, set item to 'end' */
    // _rooms[this.state.currentRoom].interactableItems[position].end = _rooms[this.state.currentRoom].interactableItems[position].leftover ? true : false
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
      justifyContent: 'space-between',
      height: '30%'
    }
    const threeDoorsStyle = {
      display: 'flex',
      // flexWrap: 'wrap',
      height: '48%'
    }
    const roomStyle = {
      height: '100vh',
      position: 'relative'
    }
    const backgroundImgStyle = {
      maxHeight: '100vh',
    }
    const roomItemsStyle = {
      position: 'absolute', 
      top: '0', 
      left: '0',
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      // justifyContent: 'space-between',
    }
    if (this.state.rooms[this.state.currentRoom]) {
      const doors = this.state.rooms[this.state.currentRoom].doors
      // const floorItems = this.state.rooms[this.state.currentRoom].floorItems
  
      return (
        <div className="Room" style={roomStyle}>
          <img src={_background} alt="background" style={backgroundImgStyle} />
          <div style={roomItemsStyle}>
            {/* <UniqueItem room={this.state.currentRoom} position="ceiling" item={this.state.rooms[this.state.currentRoom].uniqueItems} onSelect={this.selectItemOption} inventory={this.props.inventory} handleWriting={this.handleWriting} /> */}
            <div className="ceiling">
              <InteractableItem 
                room={this.state.currentRoom}
                position="ceiling"
                item={this.state.rooms[this.state.currentRoom].interactableItems}
                handleItem={this.handleItem}
                handleOptionSelect={this.handleOptionSelect}
              />
            </div>
            <div className="walls" style={threeDoorsStyle}>
              <Door door={doors.left} onDoorClick={this.handleDoorClick} />
              <InteractableItem 
                room={this.state.currentRoom}
                position="left-wall"
                item={this.state.rooms[this.state.currentRoom].interactableItems}
                handleItem={this.handleItem}
                handleOptionSelect={this.handleOptionSelect}
              />
              {/* <UniqueItem room={this.state.currentRoom} position="left-wall" item={this.state.rooms[this.state.currentRoom].uniqueItems} onSelect={this.selectItemOption} inventory={this.props.inventory} handleWriting={this.handleWriting} /> */}
              <Door door={doors.forward} onDoorClick={this.handleDoorClick} />
              <InteractableItem 
                room={this.state.currentRoom}
                position="right-wall"
                item={this.state.rooms[this.state.currentRoom].interactableItems}
                handleItem={this.handleItem}
                handleOptionSelect={this.handleOptionSelect}
              />
              {/* <UniqueItem room={this.state.currentRoom} position="right-wall" item={this.state.rooms[this.state.currentRoom].uniqueItems} onSelect={this.selectItemOption} inventory={this.props.inventory} handleWriting={this.handleWriting} /> */}
              <Door door={doors.right} onDoorClick={this.handleDoorClick} />
            </div>
            <div className="floor" style={floorStyle}>
              {/* <UniqueItem room={this.state.currentRoom} position="left-floor" item={this.state.rooms[this.state.currentRoom].uniqueItems} onSelect={this.selectItemOption} inventory={this.props.inventory} handleWriting={this.handleWriting} /> */}
              {/* <FloorItem item={floorItems.left.item} prize={floorItems.left.prize} position='left' onPickUp={this.handleFloorItems} /> */}
              {/* <UniqueItem room={this.state.currentRoom} position="forward-door" item={this.state.rooms[this.state.currentRoom].uniqueItems} onSelect={this.selectItemOption} inventory={this.props.inventory} handleWriting={this.handleWriting} /> */}
              {/* <FloorItem item={floorItems.right.item} prize={floorItems.right.prize} position='right' onPickUp={this.handleFloorItems} /> */}
              {/* <UniqueItem room={this.state.currentRoom} position="right-floor" item={this.state.rooms[this.state.currentRoom].uniqueItems} onSelect={this.selectItemOption} inventory={this.props.inventory} handleWriting={this.handleWriting} /> */}
              <InteractableItem 
                room={this.state.currentRoom}
                position="left-floor"
                item={this.state.rooms[this.state.currentRoom].interactableItems}
                handleItem={this.handleItem}
                handleOptionSelect={this.handleOptionSelect}
              />
              <InteractableItem 
                room={this.state.currentRoom}
                position="right-floor"
                item={this.state.rooms[this.state.currentRoom].interactableItems}
                handleItem={this.handleItem}
                handleOptionSelect={this.handleOptionSelect}
              />
            </div>
            <Player />
            {/* <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
              <Door door={doors.back} onDoorClick={this.handleDoorClick} />
            </div> */}
          </div>
        </div>
      )
    } else {
      return <div>you made it outside</div>
    }
  }
}