import React, {useEffect, useState} from "react";
import './css/menu_item_details.css'
import NavigationBar from "../components/NavigationBar/navigation_bar";
import axios from "axios";
import {useParams} from "react-router-dom";

function MenuItemDetails(){
    const {menuItemID} = useParams();
    const [itemDetails, setItemDetails] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const request = `https://api.spoonacular.com/recipes/${menuItemID}/information?apiKey=ad136a643cda4673a2792cf3503caac1&addRecipeInformation=true`;
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
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    );

}
export default MenuItemDetails;