import React, { useState } from 'react';
import { MongoClient } from 'mongodb';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async () => {
        try {
            const client = new MongoClient('<mongodb_connection_string>');
            await client.connect();

            const db = client.db('<database_name>');
            const collection = db.collection('<collection_name>');

            const user = await collection.findOne({ email, password });

            if (user) {
                // Successful login logic
                setMessage('Login successful');
            } else {
                // Failed login logic
                setMessage('Login failed');
            }

            await client.close();
        } catch (error) {
            console.error('Error occurred during login:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                />

                <button type="submit">Login</button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;