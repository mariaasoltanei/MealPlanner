import React, {useState} from "react";
import './css/contact_form.css';

const emailRegex = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);


function ContactForm() {
    const [status, setStatus] = useState("Submit");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const {name, email, message} = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:5000/pages/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        if (emailRegex.test(email.value)) {
            setStatus("Submit");
            let result = await response.json();
            alert(result.status);
        } else {
            setStatus("Email not valid");
        }
    };
    return (
        <div className="div_contact_form">
            <form onSubmit={handleSubmit}>
                <ul className="ul_contact_form">
                    <li>
                        <p id="header_contact_form">Feel free to write us!</p>
                    </li>
                    <li>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" required/>
                    </li>
                    <li>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" required/>
                    </li>
                    <li>
                        <label htmlFor="message">Ask away</label>
                        <textarea id="message" required/>
                    </li>
                    <li>
                        <button className="btn_submit_contact_form" type="submit">Send</button>
                    </li>
                </ul>

            </form>
        </div>
    );
}

export default ContactForm;