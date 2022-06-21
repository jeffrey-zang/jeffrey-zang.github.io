import Button from './Button'

const heading2Style = {
  color: 'cornflowerblue',
  backgroundColor: '#282c34',
  alignItems: 'center'
}

const Header2 = ({ title, colour, onClick, text }) => {

  return (
    <div className='header2'>
      <h1 style = {heading2Style}>
        {title}
        <button onclick = {onClick} style = {{backgroundColor: 'steelblue', justifycontent:'flex-end'}} className = 'btn'>{text}</button>
      </h1>
        {/* <Button colour = 'steelblue' text = 'View' onClick = {onClick}/> */}
    </div>
  )
}

Header2.defaultProps = {
    title: 'Title',
    color: heading2Style.color
}

export default Header2