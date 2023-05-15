import React from "react";
import './css/menu_item.css'
import {useNavigate} from "react-router-dom";
import {Rating} from "@mui/material";

function MenuItem(props) {
    let navigate = useNavigate();
    return (
        <div className="div_menu_item" onClick={() => navigate(`/pages/menu_item_details`)}>
            <div className="circle_image">
                <img className="item_image" src={props.image}/>
            </div>
            <div className="div_square_item">
                <div className="div_menu_info">
                    <h3>{props.title}</h3>
                    <Rating name="half-rating-read" value={props.rating} precision={0.5} readOnly/>
                    <p>Cooking time: {props.time} mins</p>
                </div>
            </div>
        </div>
    );
}

export default MenuItem;