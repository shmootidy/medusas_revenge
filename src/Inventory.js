import { Component } from 'react'

export default class Inventory extends Component {
  render() {
    const inventory = Object.keys(this.props.inventory).map((item, i) => {
      if (this.props.inventory[item] || item === 'coins') {
        return (
          <tr key={i}>
            <td>{item}</td>
            <td>{this.props.inventory[item]}</td>
          </tr>
        )
      } else {
        return
      }
    })
    return (
      <table>
        <tbody>{inventory}</tbody>
      </table>
    )
  }
}