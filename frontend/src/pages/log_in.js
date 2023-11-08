import React, {useState} from "react";
import './css/log_in.css'
import NavigationBar from "../components/NavigationBar/navigation_bar";
import LogInDiv from "../components/LogIn/login_div";

function LogIn() {
    const [loginStatus, setLoginStatus] = useState(false);
    return (
        <div className="div_login_page">
            <NavigationBar setLoginStatus={setLoginStatus}/>
            <div className="div_login_content">
                <LogInDiv/>
            </div>
        </div>
    );
}

export default LogIn;