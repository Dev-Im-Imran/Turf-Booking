import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";
import { useState, useEffect } from "react";
import Signup from "./Signup";

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch(`http://localhost:5000/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })

            const result = await response.json();

            if (response.ok) {
                setMessage("Login is Successful Token:", result.token);
                console.log(result);
            }
        } catch (error) {
            setMessage('Login failed!!');
            console.log('login failed');
        }
    }

    return (
        <div className="auth-wrapper">
            <div className={`auth-box ${!isLogin ? "active" : ""}`}>

                {/* IMAGE SIDE */}
                <div className="auth-image">
                    <img src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d" alt="Turf" />
                </div>

                {/* FORM SIDE */}
                <div className="auth-form-container">
                    {isLogin ? (
                        <>
                            <h2>Welcome Back</h2>
                            <p className="text-muted">Login to continue booking</p>

                            <form>
                                <input
                                    type="email"
                                    className="form-control mb-3"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />

                                <input
                                    type="password"
                                    className="form-control mb-4"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />

                                <button className="btn btn-success w-100 mb-3" onClick={handleSubmit()}>
                                    Login
                                </button>
                            </form>
                        </>
                    ) : (
                        <Signup />
                    )}

                    {/* SWITCH BUTTON (BOTTOM) */}
                    <button
                        className="btn btn-outline-success switch-btn"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin
                            ? "Don't have an account? Sign Up"
                            : "Already have an account? Login"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
