import { Component } from 'react'

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
        this.props.onPickUp(this.props.prize)
      }
      this.setState({
        pickedUp: true,
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
      item = this.props.item
    } else if (this.props.prize && this.state.opened) {
      item = this.props.prize
    }
    if (this.state.pickedUp) {
      item = '' 
    }
    return (
      <div onClick={this.handleClick}>
        <div>{item}</div>
      </div>
    )
  }
}
