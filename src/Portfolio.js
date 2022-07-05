import Header from './components/Header'
import Header2 from './components/Header2'
import Title from './components/Title'
import React from 'react';
import root from './index';
import ReactDOM from 'react-dom/client';
import App from './App';
import Button from './components/Button';
// import Button from './components/Button'

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

function Portfolio() {

  // const d = new Date()
  // var myage = d.getFullYear() - 2007
  // if (myage == 18) {myage = ''}

  return (
    <>
    <div className="container" style={{ backgroundColor: '#282c34', maxWidth: '100%', margin:0, padding:'40px' }}>
      {/* <h1 style = {headingStyle} className='header'> Hello, I'm Jeffrey Zang </h1> */}
      <h1 style = {{color: 'azure', alignItems: 'center', fontSize: '100px', display: 'flex', justifyContent: 'center'}}>
        Portfolio
      </h1>
      <Header title="My coding projects, events, contests, and experiences" colour={heading2Style.color}/>
      {/* <p style = {{display: 'flex', color: 'white', fontSize: '18px', justifyContent: 'center', alignItems: 'center'}}>
        I am a 
      </p> */}
      {/* <h2 style={{ color: 'greenyellow' }}>e</h2> */}
    </div>

    <div className="container" style={{ backgroundColor: '#282c34'}}>
      <h1 style = {{color: 'azure', alignItems: 'center', fontSize: '50px', display: 'flex', justifyContent: 'center'}}>
        Meleti
      </h1>
      <h1 style = {{color: 'cornflowerblue', alignItems: 'center', fontSize: '30px', display: 'flex', justifyContent: 'center'}}>
        Submission for JAMHacks 6
      </h1>
      <p style = {{color: 'azure', fontSize: '18px'}}>
        The all-in-one productivity discord bot, jam-packed with features (pun intented). Meleti has a study timer, scientifically proven to produce best results, to-do lists to keep track of all your crucial tasks, recurring reminders for wordle fans that want to keep their streak, and much more! Best of all, Meleti features a reward system featuring famous artifacts from history to encourage you to keep studying.
      </p>
    </div>

    <div className='container' style={{ backgroundColor: '#282c34', maxWidth: '20%', display: 'flex', justifyContent: 'center' }}>
      <Button style = {{display: 'flex', justifyItems: 'center', justifyContent: 'center'}} text = 'Back to Home' clicked={
          () => {
            root.render (
              <React.StrictMode>
                <App />
              </React.StrictMode>
            )          
          }
        }
      />
    </div>
    </>
  );
}

export default Portfolio;
