import React from 'react'
import { PortfolioItemNames } from './App';

const PortfolioOverlay = ({title, longdesc, languages, status, statuscolor, buttons}) => {

    let buttonlist = []
    for (let item in buttons) {
        buttonlist.push(
            <>
            <a target = '_blank' href = {buttons[item].link}>
                {`${buttons[item].title} `}
                <i style = {{fontSize: 'max(1.6vw, 15px)'}} class ={buttons[item].icon}></i>
            </a>
            </>
        )
        if (item !== Object.keys(buttons).pop()) {
            buttonlist.push(
                <h1 style = {{display: 'inline', fontSize: 'max(1.6vw, 15px)'}}>
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

        <div className = 'portfoliobefore'>
            <h1 style = {{fontSize: 'max(2.5vw, 20px)'}}>{title}</h1>
            <i class="bi bi-x" style = {{color: '#fff', cursor: 'pointer', fontSize: 'max(2.5vw, 20px)'}} onClick ={
                () => {
                    document.getElementById('overlay').style.display = 'none';
                    for (let item in PortfolioItemNames) {
                        document.getElementById(PortfolioItemNames[item]).className = 'portfoliohidden'
                        console.log(document.getElementById(title).className)
                    }
                }
                  
            }></i>
        </div>

        <h1 className = 'portfoliolongdesc' style = {{overflow: 'scroll'}}>{longdesc}</h1>

        <div className = 'portfolioafter'>
                
            <div style = {{color: '#a5ff90'}}>
                <i class = 'bi bi-code-slash'></i>
                {` ${languages} `}
                <br></br>
                <h1 style = {{ color: statuscolor, fontSize: 'max(1.6vw, 15px)'}}>
                    <i class = {statusicon} style = {{fontSize: 'max(1.6vw, 15px)'}}></i>
                    {` ${status}`}
                </h1>
            </div>

            <div style = {{fontSize: 'max(1.6vw, 15px)'}}>
                {buttonlist}
            </div>

        </div>

    </div>
  )
}

export default PortfolioOverlay