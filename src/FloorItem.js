import { Component } from 'react'

export default class FloorItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opened: false,
      pickedUp: false,
      item: this.props.item
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    if (this.state.opened) {
      this.setState({
        pickedUp: true,
        item: null
      })
    } else {
      this.setState({
        opened: true,
        item: this.props.prize
      })
    }
  }
  render() {
    return (
      <div onClick={this.handleClick}>
        <div>{this.state.item}</div>
      </div>
    )
  }
}
