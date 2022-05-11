import React from "react";
import NavigationBar from "../components/NavigationBar/navigation_bar";
import './css/about.css'
import AboutProducts from "../components/AboutUs/about_products";

function About() {
    const aboutText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," +
        " quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." +
        " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est" +
        " laborum."
    return (
        <div className="div_about_page">
            <NavigationBar/>
            <div className="div_about_content">
                <AboutProducts/>
                <div className="div_text">
                    <p>{aboutText}</p>
                    <p id="p_text">We invite you to take your first <span id="different_text">byte</span> !</p>
                </div>
            </div>
        </div>
    );
}

export default About;