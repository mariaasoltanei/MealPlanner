import React from "react";
import './css/img_text_get_started.css'

function ImgText(props){
    return(
        <div className="div_steps_img_text">
            <div className="div_img_get_started">
                <img src={props.image}/>
            </div>
            <div className="div_text_get_started">
                <h4>{props.header}</h4>
                <p>{props.text}</p>
            </div>
        </div>
    );
}
export default ImgText;
