import { Component } from 'react'

export default class Door extends Component {
  render() {
    const door = this.props.door
    return (
      <div>
        <div>door</div>
        <div>{ door.status }</div>
      </div>
    )
  }
}
