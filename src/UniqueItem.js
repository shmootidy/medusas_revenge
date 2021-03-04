import { useState } from 'react'
// import items from './items-data'

export default function UniqueItem(props) {
  const [ openItem, setOpenItem ] = useState(false)

  let uniqueItem = (props.item && props.position === props.item.position) ? props.item.item : null
  function handleClick() {
    setOpenItem(true)
  }
  function handleClose() {
    setOpenItem(false)
  }
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
  let content = (props.item && props.position === props.item.position) ? props.item.content() : null
  const uniqueItemContent = (
    <div style={uniqueItemContentStyle}>
      {content}
      <button onClick={handleClose}>Close</button>
    </div>
  )
  return(
    <div>
      <div onClick={handleClick}>{uniqueItem}</div>
      {openItem ? uniqueItemContent : null}
    </div>
  )
}