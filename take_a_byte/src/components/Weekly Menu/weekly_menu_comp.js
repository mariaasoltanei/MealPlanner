import React, {useEffect, useState} from "react";
import './css/weekly_menu_comp.css'
import test from '../../assets/images/test_image.jpg'
import axios from "axios";
//RANDOM BREAKFAST :https://api.spoonacular.com/recipes/random?number=1&tags=breakfast&apiKey=ad136a643cda4673a2792cf3503caac1&addRecipeInformation=false
function WeeklyMenuComp(props){
    return(
        <div className="div_weeklyMenu_component">
            <div className="circle_image_wm">
                <img src={props.menuImage} alt=""/>
            </div>
            <div className="div_square_item_wm">
                <div className="div_wmenu_info">
                    <h3>{props.title}</h3>
                    <div className="div_meal">
                        <h4 className="header_meal">Breakfast</h4>
                        <p className="div_text">{props.breakfastTitle}</p>
                    </div>
                    <div className="div_meal">
                        <h4 className="header_meal">Lunch</h4>
                        <p className="div_text">{props.lunchTitle}</p>
                    </div>
                    <div className="div_meal">
                        <h4 className="header_meal">Dinner</h4>
                        <p className="div_text">{props.dinnerTitle}</p>
                    </div>
                    <button className="btn_wm_add_cart">+</button>
                </div>
            </div>
        </div>
    );
}
export default WeeklyMenuComp;