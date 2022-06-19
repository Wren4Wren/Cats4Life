import React, { useState } from "react";
import "../css/Contact.css";

const Contact = () => {

const [sender_name, set_sender_name] = useState('');
const [sende_email, set_sender_email] = useState('');
const [message, set_message] = useState('');

const handleName =(e) => {
    set_sender_name(e.target.value)  
}

const handleEmail =(e) => {
    set_sender_email(e.target.value)
}

const handleMessage =(e) =>{
    set_message(e.target.value) 
}

const sendMail=(e) =>
e.preventDefault();

return ( 
    <div>
        <h1 className="headerContact"> Contact Us</h1>
        <div className="box">
        <form onSubmit={sendMail}>
            <input type="text" name="sender_name" value={sender_name} onChange={handleName} required placeholder="Your name" />
            <input type="email" name ="send_email" value={sende_email} onChange={handleEmail} required placeholder="your email id" />
            <textarea className="messageBox" name="message" value={message} onChange={handleMessage} required placeholder="your message" />
            <button className="ContactBtn" type="sumbit">Send mail</button>
        </form>
        </div>
    </div>
);
}

export default Contact;
