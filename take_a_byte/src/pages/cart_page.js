import React from "react";
import './css/cart_page.css';
import NavigationBar from "../components/NavigationBar/navigation_bar";
import CartList from "../components/CartComp/cart_list";
import CartCheckout from "../components/CartComp/cart_checkout";

function Cart() {
    return (
        <div className="div_cart_page">
            <NavigationBar/>
            <div className="div_cart_content">
                <CartList/>
                <CartCheckout/>
            </div>
        </div>
    );
}

export default Cart;