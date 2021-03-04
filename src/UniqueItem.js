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
    if (option === 'option1') {
      this.handleClose()
    }
  }
  handleOpen() {
    this.setState({openItem: true})
  }
  handleClose() {
    this.setState({openItem: false})
  }
  render() {
    const validOption = this.props.item && this.props.position === this.props.item.position ? true : false
    return(
      <div>
        <div onClick={this.handleOpen}>{validOption ? this.props.item.item : null}</div>
        {this.state.openItem ? 
          <UniqueItemContent 
            content={validOption ? this.props.item.content : null} 
            options={validOption && this.props.item.options ? this.props.item.options : null} 
            onClick={this.handleClose}
            selectOption={this.handleOptionSelect} /> 
          : null }
      </div>
    )
  }
}
