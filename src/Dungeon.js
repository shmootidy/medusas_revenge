import { Component } from 'react'
import Room from './Room'
import { Transition } from 'react-transition-group'


export default class Dungeon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      switchRoomState: true
    }
    this.handleSwitchRoom = this.handleSwitchRoom.bind(this)
  }
  handleSwitchRoom() {
    console.log('hi')
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
      <Transition in={this.state.switchRoomState} timeout={duration} >
        {state => (
          <div style={{
            ...defaultDungeonStyle,
            ...transitionStyles[state]
          }}>
            <Room onRoomSwitch={this.handleSwitchRoom} />
          </div>
        )}
      </Transition>
    )
  }
}
