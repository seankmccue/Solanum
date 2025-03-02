import React from "react";
import "./card.css"

function Card(props) {
    return (
        <div className="card">
            <img className="card-image" src={props.image} alt="Tool"></img>
            <h2 className="card-title">{props.title}</h2>
            <p className="card-text">{props.text}</p>
        </div>
        
    )
}

export default Card;