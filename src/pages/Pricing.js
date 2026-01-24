import React from 'react';
import '../css/Pricing.css';
import personImg from '../images/pricing.png'; 

// Icons import
import iconFrontend from "../images/svg/code.svg"; 
import iconBackend from "../images/svg/database.svg";
import iconWP from "../images/svg/wordpress.svg";
import iconDevOps from "../images/svg/database1.svg"; 
import iconHTML from "../images/svg/html.svg";
import iconJS from "../images/svg/javascript.svg";

const Pricing = () => {
  const packages = [
    { title: "Standard Website", price: "$900", icon: iconFrontend, desc: "Perfect for: Small businesses, portfolios, service providers" },
    { title: "E-Commerce Website", price: "$1,200", icon: iconBackend, desc: "Perfect for: Online stores, businesses, and anyone looking to sell products online." },
    { title: "Advanced Website", price: "$1,500", icon: iconWP, desc: "Perfect for: Growing businesses, professional services, agencies" },
    { title: "LMS Website", price: "$1,500", icon: iconDevOps, desc: "Perfect for: Course creators, educational institutions, trainers" },
    { title: "Custom Theme", price: "$1,999", icon: iconHTML, desc: "Perfect for: Unique designs, specific industry needs, scalable solutions" },
    { title: "Enterprise", price: "Custom", icon: iconJS, desc: "Perfect for: Large businesses, complex integrations, custom applications" },
  ];

  return (
    <div className="pricing-page">
      {/* Top Hero Section */}
      <section className="pricing-hero">
        <div className="pricing-wrapper">
          <div className="pricing-image-container">
            <img src={personImg} alt="Person" className="person-img" />
          </div>
          <div className="pricing-text-container">
            <h1 className="pricing-title">
              Pricing & <span className="highlight-yellow">Packages</span>
            </h1>
            <p className="pricing-description">
              Project costs vary based on scope, complexity, and specific requirements. 
              <span className="text-highlight"> Let's start with a free consultation </span> 
              to explore your project together and Create a solution that perfectly fits your needs.
            </p>
            <p className="pricing-sub-description">
              While each project is custom-quoted, here are standard package ranges 
              that suit most businesses and individual clients:
            </p>
            <div className="pricing-buttons">
              <button className="btn-purple">Explore Packages <span className="arrow">↗</span></button>
              <button className="btn-yellow">Schedule Consultation <span className="arrow">↗</span></button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Cards Main Container */}
      <section className="pricing-grid-outer">
        <div className="pricing-grid-inner">
          <div className="grid-container">
            {packages.map((pkg, index) => (
              <div className="package-card" key={index}>
                <div className="card-header">
                  <div className="icon-box">
                    <img src={pkg.icon} alt="icon" />
                  </div>
                  <span className="package-price">{pkg.price}</span>
                </div>
                <h2 className="package-name">{pkg.title}</h2>
                <p className="package-desc">{pkg.desc}</p>
                <button className="btn-card-details">
                  Package Details <span className="arrow">↗</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;