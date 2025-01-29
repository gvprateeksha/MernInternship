import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./../styles/navbar.css"; // Import your CSS for the Navbar

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const navigate = useNavigate(); // useNavigate hook for programmatic navigation

  const toggleMenu = () => {
    setNavToggle(!navToggle);
  };

  // Function to handle mouse enter event and navigate to the target page
  const handleMouseEnter = (path) => {
    navigate(path); // Navigate to the specified path on hover
  };

  return (
    <nav className={navbar ${navToggle ? "nav-toggle" : ""}}>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={fas ${navToggle ? "fa-times" : "fa-bars"}}></i>
      </div>
      <ul className={menu ${navToggle ? "active" : ""}}>
        <li>
          <NavLink
            to="/"
            smooth
            className="nav-link"
            onMouseEnter={() => handleMouseEnter("/")}
          >
            <i className="fas fa-home"></i> Home
          </NavLink>
        </li>
