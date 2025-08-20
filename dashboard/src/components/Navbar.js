import React from "react";
import { FaBell } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Side - Logo */}
      <div className="navbar-logo">MyLogo</div>

      {/* Right Side - Search + Bell */}
      <div className="navbar-right">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
        />
        <FaBell className="bell-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
