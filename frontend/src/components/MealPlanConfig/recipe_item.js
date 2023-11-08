import React from "react";
import './css/recipe_item.css'

function RecipeItem(props) {
    return (
        <div className="div_recipe_item">
            <div className="img_item">
                <img className="img_recipe_item" src={props.image}/>
            </div>
            <div className="details_item">
                <h4>{props.title}</h4>
                <p>{props.calories} calories</p>
            </div>
            <div className="cooking_time">
                <p>Cooking time: {props.time} mins</p>
            </div>

        </div>
    );
}

export default RecipeItem;