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
    this.handleWriting = this.handleWriting.bind(this)
  }
  handleWriting(input) {
    this.props.handleWriting(input, this.props.position)
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
    } else if (this.props.inventory['chalky skull fragments'] && this.props.position !== 'ceiling') {
      this.setState({openItem: true})
    }
  }
  handleClose() {
    this.setState({openItem: false})
  }
  render() {
    const uniqueItemHere = this.props.item && this.props.item[this.props.position]
    const positionStyle = {}
    if (this.props.position === 'ceiling') {
      positionStyle.minHeight = '22%'
    } else if (this.props.position === 'left-wall' || this.props.position === 'right-wall') {
      // positionStyle.height = '108%'
      positionStyle.width = '5%'
    }
    return(
      <div className="UniqueItem" style={positionStyle}>
        <div onClick={this.handleOpen}>{uniqueItemHere ? icons[this.props.item[this.props.position].item] ? icons[this.props.item[this.props.position].item] : this.props.item[this.props.position].item : null }</div>
        {this.state.openItem ? 
          <UniqueItemContent 
            content={uniqueItemHere ? this.props.item[this.props.position].content : null} 
            options={(uniqueItemHere && this.props.item[this.props.position].options) && (!this.props.item[this.props.position]._key || this.props.inventory[this.props.item[this.props.position]._key]) ? this.props.item[this.props.position].options : null} 
            onClick={this.handleClose}
            selectOption={this.handleOptionSelect}
            handleWriting={this.handleWriting} /> 
          : null }
      </div>
    )
  }
}
