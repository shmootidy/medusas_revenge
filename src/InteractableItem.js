import { Component } from 'react'
import icons from './icon-map'
import UniqueItemContent from './UniqueItemContent'

export default class InteractableItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opened: false,
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleOptionSelect = this.handleOptionSelect.bind(this)
  }
  handleClick() {
    if (!this.state.opened && !this.props.item[this.props.position].message) {
      this.setState({opened: true})
    }
    // if the item has no content (or an option), remove the item and replace it with its prize (if applicable)
    if (!this.props.item[this.props.position].content || this.props.item[this.props.position].message) {
      this.props.handleItem(this.props.position)
      this.setState({opened: false})
    }
  }
  handleClose() {
    this.setState({opened: false})
  }
  handleOptionSelect(option) {
    // when user selects an option, send position and option to be handled by parent
    this.props.handleOptionSelect(this.props.position, option)
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
        item = <img src={icons[item]} alt={item} />
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
    return (
      <div className="InteractableItem">
        <div onClick={this.handleClick}>{item}</div>
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
      </div>
    )
  }
}

// when user clicks 
/// -- does the item have content? open content
  /// --- does content have options? show options and message and close btn
    /// does selected option have options? (and so on)
  /// --- else? show message and close btn
/// --- else? remove item
  /// --- does item have prize? show prize -- prize becomes new item
  /// --- else? show nothing
