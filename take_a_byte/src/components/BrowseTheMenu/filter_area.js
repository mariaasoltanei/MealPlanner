import React from "react";
import './css/filter_area.css'

function FilterArea() {
    return (
        <div className="div_filter_area">
            <h2 id="bm_title">Explore our menu</h2>
            <div className="menu_types">
                <p className="p_menu_type">Signature</p>
                <p className="p_menu_type">Vegetarian</p>
                <p className="p_menu_type">Vegan</p>
                <p className="p_menu_type">Paleo</p>
            </div>
        </div>
    );
}

export default FilterArea;