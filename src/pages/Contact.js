import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import styles from "../css/Contact.module.css";

const Contact = () => {
  const form = useRef();
  const [notification, setNotification] = useState({ show: false, message: "" });

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
          setNotification({ show: true, message: "Inquiry Sent! We will contact you soon." });
          form.current.reset();
          setTimeout(() => setNotification({ show: false, message: "" }), 5000);
      }, (error) => {
          setNotification({ show: true, message: "Error: " + error.text });
          setTimeout(() => setNotification({ show: false, message: "" }), 5000);
      });
  };

  return (
    <div className={styles.contactWrapper}>
      <div className={styles.container}>
        <div className={styles.contactMainCard}>
          <div className={styles.contentSplit}>
            
            {/* Left Side: Info */}
            <div className={styles.contactInfo}>
              <h1>Let's Start Your <span>Project</span></h1>
              <p>We help businesses scale with high-end solutions and custom digital strategies.</p>
              <div className={styles.infoItems}>
                <div className={styles.infoBox}>
                  <h4>Email Us</h4>
                  <p>info@globalbizagentic.com</p>
                   <h4>Phone</h4>
                  <p>+444243243254</p>
                </div>
              </div>
            </div>

            {/* Right Side: Form Container */}
            <div className={styles.discussionCard}>
              {notification.show && (
                <div className={styles.formNotificationPurple}>
                  {notification.message}
                </div>
              )}
              <h2 className={styles.formTitle}>Send a Message</h2>
              <form ref={form} onSubmit={sendEmail} className={styles.inquiryForm}>
                <div className={styles.formGroupRow}>
                  <input type="text" name="first_name" placeholder="First Name" required />
                  <input type="text" name="last_name" placeholder="Last Name" required />
                </div>
                <input type="email" name="user_email" placeholder="Your Email" required />
                <input type="text" name="contact_no" placeholder="WhatsApp Number" />
                <div className={styles.formGroupRow}>
                  <select name="service" required>
                    <option value="">Select Service</option>
                    <option value="Custom Development">Custom Development</option>
                    <option value="Modern Web Design">Modern Web Design</option>
                    <option value="WordPress">WordPress Development</option>
                  </select>
                  <select name="budget" required>
                    <option value="">Budget Range</option>
                    <option value="$200-$500">$200 - $500</option>
                    <option value="$500-$1000">$500 - $1000</option>
                    <option value="$1000+">Above $1000</option>
                  </select>
                </div>
                <textarea name="message" placeholder="Project details..." rows="6"></textarea>
                <button type="submit" className={styles.consultationBtn}>Send Message</button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;