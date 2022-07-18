import React from 'react'

const App = () => {
  
  return (
    <>

    <div style = {{height: '100%'}}>
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

      <div className = 'right' style = {{marginTop: '15vh'}}>

        <h1 style = {{color: '#a5ff90', fontWeight: '900', fontSize: '60px', wordWrap: 'normal'}}>Portfolio</h1>
        <h1 style = {{lineHeight: '40px', marginTop: '20px', fontSize: '30px'}}>
          > My projects, creations, and experiences
        </h1>
        <button className = 'btn'>
          View Portfolio
        </button>
        
        <h1 style = {{color: '#a5ff90', fontWeight: '900', fontSize: '60px', wordWrap: 'normal'}}>Resume</h1>
        <h1 style = {{lineHeight: '40px', marginTop: '20px', fontSize: '30px'}}>
          > My achievements, extracurriculars, work and volunteering experience</h1>
      </div>
    </div>

    </>
  )
}

export default App