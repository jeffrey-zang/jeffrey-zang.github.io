import React from 'react'

const PortfolioOverlay = ({title, logo, description, longdesc, languages, status, statuscolor, buttons}) => {

    let buttonlist = []
    for (let item in buttons) {
        buttonlist.push(
            <>
            <a target = '_blank' href = {buttons[item].link}>
                {`${buttons[item].title} `}
                <i style = {{fontSize: '1.6vw'}} class ={buttons[item].icon}></i>
            </a>
            </>
        )
        if (item !== Object.keys(buttons).pop()) {
            buttonlist.push(
                <h1 style = {{display: 'inline'}}>
                {'  |  '} 
                </h1>
            )
        }
    }

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
                
            <div style = {{color: '#a5ff90', marginBottom: '5px', marginLeft: '5px'}}>
                <i class = 'bi bi-code-slash' style = {{fontSize: '1.6vw'}}></i>
                {` ${languages} `}
                <br></br>
                <h1 style = {{fontSize: '1.6vw', color: statuscolor}}>
                    <i class = 'bi bi-check-circle' style = {{fontSize: '1.6vw'}}></i>
                    {` ${status}`}
                </h1>
            </div>

            <div style = {{marginRight: '30px', marginTop: '10px'}}>
                {buttonlist}
            </div>

        </div>

    </div>
  )
}

export default PortfolioOverlay