import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
         <h2 className="navbar-name">Medical Core</h2>
         <ul className="navbar-list">
            <li className="navbar-item">
                <a href="#" className="navbar-link">Home</a>
            </li>
            <li className="navbar-item">
                <a href="#" className="navbar-link">Product</a>
            </li>
            <li className="navbar-item">
                <a href="#" className="navbar-link">Pricing</a>
            </li>
            <li className="navbar-item">
                <a href="#" className="navbar-link">Contact</a>
            </li>
         </ul>
         <div className="navbar-title">
             <a href="#" className="navbar-links">Login</a>
             <button className="navbar-button">Join Us</button>
         </div>
      </div>
    </div>
  );
};

export default Navbar;