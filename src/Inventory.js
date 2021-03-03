import { Component } from 'react'

export default class Inventory extends Component {
  render() {
    // const inventory = Object.keys(this.props.inventory).map((item, i) => {
    //   if (this.props.inventory[item]) {
    //     return <li key={i}>{item + ' X ' + this.props.inventory[item]}</li>
    //   } else {
    //     return false
    //   }
    // })
    const inventory = Object.keys(this.props.inventory).map((item, i) => {
      if (item === 'coins') {
        return (
          <tr key={i}>
            <td>{item}</td>
            <td>{this.props.inventory[item]}</td>
          </tr>
        )
      }
      if (this.props.inventory[item]) {
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
      // <ul>{inventory}</ul>
      <table>
        <tbody>{inventory}</tbody>
      </table>
    )
  }
}