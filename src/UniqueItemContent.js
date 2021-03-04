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

  return (
    <div style={uniqueItemContentStyle}>
      <div>{props.content}</div>
      <div>
        {props.options ? 
          Object.keys(props.options).map((option, i) => {
            return <button key={i} onClick={()=>props.selectOption(option)}>{props.options[option].option}</button>
          })
        : null }
      </div>
      <button onClick={props.onClick}>Close</button>
    </div>
  )
}