import React from "react";
import './css/contact.css';
import NavigationBar from "../components/NavigationBar/navigation_bar";
import image from '../assets/images/image_front.png'
import ContactForm from "../components/ContactForm/contact_form";

function Contact() {

    return (
        <div className="div_contact_page">
            <NavigationBar/>
            <div className="div_contact_content">
                <ContactForm/>
                <div className="div_image_contact">
                    <img id="imageContact" src={image}/>
                </div>
            </div>

        </div>
    );
}

export default Contact;