import React from 'react';
import root from './index';
import ReactDOM from 'react-dom/client';

import Header from './components/Header'
import Title from './components/Title'
// import Button from './components/Button'
import Header2 from './components/Header2'
import Portfolio from './Portfolio';
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
    <div className="container" style={{ backgroundColor: '#282c34', maxWidth: '100%', margin:0, padding:'40px' }}>
      <Header title="Hello, I'm" colour={heading2Style.color} />
      {/* <h1 style = {headingStyle} className='header'> Hello, I'm Jeffrey Zang </h1> */}
      <Title words = 'Jeffrey Zang'></Title>
      {/* <p style = {{display: 'flex', color: 'white', fontSize: '18px', justifyContent: 'center', alignItems: 'center'}}>
        I am a 
      </p> */}
      {/* <h2 style={{ color: 'greenyellow' }}>e</h2> */}
    </div>

    <div className='container' style={{ backgroundColor: darkmodeColour }}>
      <Header2 title = "Portfolio" text = 'View' clicked = {
        () => {
          root.render (
            <React.StrictMode>
              <Portfolio />
            </React.StrictMode>
          )          
        }
      }/>
      <p style = {{color: 'azure', fontSize: '18px'}}>
        My projects, creations, and experience
      </p>
    </div>

    <div className='container' style={{ backgroundColor: darkmodeColour }}>
      <Header2 title = "Resume" text = 'View' clicked={
        () => {window.open('https://docs.google.com/document/d/1b6urcHHJYErsZNCe6qV3wdkqDbrzLin93wucKvwnnzc/view')}
      }/>
      <p style = {{color: 'azure', fontSize: '18px'}}>
        My achievements, extracurriculars, work and volunteering experience
      </p>
    </div>

    <div className='container' style={{ backgroundColor: darkmodeColour }}>
      <h1 style = {heading2Style}>
        Links
      </h1>
      <p style = {{color: 'azure', fontSize: '18px', fontWeight: 'normal'}}>
        GitHub: <a href='https://github.com/jeffrey-zang' target = '_blank' style={{color:'ghostwhite'}}>jeffrey-zang</a>
        <br></br>
        Discord: <p style={{display: 'inline', color: '#5663F7'}} target = '_blank'>Jeff Bozos#4701</p>
        <br></br>
        Stack Overflow: <a href='https://stackoverflow.com/users/14683783/larg-ank' target = '_blank' style={{color:'#ef8236'}}>Larg Ank</a>
        <br></br>
        Replit: <a href='https://replit.com/@LargAnk' target = '_blank' style={{color:'#878d96'}}>LargAnk</a>
        <br></br>
      </p>
    </div>

    <div className='container' style={{ backgroundColor: darkmodeColour, maxWidth: '800px' }}>
      <h1 style = {{display: 'flex', color: 'cornflowerblue', justifyContent: 'center', alignItems: 'center', fontSize: '50px'}}>
        Contact
      </h1>
      <p style = {{color: 'azure', fontSize: '18px', fontWeight: 'normal'}}>
        Email: <address style = {{display: 'inline'}}>zangj4548@wrdsb.ca</address>
        <br></br>
        Phone: <address style = {{display: 'inline'}}>226-988-5047</address>
        <br></br>
        Discord: <p style={{display: 'inline', color: '#5663F7'}}>Jeff Bozos#4701</p>
      </p>
    </div>

    <div className="container" style={{ backgroundColor: '#282c34', maxWidth: '100%', margin:0 }}>
      <h2 style = {{display: 'flex', color: 'azure', justifyContent: 'center', alignItems: 'center'}}>
        Copyright © 2022: Jeffrey Zang
      </h2>
    </div>

    </>
  );
}

export default App;
