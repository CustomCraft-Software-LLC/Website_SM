import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const ContactForm = () => {
    const [data, setData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors = {};
        if (!data.name.trim()) newErrors.name = "Name is required.";
        if (!data.email) newErrors.email = "Email is required.";
        else if (!/\S+@\S+\.\S+/.test(data.email)) newErrors.email = "Email is invalid.";
        if (!data.message.trim()) newErrors.message = "Message cannot be empty.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setSubmitted(true);
            setData({ name: "", email: "", message: "" });
            setErrors({});
            // Here you could send `data` to an API or handle form submission
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                maxWidth: '500px',
                margin: '0 auto',
                padding: 3,
                borderRadius: 2,
                boxShadow: 3,
                backgroundColor: '#fff',
            }}
        >
            <Typography variant="h5" sx={{ mb: 1, textAlign: 'center' }}>
                Contact Us
            </Typography>

            <TextField
                label="Name"
                variant="outlined"
                name="name"
                value={data.name}
                onChange={handleChange}
                required
                fullWidth
                error={!!errors.name}
                helperText={errors.name}
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
                error={!!errors.email}
                helperText={errors.email}
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
                fullWidth
                error={!!errors.message}
                helperText={errors.message}
                inputProps={{ maxLength: 1000 }}
            />

            <Button
                type="submit"
                variant="contained"
                sx={{
                    mt: 2,
                    backgroundColor: '#003',
                    '&:hover': { backgroundColor: '#00a' },
                    '&:disabled': { backgroundColor: '#ccc' },
                }}
                disabled={submitted}
            >
                {submitted ? "Submitted!" : "Submit"}
            </Button>
        </Box>
    );
};

export default ContactForm;