import React, { useState } from "react";
import './contactus.css'

function ContactUs() {

    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputMessage, setInputMessage] = useState('');

    const handleNameChange = (event) => {
        setInputName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setInputEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
        setInputMessage(event.target.value);
    };

    const handleClick = (event) => {
        
      };
    return (
        <>
        <div className="contact-section">
            <h2>Got Any Questions?</h2>
            <div className="form-container">
                <form>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" value={inputName} onChange={handleNameChange}/>

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={inputEmail} onChange={handleEmailChange}/>

                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows="3" value={inputMessage} onChange={handleMessageChange}/>

                    <button onClick={handleClick}>Send</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default ContactUs;