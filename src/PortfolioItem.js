import React from 'react'

const PortfolioItem = ({title, description, logo, fontsize}) => {
  return (
    <>
    <div class="column">
      <div class="content" onMouseDown = {
        () => {
          document.getElementById('overlay').style.display = 'block';
          document.getElementById('portfoliooverlay').style.display = 'block';
        }
      }>
        <img  src = {logo} alt = 'happymath' width = '100%' style = {{border: '30px solid #395B64', borderRadius: '60px'}}></img>
        <h1 className = 'portfolioheader' style = {{fontSize: fontsize, marginTop: '-21px'}}>{title}</h1>
        <h1 className = 'portfoliodesc' >{description}</h1>
      </div>
    </div>

    <div id = 'portfoliooverlay' className = 'portfoliooverlay'></div>
    </>
  )
}

export default PortfolioItem