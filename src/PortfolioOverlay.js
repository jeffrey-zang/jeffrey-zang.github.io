import React from 'react'

const PortfolioOverlay = ({title, logo, description, longdesc}) => {
    return (
    <div id = {title} className = 'portfoliooverlay'>
        <div style = {{display: 'flex', justifyContent: 'space-between'}}>
            <div style = {{width: '40%'}}>
                <img src = {logo} alt = 'logo' width = '65%' style = {{marginLeft: '17.5%', border: ' 30px solid #395B64', borderRadius: '60px'}}></img>
                <h1 className = 'portfolioheader' style = {{textAlign: 'center', fontSize: '4vw'}}>{title}</h1>
                <h1 className = 'portfoliodesc' style = {{marginLeft: '5%'}}>{description}</h1>
            </div>
            <div style = {{width: '60%'}}>
                <h1 className = 'portfoliolongdesc' style = {{overflow: 'scroll'}}>{longdesc}</h1>
            </div>
        </div>
    </div>
  )
}

export default PortfolioOverlay