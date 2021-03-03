import { Component } from 'react'

export default class Player extends Component {
  render() {
    const playerStyle = {
      backgroundColor: 'gray'
    }
    return (
      <div style={playerStyle}>
        <div>player</div>
      </div>
    )
  }
}