import { Component } from 'react'
import icons from './icon-map'
// import doors_data from './assets/spritesheet.json'

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
    const doorStyle = { position: 'relative', zIndex: 0 }
    if (door.position === 'left') {
      doorStyle.width = '25.5%'
      doorStyle.height = '169%'
    } else if (door.position === 'forward') {
      doorStyle.width = '30%'
      doorStyle.height = '100%'
      doorStyle.display = 'flex'
      doorStyle.alignItems = 'flex-end'
      doorStyle.justifyContent = 'center'
    } else if (door.position === 'right') {
      doorStyle.width = '30.5%'
      doorStyle.height = '168.3%'
    }
    let _className = door.position + '-door door'
    let _doorway = door.status === 'no door' || door.status === 'one-way' ? null : icons[door.position + '_doorway'] ? <img src={icons[door.position + '_doorway']} alt={door.position + '_doorway'} /> : door.position + ' doorway'
    let _lockedDoor = door.status === 'locked' ? <img style={{position: 'absolute', height: '80%'}} src={icons[door.position + '_door']} alt={door.position + '_door' }/> : null
    if (door.levelLock) {
      _doorway = icons.levelLock ? <img src={icons.levelLock} alt="levelLock" /> : 'levelLock'
      _lockedDoor = null
      _className = _className + ' level-lock'
    }
    return (
      <div className={_className} style={doorStyle} onClick={this.handleClick}>
        { _doorway }
        { _lockedDoor }
      </div>
    )
  }
}
