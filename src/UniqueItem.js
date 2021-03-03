import { useState } from 'react'

export default function UniqueItem(props) {
  const [ openItem, setOpenItem ] = useState(false)

  let output = (props.item && props.position === props.item.position) ? props.item.item : null
  function handleClick() {
    setOpenItem(!openItem)
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
  const uniqueItemContent = (
    <div style={uniqueItemContentStyle}>
      <div>{props.item.content}</div>
    </div>
  )
  return(
    <div onClick={handleClick}>
      <div>{output}</div>
      {openItem ? uniqueItemContent : null}
    </div>
  )
}