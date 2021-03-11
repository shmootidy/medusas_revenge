import { Component } from 'react'
import icons from './icon-map'
import doors_data from './assets/spritesheet.json'
import forward_doorway from './assets/forward_doorway.png'
import left_doorway from './assets/left_doorway.png'
import right_doorway from './assets/right_doorway.png'

export default class Door extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.props.onDoorClick(this.props.door)
  }
  render() {
    const door = this.props.door
    const status = icons[door.status] ? this.props.door.levelLock ? door.status === 'open' ? icons[door.status] : icons.levelLock : icons[door.status] : ''
    const doorStyle = {
      height: '50px',
      width: '50px',
    }
    console.log(doors_data.frames[door.position + '_doorway.png'])
    let _door
    if (door.position === 'forward') {
      _door = forward_doorway
    } else if (door.position === 'left') {
      _door = left_doorway
    } else if (door.position === 'right') {
      _door = right_doorway
    }
    const _className = door.position + '-door door'
    return (
      <div className={_className} style={doorStyle} onClick={this.handleClick}>
        {/* <div>{ status }</div> */}
        <img src={_door} alt="door" />
      </div>
    )
  }
}
