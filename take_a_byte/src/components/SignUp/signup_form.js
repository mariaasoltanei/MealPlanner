import React, {useContext, useState} from "react";
import './css/signup_form.css'
import axios from "axios";
import {UserContext} from "../../context/user_context";
import {useNavigate} from "react-router-dom";

function SignUpForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const {user, setUser} = useContext(UserContext);
    let navigate = useNavigate();

    const insertUser = () => {
        if (!emailRegex.test(email.value)) {
            alert("Email not good");
            return;
        }
        axios.post("http://localhost:3000/pages/sign_up", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            userPassword: userPassword
        }).then(r => {
            navigate("../pages/browse_menu");
            setUser(r.data[0]);
            //console.log(user);
        })
    };
    const emailRegex = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);


    return (
        <div className="div_signup_form">
            <label className="signup_label">First Name</label>
            <input type="text" name="firstName" onChange={(e) => {
                setFirstName(e.target.value);
            }}/>
            <label className="signup_label">Last Name</label>
            <input type="text" name="lastName" onChange={(e) => {
                setLastName(e.target.value);
            }}/>
            <label className="signup_label">Email</label>
            <input type="email" name="userEmail" onChange={(e) => {
                setEmail(e.target.value);
            }}/>
            <label className="signup_label">Password</label>
            <input type="password" name="userPassword" onChange={(e) => {
                setUserPassword(e.target.value);
            }}/>
            <label className="signup_label">Confirm password</label>
            <input type="password" name="confirmPassword" onChange={(e) => {
                setConfirmPassword(e.target.value);
            }}/>
            <button id="btn_signup_form" onClick={insertUser}>Sign Up</button>
        </div>
    );
}

export default SignUpForm;