import React from 'react';

import deployAndScaleimg from '../../images/Core Features_1. Unified Data Fabric for Flow & Utility Assets.png';
import flowFocusedAppsimg from '../../images/Core Features_2. Flow-Focused Applications.png';
import intelligenceAnalyticsimg from '../../images/Core Features_3. Intelligence, Analytics & Automation.png';
import utilityBenefitsimg from '../../images/Core Features_4. Utility & Sustainability Benefits.png';

// A custom check icon, styled for the black and yellow theme.
const IconCheck = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

// This array holds the data for the core features.
// The 4th feature "Deployment & Scalability" has been merged into the 1st feature as 'subFeature'.
const features = [
  {
    title: "Unified Data Fabric for Flow & Utility Assets",
    description: "IOT Sense collects and unifies data from IoT flow meters and smart water meters, telemetry gateways, SCADA/PLC, ERP/CMMS, and mobile/remote sensors.",
    bullets: [
      "Supports all major industrial protocols (Modbus, HART, wireless IoT, LoRa, NB-IoT) and offers plug-and-play integration for flow measurement networks.",
    ],
    imagePlaceholder: deployAndScaleimg,
    alt: "Diagram of IOT Sense Data Fabric connecting IoT flow meters, SCADA, and ERP systems",
    // Merged content from the original 4th feature
    subFeature: {
      title: "Deployment & Scalability",
      description: "Whether you deploy on-premises, hybrid cloud or fully in cloud, IOT Sense supports it. Designed to handle anything from one smart water meter to thousands of IOT Flow Metering devices across multiple sites with enterprise-grade availability, security and performance."
    }
  },
  {
    title: "Flow-Focused Applications",
    description: "Built specifically around flow and utility-asset measurement, IOT Sense offers:",
    bullets: [
      "Live dashboards for volumetric/mass flow, totaliser, velocity, cumulative usage.",
      "Remote telemetry of water/steam/air/chemical flows; supports smart water meter networks.",
      "Historical trends, benchmarking across lines / sites; compare water-usage, leakage, production flow.",
      "Automation workflows: e.g., if flow drops > X % then alert maintenance; schedule calibration reminders.",
      "Compliance audits: generate reports for CGWA extraction limits, CPCB discharge-monitoring, NIC data-interface export.",
      "Leak-/reverse-flow detection, non-revenue water tracking, utility-loss reduction."
    ],
    imagePlaceholder: flowFocusedAppsimg,
    alt: "Real-time flow monitoring application showing volumetric and mass flow totalizer data"
  },
  {
    title: "Intelligence, Analytics & Automation",
    description: "No-code workbench: users build dashboards, digital twins, workflows without heavy coding.",
    bullets: [
      "Embedded AI/ML: detect anomalies in flow-data, predict failures in pipelines, optimise distribution & usage.",
      "Natural-language query: ask “why did flow drop in Zone 3?” or “which pump’s flow is leaking?”",
      "Edge-analytics: on-device or gateway inference for real-time flow events or critical telemetry use-cases."
    ],
    imagePlaceholder: intelligenceAnalyticsimg,
    alt: "Al-driven flow analytics dashboard for leak detection and predictive maintenance"
  },
  {
    title: "Utility & Sustainability Benefits",
    description: "Monitor all flows: water, steam, compressed air, chemicals — get full visibility across your utilities.",
    bullets: [
      "Optimise usage: correlate flow and energy to reduce cost, eliminate leaks, improve asset life-cycle.",
      "Grow easily: add new flow-types, sites and devices without heavy custom-code.",
      "Deliver ESG / sustainability reporting: smart water meters and IoT flow data feed into sustainability metrics, help meet regulatory and corporate goals."
    ],
    imagePlaceholder: utilityBenefitsimg,
    alt: "ESG and sustainability reporting interface using smart water meter data on IOT Sense"
  }
];

// Main Component
function Corefeatures() {
  return (
    <div className="tw-bg-white tw-text-gray-700 tw-py-16 sm:tw-py-24">
      <div className="tw-container tw-mx-auto tw-px-4">
        
        {/* Header Section */}
        <div className="tw-text-center tw-max-w-3xl tw-mx-auto">
          <h2 className="tw-text-3xl lg:tw-text-4xl tw-font-bold tw-text-black">
            Core Features
          </h2>
        </div>

        {/* Features Sections Wrapper */}
        <div className="tw-mt-16 tw-space-y-16 md:tw-space-y-24">
          
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-items-center tw-gap-12 lg:tw-gap-20"
            >
              
              {/* Text Column */}
              <div className={`tw-text-left ${index % 2 !== 0 ? 'md:tw-order-2' : 'md:tw-order-1'}`}>
                <h3 className="tw-text-2xl lg:tw-text-3xl tw-font-bold tw-text-black">
                  {feature.title}
                </h3>
                <p className="tw-mt-4 tw-text-base tw-text-gray-600">
                  {feature.description}
                </p>
                
                {/* Render bullets if they exist */}
                {feature.bullets && feature.bullets.length > 0 && (
                  <ul className="tw-mt-6 tw-space-y-4">
                    {feature.bullets.map((bullet, i) => (
                      <li key={i} className="tw-flex tw-items-start">
                        {/* Custom check icon */}
                        <div className="tw-flex-shrink-0 tw-mt-1">
                          <span className="tw-inline-flex tw-items-center tw-justify-center tw-h-6 tw-w-6 tw-rounded-full tw-bg-[#ffd700]">
                            <IconCheck className="tw-h-4 tw-w-4 tw-text-black" />
                          </span>
                        </div>
                        <span className="tw-ml-4 tw-text-gray-600">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* --- Render Merged Sub-Feature (if it exists) --- */}
                {feature.subFeature && (
                  <div className="tw-mt-10">
                    {/* Updated the heading class to match the main feature heading exactly */}
                    <h3 className="tw-text-2xl lg:tw-text-3xl tw-font-bold tw-text-black">
                      {feature.subFeature.title}
                    </h3>
                    <p className="tw-mt-4 tw-text-base tw-text-gray-600">
                      {feature.subFeature.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Image Column */}
              <div className={`tw-flex tw-justify-center ${index % 2 !== 0 ? 'md:tw-order-1' : 'md:tw-order-2'}`}>
                <img 
                  src={feature.imagePlaceholder} 
                  alt={feature.alt || feature.title} 
                  className="tw-w-full tw-max-w-md md:tw-max-w-full tw-h-auto tw-rounded-lg tw-shadow-2xl tw-object-cover tw-bg-gray-200"
                />
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Corefeatures;