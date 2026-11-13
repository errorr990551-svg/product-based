import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import cert1 from "../images/Zedgold.webp";
import cert2 from "../images/Type Test Certificate - PTB Lab Germany.webp";
import cert3 from "../images/RWS&S_Circle.webp";
import cert4 from "../images/Environmental Management Systems Certificate.webp";
import cert5 from "../images/Leanbasic.webp";
import cert6 from "../images/ISO.webp";
import cert7 from "../images/E-TenderEnquiry.webp";

const certificates = [
  { id: 1, img: cert1, title: "Zed Gold Certificate", desc: "Gold level under the Ministry of MSME's Zero Defect Zero Effect (ZED) scheme, which assesses manufacturing quality, process control and environmental impact." },
  { id: 2, img: cert2, title: "Type Test Certificate - PTB Lab Germany", desc: "Type test report from PTB, Germany's national metrology institute, confirming the measurement performance of our flow meter design against international standards." },
  { id: 3, img: cert3, title: "RWSS Approval", desc: "Approval from the Rural Water Supply & Sanitation department for supplying flow meters to drinking water supply schemes." },
  { id: 4, img: cert4, title: "Environmental Management Systems Certificate", desc: "Certification of our environmental management system, covering how we control waste, energy use and environmental risk in manufacturing." },
  { id: 5, img: cert5, title: "Lean Basic Certificate", desc: "Lean manufacturing certification under the MSME Lean scheme, recognising waste reduction and efficient production practices on our shop floor." },
  { id: 6, img: cert6, title: "ISO Certificate", desc: "ISO quality management certification covering the design, manufacture, calibration and servicing of our flow measurement products." },
  { id: 7, img: cert7, title: "Delhi Milk Scheme Approval", desc: "Approval from the Delhi Milk Scheme for supplying flow meters used in hygienic dairy processing applications." },
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

        {/* Intro */}
        <div className="tw-container tw-mx-auto tw-px-4 tw-mb-12">
          <div className="tw-max-w-4xl tw-mx-auto tw-text-gray-700 tw-text-base md:tw-text-lg tw-space-y-4">
            <p>
              IOTAFLOW Systems manufactures electromagnetic, ultrasonic, vortex and other industrial flow meters at our facility in Mayapuri, New Delhi. Independent certifications are how we show customers, consultants and tender committees that our products and processes meet recognised quality, safety and environmental standards.
            </p>
            <p>
              The certificates below cover our quality management system, environmental practices, lean manufacturing and independent type testing of our meter designs. Copies can be shared on request for vendor registration, tender documentation and project approvals.
            </p>
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
                  <p className="tw-mt-2 tw-text-gray-600 tw-text-center tw-text-sm md:tw-text-base">
                    {cert.desc}
                  </p>
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