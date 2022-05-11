import React from 'react';
import {Link} from 'react-router-dom';
import './naviagtion_menu.css'
import logo from '../../../assets/images/Asset 1.png'
import facebook from '../../../assets/images/facebook.png'
import instagram from '../../../assets/images/instagram.png'
import pinterest from '../../../assets/images/pinterest.png'
import iconMenu from '../../../assets/images/icon_menu.png'
import iconWeeklyMenu from '../../../assets/images/icon_weekly_menu.png'
import iconAbout from '../../../assets/images/icon_about.png'
import iconContact from '../../../assets/images/icon_contact.png'
import iconFAQ from '../../../assets/images/icon_faq.png'


function SideNav() {
    const linksStyle = {
        color: 'black',
        textDecoration: 'none'
    };
    return (
        <div className="div_navigation_menu">
            <img id="logo" src={logo}/>
            <ul className="navLinks">
                <Link style={linksStyle} to="../pages/browse_menu">
                    <li>
                        <span><img src={iconMenu}/><p>BROWSE THE MENU</p></span>
                    </li>
                </Link>
                <Link style={linksStyle} to="../pages/weekly_menu">
                    <li>
                        <span><img src={iconWeeklyMenu}/><p>WEEKLY MENU</p></span>
                    </li>
                </Link>
                <Link style={linksStyle} to="../pages/about">
                    <li>
                        <span><img src={iconAbout}/><p>ABOUT US</p></span>
                    </li>
                </Link>
                <Link style={linksStyle} to="../pages/contact">
                    <li>
                        <span><img src={iconContact}/><p>CONTACT US</p></span>
                    </li>
                </Link>

                <Link style={linksStyle} to="../pages/faq">
                    <li>
                        <span><img src={iconFAQ}/><p>FAQ</p></span>
                    </li>
                </Link>
            </ul>
            <ul className="accountButtons">
                <Link style={linksStyle} to="../pages/log_in">
                    <li>
                        <button id="btn-log-in" type="submit">Log in</button>
                    </li>
                </Link>
                <Link style={linksStyle} to="../pages/sign_up">
                    <li>
                        <button id="btn-sign-up" type="submit">Sign up</button>
                    </li>
                </Link>
            </ul>
            <ul className="socials">
                <li>
                    <a href="#">
                        <img src={facebook}/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={instagram}/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={pinterest}/>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default SideNav;