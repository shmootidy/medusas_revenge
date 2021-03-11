import { Component } from 'react'
import icons from './icon-map'

export default class FloorItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opened: false,
      pickedUp: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    if (this.state.opened) {
      if (this.props.prize) {
        this.props.onPickUp(this.props.prize, this.props.position)
      }
      this.setState({
        pickedUp: true,
      })
      this.setState({
        pickedUp: false,
        opened: false
      })
    } else {
      this.setState({
        opened: true,
      })
    }
  }
  render() {
    let item
    if (this.props.item && !this.state.opened) {
      item = icons[this.props.item] ? <img src={icons[this.props.item]} alt="floor item" /> : this.props.item
    } else if ((this.props.prize && this.state.opened) || (!this.props.item && this.props.prize)) {
      item = icons[this.props.prize[0]] ? icons[this.props.prize[0]] : this.props.prize[0]
    }
    if (this.state.pickedUp) {
      item = '' 
    }
    return (
      <div className="FloorItem" onClick={this.handleClick}>
        <div>{item}</div>
      </div>
    )
  }
}
