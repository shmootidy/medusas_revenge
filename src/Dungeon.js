import { Component } from 'react'
import Room from './Room'
import { Transition } from 'react-transition-group'
import Inventory from './Inventory'
// import background from './background.JPG'

export default class Dungeon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      switchRoomState: true,
      inventory: {
        coins: 0,
        // 'jar of bats': 1
      }
    }
    this.handleRoomSwitch = this.handleRoomSwitch.bind(this)
    this.handleInventory = this.handleInventory.bind(this)
    this.useKey = this.useKey.bind(this)
  }
  useKey(_key) {
    const key = _key ? _key : 'key'
    const inventory = this.state.inventory
    inventory[key] = inventory[key] - 1
    this.setState({inventory})
  }
  handleInventory(item) {
    const inventory = this.state.inventory
    inventory[item[0]] = inventory[item[0]] ? inventory[item[0]] + item[1] : item[1]
    this.setState({inventory})
  }
  handleRoomSwitch() {
    this.setState({switchRoomState: !this.state.switchRoomState})
  }
  render() {
    const defaultDungeonStyle = {
      textAlign: 'center',
      width: '500px'
    }
    const transitionStyles = {
      entering: { opacity: 0 },
      entered: { opacity: 1 },
      exiting: { opacity: 0 },
      exited: { opacity: 1 }
    }
    const duration = {
      appear: 500,
      enter: 300,
      exit: 300
    }
    // const backgroundImgStyle = {
    //   position: 'absolute',
    //   top: '0',
    //   left: '0',
    //   height: '100vh',
    //   maxWidth: '80%'
    // }
    return (
      <div style={{display: 'flex'}}>
        <Transition in={this.state.switchRoomState} timeout={duration} >
          {state => (
            <div style={{
              ...defaultDungeonStyle,
              ...transitionStyles[state]
            }}>
              {/* <img style={backgroundImgStyle} src={background} alt="background" /> */}
              <Room onRoomSwitch={this.handleRoomSwitch} handleInventory={this.handleInventory} useKey={this.useKey} inventory={this.state.inventory} />
            </div>
          )}
        </Transition>
        <Inventory inventory={this.state.inventory} />
      </div>
    )
  }
}
