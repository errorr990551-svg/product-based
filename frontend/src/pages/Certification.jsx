import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import cert1 from "../images/Zedgold.png";
import cert2 from "../images/Type Test Certificate - PTB Lab Germany.png";
import cert3 from "../images/RWS&S_Circle.png";
import cert4 from "../images/Managment_system.png";
import cert5 from "../images/Leanbasic.png";
import cert6 from "../images/ISO.png";
import cert7 from "../images/E-TenderEnquiry.png";

const certificates = [
  { id: 1, img: cert1, title: "Zedgold" },
  { id: 2, img: cert2, title: "Type Test Certificate - PTB Lab Germany" },
  { id: 3, img: cert3, title: "RWS&S_Circle" },
  { id: 4, img: cert4, title: "Managment_system" },
  { id: 5, img: cert5, title: "Leanbasic" },
  { id: 6, img: cert6, title: "ISO" },
  { id: 7, img: cert7, title: "E-TenderEnquiry" },
];

function Certification() {
  // Ensure page starts at top when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tw-bg-white tw-min-h-screen tw-font-sans">
      
      {/* --- Main Content Section --- */}
      <div className="tw-py-8 md:tw-py-12 lg:tw-py-20">
        
        {/* Header - Centered in container */}
        <div className="tw-container tw-mx-auto tw-px-4">
          <div className="tw-text-center tw-mb-12 md:tw-mb-16">
            <h1 className="tw-text-3xl md:tw-text-4xl lg:tw-text-5xl tw-font-bold tw-text-black tw-mb-4">
              Certifications
            </h1>
            <div className="tw-w-24 tw-h-1.5 tw-bg-[#ffd700] tw-mx-auto tw-rounded-full"></div>
            <p className="tw-text-gray-600 tw-mt-4 tw-text-base md:tw-text-lg">
               Commitment to Quality & Compliance
            </p>
          </div>
        </div>

        {/* Yellow Banner - Full Width */}
        <div className="tw-bg-[#ffd700] tw-w-full tw-py-8 tw-mb-12 md:tw-mb-16">
          <div className="tw-container tw-mx-auto tw-px-4 tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-center tw-gap-6 md:tw-gap-12">
            <p className="tw-text-black tw-text-lg md:tw-text-xl tw-font-bold tw-text-center">
              Certified approvals from governing bodies and institutions.
            </p>
            <Link 
              to="/about-us/approval" 
              className="tw-bg-black tw-text-[#ffd700] tw-px-8 tw-py-3 tw-rounded-full tw-font-bold tw-shadow-xl hover:tw-bg-gray-800 tw-transition-all tw-duration-300 tw-text-lg"
            >
              Approvals
            </Link>
          </div>
        </div>

        {/* Certificates Grid - Back in container */}
        <div className="tw-container tw-mx-auto tw-px-4">
          <div className="tw-max-w-6xl tw-mx-auto">
            {/* Using Flexbox with wrap and center justification for a balanced arrangement */}
            <div className="tw-flex tw-flex-wrap tw-justify-center tw-gap-4 md:tw-gap-6 lg:tw-gap-12">
              {certificates.map((cert) => (
                <div 
                  key={cert.id} 
                  className="tw-group tw-flex tw-flex-col tw-items-center tw-w-full md:tw-w-[30%] tw-min-w-[280px]"
                >
                  {/* Image Container - Aspect Ratio locked for vertical certificates */}
                  <div className="tw-w-full tw-relative tw-aspect-[3/4] tw-bg-white tw-rounded-xl tw-overflow-hidden tw-shadow-lg tw-border tw-border-gray-200 hover:tw-shadow-2xl hover:tw-border-[#ffd700] tw-transition-all tw-duration-300">
                    <img 
                      src={cert.img} 
                      alt={cert.title} 
                      className="tw-w-full tw-h-full tw-object-contain tw-p-2 tw-transition-transform tw-duration-500 group-hover:tw-scale-105"
                    />
                  </div>
                  
                  {/* Caption */}
                  <h3 className="tw-mt-6 tw-text-xl tw-font-bold tw-text-black group-hover:tw-text-[#d4af37] tw-transition-colors tw-text-center">
                    {cert.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Certification;