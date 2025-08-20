import React from "react";
import { PiStorefrontFill, PiChartLine } from "react-icons/pi";   // Phosphor icons
import { TfiMenuAlt } from "react-icons/tfi";                     // Themify icons
import { BsPercent } from "react-icons/bs";                       // Bootstrap icons
import { FaShoppingBag } from "react-icons/fa";                   // FontAwesome (solid)
import { FaRegStar } from "react-icons/fa";                       // FontAwesome (regular)
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";    // Ionicons v5
import { FiSettings } from "react-icons/fi";                      // Feather icons
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="brand1">CityBites Admin</h2>
      <ul className="menu">
        <li className="active"><PiStorefrontFill /> Stores</li>
        <li><TfiMenuAlt /> Menus</li>
        <li><BsPercent /> Offers</li>
        <li><FaShoppingBag /> Orders</li>
        <li><FaRegStar /> Reviews</li>
        <li><IoChatbubbleEllipsesOutline /> Chats</li>
        <li><PiChartLine /> Analytics</li>
        <li><FiSettings /> Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
