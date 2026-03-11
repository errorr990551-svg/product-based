import React from 'react';

import waterUtilitiesImg from '../../images/Water_utilities&smart_cities.png';
import industrialPlantsImg from '../../images/Industrial_plants&manufacturing.jpg';
import groundwaterComplianceImg from '../../images/Ground-water_extraction_compliance.jpg';
import facilityManagementImg from '../../images/Building_facility_management.png';
import utilitiesEnergyImg from '../../images/Utilities&energy.png';

// Card component for each Use Case
const UseCaseCard = ({ title, description, image, className }) => (
  <div 
    // Reduced height (h-56 instead of h-64/72) to make it more compact
    className={`tw-relative tw-group tw-overflow-hidden tw-rounded-xl tw-shadow-lg tw-border tw-border-gray-200 tw-h-56 md:tw-h-60 tw-transition-all tw-duration-300 hover:tw-shadow-xl hover:tw-scale-[1.01] ${className}`}
  >
    {/* Background Image */}
    <div 
      className="tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-transition-transform tw-duration-700 group-hover:tw-scale-110"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
    
    {/* Overlay */}
    <div className="tw-absolute tw-inset-0 tw-bg-black/70 group-hover:tw-bg-black/60 tw-transition-colors tw-duration-300"></div>

    {/* Content - Reduced padding */}
    <div className="tw-relative tw-z-10 tw-p-5 tw-h-full tw-flex tw-flex-col tw-justify-center tw-text-left">
      {/* Smaller Title Font */}
      <h3 className="tw-text-lg tw-font-bold tw-text-[#ffd700] tw-mb-2">
        {title}
      </h3>
      {/* Smaller Description Font */}
      <p className="tw-text-xs md:tw-text-sm tw-text-gray-200 tw-leading-relaxed">
        {description}
      </p>
    </div>
    
    {/* Yellow Accent Line */}
    <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-full tw-h-1 tw-bg-[#ffd700] tw-transform tw-scale-x-0 group-hover:tw-scale-x-100 tw-transition-transform tw-duration-300 tw-origin-left"></div>
  </div>
);

// Main Component
function Usecases() {
  const cases = [
    {
      title: "Water Utilities & Smart Cities",
      description: "Deploy smart water meters, IoT telemetry, remote meter reading (AMR/AMI) networks for leak-detection, NRW (non-revenue water) reduction.",
      image: waterUtilitiesImg
    },
    {
      title: "Industrial Plants & Manufacturing",
      description: "Monitor flow in process lines (cooling water, chemicals, compressed air), correlate with energy use for Industry 4.0 optimisation.",
      image: industrialPlantsImg
    },
    {
      title: "Ground-water / Extraction Compliance",
      description: "Use flow telemetry to meet CGWA limits and export NIC-/government-data formats.",
      image: groundwaterComplianceImg
    },
    {
      title: "Building / Facility Management",
      description: "Flow-meter networks in large campuses, bore-well monitoring, rain-water harvesting, digital water meter networks.",
      image: facilityManagementImg
    },
    {
      title: "Utilities & Energy",
      description: "Steam/condensate flow monitoring, remote telemetry of flow meters in diverse fluid systems.",
      image: utilitiesEnergyImg
    }
  ];

  return (
    // Reduced section padding to py-10
    <div className="tw-bg-gray-50 tw-py-10 sm:tw-py-16">
      <div className="tw-container tw-mx-auto tw-px-4">
        
        {/* Header Section - Reduced bottom margin */}
        <div className="tw-text-center tw-max-w-3xl tw-mx-auto tw-mb-8">
          <h2 className="tw-text-2xl lg:tw-text-3xl tw-font-bold tw-text-black">
            Use-Cases & Industry Verticals
          </h2>
        </div>

        {/* Use Cases Container - Reduced gap */}
        <div className="tw-flex tw-flex-wrap tw-justify-center tw-gap-5">
          {cases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              title={useCase.title}
              description={useCase.description}
              image={useCase.image}
              // Adjusted widths logic
              className="tw-w-full md:tw-w-[calc(50%-0.625rem)] lg:tw-w-[calc(33.333%-0.833rem)]"
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Usecases;