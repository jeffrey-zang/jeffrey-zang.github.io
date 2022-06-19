const Header = ({ title, colour }) => {
  return (
    <div>
        <h1 style = {{color: colour}}>{title}</h1>
    </div>
  )
}

Header.defaultProps = {
    title: 'Title'
}

export default Header