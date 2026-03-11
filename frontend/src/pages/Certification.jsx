import React, { useEffect } from 'react';

// Placeholder Images for Certificates
// Replace these with your actual certificate image imports
const cert1 = "https://placehold.co/600x800/fff/333?text=Certificate+1";
const cert2 = "https://placehold.co/600x800/fff/333?text=Certificate+2";
const cert3 = "https://placehold.co/600x800/fff/333?text=Certificate+3";

const certificates = [
  { id: 1, img: cert1, title: "ISO 9001:2015" },
  { id: 2, img: cert2, title: "NABL Accredited" },
  { id: 3, img: cert3, title: "CE Certified" },
];

function Certification() {
  // Ensure page starts at top when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tw-bg-white tw-min-h-screen tw-font-sans">
      
      {/* --- Main Content Section --- */}
      <div className="tw-container tw-mx-auto tw-px-4 tw-py-12 md:tw-py-20">
        
        {/* Header */}
        <div className="tw-text-center tw-mb-16">
          <h1 className="tw-text-3xl md:tw-text-5xl tw-font-bold tw-text-black tw-mb-4">
            Certifications
          </h1>
          <div className="tw-w-24 tw-h-1.5 tw-bg-[#ffd700] tw-mx-auto tw-rounded-full"></div>
          <p className="tw-text-gray-600 tw-mt-4 tw-text-lg md:tw-text-xl">
             Commitment to Quality & Compliance
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="tw-max-w-6xl tw-mx-auto">
          {/* Using Flexbox with wrap and center justification for a balanced arrangement */}
          <div className="tw-flex tw-flex-wrap tw-justify-center tw-gap-8 lg:tw-gap-12">
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
  );
}

export default Certification;