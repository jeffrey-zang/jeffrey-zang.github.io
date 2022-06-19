import Button from './Button'

const Header = ({ title, colour, onClick }) => {

  return (
    <header className='header'>
        <h1 style = {{color: colour, alignItems: 'center'}}>{title}</h1>
        {/* <Button colour = 'steelblue' text = 'View' onClick = {onClick}/> */}
    </header>
  )
}

Header.defaultProps = {
    title: 'Title'
}

export default Header