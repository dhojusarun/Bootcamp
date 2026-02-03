import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "../CSS/Login.css";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Login() {
    const [name, setName] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = () => {
        if (name.trim()) {
            login(name);
            navigate(from, { replace: true });
        } else {
            alert("Please enter your name");
        }
    };

    return (
        <>
            <div className="login">
                <h1>Welcome to Login</h1>
                <div className="input-fields">
                    <label htmlFor="Full name">Full Name</label>
                    <input
                        type="text"
                        id="Full name"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="Password">Password</label>
                    <input
                        type="password"
                        id="Password"
                        placeholder="Enter your password"
                    />
                    <div className="options">
                        <p>
                            <input type="checkbox" />Remember me</p>
                        <p>Forgot your password?</p>
                    </div>
                </div>
                <div className="button">
                    <button onClick={handleLogin}>Login</button>
                </div>
                <div className="register">
                    don't have an account? <button className="register-btn"><NavLink to="/register">Register</NavLink></button>
                </div>
            </div>
        </>
    );
}

export default Login;
