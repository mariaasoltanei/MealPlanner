import React from "react";
import './css/faq.css'
import NavigationBar from "../components/NavigationBar/navigation_bar";
import SearchQuestion from "../components/FAQ/search_question";
import QuestionsList from "../components/FAQ/questions_list";

function Faq() {
    return (
        <div className="div_faq_page">
            <NavigationBar/>
            <div className="div_faq_content">
                <SearchQuestion/>
                <QuestionsList/>
            </div>
        </div>
    );
}

export default Faq;