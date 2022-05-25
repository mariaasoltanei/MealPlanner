import React from "react";
import './css/cart_item.css'
import test from '../../assets/images/test_image.jpg'

function CartItem(props) {
    return (
        <div className="div_cart_item">
            <div className="img_item">
                <img className="img_cart_item" src={props.image}/>
            </div>
            <div className="details_item">
                <p>{props.title}</p>
            </div>

        </div>
    );
}

export default CartItem;