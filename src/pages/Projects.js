import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Navigation ke liye
import "../css/Projects.css";

// Project Images
import img1 from "../images/project/1.webp";
import img2 from "../images/project/2.webp";
import img3 from "../images/project/3.webp";
import img4 from "../images/project/4.webp";
import img5 from "../images/project/5.webp";
import img6 from "../images/project/6.webp";
import img7 from "../images/project/7.webp"; 
import img8 from "../images/project/8.webp";
import img9 from "../images/project/9.webp";
import img10 from "../images/project/10.webp"; 
import img11 from "../images/project/11.webp";
import img12 from "../images/project/pak.png";

const Projects = () => {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(6);

  const allProjects = [
    {
      id: 1,
      image: img1,
      tags: ["Websites", "Webapp"],
      title: "Branded Cleaning Service Website",
      desc: "A London-based cleaning platform offering domestic, upholstery, and regular cleaning. Our company designed the clean, branded layout with a catchy slogan, bold visuals, and easy booking flow.",
      // platform: "WordPress",
      // tech: "React, CSS, PHP",
      // date: "2024",
      link: "https://www.emop.co.uk/"
    },
    {
      id: 2,
      image: img2,
      tags: ["Websites", "WordPress"],
      title: "Food Discovery App Design",
      desc: "A sleek platform for discovering and booking top restaurants. Users can search by location or cuisine, view offers, and reserve tables instantly. Our team designed the clean layout, intuitive search flow, and food-focused branding to enhance user experience.",
      platform: "WordPress",
      tech: "Elementor",
      date: "2025",
      link: "https://www.thefork.co.uk/"
    },
    {
      id: 3,
      image: img3,
      tags: ["Websites", "WordPress"],
      title: "Gaming PC Promo Website",
      desc: "A high-performance gaming PC showcase designed for GarnerTech, featuring bold visuals, RGB highlights, and a strong brand message (Rise To Power). Our team crafted the layout to emphasize product appeal, offers like free mouse & keyboard, and smooth navigation across store and services.",
      platform: "WordPress",
      tech: "Custom Theme",
      date: "2024",
      link: "https://www.garner-tech.uk/"
    },
    {
      id: 4,
      image: img4,
      tags: ["Websites", "WordPress"],
      title: "Devknit Company Website",
      desc: "Devknit is a futuristic portfolio platform showcasing digital talent and creative projects. Our team designed the interactive layout, bold visuals, and avatar-based branding to highlight innovation and individuality. The site blends tech aesthetics with playful UI, making it ideal for showcasing genius-level work.",
      platform: "WebApp",
      tech: "React Js + Django Rest",
      date: "2025",
      link: "https://devknit.com/"
    },
    {
      id: 5,
      image: img5,
      tags: ["Tools & Apps", "Web Application"],
      title: "SolarPricePakistan",
      desc: " is a simple and professional site that shares daily updated prices for solar panels, inverters, batteries, and complete solar systems in Pakistan. Its clean design makes it easy to compare brands, check specs, and follow market trends so homeowners, businesses, and installers can make smart choices about solar energy.",
      platform: "WordPress",
      tech: "WordPress",
      date: "2024",
      link: "https://solarpricepakistan.com/"
    },
    {
      id: 6,
      image: img6,
      tags: ["Websites", "WebApp"],
      title: "Sologans Properties",
      desc: "The real estate website has a modern clean design that feels professional and easy to use. Property listings are simple to browse with clear categories and good visuals. Clients can quickly see prices and locations and contact options without confusion. The layout builds trust and gives a premium image that matches the real estate business.",
      platform: "Websites",
      tech: "React Js",
      date: "2025",
      link: "https://sologansproperties.com"
    },
    {
      id: 7,
      image: img7,
      tags: ["Websites", "WordPress"],
      title: "UrduJankari",
      desc: "This blogging website is designed to be simple, readable, and engaging for visitors. It usually has a clean layout where posts are organized by categories or tags, making it easy for readers to explore different topics. The design focuses on clear typography, good spacing, and responsive pages so the blog looks professional on both desktop and mobile. This style helps build trust and keeps the audience connected with fresh content.",
      platform: "WordPress",
      tech: "WordPress",
      date: "2025",
      link: "https://urdujankari.com/"
    },
    {
      id: 8,
      image: img8,
      tags: ["Websites", "Figma to Website"],
      title: "Castillo Dry Wall",
      desc: "cCastillo Dry Wall onstruction Base website should look solid, professional, and trustworthy. It usually highlights services like building, renovation, and project management with clear sections for projects, client testimonials, and contact details. The design is clean with strong visuals of ongoing or completed work, simple navigation, and mobile‑friendly pages. This style helps clients quickly understand the company’s expertise and builds confidence in the business.",
      platform: "WordPress",
      tech: "WordPress",
      date: "2025",
      link: "https://castillodrywallkc.com/"
    },

    {
      id: 9,
      image: img9,
      tags: ["Websites", "WebApp"],
      title: "Cut Culture ",
      desc: "is barber website with a dark grey theme gives a modern and stylish look. The design feels bold yet professional, with clean sections for services like haircuts, beard styling, and grooming packages. Dark tones highlight images of the shop and clients, while simple navigation makes booking easy. This layout builds trust and creates a premium vibe that matches the barber business.",
      platform: "WebApp ",
      tech: "React Js",
      date: "2025",
      link: "https://www.cutculturekc.com/"
    },

    {
      id: 10,
      image: img10,
      tags: ["Websites", "React Js"],
      title: "easyexam Online",
      desc: "An online exam website is designed to be simple, secure, and easy for users to attempt their tests. It provides a clean interface where students can log in, select their exam, and answer questions directly on the platform. The layout is professional with clear navigation, timers, and instant submission options. This design helps users focus on their exam without distractions and ensures smooth performance across devices.",
      platform: "WebApp",
      tech: "React Js + Django Rest",
      date: "2025",
      link: "https://www.easyexam.online/"
    },

    {
      id: 11,
      image: img11,
      tags: ["Websites", "React Js"],
      title: "cyber defense website Tool",
      desc: "A cyber defense website tool is a platform designed to protect websites from online threats like malware, hacking attempts, and DDoS attacks. It usually offers features such as firewalls, vulnerability scanning, SSL management, and real‑time monitoring. The design is professional and simple so users can easily check their site’s security status, run scans, and apply fixes. This kind of tool helps businesses build trust by keeping their websites safe and ensuring smooth performance for visitors.",
      platform: "Website Tool",
      tech: "React + Django Rest",
      date: "2025",
      link: "https://cyberdefense.com"
    },

    {
      id: 12,
      image: img12,
      tags: ["Websites", "WordPress"],
      title: "Paksolar",
      desc: "Paksolar blogging website with a white and green theme looks fresh, clean, and eco‑friendly. The design reflects sustainability and trust, with simple layouts that highlight articles about solar energy, technology updates, and market trends. White background keeps the content readable, while green accents give a natural feel that matches the solar industry. This style makes the blog professional yet approachable, helping readers easily explore posts and stay connected with renewable energy topics.",
      platform: "WordPress Website",
      tech: "WordPress",
      date: "2026",
      link: "https://paksolar.org/"
    },
  ];

  const handleCardClick = (project) => {
    // Ye line data ko detail page par bhej rahi hai
    navigate(`/project/${project.id}`, { state: { project } });
  };

  return (
    <div className="projects-section">
      <div className="projects-container">
        
        <div className="projects-header">
          <h2>successfully completed <span>Client Projects</span></h2>
          <p>All projects featured here have been added with explicit client permission.</p>
        </div>

        <div className="filter-bar">
          <div className="filter-left">
             {/* <button className="filter-btn active">All</button> */}
          </div>
          <button className="explore-btn">Explore More Projects ↗</button>
        </div>

        <div className="projects-grid">
          {allProjects.slice(0, visibleCount).map((project) => (
            <div 
              key={project.id} 
              className="project-frame-card"
              onClick={() => handleCardClick(project)}
              style={{ cursor: "pointer" }}
            >
              <div className="project-inner-frame">
                <div className="img-holder">
                   <img src={project.image} alt={project.title} />
                </div>
              </div>

              <div className="project-details-area">
                <div className="tag-container">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="yellow-tag">
                      {tag === "Websites" ? (
                        <i className="fa-regular fa-folder-open"></i>
                      ) : (
                        <i className="fa-solid fa-gear"></i>
                      )}
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="project-text-content">
                  <span className="project-name">{project.title}</span> — {project.desc}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < allProjects.length && (
          <div className="show-more-wrapper">
            <button className="show-more-btn" onClick={() => setVisibleCount(visibleCount + 6)}>
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;