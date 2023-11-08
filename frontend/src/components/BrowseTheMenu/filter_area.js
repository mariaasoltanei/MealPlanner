import React, {useState} from "react";
import './css/filter_area.css'

function FilterArea({childToParent}) {
    const [allRecipes, setAllRecipes] = useState(null);
    const [signature, setSignature] = useState(null);
    const [vegetarian, setVegetarian] = useState(null);
    const [vegan, setVegan] = useState(null);
    const [paleo, setPaleo] = useState(null);
    const data = "This is data from Child Component to the Parent Component.";
    return (
        <div className="div_filter_area">
            <h2 id="bm_title">Explore our menu</h2>
            <div className="menu_types">
                <button className="p_menu_type" onClick={() => {
                }}>All recipes
                </button>
                <button className="p_menu_type" onClick={() => {
                }}>Signature
                </button>
                <button className="p_menu_type" onClick={() => {
                }}>Vegetarian
                </button>
                <button className="p_menu_type" onClick={() => {
                }}>Vegan
                </button>
            </div>
        </div>
    );
}

export default FilterArea;