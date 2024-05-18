import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/contact', {
                name,
                email,
                message,
            });
            if (response.status === 201) {
                setSuccess(true);
                setName('');
                setEmail('');
                setMessage('');
                setError('');
            }
        } catch (err) {
            setError('Failed to send message. Please try again later.');
        }
    };

    return (
        <div class= 'form-container'>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
                <button type="submit">Send Message</button>
            </form>
            {success && <p>Message sent successfully!</p>}
            {error && <p>{error}</p>}
        </div>
    );
};

export default Contact;
