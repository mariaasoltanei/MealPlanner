import React from "react";
import './css/sign_up.css'
import NavigationBar from "../components/NavigationBar/navigation_bar";
import StepsGetStarted from "../components/SignUp/steps_get_started";
import SignUpForm from "../components/SignUp/signup_form";
import fold from "../assets/images/foldPaper.png";

function SignUp() {
    return (
        <div className="div_signup_page">
            <NavigationBar/>
            <div className="div_signup_content">
                <SignUpForm/>
                <StepsGetStarted/>
            </div>
        </div>
    );
}

export default SignUp;