import React from 'react'

const PortfolioOverlay = ({title, logo, description}) => {
    return (
    <div id = {title} className = 'portfoliooverlay'>
        <img src = {logo} alt = 'logo' width = '35%' style = {{border: '30px solid #395B64', borderRadius: '60px'}}></img>
        <h1>{title}</h1><h1>{description}</h1>
    </div>
  )
}

export default PortfolioOverlay