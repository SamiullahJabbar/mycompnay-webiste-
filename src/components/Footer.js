import React from 'react';
import '../css/Footer.css';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="gbg-footer-main">
      {/* Top Border Line */}
      <div className="gbg-footer-top-line"></div>

      {/* Purple Glow Effects (Neeche se upar ki taraf) */}
      <div className="gbg-footer-glow gbg-footer-glow-left"></div>
      <div className="gbg-footer-glow gbg-footer-glow-right"></div>

      <div className="gbg-footer-container">
        {/* Left Section: Menu */}
        <div className="gbg-footer-section gbg-footer-menu-section">
          <h3 className="gbg-footer-title">Menu</h3>
          <ul className="gbg-footer-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#industries">About</a></li>
            <li><a href="#home">Technologies</a></li>
            <li><a href="#portfolio">Projects</a></li>
          </ul>
        </div>

        {/* Center Section: GBG & CTA */}
        <div className="gbg-footer-section gbg-footer-center-section">
          <div className="gbg-footer-brand-box">
            <h1 className="gbg-footer-brand-logo">GlobalBiz Agentic</h1>
            <p className="gbg-footer-brand-tagline">Automation. Innovation. Excellence.</p>
          </div>
          
          <h2 className="gbg-footer-cta-heading">How can we help you?</h2>
          <p className="gbg-footer-cta-subtext">
            Are you ready to push boundaries and explore new frontiers of innovation?
          </p>
          <button className="gbg-footer-cta-button">Let’s work together</button>
        </div>

        {/* Right Section: Contact & Socials */}
        <div className="gbg-footer-section gbg-footer-social-section">
          <div className="gbg-footer-social-icons">
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
          <div className="gbg-footer-contact-info">
            <p className="gbg-footer-email">info@globalbizagentic.com</p>
            <p className="gbg-footer-phone">+44 7799287206</p>
          </div>
        </div>
      </div>

      <div className="gbg-footer-bottom">
        <p>Copyright © 2026 <span className="gbg-footer-highlight">GlobalBiz Agentic</span>. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;