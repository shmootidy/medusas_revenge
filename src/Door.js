import { Component } from 'react'

export default class Door extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.props.onDoorClick(this.props.door)
    const status = this.props.door.status
    if (status === 'no door') {
      return
    } else if (status === 'open') {
      console.log('change rooms')
    } else if (status === 'one-way') {
      console.log('condolences')
    } else if (status === 'locked') {
      console.log('locked!')
    }
  }
  render() {
    const door = this.props.door
    const status = door.status
    const doorStyle = {
      height: '50px',
      width: '50px',
      backgroundColor: (status === 'no door') ? '' : 'darkgreen'
    }
    return (
      <div style={doorStyle} onClick={this.handleClick}>
        <div>{ status }</div>
      </div>
    )
  }
}
