import { Component } from 'react'
import icons from './icon-map'
export default class Player extends Component {
  render() {
    const playerStyle = {
      backgroundColor: 'gray'
    }
    return (
      <div style={playerStyle}>
        <div>{icons.player ? icons.player : 'player'}</div>
      </div>
    )
  }
}