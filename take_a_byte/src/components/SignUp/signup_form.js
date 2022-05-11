import React from "react";
import './css/signup_form.css'

function SignUpForm() {
    return(
        <div className="div_signup_form">
            <label className="signup_label">First Name</label>
            <input type="text"/>
            <label className="signup_label">Last Name</label>
            <input type="text"/>
            <label className="signup_label">Email</label>
            <input type="text"/>
            <label className="signup_label">Password</label>
            <input type="password"/>
            <label className="signup_label">Confirm password</label>
            <input type="password"/>
            <button id="btn_signup_form">Sign Up</button>
        </div>
    );
}

export default SignUpForm;