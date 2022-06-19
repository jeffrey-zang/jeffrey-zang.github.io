import Header from './components/Header'

const darkmodeColour = '#282c34';

const headingStyle = {
  color: 'white',
  backgroundColor: darkmodeColour
}

const heading2Style = {
  color: 'cornflowerblue',
  backgroundColor: darkmodeColour
}

function App() {

  return (
    <div className="container" style = {{backgroundColor: '#282c34'}}>
        <Header title = 'Hello' color = {headingStyle.color}/>
        {/* <h1 style = {headingStyle} className='header'> Hello, I'm Jeffrey Zang </h1> */}
        <h2 style = {heading2Style}> not fat </h2>
    </div>
  );
}

export default App;
