import { Component } from 'react'

export default class Inventory extends Component {
  render() {
    const inventory = Object.keys(this.props.inventory).map((item, i) => {
      if (this.props.inventory[item]) {
        return <li key={i}>{item + ' X ' + this.props.inventory[item]}</li>
      } else {
        return false
      }
    })
    return (
      <ul>{inventory}</ul>
    )
  }
}