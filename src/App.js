import meletilogo from './logos/meletipfp.png'
import farmoutlogo from './logos/farmouticon.png'
import logo from './logos/logo.png'
import galactijump from './logos/galactijumplogo.png'
import policecar from './logos/police-car.png'
import happymathlogo from './logos/happymathlogo.png'
import simpleread from './logos/simplereadlogo.png'
import molelogo from './logos/molelogo.png'

import React from 'react'
import AOS from 'aos'

import PortfolioItem from './PortfolioItem'

const PortfolioItems = {

  happymath: {
    title: 'Happy Math Education',
    description: 'Website for Happy Math Education',
    logo: happymathlogo,
    fontsize: '3.2vw'
  },

  simpleread: {
    title: 'SimpleRead',
    description: 'A simple, minimalist book reviewing website',
    logo: simpleread,
    fontsize: '3.3vw'
  },

  meleti: {
    title: 'Meleti',
    description: 'An all-in-one productivity discord bot',
    logo: meletilogo,
    fontsize: ''
  },
  
  farmout: {
    title: 'Farmout',
    description: 'Discord bot about farming crops and animals',
    logo: farmoutlogo,
    fontsize: '4.4vw'
  },

  whackamole: {
    title: 'Whack-A-Mole',
    description: 'The most realistic mole whacking experience',
    logo: molelogo,
    fontsize: '2.5vw'
  },

  galactijump: {
    title: 'galactijump',
    description: 'Low poly space game about asteroid minerals',
    logo: galactijump,
    fontsize: '2.6vw'
  },

  thiswebsite: {
    title: 'This Website',
    description: 'The website that you\'re looking at right now',
    logo: logo,
    fontsize: '2.6vw'
  },

  policepursuit: {
    title: 'Police Pursuit',
    description: 'A simple 2D game about escaping from a police car',
    logo: policecar,
    fontsize: '3vw'
  }

}

let PortfolioItemList = []

for (let item in PortfolioItems) {

  PortfolioItemList.push(
    <PortfolioItem title = {PortfolioItems[item].title} description = {PortfolioItems[item].description} logo = {PortfolioItems[item].logo} fontsize = {PortfolioItems[item].fontsize}/>
  )
}

const App = () => {
  AOS.init();
  
  return (
    <>

    <div className = 'container'>
      <div className = 'left' style = {{height: '50%'}}>
        
        <i className="bi bi-code" style = {{color: '#E7F6F2', fontSize: '27px'}}></i>
        <h1 style = {{marginTop: '-10px'}}>Hello, I'm</h1>
        <h1 style = {{color: '#a5ff90', fontWeight: '900', fontSize: '80px', wordWrap: 'normal'}}>Jeffrey Zang</h1>
        <h1 style = {{color: '#193448'}}>05/09/07</h1>

        <div style = {{lineHeight: '50px'}}>
        <h1 style = {{marginTop: '2vw', fontWeight: 300}}>
          <i className = 'bi bi-github'></i> {'GitHub: '}
          <a href = 'https://github.com/jeffrey-zang' rel = 'noreferrer' target = '_blank' style = {{fontWeight: 'bold'}}>jeffrey-zang</a>
        </h1>

        <h1 style = {{fontWeight: 'lighter'}}>
          <i className = 'bi bi-discord'></i> {'Discord: '}
          <h1 style = {{fontWeight: 'bold', display: 'inline'}}>Jeff Bozos#4701</h1>
        </h1>

        <h1 style = {{fontWeight: 'lighter'}}>
          <i className = 'bi bi-stack-overflow'></i> {'Stack Overflow: '}
          <a style = {{fontWeight: 'bold'}} href = 'https://stackoverflow.com/users/14683783/larg-ank' rel = 'noreferrer' target = '_blank'>LargAnk</a>
        </h1>

        <h1 style = {{fontWeight: 'lighter'}}>
          <i className = 'bi bi-envelope'></i> {'Email: '}
          <a href = "mailto:jeffrey-zang@proton.me" style = {{fontWeight: 'bold'}}>jeffrey-zang@protonmail.me</a>
        </h1>

        </div>

        <i className="bi bi-code-slash" style = {{color: '#E7F6F2', fontSize: '27px'}}></i>

      </div>

      <div className = 'right'>

        <h1 style = {{color: '#a5ff90', fontWeight: '900', fontSize: '60px', wordWrap: 'normal'}}>Portfolio</h1>
        <h1 style = {{lineHeight: '40px', marginTop: '20px', fontSize: '30px'}}>
          {'> My projects, creations, and experiences'}
        </h1>
        <button className = 'btn'>
          <i className="bi bi-folder2-open"></i>
          {' View Portfolio'}
        </button>
        
        <h1 style = {{color: '#a5ff90', fontWeight: '900', fontSize: '60px', wordWrap: 'normal'}}>Resume</h1>
        <h1 style = {{lineHeight: '40px', marginTop: '20px', fontSize: '30px'}}>
          {'> My achievements, extracurriculars, work and volunteering experience'}
        </h1>
        <button className = 'btn' onClick = {
          () => {
            window.open('https://docs.google.com/document/d/1b6urcHHJYErsZNCe6qV3wdkqDbrzLin93wucKvwnnzc/view')
          }
        }>
          <i className="bi bi-briefcase"></i>
          {' View Resume'}
        </button>

      </div>
    </div>
    
    <div data-aos = "fade-down" data-aos-duration = "2000" >
      <h1 style = {{color: '#a5ff90', fontWeight: '900', fontSize: '80px', textAlign:'center', marginTop: '100px'}}>Portfolio</h1>
      <h1 style = {{textAlign: 'center', marginTop: '0px', fontSize: '30px'}}>
        A collection of my programming projects, creations, and experiences
      </h1>
    </div>
    
    <div data-aos = 'fade-right' data-aos-duration = "2000" class="row">

      {PortfolioItemList}
    
    </div>

    <div id = 'overlay' className='overlay' onClick = {
      () => {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('portfoliooverlay').style.display = 'none';
      }
    }></div>

    <footer>
      <p style = {{marginLeft: '5px'}}>
        Copyright © 2022: Jeffrey Zang
      </p>
      <p style = {{cursor: 'pointer'}} onClick = {
        () => {
          window.open('https://github.com/jeffrey-zang/jeffrey-zang.github.io')
        }
      }>
        {'Source '}
        <i class = 'bi bi-github' style = {{fontSize: '20px'}}></i>
      </p>
    </footer>

    </>
  )
}

export default App