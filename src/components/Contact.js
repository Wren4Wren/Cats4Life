import React, { useState } from "react";
import "../css/Contact.css"
// import background from './images/background'

const Background = new URL("./images/background.jpg", import.meta.url)

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
        <div className="Background">
            
            <h2> Contact Us</h2>
            <span>
            <form onSubmit={sendMail}>
                <input type="text" name="sender_name" value={sender_name} onChange={handleName} required placeholder="Your name" />
                <input type="email" name ="send_email" value={sende_email} onChange={handleEmail} required placeholder="your email id" />
                <p>
                <textarea name="message" value={message} onChange={handleMessage} required placeholder="your message" />
                <button type="sumbit">Send mail</button>
                </p>
            </form>
            </span>
           
        </div>
    );
};



export default Contact;