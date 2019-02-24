import React from 'react'
import './style.scss';

function Card(props) {
    return (
       <div className="card" 
            onClick={() => props.handleClick(props.id)}
        >
        <img alt={props.image.replace(".jpg", "")} src={require("./images/" + props.image)} />
       </div>
    )
}

export default Card;