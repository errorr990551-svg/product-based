import React, { useEffect } from 'react';

import approval1 from "../images/UP JAL NIGAM Approval 1_page-0001.jpg";
import approval2 from "../images/UP JAL NIGAM Approval-2_page-0001 (1).jpg";
import approval3 from "../images/RWSS- Approval letter - IOTAFLOW_page-0001.jpg";
import approval4 from "../images/OIL INDIA LIMITED JOB APPROVAL Certificate_page-0001.jpg";
import approval5 from "../images/DMS_Approved (1)_page-0001.jpg";
import approval6 from "../images/NTPC Vendor Enlistment Certificate_page-0001.jpg";
import approval7 from "../images/DJB_Approval_Letter_Dec2019.jpg";
import approval8 from "../images/DELHI METRO JOB APPROVAL CERTIFICATE_page-0001.jpg";

const approvals = [
  { id: 1, img: approval1, title: "UP JAL NIGAM Approval 1" },
  { id: 2, img: approval2, title: "UP JAL NIGAM Approval 2" },
  { id: 3, img: approval3, title: "RWSS- Approval letter - IOTAFLOW" },
  { id: 4, img: approval4, title: "OIL INDIA LIMITED JOB APPROVAL" },
  { id: 5, img: approval5, title: "DMS Approved" },
  { id: 6, img: approval6, title: "NTPC Vendor Enlistment Certificate" },
  { id: 7, img: approval7, title: "DJB Approval Letter Dec2019" },
  { id: 8, img: approval8, title: "DELHI METRO JOB APPROVAL CERTIFICATE" },
];

function Approval() {
  // Ensure page starts at top when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tw-bg-white tw-min-h-screen tw-font-sans">
      
      {/* --- Main Content Section --- */}
      <div className="tw-container tw-mx-auto tw-px-4 tw-py-8 md:tw-py-12 lg:tw-py-20">
        
        {/* Header */}
        <div className="tw-text-center tw-mb-12 md:tw-mb-16">
          <h1 className="tw-text-3xl md:tw-text-4xl lg:tw-text-5xl tw-font-bold tw-text-black tw-mb-4">
            Approval
          </h1>
          <div className="tw-w-24 tw-h-1.5 tw-bg-[#ffd700] tw-mx-auto tw-rounded-full"></div>
          <p className="tw-text-gray-600 tw-mt-4 tw-text-base md:tw-text-lg font-bold">
             Official approvals and regulatory documents supporting our compliance.
          </p>
        </div>

        {/* Approvals Grid */}
        <div className="tw-max-w-6xl tw-mx-auto">
          {/* Using Flexbox with wrap and center justification for a balanced arrangement */}
          <div className="tw-flex tw-flex-wrap tw-justify-center tw-gap-4 md:tw-gap-6 lg:tw-gap-12">
            {approvals.map((item) => (
              <div 
                key={item.id} 
                className="tw-group tw-flex tw-flex-col tw-items-center tw-w-full md:tw-w-[30%] tw-min-w-[280px]"
              >
                {/* Image Container - Aspect Ratio locked for vertical documents */}
                <div className="tw-w-full tw-relative tw-aspect-[3/4] tw-bg-white tw-rounded-xl tw-overflow-hidden tw-shadow-lg tw-border tw-border-gray-200 hover:tw-shadow-2xl hover:tw-border-[#ffd700] tw-transition-all tw-duration-300">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="tw-w-full tw-h-full tw-object-contain tw-p-2 tw-transition-transform tw-duration-500 group-hover:tw-scale-105"
                  />
                </div>
                
                {/* Caption */}
                <h3 className="tw-mt-6 tw-text-xl tw-font-bold tw-text-black group-hover:tw-text-[#d4af37] tw-transition-colors tw-text-center">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Approval;
