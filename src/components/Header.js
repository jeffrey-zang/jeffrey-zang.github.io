import Button from './Button'

const Header = ({ title, colour, onClick, align, style }) => {

  return (
    <div className='header'>
        <h1 style = {{color: colour, display: 'flex', justifycontent: 'center'}}>{title}</h1>
        {/* <Button colour = 'steelblue' text = 'View' onClick = {onClick}/> */}
    </div>
  )
}

Header.defaultProps = {
    title: 'Title'
}

export default Header