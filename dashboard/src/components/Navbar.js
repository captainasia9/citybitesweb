import React from "react";
import { FaCog, FaSearch, FaBell } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      {/* Left side */}
      <div className="navbar-left">
        <FaCog className="logo-icon" />
        <span className="brand">CityBites Admin</span>
      </div>

      {/* Right side */}
      <div className="navbar-right">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="bell-box">
          <FaBell className="bell-icon" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
