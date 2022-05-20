import React, {useEffect, useState} from "react";
import NavigationBar from "../components/NavigationBar/navigation_bar";
import './css/weekly_menu.css'
import WeeklyMenuComp from "../components/Weekly Menu/weekly_menu_comp";
import axios from "axios";

const mariaGmailKEY = 'cf25781960af46d3beba5d21ac99b74b'
const remusGmailKEY = '25450dcbda614879a008851e856a08aa'
const anaYahooKEY = 'ad136a643cda4673a2792cf3503caac1'
const mariaGmail2KEY = '484db897baef41f0b41aeecdbacba3c5'
const mariaYAHOO = 'bc1070e4773549f08c305195f2fb05c7'
const KEY = mariaYAHOO
function WeeklyMenu() {
    const numberOfItems = 2;
    const weekNO = 1;
    //ENDPOINTS INFO -> type = breakfast, main course, salad ; diet = signature -> whole30 vegetarian -> vegetarian vegan -> vegan
    const signatureBreakfastEndpoint = `https://api.spoonacular.com/recipes/complexSearch?number=${numberOfItems}&type=breakfast&diet=whole30&apiKey=${KEY}&addRecipeInformation=false`
    const vegetarianBreakfastEndpoint = `https://api.spoonacular.com/recipes/complexSearch?number=${numberOfItems}&type=breakfast&diet=vegetarian&apiKey=${KEY}&addRecipeInformation=false`
    const veganBreakfastEndpoint = `https://api.spoonacular.com/recipes/complexSearch?number=${numberOfItems}&type=breakfast&diet=vegan&apiKey=${KEY}&addRecipeInformation=false`
    const [signatureBreakfast, setSignatureBreakfast] = useState([]);
    const [vegetarianBreakfast, setVegetarianBreakfast] = useState([]);
    const [veganBreakfast, setVeganBreakfast] = useState([]);
    const [showBreakfast, setShowBreakfast] = useState(false);


    const signatureLunchEndPoint = `https://api.spoonacular.com/recipes/complexSearch?number=${numberOfItems}&type=salad&diet=whole30&apiKey=${KEY}&addRecipeInformation=false`
    const vegetarianLunchEndPoint = `https://api.spoonacular.com/recipes/complexSearch?number=${numberOfItems}&type=salad&diet=vegetarian&apiKey=${KEY}&addRecipeInformation=false`
    const veganLunchEndPoint = `https://api.spoonacular.com/recipes/complexSearch?number=${numberOfItems}&type=salad&diet=vegan&apiKey=${KEY}&addRecipeInformation=false`
    const [signatureLunch, setSignatureLunch] = useState([]);
    const [vegetarianLunch, setVegetarianLunch] = useState([]);
    const [veganLunch, setVeganLunch] = useState([]);
    const [showLunch, setShowLunch] = useState(false);

    const signatureDinnerEndPoint = `https://api.spoonacular.com/recipes/complexSearch?number=${numberOfItems}&type=lunch&diet=whole30&apiKey=${KEY}&addRecipeInformation=false`
    const vegetarianDinnerEndPoint = `https://api.spoonacular.com/recipes/complexSearch?number=${numberOfItems}&type=lunch&diet=vegetarian&apiKey=${KEY}&addRecipeInformation=false`
    const veganDinnerEndPoint = `https://api.spoonacular.com/recipes/complexSearch?number=${numberOfItems}&type=lunch&diet=vegan&apiKey=${KEY}&addRecipeInformation=false`
    const [signatureDinner, setSignatureDinner] = useState([]);
    const [vegetarianDinner, setVegetarianDinner] = useState([]);
    const [veganDinner, setVeganDinner] = useState([]);
    const [showDinner, setShowDinner] = useState(false);
    /*useEffect(() => {
        axios.get(signatureBreakfastEndpoint)
            .then(res => {
                const r = res.data.results;
                setSignatureBreakfast(r);
                setShowSignatureBreakfast(true);
            })
        axios.get(vegetarianBreakfastEndpoint)
            .then(res => {
                const r = res.data.results;
                setVegetarianBreakfast(r);
                setShowVegetarianBreakfast(true);
            })
        axios.get(veganBreakfastEndpoint)
            .then(res => {
                const r = res.data.results;
                setVeganBreakfast(r);
                setShowVeganBreakfast(true);
            })
    }, []);*/
    useEffect(()=>{
        Promise.all([
            fetch(signatureBreakfastEndpoint),
            fetch(vegetarianBreakfastEndpoint),
            fetch(veganBreakfastEndpoint),
            fetch(signatureLunchEndPoint),
            fetch(vegetarianLunchEndPoint),
            fetch(veganLunchEndPoint),
            fetch(signatureDinnerEndPoint),
            fetch(vegetarianDinnerEndPoint),
            fetch(veganDinnerEndPoint)
        ]).then(function (responses) {
            return Promise.all(responses.map(function (response) {
                return response.json();
            }));
        }).then(function (data) {
            setSignatureBreakfast(data[0].results);
            setVegetarianBreakfast(data[1].results);
            setVeganBreakfast(data[2].results);
            setShowBreakfast(true);

            setSignatureLunch(data[3].results);
            setVegetarianLunch(data[4].results);
            setVeganLunch(data[5].results);
            setShowLunch(true);

            setSignatureDinner(data[6].results);
            setVegetarianDinner(data[7].results);
            setVeganDinner(data[8].results);
            setShowDinner(true);
        }).catch(function (error) {
            console.log(error);
        });
    },[])
    return (
        <div className="div_weeklyM_page">
            <NavigationBar/>
            <div className="div_weeklyM_content">
                <WeeklyMenuComp title="Signature menu"
                                menuImage={showBreakfast && signatureDinner[weekNO].image}
                                breakfastTitle = {showBreakfast && signatureBreakfast[weekNO].title}
                                lunchTitle = { showLunch && signatureLunch[weekNO].title}
                                dinnerTitle = { showDinner &&  signatureDinner[weekNO].title}/>
                <WeeklyMenuComp title="Vegetarian menu"
                                menuImage={showBreakfast && vegetarianBreakfast[weekNO].image}
                                breakfastTitle = {showBreakfast && vegetarianBreakfast[weekNO].title}
                                lunchTitle = { showLunch && vegetarianLunch[weekNO].title}
                                dinnerTitle = { showDinner &&  vegetarianDinner[weekNO].title}/>
                <WeeklyMenuComp title="Vegan menu"
                                menuImage={showBreakfast && veganBreakfast[weekNO].image}
                                breakfastTitle = {showBreakfast && veganBreakfast[weekNO].title}
                                lunchTitle = { showLunch && veganLunch[weekNO].title}
                                dinnerTitle = { showDinner &&  veganDinner[weekNO].title}/>

            </div>
        </div>
    );
}

export default WeeklyMenu;