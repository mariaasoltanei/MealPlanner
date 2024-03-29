import React, {useEffect, useState} from "react";
import NavigationBar from "../components/NavigationBar/navigation_bar";
import './css/browse_menu.css'
import axios from "axios";
import Grid from "@mui/material/Grid";
import MenuItem from "../components/BrowseTheMenu/menu_item";
import {Link} from "react-router-dom";


const KEY = process.env.mariaGmailKEY

function BrowseMenu() {
    //TODO CHANGE BUTTONS FOR FILTER
    const [recipe, setRecipe] = useState(null);
    const [filteredRecipe, setFilteredRecipe] = useState(null);
    const [showFilteredRecipe, setShowFilteredRecipe] = useState(null);
    const linksStyle = {
        color: 'black',
        textDecoration: 'none'
    };
    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=50&apiKey=${KEY}&addRecipeInformation=true`)
            .then(res => {
                const r = res.data.results;
                setFilteredRecipe(r);
                setShowFilteredRecipe(true);
                setRecipe(r);
            })
    }, []);

    const displayAllRecipes = () => {
        setFilteredRecipe(recipe);
        setShowFilteredRecipe(true);
    }

    const displaySignature = (vegetarian) => {
        setFilteredRecipe(recipe.filter(x => x.vegetarian === vegetarian));
        setShowFilteredRecipe(true);
    }

    const displayVegan = (vegan) => {
        setFilteredRecipe(recipe.filter(x => x.vegan === vegan));
        setShowFilteredRecipe(true);
    }
    return (
        <div className="div_browse_menu_page">
            <NavigationBar/>
            <div className="div_browse_menu_content">
                <div className="div_filter_area">
                    <h2 id="bm_title">Explore our menu</h2>
                    <div className="menu_types">
                        <button className="p_menu_type" onClick={() => displayAllRecipes()}>All recipes</button>
                        <button className="p_menu_type" onClick={() => displaySignature(false)}>Signature</button>
                        <button className="p_menu_type" onClick={() => displaySignature(true)}>Vegetarian</button>
                        <button className="p_menu_type" onClick={() => displayVegan(true)}>Vegan</button>
                    </div>
                </div>
                <div className="div_recipe_items">
                    <Grid container spacing={1} className="recipes_grid_container">
                        {
                            showFilteredRecipe && filteredRecipe.map(r => (
                                <Grid item className="grid_item" xs={4} sm={6} md={3}>
                                    <Link style={linksStyle} to={`/pages/${r.id}`}><MenuItem title={r.title} image={r.image}
                                                                                             time={r.readyInMinutes}
                                                                                             rating={r.aggregateLikes / 100}/></Link>
                                </Grid>))
                        }
                    </Grid>
                </div>
                {
                    showFilteredRecipe && console.log(filteredRecipe)
                }
            </div>
        </div>
    );
}

export default BrowseMenu;