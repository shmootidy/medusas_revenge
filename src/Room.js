import { Component } from 'react'
import Door from './Door'
import FloorItem from './FloorItem'
import Player from './Player'

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
    const roomStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      height: '300px'
    }
    const floorStyle = {
      flexBasis: '100%',
      display: 'flex',
      justifyContent: 'space-evenly'
    }
    return (
      <div style={roomStyle}>
        <Door status={this.state.left} />
        <Door status={this.state.forward} />
        <Door status={this.state.right} />
        <div style={floorStyle}>
          <FloorItem item={this.state.floorLeft} />
          <FloorItem item={this.state.floorRight} />
        </div>
        <Player />
        <Door status={this.state.back} />
      </div>
    )
  }
}