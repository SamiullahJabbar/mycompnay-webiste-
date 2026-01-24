import React, { useEffect, useRef, useState } from "react"; // useState add kiya gaya
import { useParams, useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "../css/ProjectDetails.css";
import Navbar from "../components/Navbar";

const ProjectDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const form = useRef();
  
  // Notification state
  const [notification, setNotification] = useState({ show: false, message: "" });

  const project = location.state?.project;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    const SERVICE_ID = "service_nflk70l"; 
    const TEMPLATE_ID = "template_lchusie"; 
    const PUBLIC_KEY = "LCKvfbp9YsbKU_gNP";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
          // Success Notification logic
          setNotification({ show: true, message: "Inquiry Sent! We will contact you soon." });
          form.current.reset();
          
          // 5 seconds baad hide karne ke liye
          setTimeout(() => {
            setNotification({ show: false, message: "" });
          }, 5000);

      }, (error) => {
          setNotification({ show: true, message: "Error: " + error.text });
          setTimeout(() => {
            setNotification({ show: false, message: "" });
          }, 5000);
      });
  };

  if (!project) return <div className="error-msg">Project Data Missing...</div>;

  const titleParts = project.title.split(' ');
  const firstPart = titleParts[0];
  const lastPart = titleParts.slice(1).join(' ');

  return (
    
    <div className="project-detail-wrapper">
     <Navbar />
      <div className="header-dark-area">
        <div className="detail-inner-container">
          <header className="detail-main-header">
            <h1 className="combined-title">
              {firstPart} <span className="yellow-text">{lastPart}</span>
            </h1>
            <p className="main-desc-white">
              {project.title} provides professional services in {project.location || "Houston, TX"}.
            </p>
            
            <div className="meta-box-container">
              <div className="meta-item">
                <i className="fa-regular fa-folder-open yellow-icon"></i>
                Project Type: <span className="meta-val">{project.tags?.[0] || "Websites"}</span>
              </div>
              <div className="meta-item">
                <i className="fa-brands fa-wordpress yellow-icon"></i>
                Platform: <span className="meta-val">{project.platform || "WordPress"}</span>
              </div>
              <div className="meta-item">
                <i className="fa-solid fa-layer-group yellow-icon"></i>
                Tech Stack: <span className="meta-val">{project.tech || "Elementor"}</span>
              </div>
              <div className="meta-item">
                <i className="fa-solid fa-dice-d6 yellow-icon"></i>
                Developed in: <span className="meta-val">{project.date || "2025"}</span>
              </div>
            </div>

            <div className="btn-center">
              <a href={project.link} target="_blank" rel="noreferrer" className="view-website-btn">
                View Project Website <i className="fa-solid fa-arrow-up-right-from-square" style={{marginLeft: '10px'}}></i>
              </a>
            </div>
          </header>
        </div>
      </div>

      <div className="project-content-split-wrapper">
        <div className="detail-inner-container">
          <main className="project-content-split">
            
            <div className="content-left-block">
              <div className="image-outer-frame">
                 <img src={project.image} alt={project.title} className="detail-featured-img" />
              </div>
              <div className="image-bottom-description">
                 {/* <p>This website was developed from the Figma design provided by the client. We used Elementor page builder coupled with ACF to make the website more dynamic.</p> */}
                 <p>{project.desc}</p>
              </div>
            </div>

            <div className="content-right-form-block">
              <div className="discussion-card">
                
                {/* --- PURPLE NOTIFICATION BOX --- */}
                {notification.show && (
                  <div className="form-notification-purple">
                    {notification.message}
                  </div>
                )}

                <h2 className="form-title">Let's discuss your project</h2>
                <form ref={form} onSubmit={sendEmail} className="inquiry-form">
                  <div className="form-group-row">
                    <input type="text" name="first_name" placeholder="First Name" required />
                    <input type="text" name="last_name" placeholder="Last Name" required />
                  </div>
                  <input type="email" name="user_email" placeholder="Your Email" required />
                  <input type="text" name="contact_no" placeholder="Contact / WhatsApp" />
                  
                  <select name="service" required>
                    <option value="">Select Service</option>
                    <option value="Web Design">Web Design</option>
                    <option value="WordPress">WordPress Development</option>
                  </select>

                  <select name="budget" required>
                    <option value="">Project Budget</option>
                    <option value="Above $500">Above $500</option>
                  </select>

                  <textarea name="message" placeholder="Please provide some details about your project." rows="5"></textarea>
                  
                  <button type="submit" className="consultation-btn">Book My Consultation</button>
                </form>
              </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;