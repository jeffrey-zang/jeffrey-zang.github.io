import React from 'react'

const App = () => {
  return (
    <>

    <div style = {{height: '100%'}}>
      <div className = 'container' style = {{ 
        height: '50vh',
        float: 'left',
        marginLeft: '5%', 
        marginTop: '5%', 
        padding: '10px 20px', 
        borderRadius: '25px 0px 25px 0px' 
      }}>
        <h1>Hello, I'm</h1>
        <h1 style = {{color: '#fff', fontSize: '70px', marginTop: '2vw', wordWrap: 'normal'}}>Jeffrey Zang</h1>
      </div>

      <div className = 'container' style = {{ 
        float: 'right',
        width: '40%', 
        marginRight: '5%',
        height: '50vh', 
        marginTop: '5%', 
        padding: '10px 20px', 
        borderRadius: '25px 0px 25px 0px' 
      }}>
        <h1>Hello, I'm</h1>
        <h1 style = {{color: '#fff', fontSize: '70px', marginTop: '2vw', wordWrap: 'normal'}}>Jeffrey Zang</h1>
      </div>
    </div>

    </>
  )
}

export default App