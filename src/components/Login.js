import React, { useState } from 'react';
import axios from '../axiosConfig';
import {jwtDecode} from 'jwt-decode'; // Corrected import statement

const LoginForm = ({ handleLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response;
    
            if (password) {
                response = await axios.post('/api/login', { username, password });}
            else {
                
                response = await axios.get(`/api/login/direct?username=${username}`);
            }
    
            const { token } = response.data;
    
            // Decode the token to get userId and isAdmin
            const decodedToken = jwtDecode(token);
            const { userId, isAdmin } = decodedToken;
    
            // Store token and user info in localStorage
            localStorage.setItem('token', token);
            localStorage.setItem('isAdmin', isAdmin);
            localStorage.setItem('userId', userId);
    
            // Call parent handleLogin function with isAdmin parameter
            handleLogin(isAdmin);
        } catch (error) {
            console.error('Login failed:', error.response.data.message);
        setError(error.response.data.message);
        }
    };
    

    return (
        <div>
            <h2>Login</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </label>
                <br />
                    <>
                        <label>
                            Password:
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </label>
                        <br />
                    </>
                <button type="submit">Login</button>
            </form>
            <p >Note: Please enter only username for user login</p>
        </div>
    );
};

export default LoginForm;
