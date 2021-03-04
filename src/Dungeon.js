import { Component } from 'react'
import Room from './Room'
import { Transition } from 'react-transition-group'
import Inventory from './Inventory'

export default class Dungeon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      switchRoomState: true,
      inventory: {
        coins: 0,
        'jar of bats': 1
      }
    }
    this.handleRoomSwitch = this.handleRoomSwitch.bind(this)
    this.handleInventory = this.handleInventory.bind(this)
    this.useKey = this.useKey.bind(this)
  }
  useKey() {
    const inventory = this.state.inventory
    inventory.key = inventory.key - 1
    this.setState({inventory})
  }
  handleInventory(item) {
    console.log(item)
    const inventory = this.state.inventory
    inventory[item] = inventory[item] ? inventory[item] + 1 : 1
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
    return (
      <div style={{display: 'flex'}}>
        <Transition in={this.state.switchRoomState} timeout={duration} >
          {state => (
            <div style={{
              ...defaultDungeonStyle,
              ...transitionStyles[state]
            }}>
              <Room onRoomSwitch={this.handleRoomSwitch} handleInventory={this.handleInventory} useKey={this.useKey} inventory={this.state.inventory} />
            </div>
          )}
        </Transition>
        <Inventory inventory={this.state.inventory} />
      </div>
    )
  }
}
