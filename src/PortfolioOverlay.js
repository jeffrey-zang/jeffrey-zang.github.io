import React from 'react'

const PortfolioOverlay = ({title, logo, description, longdesc}) => {
    return (
    <div id = {title} className = 'portfoliooverlay'>

        <div style = {{display: 'flex', justifyContent: 'space-between'}}>
            <div style = {{width: '40%', overflow: 'none !important'}}>
                <img src = {logo} alt = 'logo' width = '65%' style = {{marginLeft: '17.5%', border: ' 30px solid #395B64', borderRadius: '60px'}}></img>
                <h1 className = 'portfolioheader' style = {{textAlign: 'center', fontSize: '4vw'}}>{title}</h1>
                <h1 className = 'portfoliodesc' style = {{marginLeft: '5%'}}>
                    {description}
                </h1>
            </div>

            <div style = {{width: '60%'}}>
                <h1 className = 'portfoliolongdesc' style = {{overflow: 'scroll'}}>{longdesc}</h1>
            </div>
        </div>

        <div style = {{position: 'absolute', bottom: '0', fontSize: '1.6vw', color: '#fff', fontWeight: 'bold', width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '5px'}}>
                
            <div style = {{color: '#a5ff90'}}>
                <i class = 'bi bi-code-slash' style = {{fontSize: '1.6vw'}}></i>
                {' Javascript, HTML/CSS '}
                <br></br>
                <i class = 'bi bi-check-circle' style = {{fontSize: '1.6vw'}}></i>
                {' Complete, recieving updates'}
            </div>

            <div style = {{marginRight: '15px', marginTop: '10px'}}>
                <a href = 'https://github.com/jeffrey-zang/jeffrey-zang.github.io'>
                    {'Source '}
                    <i style = {{fontSize: '1.6vw'}} class ='bi bi-github'></i>
                </a>
                <h1 style = {{display: 'inline'}}>
                {'  |  '} 
                </h1>
                <a href = 'https://jeffrey-zang.github.io/happy-math-education/'>
                    {'Link '}
                    <i style = {{fontSize: '1.6vw'}} class ='bi bi-link-45deg'></i>
                </a>
            </div>

        </div>

    </div>
  )
}

export default PortfolioOverlay