import React from "react";
import "../css/Services.css";

// Services Icons
import iconWeb from "../images/gif/1.gif";
import iconsofts from "../images/gif/soft.gif";
import iconUI from "../images/gif/3.gif";
import iconmobile from "../images/gif/mob.gif";
import iconCloud from "../images/gif/5.gif";
import iconEcom from "../images/gif/4.gif";
import iconsas from "../images/gif/sas.gif";
import iconsoft from "../images/gif/soft.gif";
import iconmob from "../images/gif/mob.gif";
import icondes from "../images/gif/2.gif";
import iconcon from "../images/gif/6.gif";


// Tech Stack Icons
import iconFrontend from "../images/svg/code.svg"; 
import iconBackend from "../images/svg/database.svg";
import iconWP from "../images/svg/wordpress.svg";

import iconDevOps from "../images/svgg/cloudeicon.png"; 
import iconserverpanel from "../images/svgg/serverpanel.png"; 
import skillmob from "../images/svgg/mobile.png"; 


import iconHTML from "../images/svg/html.svg";
import iconJS from "../images/svg/javascript.svg";
import iconreact from "../images/svgg/react.svg";
import iconnext from "../images/svgg/nextjs.svg";
import iconapple from "../images/svgg/apple.svg";
import iconandr from "../images/svgg/andr.png";
import iconapi from "../images/svgg/api.svg";
import iconflutter from "../images/svgg/flutter.svg";
import iconfirebase from "../images/svgg/firebase.png";

///wordpress
import icondesgin from "../images/svgg/webdesgin.png";
import iconcustomdesgin from "../images/svgg/customDesgin.png";
import iconfigma from "../images/svgg/figma.svg";
import iconseo from "../images/svgg/seo.png";



///backend

import iconsvg from "../images/svgg/php.svg";
import icondjango from "../images/svgg/django.png";
import iconfastapi from "../images/svgg/fastapi.png";



///database
import iconskill from "../images/svgg/database.svg"
import iconsql from "../images/svgg/mysql.svg"
import iconpost from "../images/svgg/post.svg"
import iconmongo from "../images/svgg/mongo.svg"




import iconBoot from "../images/svg/bootstrap.svg";
import iconTail from "../images/svg/tailwind.svg";
import iconPHP from "../images/svg/php.svg";
import iconNode from "../images/svg/node.svg";
import iconAPI from "../images/svg/api.svg";
import iconPython from "../images/svg/python.svg";
import iconDesign from "../images/svg/design.svg";
import iconWPDev from "../images/svg/wpdev.svg";
import iconFigma from "../images/svg/figma.svg";
import iconSpeed from "../images/svg/speed.svg";
import iconTheme from "../images/svg/theme.svg";
import iconPlugin from "../images/svg/plugin.svg";

import iconServer from "../images/svgg/serversetup.png";

import iconMigration from "../images/svgg/migration .png";

import iconMail from "../images/svgg/email.png";
import iconDocker from "../images/svg/docker.svg";
import iconHeartbeat from "../images/svg/heartbeat.svg";

const Services = () => {
  const serviceData = [
    { title: "Website Development", desc: "We create secure, scalable websites with modern design and seamless functionality to grow your business.", icon: iconWeb },
    { title: "Software Development", desc: "We develop reliable, scalable software solutions tailored to complex business needs and future growth.", icon: iconsofts },
    { title: "Advanced Websites", desc: "Advanced websites designed with high‑performance architecture, modern aesthetics, and seamless functionality.", icon: iconUI },
    { title: "Mobile App Development ", desc: "High performance mobile applications engineered for seamless user experience, scalability, and business impact.", icon: iconmobile },
    { title: "E-commerce Development", desc: "Robust e‑commerce platforms designed for seamless shopping experiences, secure transactions, and scalable growth.", icon: iconEcom },
    { title: "SaaS Product Development", desc: "Scalable SaaS products engineered to deliver seamless performance, secure architecture, and long‑term business value.", icon: iconsas },
    { title: "Website Design ", desc: "Modern website designs crafted for clean aesthetics, responsive layouts, and engaging user experiences.", icon: icondes },
    { title: "Content Creation", desc: "Engaging content crafted to strengthen brand voice, captivate audiences, and drive meaningful results.", icon: iconcon },
    { title: "Performance & Hosting", desc: "Optimized performance and reliable hosting solutions ensuring speed, security, and uninterrupted digital presence.", icon: iconCloud },
  ];

  const skillGroups = [
    { 
      name: "Frontend", desc: "Responsive, interactive interfaces for seamless user engagement.", icon: iconFrontend, 
      skills: [
        { name: "HTML/CSS", icon: iconHTML,  },
        { name: "JS / jQuery", icon: iconJS,  },
        { name: "Bootstrap", icon: iconBoot, },
        { name: "Tailwind", icon: iconTail, },
        {name: "React", icon : iconreact},
        {name: "Next JS", icon : iconnext}

      ] 
    },
    { 
      name: "Mobile Application ", desc: "Scalable mobile apps with intuitive design and seamless performance.", icon: skillmob, 
      skills: [
        { name: "Flutter", icon: iconflutter,  },
        { name: "React Native", icon: iconreact,  },
        { name: "FireBase", icon: iconfirebase, },
        { name: "iOS Development", icon: iconapple, },
        {name: "Android Development ", icon : iconandr,},
        {name: "API Integration", icon : iconapi}

      ] 
    },
    
     { 
      name: "WordPress", desc: "WordPress design and development stack", icon: iconWP, 
      skills: [
        { name: "Website Design", icon: icondesgin,},
        { name: "Custom Designing", icon: iconcustomdesgin, },
        { name: "Figma to WordPress", icon: iconfigma,  },
        { name: "Speed Optimization", icon: iconSpeed,  },
        { name: "Custom Theme", icon: iconcustomdesgin,  },
        { name: "SEO", icon: iconseo, }
      ] 
    },

    { 
      name: "Backend", desc: "Building scalable and secure server-side applications", icon: iconBackend, 
      skills: [
        { name: "PHP/MySQL", icon: iconsvg, },
        { name: "NodeJS", icon: iconNode,},
        { name: "APIs", icon: iconAPI, },
        { name: "Python", icon: iconPython,},
        { name: "Django Rest", icon: icondjango,},
        { name: "Fastapi", icon: iconfastapi,}
      ] 
    },
   
    { 
      name: "DevOps & Cloud", desc: "Deploying and managing applications in the cloud", icon: iconDevOps, 
      skills: [
        { name: "Server Setup", icon: iconServer, },
        { name: "Website Migration", icon: iconMigration, },
        { name: "Mail Server", icon: iconMail, },
        { name: "Server Panels", icon: iconserverpanel,  },
        { name: "Docker & CI/CD", icon: iconDocker,},
        // { name: "Heartbeat & Cron", icon: iconHeartbeat, }
      ] 
    },

    { 
      name: "Databases", desc: "Efficient, secure databases designed for scalability and seamless data management.", icon: iconskill, 
      skills: [
        { name: "MySQL", icon: iconsql, },
        { name: "PostgreSQL", icon: iconpost, },
        { name: "MongoDB", icon: iconmongo, },
      ] 
    }
  ];

  return (
    <div className="services-page">
      <div className="services-main-container">
        <div className="services-header">
          <h2>How GlobalBizguide  <span>Empowers Your Business</span></h2>
          <p>From custom WordPress development to performance optimization and educational content, I provide comprehensive solutions.</p>
        </div>
        <div className="services-grid">
          {serviceData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-wrapper">
                <img src={service.icon} alt={service.title} className="floating-icon" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-main-container">
        <div className="skills-grid">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="skill-card">
              <div className="skill-card-header">
                <div className="skill-main-icon">
                   <img src={group.icon} alt={group.name} />
                </div>
                <div className="skill-text">
                  <h4>{group.name}</h4>
                  <p>{group.desc}</p>
                </div>
              </div>
              <div className="skill-items-grid">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="progress-circle">
                        <img src={skill.icon} alt={skill.name} className="bold-yellow-icon" />
                    </div>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;