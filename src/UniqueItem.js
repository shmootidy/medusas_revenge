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
    /* send option and key used, if applicable */
    this.props.onSelect(option, this.props.item.options && this.props.item.options._key ? this.props.item.options._key : null, this.props.item.options && this.props.item.options._prize ? this.props.item.options._prize : null)
  }
  handleOpen() {
    if (this.props.item && this.props.position === this.props.item.position && !this.props.item.end) this.setState({openItem: true})
  }
  handleClose() {
    this.setState({openItem: false})
  }
  render() {
    const uniqueItemHere = this.props.item && this.props.position === this.props.item.position ? true : false
    return(
      <div>
        <div onClick={this.handleOpen}>{uniqueItemHere ? this.props.item.item : null}</div>
        {this.state.openItem ? 
          <UniqueItemContent 
            content={uniqueItemHere ? this.props.item.content : null} 
            options={(uniqueItemHere && this.props.item.options) && (!this.props.item._key || this.props.inventory[this.props.item._key]) ? this.props.item.options : null} 
            onClick={this.handleClose}
            selectOption={this.handleOptionSelect} /> 
          : null }
      </div>
    )
  }
}
