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
    let uniqueItem = validOption ? this.props.item.item : null
    let content = validOption ? this.props.item.content : null
    let options = validOption && this.props.item.options ? Object.keys(this.props.item.options).map((key, i) => {
      return <button key={i} onClick={() => this.handleOptionSelect(key)}>{this.props.item.options[key].option}</button>
    }) : null
    return(
      <div>
        <div onClick={this.handleOpen}>{uniqueItem}</div>
        {this.state.openItem ? <UniqueItemContent content={content} options={options} onClick={this.handleClose} /> : null }
      </div>
    )
  }
}
