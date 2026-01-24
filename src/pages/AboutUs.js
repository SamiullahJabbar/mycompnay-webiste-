import React from 'react';
import styles from '../css/AboutUs.module.css';
import companyImg from "../images/image.png";

const AboutUs = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>About <span>GBG Company</span></h1>
          <p className={styles.subTagline}>Expertise. Innovation. Excellence.</p>
        </div>

        {/* Animated Border Container */}
        <div className={styles.aboutMainCard}>
          <div className={styles.contentGrid}>
            <div className={styles.imageWrapper}>
              <img src={companyImg} alt="GBG Company" className={styles.mainImg} />
            </div>

            <div className={styles.textSection}>
              <h2>We Build <span>Digital Excellence</span></h2>
              <p>
                GBG Company is a premier digital solutions provider specializing in 
                high-end WordPress development and scalable cloud architectures. 
                We don't just build websites; we create digital assets that drive 
                growth and deliver seamless user experiences.
              </p>

              {/* Extra Details Sections */}
              <div className={styles.detailBlocks}>
                <div className={styles.block}>
                  <h4>Our Mission</h4>
                  <p>To empower businesses by delivering innovative, secure, and fast digital solutions that stand out in the global market.</p>
                </div>
                <div className={styles.block}>
                  <h4>Our Vision</h4>
                  <p>To be the world's most trusted partner for businesses seeking digital transformation and technical excellence.</p>
                </div>
              </div>
              
              <div className={styles.statsMini}>
                <div><h3>5+</h3><p>Years Experience</p></div>
                <div><h3>150+</h3><p>Success Projects</p></div>
                <div><h3>24/7</h3><p>Expert Support</p></div>
              </div>

              <button className={styles.ctaBtn}>Work With Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;