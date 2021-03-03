import { Component } from 'react'

export default class Player extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     location: [2,0]
  //   }
  // }
  render() {
    const playerStyle = {
      backgroundColor: 'white',
      flexBasis: '100%'
    }
    return (
      <div style={playerStyle}>
        <div>player</div>
      </div>
    )
  }
}