import React from 'react';
import './Navbar.css';
import Dropdown from './Dropdown';

// Import your logo image
import logo from './logo.png'; // Replace '../assets/logo.png' with the path to your logo image

function Navbar() {
  return (
    <ul className="navbar">
      {/* Logo */}
      <li className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </li>
      {/* Navigation links */}
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <Dropdown />
      <li><a href="#contact">Contact Us</a></li>
      <li><a href="#signup">Sign Up</a></li>
    </ul>
  );
}

export default Navbar;





