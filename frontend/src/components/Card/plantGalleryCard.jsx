import React from "react";
import "./plantGalleryCard.css"

function PlantGalleryCard(props) {
    return (
        <div className="guideGalleryCard">
            <h2 className="card-title">{props.title}</h2>
            <p className="card-text">{props.text1}</p>
            <p className="card-text">{props.text2}</p>
            <p className="card-text">{props.text3}</p>
        </div>
    )
}

export default PlantGalleryCard;