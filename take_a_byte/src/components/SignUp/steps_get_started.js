import React from "react";
import './css/steps_get_started.css'
import image1 from "../../assets/images/select_food_image.png";
import image2 from "../../assets/images/box_from_steps.png";
import image3 from "../../assets/images/table_from_steps.png";
import ImgText from "./img_text_get_started";
import fold from '../../assets/images/foldPaper.png'

function StepsGetStarted() {
    return(
        <div className="div_steps_get_started">
                <h2>Get started</ h2>
                <ImgText image = {image1} header ="Get started by choosing your desired meal" text ="By surfing our website you have the liberty to pick a specific meal from our variety, or if you feel insatiable why not order some dessert as well?"/>
                <ImgText image = {image2} header ="Put your aprons on and let’s get started" text ="After the order has arrived, you may unpack your box with the ingredients necessary for cooking the meal. If you have guests over, equip them with an apron and some kitchen utensils as well! "/>
                <ImgText image = {image3} header ="Enjoy the company and the food " text ="After all the hard work you had put into preparing the meal, you can finally sit down at the table accompanied by your guest(s) and enjoy both the food and a good conversation."/>
        </div>
    );
}

export default StepsGetStarted;