import React from "react";
import './css/image_text.css'

export default function ImageText(props) {
    return (
        <div className="div_image_text">
            <img src={props.image}/>
            <h3>{props.header}</h3>
            <p>{props.text}</p>
        </div>
    );
}