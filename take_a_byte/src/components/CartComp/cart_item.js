import React from "react";
import './css/cart_item.css'

// const {user, setUser} = useContext(UserContext);
// const {totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove} = useStateContext();

function CartItem(props) {
    return (
        <div className="div_cart_item">
            <div className="img_item">
                <img className="img_cart_item" src={props.image}/>
            </div>
            <div className="details_item">
                <h4>{props.title}</h4>
                <p>{props.calories} calories</p>
            </div>
            <div className="cooking_time">
                <p>Cooking time: {props.time} mins</p>
                {/*<button onClick={onRemove(props.item)}>sal</button>*/}
            </div>

        </div>
    );
}

export default CartItem;