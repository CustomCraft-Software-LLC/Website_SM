import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import '../styles/contactForm.css';

const ContactForm = () => {
    const [data, setData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => { 
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Box component="form" className="contact-form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
                label="Name"
                variant="outlined"
                name="name"
                value={data.name}
                onChange={handleChange}
                required
                fullWidth
            />

            <TextField
                label="Email"
                variant="outlined"
                name="email"
                value={data.email}
                onChange={handleChange}
                required
                type="email"
                fullWidth
            />

            <TextField
                label="Message"
                variant="outlined"
                name="message"
                value={data.message}
                onChange={handleChange}
                required
                multiline
                rows={6}
                inputProps={{ maxLength: 1000 }}
                fullWidth
            />

            <Button type="submit" variant="contained" className="submit-button">
                Submit
            </Button>
        </Box>
    );
}

export default ContactForm;