import React from "react";
import './css/log_in.css'
import NavigationBar from "../components/NavigationBar/navigation_bar";
import LogInDiv from "../components/LogIn/login_div";

function LogIn() {
    return (
        <div className="div_login_page">
            <NavigationBar/>
            <div className="div_login_content">
                <LogInDiv/>
            </div>
        </div>
    );
}

export default LogIn;