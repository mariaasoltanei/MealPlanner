import React, {useContext} from "react";
import './css/cart_list.css'
import CartItem from "./cart_item";
import {useStateContext} from "../../context/state_context";
import {UserContext} from "../../context/user_context";

function CartList() {
    //TODO: SA POSTEZ IN BAZA DE DATE CART ITEMS.NAME CU UN ORDER ID
    //partea cu many e order
    /*
        const getUser = () => {
        axios.post("http://localhost:3000/pages/log_in", {
            email: email,
            userPassword: userPassword
        }).then(r => {
            if (r.data.length > 0) {
                navigate("../pages/browse_menu");
                setUser(r.data[0]);
                console.log(r.data[0]);
            } else {
                setErrMessage("Wrong email or password")
            }
        })
    };
     */
    const {user, setUser} = useContext(UserContext);
    const {totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove} = useStateContext();
    return (
        <div className="div_cart_list">
            <h3 id="h3_cart">Favourite recipes</h3>
            {
                cartItems.length == 0 ? <p>Favourites list empty :(</p> : (cartItems.map(i => <CartItem image={i.image}
                                                                                                        title={i.title}
                                                                                                        calories={i.nutrition.nutrients[0].amount}
                                                                                                        time={i.readyInMinutes}
                                                                                                        item={i}/>)) //item={i}
            }
        </div>
    );
}

//

export default CartList;