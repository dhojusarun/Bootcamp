// src/components/AuthForm.jsx
import { NavLink } from "react-router-dom";
import "../CSS/Login.css";

function AuthForm({ type }) {
  return (
    <div className="login-page">
      <div className="login">
        <h1>Welcome to {type}</h1>
        <div className="input-fields">
          {type === "Register" && (
            <>
              <label htmlFor="Full name">Full Name</label>
              <input type="text" id="Full name" placeholder="Enter your full name" />
              <label htmlFor="Email">Email</label>
              <input type="email" id="Email" placeholder="Enter your email" />
            </>
          )}
          {type === "Login" && (
            <>
              <label htmlFor="Full name">Full Name</label>
              <input type="text" id="Full name" placeholder="Enter your full name" />
            </>
          )}
          <label htmlFor="Password">Password</label>
          <input type="password" id="Password" placeholder="Enter your password" />

          <div className="options">
            <p><input type="checkbox" /> Remember me</p>
            <p>Forgot your password?</p>
          </div>
        </div>

        <div className="button">
          <button>{type}</button>
        </div>

        <div className="register">
          {type === "Login" ? (
            <>
              <p>Don't have an account?</p>
              <button className="register-btn">
                <NavLink to="/register">Register</NavLink>
              </button>
            </>
          ) : (
            <>
              <p>Already have an account?</p>
              <button className="register-btn">
                <NavLink to="/login">Login</NavLink>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
