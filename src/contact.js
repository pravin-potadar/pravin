import "./contact.css";
import React, { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); 

        const whatsappNumber = "7558765703";
        const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

        window.open(whatsappLink, "_blank");
    };

    const handleCall = () => {
        window.location.href = "tel:7558765703"; // This will open the dialer with the phone number
    };

    return (
        <div className="contact-container">
            <div id="contact">
                <h1 className="text-center">Contact Us</h1>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea
                            className="form-control"
                            id="message"
                            rows="5"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
                
               
                <button style={{width : "80%" , margin:"10px 10px 10px 118px"}} onClick={handleCall} className="btn btn-secondary mt-3">
                    Call Us
                </button>
            </div>
        </div>
    );
};

export default Contact;
