import { Component } from 'react'
import icons from './icon-map'
import UniqueItemContent from './UniqueItemContent'

export default class InteractableItem extends Component {
  constructor(props) {
    super(props)
    this.state = { }
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleOptionSelect = this.handleOptionSelect.bind(this)
    this.handleWriting = this.handleWriting.bind(this)
  }
  handleClick() {
    /* if there is no item, but the item is a wall and the user has something writeable, open */
    if (!this.props.item[this.props.position] && (this.props.position === 'left-wall' || this.props.position === 'right-wall') && this.props.inventory['chalky skull fragments']) {
      this.setState({opened: true})
    }
    if (!this.props.item[this.props.position]) return false
    /* if item has special moves, handleItem in parent component; do not open */
    if (this.props.item[this.props.position].moves) {
      this.props.handleItem(this.props.position)
    } else {
      /* if item has no message, open contents */
      if (!this.state.opened && !this.props.item[this.props.position].message) {
        this.setState({opened: true})
      }
      /* if the item has no content or does have a message, send to parent for handling and close message; close */
      if (!this.props.item[this.props.position].content || this.props.item[this.props.position].message) {
        this.props.handleItem(this.props.position)
        this.setState({opened: false})
      }
    }
  }
  handleClose() {
    this.setState({opened: false})
  }
  handleOptionSelect(option) {
    // when user selects an option, send position and option to be handled by parent
    this.props.handleOptionSelect(this.props.position, option)
  }
  handleWriting(input) {
    this.props.handleWriting(input, this.props.position)
  }
  render() {
    let item
    // does the room have an item in this position?
    if (this.props.item[this.props.position]) {
      item = this.props.item[this.props.position].item
      // is it an item, a prize, or a leftover? 
      if (!this.props.item[this.props.position].item) {
        if (this.props.item[this.props.position].prize) {
          item = this.props.item[this.props.position].prize[0]
        } else {
          item = this.props.item[this.props.position].leftover
        }
      }
      // is there an icon for this item?
      if (icons[item]) {
        item = <img src={icons[item]} alt={item} className={item} />
      }
      // does it have an add-on?
      let plus = this.props.item[this.props.position].plus ? this.props.item[this.props.position].plus : ''
      if (plus && icons[plus]) {
        plus = <img className="plus" src={icons[plus]} alt={plus} />
      }
      if (plus) {
        item = <div>{item}{plus}</div>
      }
    } else {
      item = '' 
    }
    const uniqueItemHere = this.props.item && this.props.item[this.props.position]
    const itemClassNames= 'InteractableItem ' + this.props.position
    return (
      <div className={itemClassNames}>
        <div className="item" onClick={this.handleClick}>{item}</div>
        { uniqueItemHere && this.state.opened && this.props.item[this.props.position].content && !this.props.item[this.props.position].message ? 
          <UniqueItemContent 
            content={uniqueItemHere ? this.props.item[this.props.position].message ? this.props.item[this.props.position].message : this.props.item[this.props.position].content : null} 
            options={(uniqueItemHere && this.props.item[this.props.position].options) && (!this.props.item[this.props.position]._key || this.props.inventory[this.props.item[this.props.position]._key]) ? this.props.item[this.props.position].options : null} 
            onClick={this.handleClose}
            selectOption={this.handleOptionSelect}
            handleWriting={this.handleWriting} /> 
          : null }
        { uniqueItemHere && this.state.opened && this.props.item[this.props.position].message ? 
          <UniqueItemContent
            content={uniqueItemHere ? this.props.item[this.props.position].message : null}
            onClick={this.handleClose}
          />
        : null }
        { !uniqueItemHere && this.state.opened ?
          <UniqueItemContent 
            onClick={this.handleClose}
            handleWriting={this.handleWriting}
          />
        : null }
      </div>
    )
  }
}
