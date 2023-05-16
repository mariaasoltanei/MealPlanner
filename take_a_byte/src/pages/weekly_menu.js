import React, {useEffect, useState} from "react";
import NavigationBar from "../components/NavigationBar/navigation_bar";
import './css/weekly_menu.css'
import WeeklyMenuComp from "../components/Weekly Menu/weekly_menu_comp";
import {useNavigate} from "react-router-dom";
import food1 from '../assets/images/food1.jpg'
import food2 from '../assets/images/food2.jpg'
import food3 from '../assets/images/food3.jpg'

const mariaGmailKEY = 'cf25781960af46d3beba5d21ac99b74b'
const remusGmailKEY = '25450dcbda614879a008851e856a08aa'
const anaYahooKEY = 'ad136a643cda4673a2792cf3503caac1'
const mariaGmail2KEY = '484db897baef41f0b41aeecdbacba3c5'
const mariaYAHOO = 'bc1070e4773549f08c305195f2fb05c7'
const KEY = remusGmailKEY

function WeeklyMenu() {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `../pages/generate_mealplan`;
        navigate(path);
    }
    const mealPlan1EP = `https://api.spoonacular.com/mealplanner/generate?timeFrame=day&apiKey=${KEY}`
    const [mealPlan1, setMealPlan1] = useState(null);

    const mealPlan2EP = `https://api.spoonacular.com/mealplanner/generate?timeFrame=day&apiKey=${KEY}`
    const [mealPlan2, setMealPlan2] = useState(null);
    // const [showMP2, setShowMP2] = useState(false);

    const mealPlan3EP = `https://api.spoonacular.com/mealplanner/generate?timeFrame=day&apiKey=${KEY}`
    const [mealPlan3, setMealPlan3] = useState(null);
    // const [showMP3, setShowMP3] = useState(false);

    const [showMP, setShowMP] = useState(false);

    useEffect(() => {
        Promise.all([
            fetch(mealPlan1EP),
            fetch(mealPlan2EP),
            fetch(mealPlan3EP)
        ]).then(function (responses) {
            return Promise.all(responses.map(function (response) {
                return response.json();
            }));
        }).then(function (data) {
            setMealPlan1(data[0]);
            setMealPlan2(data[1]);
            setMealPlan3(data[2]);
            setShowMP(true)
            console.log(data)
        }).catch(function (error) {
            console.log(error);
        });
    }, [])
    return (
        <div className="div_weeklyM_page">
            <NavigationBar/>
            <div className="div_weeklyM_content">

                <WeeklyMenuComp title="Meal Plan"
                                menuImage={food1}
                                calories={showMP && mealPlan1.nutrients.calories}
                                breakfastTitle={showMP && mealPlan1.meals[0].title}
                                lunchTitle={showMP && mealPlan1.meals[1].title}
                                dinnerTitle={showMP && mealPlan1.meals[2].title}/>
                <WeeklyMenuComp title="Meal Plan"
                                menuImage={food2}
                                calories={showMP && mealPlan2.nutrients.calories}
                                breakfastTitle={showMP && mealPlan2.meals[0].title}
                                lunchTitle={showMP && mealPlan2.meals[1].title}
                                dinnerTitle={showMP && mealPlan2.meals[2].title}/>
                <WeeklyMenuComp title="Meal Plan"
                                menuImage={food3}
                                calories={showMP && mealPlan3.nutrients.calories}
                                breakfastTitle={showMP && mealPlan3.meals[0].title}
                                lunchTitle={showMP && mealPlan3.meals[1].title}
                                dinnerTitle={showMP && mealPlan3.meals[2].title}/>
            </div>
            <div className="div_gen_mp">
                <button id="btn_gen_mp" onClick={routeChange}>Generate meal plan</button>
            </div>
        </div>
    );
}

export default WeeklyMenu;