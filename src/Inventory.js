import { Component } from 'react'

export default class Inventory extends Component {
  render() {
    const inventory = Object.keys(this.props.inventory).map((key) => {
      if (this.props.inventory[key]) {
        return <li>{key + ' X ' + this.props.inventory[key]}</li>
      } else {
        return false
      }
    })
    return (
      <ul>{inventory}</ul>
    )
  }
}