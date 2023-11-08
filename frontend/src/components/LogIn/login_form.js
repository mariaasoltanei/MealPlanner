import React, {useContext, useState} from "react";
import './css/login_form.css'
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../context/user_context";


function LoginForm() {
    const [email, setEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [errMessage, setErrMessage] = useState("");
    const {user, setUser} = useContext(UserContext);
    let navigate = useNavigate();
    const getUser = () => {
        axios.post("http://localhost:3000/pages/log_in", {
            email: email,
            userPassword: userPassword
        }).then(r => {
            if (r.data.length > 0) {
                navigate("../pages/browse_menu");
                setUser(r.data[0]);
                console.log(r.data[0]);
            } else {
                setErrMessage("Wrong email or password")
            }
        })
    };
    return (
        <div className="login_form">
            <label className="login_label">Email</label>
            <input type="text" onChange={(e) => {
                setEmail(e.target.value);
            }}/>
            <label className="login_label">Password</label>
            <input type="password" onChange={(e) => {
                setUserPassword(e.target.value);
            }}/>
            <button id="btn_login_form" onClick={getUser}>Log in</button>
            {
                <p id="p_err_login">{errMessage}</p>
            }
        </div>
    );

}

export default LoginForm;