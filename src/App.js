import Header from './components/Header'
import Title from './components/Title'
// import Button from './components/Button'
import Header2 from './components/Header2'

const darkmodeColour = '#282c34';

const headingStyle = {
  color: 'ghostwhite',
  backgroundColor: darkmodeColour
}

const heading2Style = {
  color: 'cornflowerblue',
  backgroundColor: darkmodeColour,
  alignItems: 'center'
}

function App() {

  return (
    <>
    <div className="container" style={{ backgroundColor: '#282c34' }}>
      <Header title="Hello, I'm" colour={heading2Style.color} />
      {/* <h1 style = {headingStyle} className='header'> Hello, I'm Jeffrey Zang </h1> */}
      <Title></Title>
      {/* <h2 style={{ color: 'greenyellow' }}>e</h2> */}
    </div>

    <div className='container' style={{ backgroundColor: darkmodeColour }}>
      <Header2 title = "Portfolio" text = 'View'/>
    </div>
    
    </>
  );
}

export default App;
