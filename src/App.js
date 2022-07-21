import meletilogo from './logos/meletipfp.png'
import farmoutlogo from './logos/farmouticon.png'
import logo from './logos/logo.png'
import galactijump from './logos/galactijumplogo.png'

import React from 'react'
import AOS from 'aos'

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
          > My projects, creations, and experiences
        </h1>
        <button className = 'btn'>
          <i className="bi bi-folder2-open"></i>
          {' View Portfolio'}
        </button>
        
        <h1 style = {{color: '#a5ff90', fontWeight: '900', fontSize: '60px', wordWrap: 'normal'}}>Resume</h1>
        <h1 style = {{lineHeight: '40px', marginTop: '20px', fontSize: '30px'}}>
          > My achievements, extracurriculars, work and volunteering experience
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

      <div class="column">
        <div class="content">
          <img src = {meletilogo} alt = 'meletilogo' width = '100%' style = {{border: '50px solid #395B64', marginTop: '-10px'}}></img>
          <h1 className = 'portfolioheader'>Meleti</h1>
          <h1 className = 'portfoliodesc'>All-in-one productivity discord bot</h1>
        </div>
      </div>
      <div class="column">
        <div class="content">
          <img src = {farmoutlogo} alt = 'meletilogo' width = '100%' style = {{border: '50px solid #395B64', marginTop: '-10px'}}></img>
          <h1 className = 'portfolioheader' style = {{fontSize: '4.5vw'}}>Farmout</h1>
          <h1 className = 'portfoliodesc'>Discord about about farming crops and animals</h1>
        </div>
      </div>
      <div class="column">
        <div class="content">
          <img src = {logo} alt = 'meletilogo' width = '100%' style = {{border: '50px solid #395B64', marginTop: '-10px'}}></img>
          <h1 className = 'portfolioheader' style = {{fontSize: '2.7vw'}}>This Website</h1>
          <h1 className = 'portfoliodesc'>All-in-one productivity discord bot</h1>
        </div>
      </div>
      <div class="column">
        <div class="content">
          <img src = {galactijump} alt = 'meletilogo' width = '100%' style = {{border: '50px solid #395B64', marginTop: '-10px'}}></img>
          <h1 className = 'portfolioheader' style = {{fontSize: '3vw'}}>galactijump</h1>
          <h1 className = 'portfoliodesc'>All-in-one productivity discord bot</h1>
        </div>
      </div>
    
    </div>


    <footer>lmao</footer>

    </>
  )
}

export default App