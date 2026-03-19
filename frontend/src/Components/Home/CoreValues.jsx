import React, { useEffect, useRef, useState } from 'react';
import coreValuesImg from '../../images/corepic.jpg';
import icon from "../../images/Arrow icon png.png";

function CoreValues() {
  const headingRef = useRef(null);
  const [showHeading, setShowHeading] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setShowHeading(true);
      },
      { threshold: 0.3 }
    );

    if (headingRef.current) io.observe(headingRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <div className="core-values-section d-flex flex-wrap">
      {/* Left Section */}
      <div className="left-section text-white py-5 px-4 col-lg-6 col-md-12">
        <div className="content-wrapper">
          <h2
            ref={headingRef}
            className={`fw-bold animate-heading ${showHeading ? 'show' : ''}`}
          >
            <span className={`highlight-yellow ${showHeading ? 'animate-underline' : ''}`}>
              Core
            </span>{' '}
            <span className="white-text">Values</span>
          </h2>

          <p className="text-light fs-5">At IOTAFLOW, we believe each of us plays a vital role in shaping a lasting legacy through ownership, learning, and problem-solving, we grow together and create innovations that make a lasting impact.
          </p>

          <div className="row mt-4">
            <div className="col-sm-6 mb-4">
              <h5><span className="text-warning me-2"><img src={icon} alt="icon" className='Icon' /></span>Empowering Ownership</h5>
              <p className="text-light">
                A culture where our team takes full responsibility and pride in their work, driving excellence in every flow measuring sensor we create.
              </p>
            </div>

            <div className="col-sm-6 mb-4">
              <h5><span className="text-warning me-2"><img src={icon} alt="icon" className='Icon' /></span>Thrust for Learning</h5>
              <p className="text-light">
                Continuously expanding our expertise and skills, we harness the power of learning to innovate and lead.
              </p>
            </div>

            <div className="col-sm-6 mb-4">
              <h5><span className="text-warning me-2"><img src={icon} alt="icon" className='Icon' /></span>Innovating Solutions</h5>
              <p className="text-light">
                    Embracing every challenge with creativity and resourcefulness.
              </p>
            </div>

            <div className="col-sm-6 mb-4">
              <h5><span className="text-warning me-2"><img src={icon} alt="icon" className='Icon' /></span>Team of Problem Solvers</h5>
              <p className="text-light">
                Fostering a collaborative environment, we thrive as a united team.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section col-lg-6 col-md-12 p-0">
        <img
          src={coreValuesImg}
          alt="IOTAFLOW Core Values representing Empowering Ownership, Thrust for Learning, and Innovative Problem Solving in engineering"
          className="img-fluid w-100 h-100 object-fit-cover"
        />
      </div>

      {/* Keep your styles but move to CSS for responsive tweaks */}
      <style>{`
      .Icon {
  width: 2rem;
  height: 2rem;
 
}
     
        .left-section {
          background-color: #1a1a1a;
        }

        .highlight-yellow {
          position: relative;
          display: inline-block;
          color: white;
        }

        .highlight-yellow::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 6px;
          background-color: #ffcc00;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.8s ease-out;
        }

        .highlight-yellow.animate-underline::after {
          transform: scaleX(1);
        }

        .animate-heading {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .animate-heading.show {
          opacity: 1;
          transform: translateY(0);
        }

        /* ✅ Responsive adjustments only */
        @media (max-width: 992px) {
          .core-values-section {
            flex-direction: column;
          }
          .right-section img {
            height: auto;
          }
        }

        @media (max-width: 768px) {
          .left-section {
            padding: 2rem 1.5rem;
          }
          .animate-heading {
            font-size: 1.8rem;
          }
          .left-section p {
            font-size: 1rem;
          }
        }

        @media (max-width: 576px) {
          .animate-heading {
            font-size: 1.5rem;
          }
          .left-section {
            padding: 1.5rem 1rem;
          }
          .left-section p {
            font-size: 0.95rem;
          }
          .left-section h5 {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default CoreValues;
