import React, {useEffect, useState} from "react";
import './css/menu_item_details.css'
import NavigationBar from "../components/NavigationBar/navigation_bar";
import axios from "axios";
import {useParams} from "react-router-dom";
import {useStateContext} from "../context/state_context";

const KEY = process.env.mariaGmailKEY

function MenuItemDetails() {
    const {menuItemID} = useParams();
    const [itemDetails, setItemDetails] = useState([]);
    const [mealRecipe, setMealRecipe] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const [calories, setCalories] = useState(null)
    const [protein, setProtein] = useState(null)
    const [carbs, setCarbs] = useState(null)
    const [fat, setFat] = useState(null)
    const request = `https://api.spoonacular.com/recipes/${menuItemID}/information?apiKey=${KEY}&includeNutrition=true`;
    const {decQty, incQty, qty, onAdd, setShowCart, onAddRecipe} = useStateContext();

//https://api.spoonacular.com/recipes/complexSearch?number=1&apiKey=25450dcbda614879a008851e856a08aa&addRecipeInformation=true&addRecipeNutrition=true
    const addProduct = (product, qty) => {
        onAdd(product, qty);

        setShowCart(true);
    }
    useEffect(() => {
        axios.get(request)
            .then(res => {
                const r = res.data;
                setItemDetails(r);
                setMealRecipe(r);
                setShowDetails(true);
                setCalories(r.nutrition.nutrients[0].amount)
                setProtein(r.nutrition.nutrients[8].amount)
                setCarbs(r.nutrition.nutrients[3].amount)
                setFat(r.nutrition.nutrients[1].amount)
                console.log((r.nutrition.nutrients));
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
                    <div>
                        <p>Calories {calories} kcal per serving</p>
                        <p>Fat: {fat} g</p>
                        <p>Protein: {protein} g</p>
                        <p>Carbohydrates: {carbs} g</p>
                    </div>
                    <button className="btn_add_cart" onClick={() => onAdd(itemDetails, 1)}>Add to favorites</button>
                    <button className="btn_add_tomeal" onClick={() => onAddRecipe(mealRecipe, 1)}>Add to meal plan
                    </button>
                </div>
            </div>
        </div>
    );

}

//<h3>{itemDetails.nutrition.nutrients[0].amount}</h3>
//<div dangerouslySetInnerHTML={ {__html: itemDetails.nutrition} } />
export default MenuItemDetails;