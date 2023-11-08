import React, {useContext} from "react";
import './css/navigation_bar.css';
import logo from '../../assets/images/Asset 1.png'
import {Link, useNavigate} from "react-router-dom";
import iconCart from '../../assets/images/heart-icon.png'
import {UserContext} from "../../context/user_context";
import profiileIcon from "../../assets/images/profile_icon.png"
import {Button} from "@mui/material";
import mealPlanLogo from '../../assets/images/mealPlanLogo.png'


function NavigationBar() {
    const {user, setUser} = useContext(UserContext);
    //const state = useSelector((state) => state.handleCart);
    const linksStyle = {
        color: 'black',
        textDecoration: 'none'
    };
    let navigate = useNavigate();
    const seeProfile = () => {
        navigate("../pages/user_profile");
    }
    return (
        <div className="div_navBar">
            <div className="div_logo">
                <Link style={linksStyle} to="/">
                    <img id="logo_navBar" src={logo}/>
                </Link>
            </div>
            <div className="div_nav_links">
                <Link style={linksStyle} to="../pages/browse_menu">
                    <p className="p_link">BROWSE THE MENU</p>
                </Link>

                <Link style={linksStyle} to="../pages/weekly_menu">
                    <p className="p_link">MEAL PLANS</p>
                </Link>
                <Link style={linksStyle} to="../pages/about">
                    <p className="p_link">ABOUT US</p>
                </Link>
                <Link style={linksStyle} to="../pages/contact">
                    <p className="p_link">CONTACT US</p>
                </Link>

                <Link style={linksStyle} to="../pages/faq">
                    <p className="p_link">FAQ</p>
                </Link>

            </div>
            <div className="div_buttons">
                {
                    user ? (
                        <>
                            <img id="profile_icon" src={profiileIcon} onClick={seeProfile}/>
                            <p>Welcome, </p>
                            <h4>{user.firstName}!</h4>
                            <Link to="/">
                                <button id="btn_signup" onClick={() => setUser(null)}>Log out</button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="../pages/log_in">
                                <button id="btn_login">Log in</button>
                            </Link>
                            <Link to="../pages/sign_up">
                                <button id="btn_signup">Sign up</button>
                            </Link>
                        </>
                    )
                }
            </div>
            <div className="div_cart">
                <Link style={linksStyle} to="../pages/cart_page">
                    <Button>
                        <img id="img_cart" src={iconCart}/>
                    </Button>
                </Link>
            </div>
            <div className="div_cart">
                <Link style={linksStyle} to="../pages/mealplan_page">
                    <Button>
                        <img id="img_cart" src={mealPlanLogo}/>
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default NavigationBar;