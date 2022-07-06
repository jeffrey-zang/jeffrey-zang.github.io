import Header from './components/Header'
import Header2 from './components/Header2'
import Title from './components/Title'
import React from 'react';
import root from './index';
import ReactDOM from 'react-dom/client';
import App from './App';
import Button from './components/Button';
import meletiLogo from './logos/meletipfp.png'
import farmoutLogo from './logos/farmouticon.png'
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
        {'Meleti\u00A0'}
        <img src={meletiLogo} alt="MeletiLogo" width = '80' height = '80' style={{display: 'flex', justifyContent: "center"}} align = 'right'></img>
      </h1>
      <h1 style = {{color: 'cornflowerblue', alignItems: 'center', fontSize: '30px', display: 'flex', justifyContent: 'center'}}>
        Submission for JAMHacks 6
      </h1>
      <p style = {{color: 'azure', fontSize: '18px', marginTop: '10px',}}>
        The all-in-one productivity discord bot, jam-packed with features (pun intented). Meleti has a study timer, scientifically proven to produce best results, to-do lists to keep track of all your crucial tasks, recurring reminders for wordle fans that want to keep their streak, and much more! Best of all, Meleti features a reward system featuring famous artifacts from history to encourage you to keep studying.
        <br></br>
        <br></br>
        Daniel Zhang, Li Feng Yin, Jashanpreet Singh, and Jeffrey Zang submission for JAMHacks 6, Waterloo's biggest high school hackathon.
      </p>
      <Button style = {{alignContent: 'left', display: 'flex'}} text = {'Source\u00A0'} colour = 'black' icon = {'bi bi-github'} clicked={
        () => {window.open('https://github.com/Yourself1011/meleti')}
        }>
      </Button>
      <Button style = {{alignContent: 'left', display: 'flex'}} text = {'Devpost\u00A0'} colour = '#003E54' clicked={
        () => {window.open('https://devpost.com/software/meleti')}
        }>
      </Button>
      <Button style = {{alignContent: 'left', display: 'flex'}} text = {'Discord Invite\u00A0'} colour = '#5663F7' icon = {'bi bi-discord'} clicked={
        () => {window.open('https://discord.com/invite/wyPGW6Asbx')}
        }>
      </Button>
      <Button style = {{alignContent: 'left', display: 'flex'}} text = {'Repl\u00A0'} colour = '#1C2333' icon = {'bi bi-code'} clicked={
        () => {window.open('https://replit.com/@DanielZhang3/Meleti-1?v=1')}
        }>
      </Button>
      <p style = {{color: '#F1E05A', fontSize: '18px', marginTop: '10px', fontSize: '22px'}}>
        JavaScript
      </p>
    </div>
    
    <div className="container" style={{ backgroundColor: '#282c34'}}>
      <h1 style = {{color: 'azure', alignItems: 'center', fontSize: '50px', display: 'flex', justifyContent: 'center'}}>
        {'Farmout\u00A0'}
        <img src={farmoutLogo} alt="MeletiLogo" width = '80' height = '80' style={{display: 'flex', justifyContent: "center", borderRadius: '15px'}} align = 'right'></img>
      </h1>
      <h1 style = {{color: 'cornflowerblue', alignItems: 'center', fontSize: '30px', display: 'flex', justifyContent: 'center'}}>
        Discord Bot
      </h1>
      <p style = {{color: 'azure', fontSize: '18px', marginTop: '10px',}}>
        Farmout is a Currency/Fun bot where you own and take care of a farm. There are tons of different animals that you can take care of, all giving you unique items like wool and milk. You have to plant and water seeds for crops, which you can sell and trade with the marketplace for other cool items. We’ve only recently added 2 new revolutionary updates: contracts and locations. These make the game feel more realistic, and make it feel like you are actually running a farm. With weekly updates, active devs, and an awesome community, there’s no reason not to try Farmout!
        <br></br>
        <br></br>
        Created by Daniel Zhang and Jeffrey Zang.
      </p>
      <Button style = {{alignContent: 'left', display: 'flex'}} text = {'Source\u00A0'} colour = 'black' icon = {'bi bi-github'} clicked={
        () => {window.open('https://github.com/Yourself1011/farmoutbot')}
        }>
      </Button>
      <Button style = {{alignContent: 'left', display: 'flex'}} text = {'Discord Invite\u00A0'} colour = '#5663F7' icon = {'bi bi-discord'} clicked={
        () => {window.open('https://discord.com/invite/wyPGW6Ahttps://discord.com/oauth2/authorize?client_id=795319933314662452&permissions=67628225&scope=botsbx')}
        }>
      </Button>
      <Button style = {{alignContent: 'left', display: 'flex'}} text = {'Repl\u00A0'} colour = '#1C2333' icon = {'bi bi-code'} clicked={
        () => {window.open('https://replit.com/@LargAnk/farmoutbot?v=1')}
        }>
      </Button>
      <p style = {{color: '#3572A5', fontSize: '18px', marginTop: '10px', fontSize: '22px'}}>
        Python 
      </p>
    </div>

    <div className='container' style={{ backgroundColor: '#282c34', maxWidth: '18%', display: 'flex', justifyContent: 'center', }}>
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
    
    <div className="container" style={{ backgroundColor: '#282c34', maxWidth: '100%', margin:0 }}>
      <h2 style = {{display: 'flex', color: 'azure', justifyContent: 'center', alignItems: 'center'}}>
        Copyright © 2022: Jeffrey Zang
      </h2>
    </div>

    </>
  );
}

export default Portfolio;
