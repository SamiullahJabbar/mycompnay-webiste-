import React, { useState, useEffect } from "react";
import "../css/Hero.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Services from "./Services";
import Projects from "./Projects";
import Pricing from "./SDLCLifeCycle";
import ReviewSlider from "./ReviewSlider";
import Contact from "./Contact";

// Images
import personImg from "../images/header/hericon.png";
import iconJs from "../images/icon03.svg";
import iconHtml from "../images/icon03.svg";
import iconReact from "../images/icon04.svg";
import iconNode from "../images/icon05.svg";
import iconAws from "../images/icon06.svg";
import iconFigma from "../images/icon07.svg";
import iconVsix from "../images/icon08.svg";
import iconVsPlus from "../images/icon09.svg";
import iconLinux from "../images/icon10.svg";
import iconGithub from "../images/icon11.svg";
import iconMysql from "../images/icon13.svg";
import iconBotstrap from "../images/icon14.svg";
import iconAWS2 from "../images/icon15.svg";
import iconWordpress from "../images/icon16.svg";
import iconWoo from "../images/icon17.svg";
import iconElementor from "../images/icon18.svg";
import iconShopify from "../images/icon19.svg";
import iconCross from "../images/icon20.svg";
import iconPS from "../images/icon22.svg";
import iconUI from "../images/icon23.svg";
import iconDocker from "../images/icon24.svg";
import iconClouse from "../images/icon26.svg";
import iconchatgpt from "../images/icon27.svg";
import icongitlab from "../images/icon28.svg";
import iconyoutube from "../images/icon29.svg";

const Home = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, opacity: 0 });
  
  // States for synchronized animation
  const [showPerson, setShowPerson] = useState(false);
  const [showStep1, setShowStep1] = useState(false); // Ring 1 + Line 1
  const [showStep2, setShowStep2] = useState(false); // Ring 2 + Line 2
  const [showStep3, setShowStep3] = useState(false); // Ring 3 + Line 3
  const [showText, setShowText] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y, opacity: 1 });
  };

  // Smooth scroll handler for Know More button
  const handleKnowMoreClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // 1. Show Person
    setTimeout(() => setShowPerson(true), 500);

    // 2. Show Ring 1 AND Line 1 together
    setTimeout(() => setShowStep1(true), 1200);

    // 3. Show Ring 2 AND Line 2 together
    setTimeout(() => setShowStep2(true), 2000);

    // 4. Show Ring 3 AND Line 3 together
    setTimeout(() => setShowStep3(true), 2800);

    // 5. Finally show text
    setTimeout(() => setShowText(true), 3500);
  }, []);

  const ring1Icons = [
    { src: iconJs, delay: "0s", angle: 0 }, 
    { src: iconHtml, delay: "-4s", angle: 60 }, 
    { src: iconReact, delay: "-8s", angle: 120 }, 
    { src: iconNode, delay: "-12s", angle: 180 }, 
    { src: iconGithub, delay: "-16s", angle: 240 }, 
    { src: iconLinux, delay: "-20s", angle: 300 }
  ];

  const ring2Icons = [
    { src: iconAws, delay: "0s", angle: 0 }, 
    { src: iconFigma, delay: "-3s", angle: 36 }, 
    { src: iconMysql, delay: "-6s", angle: 72 }, 
    { src: iconBotstrap, delay: "-9s", angle: 108 }, 
    { src: iconPS, delay: "-12s", angle: 144 }, 
    { src: iconWordpress, delay: "-15s", angle: 180 }, 
    { src: iconWoo, delay: "-18s", angle: 216 }, 
    { src: iconElementor, delay: "-21s", angle: 252 }, 
    { src: iconShopify, delay: "-24s", angle: 288 }, 
    { src: iconVsPlus, delay: "-27s", angle: 324 }
  ];

  const ring3Icons = [
    { src: iconDocker, delay: "0s", angle: 0 }, 
    { src: iconchatgpt, delay: "-8s", angle: 36 }, 
    { src: icongitlab, delay: "-12s", angle: 72 }, 
    { src: iconyoutube, delay: "-16s", angle: 108 }, 
    { src: iconClouse, delay: "-20s", angle: 144 }, 
    { src: iconUI, delay: "-24s", angle: 180 }, 
    { src: iconCross, delay: "-28s", angle: 216 }, 
    { src: iconAWS2, delay: "-32s", angle: 252 }, 
    { src: iconVsix, delay: "-36s", angle: 288 }
  ];

  return (
    <div className="home-wrapper">
      <Navbar />
      
      {/* Hero Section with ID for navbar */}
      <section id="home" className="hero-page">
        <div className="hero-content">
          <div className="orbit-container">
            {/* Center Person */}
            <div className={`person-box ${showPerson ? 'show' : ''}`}>
              <img src={personImg} alt="Person" className="main-img" />
              <div className="purple-glow"></div>
            </div>

            {/* Step 1: Line 1 + Ring 1 */}
            <div className={`ring-line line-1 ${showStep1 ? 'show' : ''}`}></div>
            <div className={`orbit-item ring-1 ${showStep1 ? 'show' : ''}`}>
              {ring1Icons.map((icon, index) => (
                <div key={index} className="icon-bg" style={{ '--icon-angle': `${icon.angle}deg`, '--animation-delay': icon.delay }}>
                  <img src={icon.src} alt="icon" />
                </div>
              ))}
            </div>

            {/* Step 2: Line 2 + Ring 2 */}
            <div className={`ring-line line-2 ${showStep2 ? 'show' : ''}`}></div>
            <div className={`orbit-item ring-2 ${showStep2 ? 'show' : ''}`}>
              {ring2Icons.map((icon, index) => (
                <div key={index} className="icon-bg" style={{ '--icon-angle': `${icon.angle}deg`, '--animation-delay': icon.delay }}>
                  <img src={icon.src} alt="icon" />
                </div>
              ))}
            </div>

            {/* Step 3: Line 3 + Ring 3 */}
            <div className={`ring-line line-3 ${showStep3 ? 'show' : ''}`}></div>
            <div className={`orbit-item ring-3 ${showStep3 ? 'show' : ''}`}>
              {ring3Icons.map((icon, index) => (
                <div key={index} className="icon-bg" style={{ '--icon-angle': `${icon.angle}deg`, '--animation-delay': icon.delay }}>
                  <img src={icon.src} alt="icon" />
                </div>
              ))}
            </div>
          </div>

          <div className={`text-section ${showText ? 'show' : ''}`}>
            <h1>Let's Build With <span>Global Biz Guide</span></h1>
            <p>Expertise. Innovation. Excellence.</p>
          </div>
        </div>
      </section>

      {/* About Section with ID for navbar */}
      <section id="about" className="about-section">
        <div className="about-container-box" onMouseMove={handleMouseMove} onMouseLeave={() => setMousePos({ ...mousePos, opacity: 0 })}>
          <div className="cursor-gradient" style={{ opacity: mousePos.opacity, background: `radial-gradient(600px at ${mousePos.x}% ${mousePos.y}%, rgba(139, 92, 246, 0.35), transparent 70%)` }}></div>
          <div className="about-grid">
            <div className="about-info">
              <h2>Welcome to <span>GlobalBizguide</span></h2>
              <p>
                With over 6 years of industry experience, GlobalBizguide has been guiding businesses through their digital transformation journeys. We proudly welcome clients from diverse industries, helping them embrace innovation and scale with confidence.
                Whether you need seamless integration of new software into your infrastructure or the redesign and upgrade of outdated solutions, our team stands ready to assist. No project is too complex or challenging - we bring expertise, adaptability, and dedication to every endeavor. At GlobalBizguide, our mission is clear: to exceed client expectations by delivering premium branding, web, and app solutions that inspire trust and drive success.
              </p>
              <button className="know-more-btn" onClick={handleKnowMoreClick}>
                Know more about me <span className="arrow">↗</span>
              </button>
            </div>
            <div className="about-stats">
              <div className="stat-card"><h3>100+</h3><p>Projects Completed</p></div>
              <div className="stat-card"><h3>6+</h3><p>Years Experience</p></div>
              <div className="stat-card"><h3>50+</h3><p>Trusted Clients</p></div>
              <div className="stat-card"><h3>20+</h3><p>Technologies</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections with IDs for navbar */}
      <section id="services">
        <Services />
      </section>
      
      <section id="portfolio">
        <Projects />
      </section>
      
      <section id="pricing">
        <Pricing />
      </section>
      
      <section id="social">
        <ReviewSlider />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;