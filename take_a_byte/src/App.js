import React, {Component} from "react";
import { Route, Routes} from "react-router-dom";
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

class App extends Component {
    state = {
        data: null
    };

    componentDidMount() {
        this.callBackendAPI()
            .then(res => this.setState({ data: res.express }))
            .catch(err => console.log(err));
    }

    callBackendAPI = async () => {
        const response = await fetch('/api');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };
    render() {
        return (
            <div className="App">
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
                </Routes>

            </div>
        );
    }
}
export default App;
