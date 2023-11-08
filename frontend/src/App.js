import React, {useMemo, useState} from "react";
import {Route, Routes} from "react-router-dom";
import './App.css';
import BrowseMenu from "./pages/browse_menu";
import WeeklyMenu from "./pages/weekly_menu";
import Contact from "./pages/contact";
import About from "./pages/about";
import Faq from "./pages/faq";
import HomePage from "./pages/home";
import LogIn from "./pages/log_in";
import SignUp from "./pages/sign_up";
import MenuItemDetails from "./pages/menu_item_details";
import UserProfile from "./pages/user_profile";
import Cart from "./pages/cart_page";
import {UserContext} from "./context/user_context";
import {StateContext} from "./context/state_context";
import MealPlanConfig from "./pages/mealplan_page";
import GenerateMealPlan from "./pages/generate_mealplan";

function App() {
    const [user, setUser] = useState(null);
    const value = useMemo(() => ({user, setUser}), [user, setUser]);

    return (
        <div className="App">
            <StateContext>
                <UserContext.Provider value={value}>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/pages/browse_menu" element={<BrowseMenu/>}/>
                        <Route path="/pages/weekly_menu" element={<WeeklyMenu/>}/>
                        <Route path="/pages/about" element={<About/>}/>
                        <Route path="/pages/contact" element={<Contact/>}/>
                        <Route path="/pages/faq" element={<Faq/>}/>
                        <Route path="/pages/log_in" element={<LogIn/>}/>
                        <Route path="/pages/sign_up" element={<SignUp/>}/>
                        <Route path="/pages/:menuItemID" element={<MenuItemDetails/>}/>
                        <Route path="/pages/user_profile" element={<UserProfile/>}/>
                        <Route path="/pages/cart_page" element={<Cart/>}/>
                        <Route path="/pages/mealplan_page" element={<MealPlanConfig/>}/>
                        <Route path="/pages/generate_mealplan" element={<GenerateMealPlan/>}/>
                    </Routes>

                </UserContext.Provider>
            </StateContext>

        </div>
    );
}

export default App;
