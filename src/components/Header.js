import Button from './Button'

const Header = ({ title, colour, onClick, align }) => {

  return (
    <div className='header'>
        <h1 style = {{color: colour, justifycontent: 'center'}}>{title}</h1>
        {/* <Button colour = 'steelblue' text = 'View' onClick = {onClick}/> */}
    </div>
  )
}

Header.defaultProps = {
    title: 'Title'
}

export default Header