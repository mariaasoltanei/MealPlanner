import React from "react";
import './css/mealplan_page.css';
import NavigationBar from "../components/NavigationBar/navigation_bar";
import RecipeList from "../components/MealPlanConfig/recipe_list";


function MealPlanConfig() {
    return (
        <div className="div_mealplan_page">
            <NavigationBar/>
            <div className="div_mealplan_content">
                <RecipeList/>

            </div>
        </div>
    );
}

export default MealPlanConfig;