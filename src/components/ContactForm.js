import React, { useState } from 'react';
import "../styles/layout.css";

const ContactForm = () => {
    // State to store form data
    const [data, setData] = useState({ name: "", email: "", message: "" });

    // Handle input changes
    const handleChange = (e) => { 
        setData({...data, [e.target.name]: e.target.value});
    }

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can now process the form data, send it to an API, etc.
        console.log("Form submitted:", data);
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <label>
                Name:
                <input 
                    type="text" 
                    name="name" 
                    value={data.name} 
                    onChange={handleChange} 
                    required 
                />
            </label>

            <label>
                Email:
                <input 
                    type="email" 
                    name="email" 
                    value={data.email} 
                    onChange={handleChange} 
                    required 
                />
            </label>

            <label>
                Message:
                <textarea 
                    name="message" 
                    value={data.message} 
                    onChange={handleChange} 
                    required 
                />
            </label>

            <button type="submit">Submit</button>
        </form>
    );
}

export default ContactForm;