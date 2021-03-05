import { Component } from 'react'
import icons from './icon-map'

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
    return (
      <div style={doorStyle} onClick={this.handleClick}>
        <div>{ status }</div>
      </div>
    )
  }
}
