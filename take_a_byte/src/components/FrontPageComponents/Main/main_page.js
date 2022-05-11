import React from "react";
import './css/main_page.css';
import imageFront from "../../../assets/images/image_front.png";
import ImagesSteps from "./images_steps_order";

function MainPage() {
    return (
        <div className="div_main_content">
                <div className="gradient_background">
                        <img id="imageFront" src={imageFront}/>
                        <div className="mainText">
                                <p id="frontText">Ready to take a <span id="differentFont">byte</span> of your delicious home-cooked
                                        meals?</p>
                                <button className="btn-get-started">Get started</button>
                        </div>
                </div>
            <ImagesSteps/>
        </div>
    );
}

export default MainPage;




