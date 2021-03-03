import { Component } from 'react'
import Door from './Door'
import FloorItem from './FloorItem'

export default class Room extends Component {
  constructor(props) {
    super(props)
    this.state = {
      left: 'nodoor',
      forward: 'open',
      right: 'nodoor',
      back: 'open',
      floorLeft: 'jar',
      floorRight: 'nothing'
    }
  }

  render() {
    return (
      <div>
        <Door status={this.state.left} />
        <Door status={this.state.forward} />
        <Door status={this.state.right} />
        <Door status={this.state.back} />
        <FloorItem item={this.state.floorLeft} />
        <FloorItem item={this.state.floorRight} />
      </div>
    )
  }
}