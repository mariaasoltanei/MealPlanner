import React, {useState} from "react";
import SideNav from "../components/FrontPageComponents/NavigationMenu/navigation_menu";
import MainPage from "../components/FrontPageComponents/Main/main_page";
import './css/home.css'

function HomePage() {

    return (
        <div className="div_home_page">
            <SideNav/>
            <MainPage/>
        </div>
    );
}

export default HomePage;