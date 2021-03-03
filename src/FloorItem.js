import { Component } from 'react'

export default class FloorItem extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.setState({
      // item:
    })
  }
  render() {
    return (
      <div>flooritem -- {this.props.item} </div>
    )
  }
}
