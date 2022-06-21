const Button = ({colour, text}) => {
  
    return (
        <button onClick = {console.log('e')} style = {{backgroundColor: colour}} className = 'btn'>text</button>
    )
}

export default Button