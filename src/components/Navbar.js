import React, { useState } from "react";
import "../css/Navbar.css";
import headericon from "../images/new-logo/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle state

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    // { name: "Pricing", id: "pricing" },
    // { name: "Social", id: "social" },
    { name: "Contact", id: "contact" },
  ];

  const handleMenuClick = (sectionId) => {
    setIsOpen(false); // Link click hote hi menu band ho jaye
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, null, `#${sectionId}`);
    }
  };

  return (
    <nav className="navbar-container">
      {/* Logo */}
      <div className="navbar-logo" onClick={() => handleMenuClick("home")}>
        <img src={headericon} alt="GBG Logo" className="navbar-logo-img" />
      </div>

      {/* Hamburger Icon (Sirf Mobile pe dikhega) */}
      <div 
        className={`hamburger ${isOpen ? "active" : ""}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-links ${isOpen ? "show" : ""}`}>
        {navLinks.map((link, index) => (
          <React.Fragment key={link.id}>
            <li className="nav-item" onClick={() => handleMenuClick(link.id)}>
              <span className="nav-link">{link.name}</span>
            </li>
            {/* Desktop divider */}
            {index < navLinks.length - 1 && <li className="divider">|</li>}
          </React.Fragment>
        ))}
        
        {/* Mobile-only Button (Menu ke andar) */}
        <li className="mobile-only">
          <button className="btn-talk" onClick={() => handleMenuClick("contact")}>
            Let's Talk
          </button>
        </li>
      </ul>

      {/* Desktop-only Button */}
      <div className="navbar-action desktop-only">
        <button className="btn-talk" onClick={() => handleMenuClick("contact")}>
          Let's Talk
        </button>
      </div>
    </nav>
  );
};

export default Navbar;