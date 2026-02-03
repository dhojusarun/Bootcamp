import "./Header.css";
import { NavLink } from "react-router-dom";
import Search from "./input fields/Search";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <>
      <nav className="navbar">
        <h1 className="logo">Smiley</h1>
        <Search />
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/trendingmovies">Trending Movies</NavLink>
          <NavLink to="/popularmovies">Popular Movies</NavLink>
          <NavLink to="/newmovies">New Movies</NavLink>
        </div>
        <div className="auth-section">
          {isAuthenticated ? (
            <div className="user-info">
              <span>Welcome, {user}</span>
              <button className="login-btn" onClick={logout}>Logout</button>
            </div>
          ) : (
            <button className="login-btn"><NavLink to="/login">Login</NavLink></button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
