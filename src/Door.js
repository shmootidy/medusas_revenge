import { Component } from 'react'

export default class Door extends Component {
  render() {
    return (
      <div>door -- {this.props.status} </div>
    )
  }
}
