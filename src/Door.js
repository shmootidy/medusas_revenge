import { Component } from 'react'

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
