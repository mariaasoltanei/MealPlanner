import React, {useState} from "react";
import './css/generate_mealplan.css';
import NavigationBar from "../components/NavigationBar/navigation_bar";
import axios from "axios";
import { jsPDF } from "jspdf";

const mariaGmailKEY = 'cf25781960af46d3beba5d21ac99b74b'
const remusGmailKEY = '25450dcbda614879a008851e856a08aa'
const anaYahooKEY = 'ad136a643cda4673a2792cf3503caac1'
const mariaGmail2KEY = '484db897baef41f0b41aeecdbacba3c5'
const mariaYAHOO = 'bc1070e4773549f08c305195f2fb05c7'
const KEY = remusGmailKEY

function GenerateMealPlan() {
    const [targetCalories, setTargetCalories] = useState("");
    const [diet, setDiet] = useState("");
    const [isGenerated, setIsGenerated] = useState(false);
    const [personalMP, setPersonalMP] = useState("");
    const [file, setFile] = useState("")

    function generateMealPlan() {
        if (diet == "") {
            axios.get(`https://api.spoonacular.com/mealplanner/generate?timeFrame=week&apiKey=${KEY}&targetCalories=${targetCalories}`)
                .then(res => {
                    const r = res.data.week;
                    setPersonalMP(r);
                    console.log(r)
                })
        } else {
            axios.get(`https://api.spoonacular.com/mealplanner/generate?timeFrame=week&apiKey=${KEY}&diet=${diet}&targetCalories=${targetCalories}`)
                .then(res => {
                    const r = res.data.week;
                    setPersonalMP(r);
                    setIsGenerated(true)
                })
        }
    }

    function buildMealPlan() {
        const doc = new jsPDF();

        doc.text("Meal Plan", 10, 10);
        doc.output('dataurlnewwindow');

        // axios.post("http://localhost:3000/pages/generate_mealplan", {
        //     personalMP: personalMP
        // }).then(r => {
        //     setFile(r)
        //     console.log('server response is', r);
        // })
    }

    return (
        <div className="div_genmp_page">
            <NavigationBar/>
            <div className="div_genmp_content">
                <div className="div_form_mp">
                    <div className="div_gmp_gradient">
                        <div className="div_gmp_opaque">
                            <div className="div_gmp_form">
                                <h2>Generate Meal Plan</h2>
                                <div className="gmp_form">
                                    <label className="input_label">Target calories</label>
                                    <input type="text" onChange={(e) => {
                                        setTargetCalories(e.target.value);
                                    }}/>
                                    <label className="input_label">Type of diet(optional)</label>
                                    <input type="text" onChange={(e) => {
                                        setDiet(e.target.value);
                                    }}/>
                                    <button id="btn_gmp_form"
                                            onClick={generateMealPlan}>Generate
                                    </button>
                                    {/*{*/}
                                    {/*    <p id="p_err_login">Fields incomplete</p>*/}
                                    {/*}*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="div_display_mp">
                    <div className="div_gmp_result">
                        <button id="btn_gmp_form" onClick={buildMealPlan}>Download
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GenerateMealPlan;