import React from 'react'
import './style.scss';

function Nav(props) {
    return (
        <div className="navbar">
            <div className="navLeft">
                <img src={require("./images/Novo-logo-blk-2221.png")} />    
            </div>
            <div className="navRight">
                <h1>Novo Guitar Guessing Game</h1>
                <div className="scoresStyle">
                    <h2>{`${props.headingText} ${props.headingValue}`}</h2>
                    <h2>{`${props.primaryHeadingText} ${props.primaryHeadingValue}`}</h2>
                </div>
            </div>

       </div>
    )
}

export default Nav;