// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../src/assets/logo.png';
import colorLine from '../src/assets/gtf-color-line.png';
import colorLineBottom from '../src/assets/gtf-color-line-bottom.png';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing icons from React Icons

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Simple authentication check (for demo purposes)
        if (username === 'user' && password === 'password') {
            navigate('/home');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            {/* Top-Left Icon */}
            <div className="absolute top-2 left-0">
                <img
                    src={colorLine} // Replace with the path to your logo
                    alt="theme-coloe-line"
                    className="h-18 w-auto"
                />
            </div>
            <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
                {/* Logo Section */}
                <div className="flex justify-center mb-6">
                    <img
                        src={logo} // Replace with the path to your logo
                        alt="Logo"
                        className="h-16 w-auto"
                    />
                </div>
                {/* Username Input */}
                <input
                    type="text"
                    placeholder="Username"
                    className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                {/* Password Input */}
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 mb-6 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {/* Login Button */}
                <button
                    onClick={handleLogin}
                    className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-300"
                >
                    Login
                </button>

                {/* Social Media Icons */}
                <div className="flex justify-center mt-4 space-x-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-blue-700 text-2xl" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-pink-500 text-2xl" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-blue-600 text-2xl" />
                    </a>
                </div>
            </div>
            {/* Bottom-Right Icon */}
            <div className="absolute bottom-2 right-0">
                <img
                    src={colorLineBottom} // Replace with the path to your logo
                    alt="theme-coloe-line"
                    className="h-18 w-auto"
                />
            </div>
        </div>
    );
};

export default Login;
