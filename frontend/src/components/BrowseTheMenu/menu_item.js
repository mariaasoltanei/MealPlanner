import React from "react";
import './css/menu_item.css'
import {Rating} from "@mui/material";

function MenuItem(props) {
    console.log(props);
    return (
        <div className="div_menu_item">
            <div className="circle_image">
                <img className="item_image" src={props.image} alt={`image-${props.title}`}/>
            </div>
            <div className="div_square_item">
                <div className="div_menu_info">
                    <h3>{props.title}</h3>
                    <Rating name="half-rating-read" value={props.rating} precision={0.5} readOnly />
                    <p>Cooking time: {props.time} minutes</p>
                </div>
            </div>
        </div>
    );
}

export default MenuItem;