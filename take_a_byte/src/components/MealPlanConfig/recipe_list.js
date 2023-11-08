import React, {useContext, useEffect, useState} from "react";
import './css/recipe_list.css'
import {useStateContext} from "../../context/state_context";
import {UserContext} from "../../context/user_context";
import RecipeItem from "./recipe_item";
import axios from "axios";


function RecipeList() {
    const {user, setUser} = useContext(UserContext);
    const {
        totalPrice,
        totalQuantities,
        cartItems,
        recipeItems
    } = useStateContext();
    let [totalCalories, setTotalCalories] = useState(0);

    function computeCalories() {
        for (let i = 0; i < recipeItems.length; i++) {
            totalCalories = totalCalories + parseInt(recipeItems[i].nutrition.nutrients[0].amount);
        }
        setTotalCalories(totalCalories)
    }

    function saveMealPlan() {
        axios.post("http://localhost:3000/pages/mealplan_page", {
            recipeItems: recipeItems,
            totalCalories: totalCalories
        }).then(r => {
            console.log('server response is', r);
        })
    }

    useEffect(() => {
        computeCalories()
    }, []);

    return (
        <div className="div_recipe_list">
            <div className="headers">
                <h3 id="h3_recipe">Recipes for meal planning</h3>
                <p id="total_cals">Total Calories: {totalCalories} kcal</p>
            </div>
            <div className="div_scroll_recipes">
                {
                    recipeItems.length == 0 ? <p>No recipes:(</p> : (recipeItems.map(i => <RecipeItem image={i.image}
                                                                                                      title={i.title}
                                                                                                      calories={i.nutrition.nutrients[0].amount}
                                                                                                      time={i.readyInMinutes}/>))
                }
            </div>
            <button id="btn_download_meal" onClick={saveMealPlan}>Download meal</button>
        </div>
    );
}

export default RecipeList;