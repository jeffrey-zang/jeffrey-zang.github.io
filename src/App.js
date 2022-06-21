import Header from './components/Header'
import Title from './components/Title'
// import Button from './components/Button'
import Header2 from './components/Header2'

const darkmodeColour = '#282c34';

// const headingStyle = {
//   color: 'ghostwhite',
//   backgroundColor: darkmodeColour
// }

const heading2Style = {
  color: 'cornflowerblue',
  backgroundColor: darkmodeColour,
  alignItems: 'center',
  fontSize: '50px'
}

function App() {

  // const d = new Date()
  // var myage = d.getFullYear() - 2007
  // if (myage == 18) {myage = ''}

  return (
    <>
    <div className="container" style={{ backgroundColor: '#282c34' }}>
      <Header title="Hello, I'm" colour={heading2Style.color} />
      {/* <h1 style = {headingStyle} className='header'> Hello, I'm Jeffrey Zang </h1> */}
      <Title></Title>
      {/* <p style = {{display: 'flex', color: 'white', fontSize: '18px', justifyContent: 'center', alignItems: 'center'}}>
        I am a 
      </p> */}
      {/* <h2 style={{ color: 'greenyellow' }}>e</h2> */}
    </div>

    <div className='container' style={{ backgroundColor: darkmodeColour }}>
      <Header2 title = "Portfolio" text = 'View'/>
      <p style = {{color: 'azure', fontSize: '18px'}}>
        My projects, creations, and experience
      </p>
    </div>
    <div className='container' style={{ backgroundColor: darkmodeColour }}>
      <Header2 title = "Resume" text = 'View'/>
      <p style = {{color: 'azure', fontSize: '18px'}}>
        My achievements, extracurriculars, and work and volunteering experience
      </p>
    </div>
    <div className='container' style={{ backgroundColor: darkmodeColour }}>
      <h1 style = {heading2Style}>
        Links
      </h1>
    </div>
    <div className='container' style={{ backgroundColor: darkmodeColour }}>
      <h1 style = {heading2Style}>
        Contact
      </h1>
    </div>
    </>
  );
}

export default App;
