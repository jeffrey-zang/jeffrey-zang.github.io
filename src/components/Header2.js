import Button from './Button'

const heading2Style = {
  color: 'cornflowerblue',
  backgroundColor: '#282c34',
  alignItems: 'center',
  fontSize: '50px'
}

const Header2 = ({ title, colour, onClick, text, hasbutton }) => {

  return (
    <div>
      <h1 style = {heading2Style}>
        {title}
        <button onclick = {onClick} style = {{backgroundColor: 'steelblue'}} className = 'btn'>
          {text}
        </button>
      </h1>
        {/* <Button colour = 'steelblue' text = 'View' onClick = {onClick}/> */}
    </div>
  )
}

Header2.defaultProps = {
    title: 'Title',
    color: heading2Style.color,
    hasbutton: true
}

export default Header2