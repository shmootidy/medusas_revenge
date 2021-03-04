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
  
  const options = props.options ? 
    Object.keys(props.options).map((option, i) => {
      if (props.options[option].option) {
        return <button key={i} onClick={()=>props.selectOption(option)}>{props.options[option].option}</button>
      } else { 
        return false 
      }
    }) : null
  return (
    <div style={uniqueItemContentStyle}>
      <div>{props.content}</div>
      <div>
        {options}
      </div>
      <button onClick={props.onClick}>Close</button>
    </div>
  )
}