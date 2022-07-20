import React from 'react'
import AOS from 'aos'
AOS.init();

const App = () => {
  
  return (
    <>

    <div className = 'container'>
      <div className = 'left' >
        
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

    <h1 style = {{color: '#a5ff90', fontWeight: '900', fontSize: '80px', textAlign:'center', marginTop: ''}}>Portfolio</h1>

    </>
  )
}

export default App