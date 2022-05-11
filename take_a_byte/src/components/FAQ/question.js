import React, {useState} from "react";
import './css/question.css'
import logoFAQ from '../../assets/images/icon_faq.png'


function Question(props) {
    const qa = [
        {
            "question": "What happens if I am planning to prepare a specific meal for multiple guests, will the ingredients be enough?",
            "answer": "Any recipe comes with a heading at the end before deciding to put it in the shopping cart. The heading contains options such as “Dinner alone” and then from two people up to 20."
        },
        {
            "question": " I don’t really have experience with cooking. Will that be a problem if I want to order from a Take a Byte?",
            "answer": "Not at all. All boxes that come with ingredients have also a recipe included. The format makes it accessible for newcomers to follow it, you don’t even need to be a chef in order to create something you can enjoy. Everyone starts from somewhere, so you can start with us if you want to begin your cooking journey. "
        },
    ]
    const [showResults, setShowResults] = useState(false)
    const onClick = () => setShowResults(prev => !prev)
    return (
        <div className="div_qa">
            <div className="div_question">
                <button className="btn_display_ans" onClick={onClick}><img className="img_btn" src={logoFAQ} alt=""/></button>
                <h3 className="question_text">{qa[0].question}</h3>
            </div>
            {showResults && <Answer answer = {qa[0].answer}/>}
        </div>

    );
}

function Answer(props) {
    return (
        <div className="div_answer">
            <p className="p_answer">{props.answer}</p>
        </div>
    );

}

export default Question;
/*
        <div className="div_qa">
            <div className="div_question">
            <button className="btn_show_answer" onClick={onClick}
            >cv</button>
            <p>{props.text}</p>
            </div>

            {showResults ? <Results /> : null}
        </div>
 */