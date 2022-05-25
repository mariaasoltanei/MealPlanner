import React, {useEffect, useState} from "react";
import './css/menu_item_details.css'
import NavigationBar from "../components/NavigationBar/navigation_bar";
import axios from "axios";
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import {addCart} from '../redux/action'
import {useStateContext} from "../context/state_context";

const mariaGmailKEY = 'cf25781960af46d3beba5d21ac99b74b'
const remusGmailKEY = '25450dcbda614879a008851e856a08aa'
const anaYahooKEY = 'ad136a643cda4673a2792cf3503caac1'
const mariaGmail2KEY = '484db897baef41f0b41aeecdbacba3c5'
const mariaYAHOO = 'bc1070e4773549f08c305195f2fb05c7'
const KEY = mariaGmailKEY
function MenuItemDetails(){
    const {menuItemID} = useParams();
    const [itemDetails, setItemDetails] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const request = `https://api.spoonacular.com/recipes/${menuItemID}/information?apiKey=${KEY}&addRecipeInformation=true`;
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

    const addProduct = (product,qty) => {
        onAdd(product, qty);

        setShowCart(true);
    }
    useEffect(() => {
        axios.get(request)
            .then(res => {
                const r = res.data;
                setItemDetails(r);
                setShowDetails(true);
                console.log(r.title);
            })
    }, []);

    return (
        <div className="div_menu_item_details">
            <NavigationBar/>
            <div className="div_menu_item_details_content">
                <div className="div_menu_item_image">
                    <div className="div_itemDet_img">
                        <img className="item_det_img" src={itemDetails.image} alt="item img"/>
                    </div>
                </div>
                <div className="div_item_details">
                    <h2>{itemDetails.title}</h2>
                    <div dangerouslySetInnerHTML={ {__html: itemDetails.summary} } />
                    <button className="btn_add_cart" onClick={() => onAdd(itemDetails, 1)}>Add to cart</button>
                </div>
            </div>
        </div>
    );

}
export default MenuItemDetails;