export default function UniqueItem(props) {
  let output
  if (props.item && props.position === props.item.position) {
    output = props.item.item
  }
  function handleClick() {
  }
  return(
    <div onClick={handleClick}>{output}</div>
  )
}