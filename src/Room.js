import { Component } from 'react'
import Door from './Door'
import Player from './Player'
import InteractableItem from './InteractableItem'

import _background from './assets/dungeon_background.png'
import rooms from './room-data'
import UniqueItemContent from './UniqueItemContent'

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

    this.handleItem = this.handleItem.bind(this)
    this.handleOptionSelect = this.handleOptionSelect.bind(this)
    this.handleSpecialMessageClose = this.handleSpecialMessageClose.bind(this)
  }
  handleItem(position) {
    const _rooms = this.state.rooms
    /* if item has special moves, move item and pop moves until there are no more moves */
    if (_rooms[this.state.currentRoom].interactableItems[position].moves && _rooms[this.state.currentRoom].interactableItems[position].moves.length) {
      let thisItem = _rooms[this.state.currentRoom].interactableItems[position]
      let moves = thisItem.moves
      const nextPosition = moves.shift()
      /* check if user can catch fly; if not, push the shifted position back onto the array */
      if (!this.state.reasonToCatchFly) {
        /* if the moves array does not include the starting position, put it in there */
        if (position !== nextPosition && !moves.includes(position)) moves.push(position)
        moves.push(nextPosition)
      } else {
        /* if user can catch fly, reduce moves to 1 last move */
        moves.splice(0, moves.length)
      }
      /* remove item from its current position and place in another */
      _rooms[this.state.currentRoom].interactableItems[position] = null
      _rooms[this.state.currentRoom].interactableItems[nextPosition] = thisItem
    } else {
      /* if item is at end state, move item to inventory */
      if (_rooms[this.state.currentRoom].interactableItems[position].end) {
        /* if prize volume or item are not yet set, find them in the prize object and set it */
        const volume = _rooms[this.state.currentRoom].interactableItems[position].volume ? _rooms[this.state.currentRoom].interactableItems[position].volume : _rooms[this.state.currentRoom].interactableItems[position].prize ? _rooms[this.state.currentRoom].interactableItems[position].prize[1] : null
        const item = _rooms[this.state.currentRoom].interactableItems[position].item ? _rooms[this.state.currentRoom].interactableItems[position].item : _rooms[this.state.currentRoom].interactableItems[position].prize ? _rooms[this.state.currentRoom].interactableItems[position].prize[0] : null 
        if (!_rooms[this.state.currentRoom].interactableItems[position].item || !_rooms[this.state.currentRoom].interactableItems[position].volume) {
          /* remove prize from object, since it is now in the item position */
          _rooms[this.state.currentRoom].interactableItems[position].prize = ''
        this.setState({ rooms: _rooms })
        }
        const prizeEarned = [item, volume]
        this.props.handleInventory(prizeEarned)
      }
      /* replace item with its prize */
      _rooms[this.state.currentRoom].interactableItems[position].item = _rooms[this.state.currentRoom].interactableItems[position].prize ? _rooms[this.state.currentRoom].interactableItems[position].prize[0] : ''
      /* set value of prize's volume to object */
      _rooms[this.state.currentRoom].interactableItems[position].volume = _rooms[this.state.currentRoom].interactableItems[position].prize ? _rooms[this.state.currentRoom].interactableItems[position].prize[1] : ''
      /* remove prize from object, since it is now in the item position */
      _rooms[this.state.currentRoom].interactableItems[position].prize = ''
      /* set item to 'end' state */
      _rooms[this.state.currentRoom].interactableItems[position].end = true
    }
    this.setState({rooms: _rooms})
  }
  handleOptionSelect(position, option) {
    const _rooms = this.state.rooms
    /* use inventory key, if applicable */
    if (_rooms[this.state.currentRoom].interactableItems[position]._key) {
      this.props.useKey(_rooms[this.state.currentRoom].interactableItems[position]._key)
    }
    /* update item with selected option, if applicable */
    _rooms[this.state.currentRoom].interactableItems[position] = _rooms[this.state.currentRoom].interactableItems[position].options[option]
    this.setState({rooms: _rooms})
    /* if user talks to spider, enable fly catching ability */
    if (_rooms[this.state.currentRoom].interactableItems[position].plus) {
      this.setState({reasonToCatchFly: true})
    }
    /* if user kills spider, start death countdown */
    if (_rooms[this.state.currentRoom].interactableItems[position].deathCountDown) {
      this.setState({deathCountDown: 9})
    }
  }
  handleWriting(content, position) {
    const _rooms = this.state.rooms
    _rooms[this.state.currentRoom].interactableItems[position] = {
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
    if (this.state.deathCountDown) this.setState({ deathCountDown: this.state.deathCountDown - 1 })
    if (this.state.deathCountDown === 6) {
      this.setState({
        specialMessage: 'You\'re starting to think killing that spider may have been a mistake.',
        showSpecialMessage: true
      })
    }
    if (this.state.deathCountDown === 3) {
      this.setState({
        specialMessage: 'This endless labyrinth is wearing you down.',
        showSpecialMessage: true
      })
    }
    if (this.state.deathCountDown === 1) {
      this.setState({
        specialMessage: 'You\'re too weary to carry on.',
        showSpecialMessage: true
      })
    }
    if (this.state.deathCountDown === 0) roomTo = 'death screen'
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
        const specialMessage = door.levelLock ? door.message : 'You need a key for this door.'
        this.setState({
          showSpecialMessage: true,
          specialMessage
        })
      }
    } else {
      console.log('not yet handled')
    }
  }
  handleSpecialMessageClose() {
    this.setState({showSpecialMessage: false})
  }
  componentDidUpdate() {
    // console.log(this.state.rooms[this.state.currentRoom].uniqueItems)
  }
  render() {
    const backgroundImgStyle = {
      maxHeight: '100vh',
      maxWidth: '85vw'
    }
    const roomItemsStyle = {
      position: 'absolute', 
      top: '0', 
      left: '0',
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '100vh',
      maxWidth: '100vw'
    }
    const ceilingStyle = {
      backgroundColor: 'red',
      height: '26.5%',
      opacity: '0.2'
    }
    const floorStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      height: '30%',
      zIndex: 1
    }
    const threeDoorsStyle = {
      display: 'flex',
      height: '48%'
    }
    const roomStyle = {
      position: 'relative'
    }
    if (this.state.rooms[this.state.currentRoom]) {
      const doors = this.state.rooms[this.state.currentRoom].doors
      return (
        <div className="Room" style={roomStyle}>
          <img src={_background} alt="background" style={backgroundImgStyle} />
          <div style={roomItemsStyle}>
            <div className="ceiling" style={ceilingStyle}>
              <InteractableItem 
                room={this.state.currentRoom}
                position="ceiling"
                item={this.state.rooms[this.state.currentRoom].interactableItems}
                handleItem={this.handleItem}
                handleOptionSelect={this.handleOptionSelect}
                inventory={this.props.inventory}
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
                inventory={this.props.inventory}
                handleWriting={this.handleWriting}
              />
              <Door door={doors.forward} onDoorClick={this.handleDoorClick} />
              <InteractableItem 
                room={this.state.currentRoom}
                position="right-wall"
                item={this.state.rooms[this.state.currentRoom].interactableItems}
                handleItem={this.handleItem}
                handleOptionSelect={this.handleOptionSelect}
                inventory={this.props.inventory}
                handleWriting={this.handleWriting}
              />
              <Door door={doors.right} onDoorClick={this.handleDoorClick} />
            </div>
            <div className="floor" style={floorStyle}>
              <InteractableItem 
                room={this.state.currentRoom}
                position="left-floor"
                item={this.state.rooms[this.state.currentRoom].interactableItems}
                handleItem={this.handleItem}
                handleOptionSelect={this.handleOptionSelect}
                inventory={this.props.inventory}
              />
              <InteractableItem 
                room={this.state.currentRoom}
                position="right-floor"
                item={this.state.rooms[this.state.currentRoom].interactableItems}
                handleItem={this.handleItem}
                handleOptionSelect={this.handleOptionSelect}
                inventory={this.props.inventory}
              />
            </div>
            <Player />
            { this.state.showSpecialMessage ? <UniqueItemContent content={this.state.specialMessage} onClick={this.handleSpecialMessageClose} /> : null }
            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
              <Door door={doors.back} onDoorClick={this.handleDoorClick} />
            </div>
          </div>
        </div>
      )
    } else {
      return <div>you made it outside</div>
    }
  }
}