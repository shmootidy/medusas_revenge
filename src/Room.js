import { Component } from 'react'
import Door from './Door'
import Player from './Player'
import InteractableItem from './InteractableItem'

import _background from './assets/dungeon_background.png'
import start_scene from './assets/start_scene.png'
import rooms from './room-data'
import UniqueItemContent from './UniqueItemContent'

export default class Room extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentRoom: 'start',
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
    this.toggleZIndex = this.toggleZIndex.bind(this)
  }
  toggleZIndex(position) {
    if (!this.state.messageBoxOpen) {
      this.setState({
        messageBoxOpen: true,
        messageItemPosition: position
      })
    } else {
      this.setState({messageBoxOpen: false})
    }
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
        let item = _rooms[this.state.currentRoom].interactableItems[position].item ? _rooms[this.state.currentRoom].interactableItems[position].item : _rooms[this.state.currentRoom].interactableItems[position].prize ? _rooms[this.state.currentRoom].interactableItems[position].prize[0] : null 
        if (_rooms[this.state.currentRoom].interactableItems[position].prize && _rooms[this.state.currentRoom].interactableItems[position].prize[0] && _rooms[this.state.currentRoom].interactableItems[position].prize[0] !== item) {
          item = _rooms[this.state.currentRoom].interactableItems[position].prize[0]
        }
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
    if (_rooms[this.state.currentRoom].interactableItems[position].options[option].unhide) {
      _rooms[this.state.currentRoom].interactableItems[position].options[option].unhide.forEach(hiddenItem => {
        _rooms[this.state.currentRoom].interactableItems[hiddenItem].hidden = false
      })
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
    if (!content) return false
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
    if (this.state.deathCountDown === 0) roomTo = 'death'
    this.setState({currentRoom: roomTo})
    this.props.onRoomSwitch()
  }
  handleDoorClick(door) {
    const doorStatus = door.status
    if (doorStatus === 'open') {
      this.changeRooms(door.roomTo)
    } else if (doorStatus === 'locked') {
      const keyNeeded = door.levelLock ? 'crowbar' : 'key'
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
    } else if (this.state.currentRoom === 'start') {
      this.changeRooms('R')
      this.props.startGame()
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
      height: '34.5%',
    }
    const floorStyle = {
      height: '27%',
    }
    const threeDoorsStyle = {
      display: 'flex',
      height: '38.5%'
    }
    const roomStyle = {
      position: 'relative'
    }
    if (this.state.rooms[this.state.currentRoom] && !this.state.rooms[this.state.currentRoom].specialRoom) {
      const doors = this.state.rooms[this.state.currentRoom].doors
      const roomClassName = /*this.state.messageBoxOpen ? 'Room box-open' : */'Room'
      // const itemWithOpenMessage = this.state.messageBoxOpen ? this.state.messageItemPosition : null
      return (
        <div className={roomClassName} style={roomStyle}>
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
                toggleZIndex={this.toggleZIndex}
                messageOpen={this.state.messageBoxOpen}
                itemWithOpenMessage={this.state.messageItemPosition}
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
                toggleZIndex={this.toggleZIndex}
                handleWriting={this.handleWriting}
                messageOpen={this.state.messageBoxOpen}
                itemWithOpenMessage={this.state.messageItemPosition}
              />
              <Door door={doors.forward} onDoorClick={this.handleDoorClick} />
              <InteractableItem 
                room={this.state.currentRoom}
                position="right-wall"
                item={this.state.rooms[this.state.currentRoom].interactableItems}
                handleItem={this.handleItem}
                handleOptionSelect={this.handleOptionSelect}
                inventory={this.props.inventory}
                toggleZIndex={this.toggleZIndex}
                handleWriting={this.handleWriting}
                messageOpen={this.state.messageBoxOpen}
                itemWithOpenMessage={this.state.messageItemPosition}
              />
              <Door door={doors.right} onDoorClick={this.handleDoorClick} />
            </div>
            <div className="floor" style={floorStyle}>
                <div>
                <InteractableItem 
                  room={this.state.currentRoom}
                  position="left-floor"
                  item={this.state.rooms[this.state.currentRoom].interactableItems}
                  handleItem={this.handleItem}
                  handleOptionSelect={this.handleOptionSelect}
                  inventory={this.props.inventory}
                  toggleZIndex={this.toggleZIndex}
                  messageOpen={this.state.messageBoxOpen}
                  itemWithOpenMessage={this.state.messageItemPosition}
                />
                <InteractableItem 
                  room={this.state.currentRoom}
                  position="right-floor"
                  item={this.state.rooms[this.state.currentRoom].interactableItems}
                  handleItem={this.handleItem}
                  handleOptionSelect={this.handleOptionSelect}
                  inventory={this.props.inventory}
                  toggleZIndex={this.toggleZIndex}
                  messageOpen={this.state.messageBoxOpen}
                  itemWithOpenMessage={this.state.messageItemPosition}
                />
                </div>
                <div></div>
            </div>
            <Player />
            { this.state.showSpecialMessage ? <UniqueItemContent content={this.state.specialMessage} onClick={this.handleSpecialMessageClose} /> : null }
            <div className="back-door">
              <Door door={doors.back} onDoorClick={this.handleDoorClick} />
            </div>
          </div>
        </div>
      )
    } else if (this.state.rooms[this.state.currentRoom] && this.state.rooms[this.state.currentRoom].specialRoom) {
      if (this.state.currentRoom === 'start') {
        return (
          <div style={{position: 'relative'}}>
            <img style={{maxHeight:'100vh', maxWidth: '100vw'}} src={start_scene} alt="start scene" />
            <div style={{cursor: 'pointer', position: 'absolute', top: '64%', left: '43%', height: '11%', width: '10%', display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center'}} onClick={this.handleDoorClick} className="start_door">Enter Here</div>
          </div>
        )
      } else {
        return (
          <div style={{minHeight: '200px', minWidth: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: '#696969', fontSize: '24px', textAlign: 'center'}}>
            {this.state.rooms[this.state.currentRoom].message}
            <a href="mailto:shmooritchie@gmail.com?subject=Medusa's Revenge">Tell me what you think!</a>
          </div>
        )
      }
    } else {
      return <div>something has gone terribly wrong</div>
    }
  }
}