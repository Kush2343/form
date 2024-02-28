import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Nav() {
    const [isMenuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  return (
    <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
    <div className="logo">Logo</div>
    <div className={`menu-toggle ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
    <ul className={`nav-list ${isMenuOpen ? "open" : ""}`}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/register">Register</Link></li>
    </ul>
  </nav>
  );
}

export default Nav;
