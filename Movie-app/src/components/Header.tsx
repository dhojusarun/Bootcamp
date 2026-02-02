import React from "react";
import "./Header.css";
function Header() {
  return (
    <>
      <nav className="navbar">
        <h1 className="logo">Logo</h1>
        <ul className="nav-links">
            <li>Home</li>
            <li>Movies</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </nav>
    </>
  );
}

export default Header;
