import React from 'react';
import '../css/SDLCLifeCycle.css';

import p1 from '../images/svg/p1.png';
import p2 from '../images/svg/p2.png';
import p3 from '../images/svg/p3.png';
import p4 from '../images/svg/p4.png';
import p5 from '../images/svg/p5.png';
import p6 from '../images/svg/p6.png';
import p7 from '../images/svg/p7.png';

const SDLCLifeCycle = () => {
  const steps = [
    { id: 1, title: 'Requirement Analysis', icon: p1, type: 'odd' },
    { id: 2, title: 'Planning', icon: p2, type: 'even' },
    { id: 3, title: 'Design & Prototyping', icon: p3, type: 'odd' },
    { id: 4, title: 'Implementation/ Software Development', icon: p4, type: 'even' },
    { id: 5, title: 'Testing', icon: p5, type: 'odd' },
    { id: 6, title: 'Deployment/ Go-Live', icon: p6, type: 'even' },
    { id: 7, title: 'Support & Maintenance', icon: p7, type: 'odd' },
  ];

  return (
    <div className="sdlc-section">
      <div className="sdlc-header">
        <h1>Generic <span className="blue-text">software</span> development process in focus</h1>
        <div className="header-line"></div>
        <p>
          Throughout the entire software development process, Seamless communication and collaboration with clients 
          throughout the development lifecycle are paramount. This ensures the final product not only meets expectations but exceeds them.
        </p>
      </div>

      <div className="timeline-container">
        <div className="arrow-main-bar">
          <div className="steps-flex-container">
            {steps.map((step) => (
              <div key={step.id} className={`step-node-item ${step.type}`}>
                <div className="icon-circle-box">
                  <img src={step.icon} alt={step.title} />
                </div>
                <div className="text-label-box">
                  <span>{step.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SDLCLifeCycle;