import React from "react";
import './css/step_comp.css'

function Step(props) {
    return (
        <div className="div_step">
            <img src={props.image}/>
            <h3>{props.headerTitle}</h3>
            <p>{props.text}</p>
        </div>
    );
}

export default Step;