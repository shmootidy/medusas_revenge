import { Component } from 'react'

export default class UniqueItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openItem: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleClick() {
    this.setState({openItem: true})
  }
  handleClose() {
    this.setState({openItem: false})
  }
  render() {
    const validOption = this.props.item && this.props.position === this.props.item.position ? true : false
    let uniqueItem = validOption ? this.props.item.item : null
    const uniqueItemContentStyle = {
      position: 'absolute',
      top: '5%',
      left: '5%',
      width: '90%',
      height: '90%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'white'
    }
    let content = validOption ? this.props.item.content : null
    const uniqueItemContent = (
      <div style={uniqueItemContentStyle}>
        {content}
        <button onClick={this.handleClose}>Close</button>
      </div>
    )
    return(
      <div>
        <div onClick={this.handleClick}>{uniqueItem}</div>
        {this.state.openItem ? uniqueItemContent : null}
      </div>
    )
  }
}
