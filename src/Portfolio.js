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
import galactijumplogo from './logos/galactijumplogo.png'
import logo from './logos/logo.png'
import policeLogo from './logos/police-car.png'
// import Button from './components/Button'

import galactijump1 from './screenshots/galactijump1.png'
import galactijump0 from './screenshots/galactijump0.png'

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

  // let buttons = []
  // links.forEach((element) => {
  //   buttons.append(
  //   <Button></Button>
  //   )
  // });

const NewButton = ({text, colour, icon, link}) => {
  return (
    <Button style = {{alignContent: 'left', display: 'flex'}} text = {`${text}\u00A0`} colour = {colour} icon = {icon} clicked = {
      () => {window.open(link)}
    }></Button>
  )
}

const NewItem = ({title, logo, header, description, languagestuff}) => {

  return (
    <div className="container" style={{ backgroundColor: '#282c34'}}>
      <h1 style = {{color: 'azure', alignItems: 'center', fontSize: '50px', display: 'flex', justifyContent: 'center'}}>
        {`${title}\u00A0`}
        <img src={logo} alt="MeletiLogo" width = '80' height = '80' style={{display: 'flex', justifyContent: "center"}} align = 'right'></img>
      </h1>
      <h1 style = {{color: 'cornflowerblue', alignItems: 'center', fontSize: '30px', display: 'flex', justifyContent: 'center'}}>
        {header}
      </h1>
      <p style = {{color: 'azure', fontSize: '18px', marginTop: '10px',}}>
        {description}      
      </p>

      {languagestuff}

    </div>
)

}

function Portfolio() {

  return (
    <>
    <div className="container" style={{ backgroundColor: '#282c34', maxWidth: '100%', margin:0, padding:'40px' }}>
      {/* <h1 style = {heading2Style} className='header'> Hello, I'm Jeffrey Zang </h1> */}
      <h1 style = {{color: 'azure', alignItems: 'center', fontSize: '100px', display: 'flex', justifyContent: 'center'}}>
        Portfolio
      </h1>
      <Header title="My coding projects, events, contests, and experiences" colour={heading2Style.color}/>
      {/* <p style = {{display: 'flex', color: 'white', fontSize: '18px', justifyContent: 'center', alignItems: 'center'}}>
        I am a 
      </p> */}
      {/* <h2 style={{ color: 'greenyellow' }}>e</h2> */}
    </div>

    {/* <NewItem title = 'Meleti' logo = {meletiLogo} header = 'Submission for JAMHacks 6' 
    description = {"The all-in-one productivity discord bot, jam-packed with features (pun intented). Meleti has a study timer, scientifically proven to produce best results, to-do lists to keep track of all your crucial tasks, recurring reminders for wordle fans that want to keep their streak, and much more! Best of all, Meleti features a reward system featuring famous artifacts from history to encourage you to keep studying. Daniel Zhang, Li Feng Yin, Jashanpreet Singh, and Jeffrey Zang submission for JAMHacks 6, Waterloo's biggest high school hackathon."}
    
    /> */}

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
        <i class={'bi bi-hexagon color: #F1E05A'} style={{ fontSize: 20 }}></i>
        {'\u00A0JavaScript, discord.js'}
        <br></br>
      </p>
      <p style = {{color: 'lime', fontSize: '18px', marginTop: '10px', fontSize: '22px', whiteSpace: 'nowrap'}}>
        <i class={'bi bi-check-circle-fill color: lime'} style={{ fontSize: 20 }}></i>
        {'\u00A0Status: complete'}
      </p>
    </div>
    
    <div className="container" style={{ backgroundColor: '#282c34'}}>
      <h1 style = {{color: 'azure', alignItems: 'center', fontSize: '50px', display: 'flex', justifyContent: 'center'}}>
        {'Farmout\u00A0'}
        <img src={farmoutLogo} alt="farmoutlogo" width = '80' height = '80' style={{display: 'flex', justifyContent: "center", borderRadius: '15px'}} align = 'right'></img>
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
        <i class={'bi bi-circle color: #3572A5'} style={{ fontSize: 18 }}></i>
        {'\u00A0Python, discord.py'} 
      </p>
      <p style = {{color: 'yellow', fontSize: '18px', marginTop: '10px', fontSize: '22px'}}>
        <i class={'bi bi-check-circle-fill color: yellow'} style={{ fontSize: 20 }}></i>
        {'\u00A0Status: complete, 50% working'}
      </p>
    </div>

    <div className="container" style={{ backgroundColor: '#282c34'}}>
      <h1 style = {{color: 'azure', alignItems: 'center', fontSize: '50px', display: 'flex', justifyContent: 'center'}}>
        {'galactijump\u00A0'}
        <img src={galactijumplogo} alt="GalactijumpLogo" width = '80' height = '80' style={{display: 'flex', justifyContent: "center", borderRadius: '15px'}} align = 'right'></img>
      </h1>
      <h1 style = {{color: 'cornflowerblue', alignItems: 'center', fontSize: '30px', display: 'flex', justifyContent: 'center'}}>
        Unity3D
      </h1>
      <p style = {{color: 'azure', fontSize: '18px', marginTop: '10px',}}>
        galactijump (no capital) is a low poly space game about harvesting asteroid minerals. It features a physics engine, models created by myself, and animations. The name galactijump was inspired by GalactiGolf, the winning entry of JAMHacks 6. 
        <br></br>
        <br></br>
        Created by Jeffrey Zang.
        <br></br>
      </p>
      <Button style = {{alignContent: 'left', display: 'block'}} text = {'Source\u00A0'} colour = 'black' icon = {'bi bi-github'} clicked={
        () => {window.open('https://github.com/jeffrey-zang/galactijump')}
        }>
      </Button>
      <p style = {{color: '#178600', fontSize: '18px', marginTop: '10px', fontSize: '22px', display: 'block'}}>
        <i class={'bi bi-slash-circle color: #178600'} style={{ fontSize: 18 }}></i>
        {'\u00A0C#, Blender, Unity3D, ShaderLab'}
      </p>
      <p style = {{color: 'yellow', fontSize: '18px', marginTop: '10px', fontSize: '22px', display: 'block'}}>
        <i class={'bi bi-clock-history color: yellow'} style={{ fontSize: 20 }}></i>
        {'\u00A0Status: in progress, estimated September 2022'}
      </p>
    </div>

    <div className="container" style={{ backgroundColor: '#282c34'}}>
      <h1 style = {{color: 'azure', alignItems: 'center', fontSize: '50px', display: 'flex', justifyContent: 'center'}}>
        {'jeffrey-zang.github.io\u00A0'}
      </h1>
      <h1 style = {{color: 'cornflowerblue', alignItems: 'center', fontSize: '30px', display: 'flex', justifyContent: 'center'}}>
        This website, developer portfolio
      </h1>
      <p style = {{color: 'azure', fontSize: '18px', marginTop: '10px',}}>
        The website that you're looking at right now. It contains my developer portfolio, link to my resume, and ways to contact me.
        <br></br>
        <br></br>
        Created by Jeffrey Zang.
      </p>
      <Button style = {{alignContent: 'left', display: 'flex'}} text = {'Source\u00A0'} colour = 'black' icon = {'bi bi-github'} clicked={
        () => {window.open('https://github.com/jeffrey-zang/jeffrey-zang.github.io')}
        }>
      </Button>
      <Button style = {{alignContent: 'left', display: 'flex'}} text = {'Link\u00A0'} colour = 'steelblue' icon = {'bi bi-link-45deg'} clicked={
        () => {window.open('https://jeffrey-zang.github.io/')}
        }>
      </Button>
      <p style = {{color: '#F1E05A', fontSize: '18px', marginTop: '10px', fontSize: '22px'}}>
        <i class={'bi bi-hexagon color: #178600'} style={{ fontSize: 18 }}></i>
        {'\u00A0JavaScript, HTML/CSS, React'}
      </p>
      <p style = {{color: 'lime', fontSize: '18px', marginTop: '10px', fontSize: '22px'}}>
        <i class={'bi bi-check-circle color: lime'} style={{ fontSize: 20 }}></i>
        {'\u00A0Status: complete, will recieve updates'}
      </p>
    </div>

    <div className="container" style={{ backgroundColor: '#282c34'}}>
      <h1 style = {{color: 'azure', alignItems: 'center', fontSize: '50px', display: 'flex', justifyContent: 'center'}}>
        {'Whack-A-Mole\u00A0'}
      </h1>
      <h1 style = {{color: 'cornflowerblue', alignItems: 'center', fontSize: '30px', display: 'flex', justifyContent: 'center'}}>
        Unity3D
      </h1>
      <p style = {{color: 'azure', fontSize: '18px', marginTop: '10px',}}>
        The most realistic mole whacking experience. My rendition of the classic arcade game Whack-A-Mole.
        <br></br>
        <br></br>
        Created by Jeffrey Zang.
      </p>
      <Button style = {{alignContent: 'left', display: 'flex'}} text = {'Source\u00A0'} colour = 'black' icon = {'bi bi-github'} clicked={
        () => {window.open('https://github.com/jeffrey-zang/whack-a-mole')}
        }>
      </Button>
      <p style = {{color: '#178600', fontSize: '18px', marginTop: '10px', fontSize: '22px', display: 'block'}}>
        <i class={'bi bi-slash-circle color: #178600'} style={{ fontSize: 18 }}></i>
        {'\u00A0C#, Blender, Unity3D, ShaderLab'}
      </p>
      <p style = {{color: 'yellow', fontSize: '18px', marginTop: '10px', fontSize: '22px', display: 'block'}}>
        <i class={'bi bi-clock-history color: yellow'} style={{ fontSize: 20 }}></i>
        {'\u00A0Status: in progress, estimated September 2022'}
      </p>
    </div>

    <div className="container" style={{ backgroundColor: '#282c34'}}>
      <h1 style = {{color: 'azure', alignItems: 'center', fontSize: '50px', display: 'flex', justifyContent: 'center'}}>
        {'Police Pursuit\u00A0'}
        <img src={policeLogo} alt="policelogo" width = '80' height = '80' style={{display: 'flex', justifyContent: "center", borderRadius: '15px'}} align = 'right'></img>
      </h1>
      <h1 style = {{color: 'cornflowerblue', alignItems: 'center', fontSize: '30px', display: 'flex', justifyContent: 'center'}}>
        Submission for Pyweek 31
      </h1>
      <p style = {{color: 'azure', fontSize: '18px', marginTop: '10px',}}>
        Police Pursuit is a simple, 2D game about escaping from a police car. You will dodge obstacles like other cars, barriers, and even bathtubs as you cruise down the highway. The music and images are sourced in the github repo.
        <br></br><br></br>
        How to Play:
        <br></br>
        <i class={'bi bi-dot'} style={{ fontSize: 18 }}></i>
        Locate the "main.py" file and double click it.
        <br></br>
        <i class={'bi bi-dot'} style={{ fontSize: 18 }}></i>
        Use WASD or arrow keys to control your car
        <br></br>
        <i class={'bi bi-dot'} style={{ fontSize: 18 }}></i>
        Space to pause

        <br></br>
        <br></br>
        Created by Jeffrey Zang and Daniel Zhang.
      </p>
      <Button style = {{alignContent: 'left', display: 'flex'}} text = {'Source\u00A0'} colour = 'black' icon = {'bi bi-github'} clicked={
        () => {window.open('https://github.com/jeffrey-zang/Police-Pursuit')}
        }>
      </Button>
      <Button style = {{alignContent: 'left', display: 'flex'}} text = {'Repl\u00A0'} colour = '#1C2333' icon = {'bi bi-code'} clicked={
        () => {window.open('https://replit.com/@DanielZhang3/Pyweek-thing-2?v=1')}
        }>
      </Button>
      <Button style = {{alignContent: 'left', display: 'flex'}} text = {'Pyweek Link\u00A0'} colour = 'steelblue' icon = {'bi bi-link-45deg'} clicked={
        () => {window.open('https://pyweek.org/e/nah/')}
        }>
      </Button>
      <p style = {{color: '#3572A5', fontSize: '18px', marginTop: '10px', fontSize: '22px'}}>
        <i class={'bi bi-circle color: #178600'} style={{ fontSize: 18 }}></i>
        {'\u00A0Python, Pygame'}
      </p>
      <p style = {{color: 'lime', fontSize: '18px', marginTop: '10px', fontSize: '22px'}}>
        <i class={'bi bi-check-circle color: lime'} style={{ fontSize: 20 }}></i>
        {'\u00A0Status: complete'}
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
      <h2 style = {{display: 'flex', color: 'azure', justifyContent: 'space-between'}}>
        Copyright © 2022: Jeffrey Zang
        <button className = 'btn' onClick = {
          () => {window.open('https://github.com/jeffrey-zang/jeffrey-zang.github.io')}
        }>
          {'Source '}
          <i class="bi bi-github"></i>
        </button>
      </h2>
    </div>

    </>
  );
}

export default Portfolio;
