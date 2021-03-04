import { Component } from 'react'
import UniqueItemContent from './UniqueItemContent'

export default class UniqueItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openItem: false
    }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleOptionSelect = this.handleOptionSelect.bind(this)
  }
  handleOptionSelect(option) {
    this.props.onSelect(option)
  }
  handleOpen() {
    this.setState({openItem: true})
  }
  handleClose() {
    this.setState({openItem: false})
  }
  // check for key needed and key in inventory before displaying options
  render() {
    const uniqueItemHere = this.props.item && this.props.position === this.props.item.position ? true : false
    // const showOptions = (uniqueItemHere && this.props.item.options) && (!this.props._key || this.props._key && 
    return(
      <div>
        <div onClick={this.handleOpen}>{uniqueItemHere ? this.props.item.item : null}</div>
        {this.state.openItem ? 
          <UniqueItemContent 
            content={uniqueItemHere ? this.props.item.content : null} 
            options={uniqueItemHere && this.props.item.options ? this.props.item.options : null} 
            onClick={this.handleClose}
            selectOption={this.handleOptionSelect} /> 
          : null }
      </div>
    )
  }
}
