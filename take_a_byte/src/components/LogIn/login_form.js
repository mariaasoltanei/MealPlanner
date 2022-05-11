import React from "react";
import './css/login_form.css'

function LoginForm() {
    return (
        <div className="login_form">
            <label className="login_label">Email</label>
            <input type="text"/>
            <label className="login_label">Password</label>
            <input type="text"/>
            <button id="btn_login_form">Log in</button>
        </div>
    );

}
export default LoginForm;