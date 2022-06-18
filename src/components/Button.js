const Button = ({colour, text}) => {
    return (
        <button style = {{ backgroundColor : colour}} className = 'btn'> 
            {text}
        </button>
    )
}