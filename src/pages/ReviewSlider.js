import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import styles from '../css/ReviewCard.module.css';

// Importing Images
import personImg1 from "../images/review/Ayaz.png";
import personImg2 from "../images/review/rashid.png";
import personImg3 from "../images/review/icon.png";
import personImg4 from "../images/review/Shabaz.png";
import personImg5 from "../images/GBG.png";
import personImg6 from "../images/GBG.png";

// Swiper Essential Styles
import 'swiper/css';
import 'swiper/css/pagination';

const GlobeIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
const FacebookIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const XIcon = () => <svg width="18" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;

const reviews = [
  {
    id: 1,
    name: "Muhammad Ayyaz Khan",
    role: "Founder - Skill Minds Solution",
    img: personImg1,
    text: "GBG Company delivered an outstanding website for our SEO agency. Their communication was clear, timely, and highly professional, ensuring we were aligned at every stage. The development quality exceeded expectations — fast, secure, and optimized for performance. We truly value their expertise and recommend GBG Company as a reliable partner for web solutions.",
    links: {
      website: "https://skillmindssolutions.com/",
      facebook: "https://www.facebook.com/imayyazkhan/",
   
    }
  },
  {
    id: 2,
    name: "Muhammad Rashid Jabbar",
    role: "Owner and CEO at Skill Minds Solution Bahawalpur",
    img: personImg2,
    text: "Built our WordPress website SolarPricePakistan exactly according to our requirements. The site is outstanding in design, performance, and functionality. What impressed us most is their focus on client needs and giving importance to every specification. Truly a reliable partner for customized web solutions.",
    links: {
      website: "https://solarpricepakistan.com/",
      facebook: "https://www.facebook.com/muhammad.rashid.jabbar.2025",
     
    }
  },
  {
    id: 3,
    name: "M Abdullah ",
    role: "Founder - Devknit",
    img: personImg3,
    text: "GBG created our portfolio website with a modern and professional design that perfectly represents our brand. The site is clean, responsive, and highlights our projects in a way that builds client trust. Their focus on detail and understanding of our vision made the portfolio truly outstanding.",
    links: {
      website: "https://devknit.com/",
      
    }
  },
  {
    id: 4,
    name: "Shahbaz Gul Bhutta",
    role: "Blogger",
    img: personImg4,
    text: "It was my first time trusting a company to build my blogging site, and GBG Company truly impressed me. They delivered on time, within budget, and the quality was outstanding. The team guided us with clear instructions and stayed attentive to our specifications until the very end  a remarkable experience.",
    links: {
      website: "https://cmpunjabschemes.pk/",
      facebook: "https://www.facebook.com/shahbazgul.bhutta",
    //   x: "https://x.com/gmbwizards"
    }
  },
  {
    id: 5,
    name: "Winston",
    role: "USA Base freelancer",
    img: personImg3,
    text: "We have been working with GBG Company’s team for over a year, and the experience has been truly outstanding. Their communication is clear, instructions are precise, and every project has been delivered on time. The professionalism and consistency they bring make them a highly recommended choice for anyone seeking reliable partners.",
    links: {
      website: "https://gmbwizards.com",
      facebook: "https://facebook.com/gmbwizards",
      x: "https://x.com/gmbwizards"
    }
  },
  {
    id: 6,
    name: "James Walker",
    role: "Business Development Manager – Real Estate Agency",
    img: personImg3,
    text: "Working with this Company on our real estate website was an excellent experience. The team understood our requirements clearly and delivered a modern, responsive site that perfectly showcases our properties. Their communication was transparent, timelines were respected, and the final result exceeded expectations. Highly recommended for anyone seeking reliable web development.",
    links: {
      website: "http://sologansproperties.com/",
    //   facebook: "https://facebook.com/gmbwizards",
    //   x: "https://x.com/gmbwizards"
    }
  },
  

];

const ReviewSlider = () => {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={25}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1100: { slidesPerView: 3 },
        }}
      >
        {reviews.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={styles.card}>
              <div className={styles.quoteIcon}>
                <svg viewBox="0 0 24 24" fill="#6d28d9"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.987z"/></svg>
              </div>
              
              <div className={styles.header}>
                <img src={item.img} alt={item.name} className={styles.profileImg} />
                <div className={styles.info}>
                  <h3>{item.name}</h3>
                  <p>{item.role}</p>
                </div>
              </div>

              <p className={styles.feedback}>{item.text}</p>

              <div className={styles.footerIcons}>
                <a href={item.links?.website} target="_blank" rel="noopener noreferrer"><GlobeIcon /></a>
                <a href={item.links?.facebook} target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
                {/* <a href={item.links?.x} target="_blank" rel="noopener noreferrer"><XIcon /></a> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;