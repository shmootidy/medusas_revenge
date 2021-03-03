import { Component } from 'react'

export default class Inventory extends Component {
  render() {
    const inventory = Object.keys(this.props.inventory).map((item, i) => {
      console.log(item)
      if (this.props.inventory[item] && item != 'key' || item === 'coins') {
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
    const key = this.props.inventory.key ? <div>key</div> : ''
    return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <table>
          <tbody>{inventory}</tbody>
        </table>
        <div>{this.props.inventory.key ? 'key' : ''}</div>
      </div>
    )
  }
}