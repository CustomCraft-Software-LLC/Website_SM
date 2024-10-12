import React, { useState } from 'react';

const ContactForm = () => {
    const [data, setData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => { 
        setData({...data, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
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