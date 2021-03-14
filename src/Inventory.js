import { Component } from 'react'
import icons from './icon-map'

export default class Inventory extends Component {
  render() {
    const inventory = Object.keys(this.props.inventory).map((item, i) => {
      let output
      if ((this.props.inventory[item] && item !== 'key') || item === 'coins') {
        output = (
          <tr key={i}>
            <td>{icons[item] ? <img src={icons[item]} alt={item} /> : item }</td>
            <td>{this.props.inventory[item]}</td>
          </tr>
        )
      }
      return output
    })
    const key = this.props.inventory.key ? <img src={icons.key} alt="key" /> : ''
    return (
      <div className="Inventory" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'center'}}>
        <h3>Inventory</h3>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
          <table>
            <tbody>{inventory}</tbody>
          </table>
          <div>{key}</div>
        </div>
        <div style={{margin: '15px', border: '1px solid black', padding: '5px'}} onClick={this.props.restartGame}>RESTART GAME</div>
      </div>
    )
  }
}