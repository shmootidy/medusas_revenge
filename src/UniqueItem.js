import { Component } from 'react'
import UniqueItemContent from './UniqueItemContent'
import icons from './icon-map'

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
    let keyUsed = (this.props.inventory && this.props.inventory[this.props.item._key]) ? this.props.item[this.props.position]._key : null
    let prizeEarned = this.props.item[this.props.position].options && this.props.item[this.props.position].options._prize ? this.props.item[this.props.position].options._prize : null
    let itemPosition = this.props.position
    this.props.onSelect(option, keyUsed, prizeEarned, itemPosition)
  }
  handleOpen() {
    if (this.props.item && this.props.item[this.props.position] && !this.props.item.end) {
      this.setState({openItem: true})
    } else if (this.props.inventory['chalky skull fragments']) {
      // this.props.handleWriting(this.props.position)
      this.setState({openItem: true})
    }
  }
  handleClose() {
    this.setState({openItem: false})
  }
  render() {
    const uniqueItemHere = this.props.item && this.props.item[this.props.position]
    return(
      <div>
        <div style={{minHeight: '25px', minWidth: '25px', backgroundColor: 'yellow'}} onClick={this.handleOpen}>{uniqueItemHere ? icons[this.props.item[this.props.position].item] ? icons[this.props.item[this.props.position].item] : this.props.item[this.props.position].item : null }</div>
        {this.state.openItem ? 
          <UniqueItemContent 
            content={uniqueItemHere ? this.props.item[this.props.position].content : null} 
            options={(uniqueItemHere && this.props.item[this.props.position].options) && (!this.props.item[this.props.position]._key || this.props.inventory[this.props.item[this.props.position]._key]) ? this.props.item[this.props.position].options : null} 
            onClick={this.handleClose}
            selectOption={this.handleOptionSelect} /> 
          : null }
      </div>
    )
  }
}
