import React, {useContext} from "react";
import './css/user_profile.css'
import NavigationBar from "../components/NavigationBar/navigation_bar";
import {UserContext} from "../context/user_context";

function UserProfile(){
    const { user, setUser } = useContext(UserContext);
    return(
        <div className="div_user_page">
            <NavigationBar/>
            <div className="div_user_content">
                <h1>{user.firstName}</h1>
                <h2>{user.email}</h2>
                <h3>{user.lastName}</h3>
            </div>
        </div>
    );
}
export default UserProfile;