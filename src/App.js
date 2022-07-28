
import React from 'react'
import AOS from 'aos'

import PortfolioItem from './PortfolioItem'
import PortfolioOverlay from './PortfolioOverlay'

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import * as settings from "./particles.json";

import PortfolioItems from './PortfolioItems.js'

let PortfolioItemList = []
export let PortfolioItemNames = []

for (let item in PortfolioItems) {

  PortfolioItemList.push(
    <PortfolioItem title = {PortfolioItems[item].title} description = {PortfolioItems[item].description} logo = {PortfolioItems[item].logo} fontsize = {PortfolioItems[item].fontsize}/>
  )
  PortfolioItemNames.push(
    PortfolioItems[item].title
  )
}

let PortfolioOverlayList = []

for (let item in PortfolioItems) {
  PortfolioOverlayList.push(
    <PortfolioOverlay 
    title = {PortfolioItems[item].title} 
    longdesc = {PortfolioItems[item].overlaydesc} 
    description = {PortfolioItems[item].description} 
    logo = {PortfolioItems[item].logo}
    languages = {PortfolioItems[item].languages}
    status = {PortfolioItems[item].status}
    statuscolor = {PortfolioItems[item].statuscolor}
    buttons = {PortfolioItems[item].buttons}
    />
  )
}

const App = () => {

  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  
  AOS.init();

  window.onscroll = function() {
    document.getElementById('overlay').style.display = 'none';
    for (let item in PortfolioItemNames) {
      if (item.offsetParent == null) {
      document.getElementById(PortfolioItemNames[item]).style.display = 'none'
      }
    }
  }
  
  return (
    <>

    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={settings.default}
      height = '100px'
      >
    </Particles>

    <div className = 'container'>
      <div className = 'left' style = {{height: '50%'}}>
        
        <i className="bi bi-code" style = {{color: '#E7F6F2', fontSize: '27px'}}></i>
        <h1 style = {{marginTop: '-10px'}}>Hello, I'm</h1>
        <h1 style = {{color: '#a5ff90', fontWeight: '900', fontSize: 'min(60px, 15vw)', wordWrap: 'normal'}}>Jeffrey Zang</h1>
        <h1 style = {{color: '#193448'}}>05/09/07</h1>

        <div style = {{lineHeight: '50px'}}>
        <h1 style = {{marginTop: '2vw', fontWeight: 300}}>
          <i className = 'bi bi-github'></i> {'GitHub: '}
          <a href = 'https://github.com/jeffrey-zang' rel = 'noreferrer' target = '_blank' style = {{fontWeight: 'bold'}}>jeffrey-zang</a>
        </h1>

        <h1 style = {{fontWeight: 'lighter'}}>
          <i className = 'bi bi-stack-overflow'></i> {'Stack Overflow: '}
          <a style = {{fontWeight: 'bold'}} href = 'https://stackoverflow.com/users/14683783/larg-ank' rel = 'noreferrer' target = '_blank'>LargAnk</a>
        </h1>

        <h1 style = {{fontWeight: 'lighter'}}>
          <i className = 'bi bi-envelope'></i> {'Email: '}
          <a href = "mailto:jeffrey-zang@proton.me" style = {{fontWeight: 'bold', overflow: 'hidden', whiteSpace: 'break-word !important'}}>jeffrey-zang@protonmail.me</a>
        </h1>

        </div>

        <i className="bi bi-code-slash" style = {{color: '#E7F6F2', fontSize: '27px'}}></i>

      </div>

      <div className = 'right'>

        <h1 style = {{color: '#a5ff90', fontWeight: '900', fontSize: 'min(60px, 15vw)', wordWrap: 'normal'}}>Portfolio</h1>
        <h1 style = {{lineHeight: '40px', marginTop: '20px', fontSize: '30px', overflowX: 'hidden !important'}}>
          {'> My projects, creations, and experiences'}
        </h1>
        <button className = 'btn' onClick = {
          () => {
            document.getElementById('portfoliotitle').scrollIntoView({ behavior: 'smooth', top: 300})
          }
        }>
          <i className="bi bi-folder2-open"></i>
          {' View Portfolio'}
        </button>
        
        <h1 style = {{color: '#a5ff90', fontWeight: '900', fontSize: '60px', wordWrap: 'normal'}}>Resume</h1>
        <h1 style = {{lineHeight: '40px', marginTop: '20px', fontSize: '30px', overflow: 'auto'}}>
          {'> My achievements, extracurriculars, work and volunteering'}
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

    <div data-aos = 'fade-down' data-aos-duration = "800">
      <h1 id = 'portfoliotitle' style = {{color: '#a5ff90', fontWeight: '900', fontSize: 'min(80px, 10vw)', textAlign:'center', marginTop: '50px'}}>Portfolio</h1>
      <h1 style = {{textAlign: 'center', marginTop: '0px', fontSize: '30px'}}>
        A collection of my programming projects, creations, and experiences
      </h1>
    </div>

    <div data-aos = 'fade-right' data-aos-duration = "800" class="row">
      {PortfolioItemList}
      {PortfolioOverlayList}
    </div>

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