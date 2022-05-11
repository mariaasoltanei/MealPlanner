import React, {useEffect, useState} from "react";
import NavigationBar from "../components/NavigationBar/navigation_bar";
import './css/browse_menu.css'
import axios from "axios";
import Grid from "@mui/material/Grid";
import MenuItem from "../components/BrowseTheMenu/menu_item";
import {Link} from "react-router-dom";
import FilterArea from "../components/BrowseTheMenu/filter_area"

const mariaGmailKEY = 'cf25781960af46d3beba5d21ac99b74b'
const remusGmailKEY = '25450dcbda614879a008851e856a08aa'
const anaYahooKEY = 'ad136a643cda4673a2792cf3503caac1'
const mariaGmail2KEY = '484db897baef41f0b41aeecdbacba3c5'
function BrowseMenu() {
    const [recipe, setRecipe] = useState(null);
    const [showRecipe, setShowRecipe] = useState(false);
    const linksStyle = {
        color: 'black',
        textDecoration: 'none'
    };


    /*function getRecipeData() {
        fetch(
            "https://api.spoonacular.com/recipes/complexSearch?number=10&apiKey=cf25781960af46d3beba5d21ac99b74b"
        )
            .then((response) => response.json())
            .then((data) => {
                setRecipe(...data.results);
            })
            .catch(() => {
                console.log("error");
            });
    }*/

    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=${remusGmailKEY}&addRecipeInformation=true`)
            .then(res => {
                const r = res.data.results;
                setRecipe(r);
                setShowRecipe(true);
                console.log(r);
            })
    }, []);


    //
    /*useEffect(()=>{
        getMenuItemsAPI.request();
        console.log(getMenuItemsAPI.data);
    },[]);*/

    return (
        <div className="div_browse_menu_page">
            <NavigationBar/>
            <div className="div_browse_menu_content">
                <FilterArea/>
                <div className="div_recipe_items">
                    <Grid container spacing={1} className="recipes_grid_container">
                        {
                            showRecipe && recipe.map(r => (<Grid item className="grid_item" xs={4} sm={6} md={3}>
                                <Link style={linksStyle} to={`/pages/${r.id}`}><MenuItem title={r.title} image={r.image} time={r.readyInMinutes} rating ={r.aggregateLikes/100}/></Link>
                            </Grid>))
                        }
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default BrowseMenu;
//showRecipe && recipe.map(r =><Grid item xs={8} sm={6} md={4} lg={3}><MenuItem title = {r.title} image ={r.image}/></Grid>)
//<MenuItem title = {r.title} image ={r.image}/>

//<div className="div_test">hello</div>

/*
                        <Grid item className = "grid_item" xs={4} sm={6} md={3}>
                            <MenuItem title = {r.title} image ={r.image}/>

                        </Grid>
 */