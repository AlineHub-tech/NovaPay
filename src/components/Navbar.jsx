import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* LOGO */}
        <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
          <div className="logo-icon">N</div>
          <span>NOVAPAY</span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="nav-links-desktop">
          <Link to="/" className="nav-link">Personal</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/register" className="btn-nav-primary">
            Open Account <ChevronRight size={16} />
          </Link>
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE OVERLAY MENU */}
      <div className={`nav-links-mobile ${isOpen ? 'active' : ''}`}>
        <Link to="/" className="mobile-link" onClick={toggleMenu}>Home</Link>
        <Link to="/about" className="mobile-link" onClick={toggleMenu}>About Us</Link>
        <Link to="/features" className="mobile-link" onClick={toggleMenu}>Services</Link>
        <Link to="/register" className="btn-mobile-primary" onClick={toggleMenu}>
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
