import { Component } from 'react'
// import icons from './icon-map'

export default class InteractableItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opened: false
    }
  }
  render() {
    // does the room have an item in this position?
    // let item
    if (this.props.item) {
      console.log('yes')
    } else {
      console.log('no')
    }
    return (
      <div>interactable item</div>
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
