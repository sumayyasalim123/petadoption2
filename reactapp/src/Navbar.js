



import React, { useState } from 'react';
import './App.css'; // Import your CSS file
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="brand">Pet Factory</div>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <div className="toggle-bar"></div>
        <div className="toggle-bar"></div>
        <div className="toggle-bar"></div>
      </div>
      <ul className={`nav-items ${isOpen ? 'active' : ''}`}>
        <li> <Link className="nav-link" to="/login">login</Link></li>
        <li> <Link className="nav-link" to="/donoreg">donoreg</Link></li>
        <li> <Link className="nav-link" to="/buyereg">buyereg</Link></li>
       
      </ul>
    </nav>
  );
}

export default Navbar;
