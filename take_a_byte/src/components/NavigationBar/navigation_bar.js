import React from "react";
import './navigation_bar.css';
import logo from '../../assets/images/Asset 1.png'
import {Link} from "react-router-dom";
import iconCart from '../../assets/images/iconCart.png'


function NavigationBar() {
    const linksStyle = {
        color: 'black',
        textDecoration: 'none'
    };
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
                    <p className="p_link">WEEKLY MENU</p>
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
                <Link to="../pages/log_in">
                    <button id="btn_login">Log in</button>
                </Link>
                <Link to="../pages/sign_up">
                    <button id="btn_signup">Sign up</button>
                </Link>

            </div>
            <div className="div_cart">
                <img id="icon_cart" src={iconCart}/>
            </div>
        </div>
    );
}

export default NavigationBar;
/*
            <Link style={linksStyle} to="/">
                <img id="logo_navBar" src={logo}/>
            </Link>
            <nav>
                <ul className="ul_navBar">
                    <Link style={linksStyle} to="../pages/browse_menu">
                        <li>
                            <p>BROWSE THE MENU</p>
                        </li>
                    </Link>
                    <Link style={linksStyle} to="../pages/weekly_menu">
                        <li>
                            <p>WEEKLY MENU</p>
                        </li>
                    </Link>
                    <Link style={linksStyle} to="../pages/about">
                        <li>
                            <p>ABOUT US</p>
                        </li>
                    </Link>
                    <Link style={linksStyle} to="../pages/contact">
                        <li>
                            <p>CONTACT US</p>
                        </li>
                    </Link>

                    <Link style={linksStyle} to="../pages/faq">
                        <li>
                            <p>FAQ</p>
                        </li>
                    </Link>
                    <div className="div_btn_navBar">
                        <Link to="../pages/log_in">
                            <li>
                                <button style={{marginBottom: "0px"}} id="btn-log-in">Log in</button>
                            </li>
                        </Link>
                        <Link to="../pages/sign_up">
                            <li>
                                <button id="btn-sign-up">Sign up</button>
                            </li>
                        </Link>
                    </div>
                </ul>
            </nav>






#logo_navBar {
    height: 50px;
    width: 90px;
    float: left;
    margin-left: 50px;
}


.ul_navBar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
}
.ul_navBar li{
    padding-left: 25px;
}
.ul_navBar p {
    font-family: "Lato Regular";
    font-size: 17px;
}


.div_btn_navBar {
    right: 0px;
    float: right;
    display: flex;
    flex-direction: row;
}
 */