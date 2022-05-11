import React from "react";
import image1 from "../../../assets/images/select_food_image.png";
import './css/images_steps_order.css'
import arrow1 from "../../../assets/images/arrow1.png";
import image2 from "../../../assets/images/box_from_steps.png";
import arrow2 from "../../../assets/images/arrow2.png";
import image3 from "../../../assets/images/table_from_steps.png";
import Step from "./step_comp";

function ImagesSteps() {
    return (
        <div className="div_steps_order">
            <Step image={image1} headerTitle="Get started by choosing your desired meal" text="By surfing our website you have the liberty to pick a specific meal from our variety, or if you feel insatiable why not order some dessert as well?"/>
            <img src={arrow1}/>
            <Step image={image2} headerTitle="Put your aprons on and let’s get started" text="After the order has arrived, you may unpack your box with the ingredients necessary for cooking the meal. If you have guests over, equip them with an apron and some kitchen utensils as well!"/>
            <img src={arrow2}/>
            <Step image={image3} headerTitle="Enjoy the company and the food " text="After all the hard work you had put into preparing the meal, you can finally sit down at the table accompanied by your guest(s) and enjoy both the food and a good conversation."/>
        </div>
    );
}

export default ImagesSteps;