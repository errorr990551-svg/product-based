import React, { useRef, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import experienceImg from '../../images/bg1.jpg';  // Use your correct image path

function ExperienceSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`position-relative d-flex align-items-center ${isVisible ? 'fade-in' : ''}`}
      style={{
        backgroundImage: `url(${experienceImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      {/* Yellow Overlay */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          height: '100%',
          width: '50%',
          background: 'rgba(255, 204, 0, 0.6)', // Slight transparency
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: '#000',
            position: 'absolute',
 
           boxShadow: '-10px 0 20px rgba(0, 0, 0, 0.2)', // Shadow spreads to left
        }}
      >
        <h1 className="fw-bold">
          IOTAFLOW{' '}
          <span
            style={{
              background: '#000',
              color: '#fff',
              padding: '4px 10px',
              borderRadius: '5px',
              fontSize: '0.9em',
            }}
          >
            Systems
          </span>
        </h1>
        <h2 className="fw-bold mt-2">
          FLOW METER | IOT/AMR | <br /> Calibration
        </h2>
        <p className="fs-5 mt-3">
          We measure success by the way we touch the lives of the people. Be it our Team,
          our customers, our vendors or our bankers.
        </p>
        <Button
          variant="outline-dark"
          className="rounded-0 mt-3 px-4 py-2 fw-semibold"
          style={{ border: '1px solid #000' }}
        >
          Explore the experience
        </Button>
      </div>
    </div>
  );
}

export default ExperienceSection;
