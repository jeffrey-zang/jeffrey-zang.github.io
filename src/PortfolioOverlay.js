import React from 'react'

const PortfolioOverlay = ({title, logo, description, longdesc, languages, status, statuscolor, buttons}) => {

    let buttonlist = []
    for (let item in buttons) {
        buttonlist.push(
            <>
            <a target = '_blank' href = {buttons[item].link}>
                {`${buttons[item].title} `}
                <i style = {{fontSize: 'max(1.8vw, 15px)'}} class ={buttons[item].icon}></i>
            </a>
            </>
        )
        if (item !== Object.keys(buttons).pop()) {
            buttonlist.push(
                <h1 style = {{display: 'inline', fontSize: 'max(1.8vw, 15px)'}}>
                {'  |  '} 
                </h1>
            )
        }
    }

    let statusicon = 'bi bi-check-circle'
    if (status !== undefined && status.startsWith('In Progress')) {
        statusicon = 'bi bi-clock-history'
    }

    return (
    <div id = {title} className = 'portfoliooverlay'>

        <div className = 'portfoliodiv' style = {{display: 'flex', justifyContent: 'space-between'}}>
            <div className = 'portfolioheaderdiv' style = {{width: '40%', overflow: 'none !important'}}>
                <img className = 'portfoliologo' src = {logo} alt = 'logo'></img>
                <h1 className = 'portfolioheader' style = {{textAlign: 'center'}}>{title}</h1>
                <h1 className = 'portfoliodesc' style = {{marginLeft: '5%'}}>
                    {description}
                </h1>
            </div>

            <div style = {{width: '60%', marginTop: '-5px'}}>
                <h1 className = 'portfoliolongdesc' style = {{overflow: 'scroll'}}>{longdesc}</h1>
            </div>
        </div>

        <div style = {{backgroundColor: '#173F5E', borderRadius: '0px 0px 25px 25px', zIndex: '10', position: 'absolute', left: '0', bottom: '0', fontSize: '1.6vw', color: '#fff', fontWeight: 'bold', width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                
            <div style = {{color: '#a5ff90', marginBottom: '5px', marginLeft: '15px', fontSize: 'max(1.8vw, 15px)'}}>
                <i class = 'bi bi-code-slash' style = {{fontSize: 'max(1.8vw, 15px)'}}></i>
                {` ${languages} `}
                <br></br>
                <h1 style = {{fontSize: 'max(1.8vw, 15px)', color: statuscolor}}>
                    <i class = {statusicon} style = {{fontSize: 'max(1.8vw, 15px)'}}></i>
                    {` ${status}`}
                </h1>
            </div>

            <div style = {{marginRight: '15px', marginTop: '10px', fontSize: 'max(1.8vw, 15px)'}}>
                {buttonlist}
            </div>

        </div>

    </div>
  )
}

export default PortfolioOverlay