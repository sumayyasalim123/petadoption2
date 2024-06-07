import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Use useNavigate for navigation

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login/', {
                username: username,
                password: password
            });
            // Assuming the response contains access token and user role
            const { access, role } = response.data;
            // Store access token and user role in localStorage or state
            localStorage.setItem('accessToken', access);
            localStorage.setItem('userRole', role);
            // Redirect based on user role
            if (role === 'Admin') {
                navigate('/admin'); // Redirect to Admin Home
            } else if (role === 'Donor') {
                navigate('/donor'); // Redirect to Donor Home
            } else if (role === 'Buyer') {
                navigate('/buyer'); // Redirect to Buyer Home
            }
        } catch (error) {
            console.error('Login Error:', error.response);
            setError('Invalid username or password');
        }
    };

    return (
        <div>
            <Navbar />
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card" style={{ width: '400px', height: '500px' }}>
                <div className="card-body">
                    <h2 className="card-title text-center">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username:</label>
                            <input type="text" id="username" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password:</label>
                            <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                    {error && <p className="text-danger text-center mt-3">{error}</p>}
                </div>
            </div>
        </div></div>

    );
};

export default Login;
