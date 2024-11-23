import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">BookStore</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#books">All Books</a></li>
      </ul>
      <div className="navbar-buttons">
        <button className="btn btn-signin">Sign In</button>
        <button className="btn btn-signup">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;

