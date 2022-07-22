import React from 'react'
import { PortfolioItemNames } from './App';

const PortfolioItem = ({title, description, logo, fontsize}) => {
  return (
    <>
    <div class="column">
      <div class="content" onMouseDown = {
        () => {
          document.getElementById('overlay').style.display = 'block';
          document.getElementById(title).style.display = 'block';
        }
      }>
        <img src = {logo} alt = 'logo' width = '100%' style = {{border: '30px solid #395B64', borderRadius: '60px'}}></img>
        <h1 className = 'portfolioheader' style = {{fontSize: fontsize, marginTop: '-21px'}}>{title}</h1>
        <h1 className = 'portfoliodesc' >{description}</h1>
      </div>
      <div id = 'overlay' className='overlay' onClick = {
        () => {
          document.getElementById('overlay').style.display = 'none';
          for (let item in PortfolioItemNames) {
            document.getElementById(PortfolioItemNames[item]).style.display = 'none'
          }
        }
      }></div>
    </div>

    </>
  )
}

export default PortfolioItem