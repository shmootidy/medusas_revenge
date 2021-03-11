import { Component } from 'react'
import icons from './icon-map'
import doors_data from './assets/spritesheet.json'

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
    const doorStyle = { position: 'relative' }
    let _door
    if (door.position === 'forward') {
      doorStyle.width = '27%'
      doorStyle.height = '104%'
      doorStyle.display = 'flex'
      doorStyle.alignItems = 'flex-end'
      doorStyle.justifyContent = 'center'
    } else if (door.position === 'left') {
      doorStyle.width = '28%'
      doorStyle.height = '152%'
    } else if (door.position === 'right') {
      doorStyle.width = '33%'
      doorStyle.height = '160%'
    }
    const _className = door.position + '-door door'
    return (
      <div className={_className} style={doorStyle} onClick={this.handleClick}>
        { icons[door.position + '_doorway'] ? <img src={icons[door.position + '_doorway']} alt={door.position + '_doorway'} /> : door.position + ' doorway' }
      </div>
    )
  }
}
