const Button = ({colour, text, clicked}) => {
  
    return (
        <button onClick = {clicked} style = {{backgroundColor: 'steelblue', display: 'flex', alignItems: 'center',}} className = 'btn'>{text}</button>
    )
}

export default Button