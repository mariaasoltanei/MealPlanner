import React, {useContext, useState} from "react";
import './css/cart_checkout.css'
import {UserContext} from "../../context/user_context";
import {useStateContext} from "../../context/state_context";
import axios from "axios";
import CartItem from "./cart_item";

function CartCheckout() {
    //TODO: on remove pt cart item
    const {user, setUser} = useContext(UserContext);
    const {totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove} = useStateContext();
    const [productID, setProductID] = useState();
    const [productName, setProductName] = useState([]);
    const [sum, setSum] = useState(0);
    const price = 20;

    const [userID, setUserID] = useState(null);


    const postProduct = () => {
        if(user) {
            setUserID(user.id);
            axios.post("http://localhost:3000/pages/cart_page", {
                userID
            })
        }
        else {
            alert("Please log in first");
        }
    };

    return (
        <div className="div_cart_checkout">
            <h3 id="h3_checkout">Facts</h3>
            <p id="free">Total price: {totalQuantities * price} RON</p>
            <button onClick={postProduct}>Order</button>
        </div>
    );
}

export default CartCheckout;