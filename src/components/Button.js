const Button = ({colour, text, clicked, icon, textColour}) => {
  
    return (
        <button onClick = {clicked} style = {{backgroundColor: colour, display: 'flex', alignItems: 'center', marginTop: '0px', color: {textColour}}} className = 'btn'>
            {text}
            <i class={icon} style={{ fontSize: 22 }}></i>
        </button>
    )
}

Button.defaultProps = {
    colour: 'steelblue',
    textColour: 'azure'
}

export default Button