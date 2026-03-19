import React, { useEffect, useRef, useState } from 'react';
import imgWhyChoose from '../../images/whyChooseUs.png';
import './WhyChooseUs.css';
import icon from "../../images/Arrow icon png.png";

function WhyChooseUs() {
  const headingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
    };
  }, []);

  return (
    <div className="why-choose-section">
      
      <div className="why-container">
        <div className="why-left">
          <img src={imgWhyChoose} alt="Why Choose IOTAFLOW infographic highlighting 7-day fast delivery, Lean Manufacturing, and flexible industrial flow solutions" />
        </div>

        <div className="why-right">
          <h2
            ref={headingRef}
            className={`why-heading ${isVisible ? 'show' : ''}`}
          >
            Why Choose <br />
            <span className={`iotflow ${isVisible ? 'animate-underline' : ''}`}>
              IOTAFLOW ?
            </span>
          </h2>
          <p className="why-text">
            We’re continually working to change the way people think about and engage with our products.
          </p>

          <div className="why-grid">
            <div className="why-item">
              <h5><img src={icon} alt="icon" className='Icon' /> Lean Manufacturing</h5>
              <p> A Lean Team that is obsessed with flow of value to the customer by continuously working on the value stream.</p>
            </div>
            <div className="why-item">
              <h5><img src={icon} alt="icon" className='Icon' /> Fast Delivery</h5>
              <p> Unlike the industry standard lead times of 4-6 weeks, we deliver our standard products in just 7 days.</p>
            </div>
            <div className="why-item">
              <h5><img src={icon} alt="icon" className='Icon' /> Flexible Solutions</h5>
              <p> Multiple options at various price points to fit your budget.</p>
            </div>
            <div className="why-item">
              <h5><img src={icon} alt="icon" className='Icon' /> Customer-Centricity</h5>
              <p>At IOTAFLOW, we adapt to you, not the other way around!</p>
             
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;