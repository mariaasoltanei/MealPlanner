import React from "react";
import './css/login_div.css'
import LoginForm from "./login_form";
import {Link} from "react-router-dom";

function LogInDiv() {
    return (
        <div className="div_login">
            <div className="div_login_gradient">
                <div className="div_login_opaque">
                    <div className="div_login_form">
                        <h2>Log in</h2>
                        <LoginForm/>
                        <p>Don't have an account? <Link to="../pages/sign_up">Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogInDiv ;