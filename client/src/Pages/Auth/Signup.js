import React from "react";
import "./auth.css";


function Signup() {
    return (
        <>
            <h2>Create Account</h2>
            <p className="text-muted">
                Register to book your first slot
            </p>

            <form>
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Full Name"
                />

                <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Email"
                />

                <input
                    type="password"
                    className="form-control mb-4"
                    placeholder="Password"
                />

                <button className="btn btn-success w-100 mb-3">
                    Sign Up
                </button>
            </form>
        </>
    );
}

export default Signup;