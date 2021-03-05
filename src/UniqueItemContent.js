import { useState } from 'react'

export default function UniqueItemContent(props) {
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
  const [ input, setInput ] = useState('')
  function handleChange(event) {
    setInput(event.target.value)
  }
  function handleSubmit(event) {
    // console.log(input)
    props.handleWriting(input)
    event.preventDefault()
  }
  const options = props.options ? 
    Object.keys(props.options).map((option, i) => {
      if (props.options[option].option) {
        return <button key={i} onClick={()=>props.selectOption(option)}>{props.options[option].option}</button>
      } else { 
        return false 
      }
    }) : null

  const content = props.content ? props.content : (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={handleChange} />
      <input type="submit" value="Enter" />
    </form>
  )
  return (
    <div style={uniqueItemContentStyle}>
      <div>{content}</div>
      <div>
        {options}
      </div>
      <button onClick={props.onClick}>Close</button>
    </div>
  )
}