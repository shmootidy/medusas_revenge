import { Component } from 'react'
import icons from './icon-map'

export default class Player extends Component {
  render() {
    const playerStyle = {
      // backgroundColor: 'gray'
      position: 'absolute',
      height: '40%',
      width: 'auto',
      bottom: '0',
      right: '29%'
    }
    return (
      <div className="Player" style={playerStyle}>
        {/* <div>{icons.player ? icons.player : 'player'}</div> */}
        <img src={icons.player} alt="medusa" />
      </div>
    )
  }
}