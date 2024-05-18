import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

        if (username === 'admin' && password === 'admin') {
            setLoggedIn(true);
        } else {
            alert('Invalid username or password');
        }
    };

    if (loggedIn) {
        return <Navigate to="/admin" />;
    }

    return (
        

        <div className="form-container">
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button className="form-container" onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
