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
        <h1 style = {headingStyle}> Hello, I'm Jeffrey Zang </h1>
        <h2 style = {heading2Style}> Your mother </h2>
    </div>
  );
}

export default App;
