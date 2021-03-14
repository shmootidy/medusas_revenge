import { useState } from 'react'

export default function UniqueItemContent(props) {
  const uniqueItemContentStyleOuter = {
    position: 'absolute',
    top: '5%',
    left: '5%',
    width: '90%',
    height: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    overflow: 'hidden'
  }
  const uniqueItemContentStyleInner = {
    background: 'rgba(255, 255, 255, 0.9)',
    maxHeight: '425px',
    maxWidth: '425px',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '25px'
  }
  const uniqueItemContentStyle = {
    textAlign: 'center',
    marginBottom: '30px'
  }
  const optionsStyle = {
    marginBottom: '30px',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly'
  }
  const [ input, setInput ] = useState('')
  function handleChange(event) {
    setInput(event.target.value)
  }
  function handleSubmit(event) {
    event.preventDefault()
    props.handleWriting(input)
  }
  const options = props.options ? (
    <div style={optionsStyle}>
      {Object.keys(props.options).map((option, i) => {
        if (props.options[option].option) {
          return <button key={i} onClick={()=>props.selectOption(option)}>{props.options[option].option}</button>
        } else { 
          return false 
        }
      })}</div>) : null

  const content = props.content ? props.content : (
    <div>
      <div>You use one of the pieces of crushed skull to scribble a note on the wall.</div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <input type="submit" value="Enter" />
      </form>
    </div>
  )
  return (
    <div style={uniqueItemContentStyleOuter}>
      <div style={uniqueItemContentStyleInner}>
        <div style={uniqueItemContentStyle}>{content}</div>
        {options}
        <button onClick={props.onClick}>Close</button>
      </div>
    </div>
  )
}