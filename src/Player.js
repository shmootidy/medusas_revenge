import { Component } from 'react'

export default class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: [2,0]
    }
  }
  render() {
    return (
      <div>player -- {this.state.location}</div>
    )
  }
}