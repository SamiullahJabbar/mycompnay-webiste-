import React from "react";
import "../css/Navbar.css";
import headericon from "../images/header/gbglogo.png"; // Import the logo image

const Navbar = () => {
  
  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Pricing", id: "pricing" },
    { name: "Social", id: "social" },
    { name: "Contact", id: "contact" },
  ];

  // Simple aur effective scrolling function
  const handleMenuClick = (sectionId) => {
    console.log(`🟢 Clicked on: ${sectionId}`);
    
    const element = document.getElementById(sectionId);
    
    if (element) {
      // Smooth scroll
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'
      });
      
      // URL update
      window.history.pushState(null, null, `#${sectionId}`);
    } else {
      console.warn(`Element '${sectionId}' not found, scrolling to top`);
      
      // Agar element nahi mila toh top pe scroll karo
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, null, '#home');
      }
    }
  };

  return (
    <nav className="navbar-container">
      {/* Logo with Image */}
      <div 
        className="navbar-logo" 
        onClick={() => handleMenuClick("home")}
        style={{ cursor: "pointer" }}
      >
        <img 
          src={headericon} 
          alt="GBG Logo" 
          className="navbar-logo-img"
        />
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        {navLinks.map((link, index) => (
          <React.Fragment key={link.id}>
            <li 
              className="nav-item"
              onClick={() => handleMenuClick(link.id)}
            >
              <span className="nav-link">
                {link.name}
              </span>
            </li>
            
            {/* Divider */}
            {index < navLinks.length - 1 && <li className="divider">|</li>}
          </React.Fragment>
        ))}
      </ul>

      {/* Let's Talk Button */}
      <div className="navbar-action">
        <button 
          className="btn-talk" 
          onClick={() => handleMenuClick("contact")}
        >
          Let's Talk
        </button>
      </div>
    </nav>
  );
};

export default Navbar;