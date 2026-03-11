import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SteelImg from "../images/Case_study_images_Steel&Metallurgy_Steel_stock.png"
import MetroImg from "../images/Case_study_images_DMRC_Metro_DMRCstock.png"
import WaterImg from "../images/Case_study_images_Water_Water_stock.png"
import MiningImg from "../images/Case_study_images_Minning_Mining_stock.png"
import HVACImg from "../images/Case_study_images_Hvac_Hvac_stock.png"
import SteelImg2 from "../images/Aluminum_Manufacturing_Plant_Aluminum1.png"


// --- Data: Industries (Sidebar Filters) ---
const industries = [
  "Steel & Metallurgy",
  "Infrastructure & Urban Utilities",
  "Water & Wastewater",
  "Mining & Fertilizer Industry",
  "HVAC & Building Automation",
  "Oil & Gas",
  "Energy & Power",
  "Biogas & Renewable Energy",
  "Industrial & Process Automation",
  "Food & Beverage",
  "Chemical & Pharmaceutical",
  "Irrigation & Agriculture",
  "Marine & Shipping",
  "OEM & Equipment Manufacturers"
];

// --- Data: Case Studies ---
const caseStudiesData = [
  {
    id: 1,
    category: "Steel & Metallurgy",
    title: "Preventing Blast Furnace Stave Failures with Smart Flow Measurement",
    description: "A leading steel manufacturer faced critical safety and efficiency challenges caused by undetected leaks in blast furnace cooling staves. IOTAFLOW’s intelligent electromagnetic flow metering and telemetry system provided real-time visibility, enabling early leak detection and proactive maintenance. This smart monitoring approach prevented costly unplanned shutdowns and ensured safer, more reliable furnace operations. As part of this project, a total of 143 electromagnetic flow meters were designed, supplied, and commissioned creating one of the most comprehensive flow monitoring networks in the region’s steel industry.",
    image: SteelImg
  },
  {
    id: 2,
    category: "Infrastructure & Urban Utilities",
    title: "Smart Water Management in a Major Metro Rail Network",
    description: "A major metro rail corporation implemented IOTAFLOW’s intelligent flow measurement technology to optimize water conservation and operational efficiency across its extensive transit network. From cooling systems and rainwater harvesting to wastewater treatment and groundwater recharge, IOTAFLOW’s electromagnetic flow meters enabled real-time monitoring, leak detection, and precise reporting. The result improved resource utilization, regulatory compliance, and sustainability for one of the nation’s largest urban transport systems.",
    image: MetroImg
  },
  {
    id: 3,
    category: "Water & Wastewater",
    title: "Precision Flow Monitoring for Urban Water Supply Networks",
    description: "A major municipal water authority in Delhi implemented IOTAFLOW’s 4-Track Insertion Ultrasonic Flow Meter System with an integrated Level measurement to improve flow measurement accuracy and water distribution management. The intelligent multi-probe configuration ensured reliable readings even when pipelines weren’t running full. Combined with real-time data and software integration, the system enhanced operational reliability, reduced measurement errors, and improved water resource efficiency.",
    image: WaterImg
  },
  {
    id: 4,
    category: "Mining & Fertilizer Industry",
    title: "Custom Area Velocity Flow Meter Systems for a Major Phosphate Production Facility",
    description: "IOTAFLOW successfully delivered a complete suite of custom-engineered Area Velocity Flow Meter (AVFM) systems for a leading mining and fertilizer producer in Saudi Arabia. Designed for partially filled process pipelines, these ultrasonic systems ensured high-accuracy flow monitoring and operational reliability across critical phosphate processing units. With meter sizes from DN1000 and DN1400, each unit was built, hydro-tested, and quality-certified to international standards helping optimize process visibility and improve system efficiency.",
    image: MiningImg
  },
  {
    id: 5,
    category: "HVAC & Building Automation",
    title: "Integrated Flow Metering Network Enhances Efficiency in a Luxury Hospitality Project",
    description: "For a prestigious hospitality infrastructure project in Sri Lanka, executed by a leading EPC contractor, IOTAFLOW supplied an integrated flow measurement network combining Electromagnetic, Ultrasonic, and BTU meters. The solution covered multiple utilities chilled water, treated water, wastewater, and domestic water systems providing real-time visibility and efficiency through seamless BMS integration. By delivering precision data across HVAC and water management networks, the system enabled significant energy optimization and long-term operational reliability.",
    image: HVACImg
  },
  {
    id: 6,
    category: "Steel & Metallurgy", 
    title: "Automated Air–Fuel Control System Boosts Efficiency in an Aluminum Manufacturing Plant",
    description: "PLC-based closed-loop burner automation enhances combustion stability, reduces fuel costs, and minimizes emissions. A leading aluminum producer in India partnered with IOTAFLOW to modernize its industrial burner systems through a PLC-based combustion automation solution. By integrating flow sensors, modulating control valves, and PID-based logic, the system automatically maintains the optimal air–fuel ratio, eliminating manual tuning errors. This advanced automation achieved 5–12% reduction in fuel consumption, improved combustion stability, and lowered CO and NOx emissions.",
    image: SteelImg2 
  }
];

// --- Component: Case Study Card ---
const CaseStudyCard = ({ data, isHighlighted }) => (
  <div 
    id={`card-${data.id}`} // Unique ID for scrolling
    className={`tw-bg-white tw-rounded-xl tw-shadow-lg tw-border tw-overflow-hidden tw-flex tw-flex-col tw-transition-all tw-duration-500
      ${isHighlighted 
        ? 'tw-border-[#fc8d05] tw-ring-4 tw-ring-[#ffd700]/50 tw-scale-[1.02] tw-shadow-2xl' 
        : 'tw-border-gray-200 hover:tw-shadow-2xl hover:tw-translate-y-[-4px]'
      }
    `}
  >
    {/* Wrapped image content in Link to keep navigation functionality */}
    <Link to={`/case-studies/${data.id}`} className="tw-no-underline tw-group tw-flex tw-flex-col tw-flex-grow">
      {/* Image */}
      <div className="tw-h-56 tw-overflow-hidden tw-relative">
        <img 
          src={data.image} 
          alt={data.title} 
          className="tw-w-full tw-h-full tw-object-cover tw-transition-transform tw-duration-700 group-hover:tw-scale-110"
        />
        {/* Category Badge */}
        <div className="tw-absolute tw-top-4 tw-right-4 tw-bg-[#ffd700] tw-text-black tw-text-xs tw-font-bold tw-px-3 tw-py-1 tw-rounded-full tw-shadow-sm">
          {data.category}
        </div>
      </div>

      {/* Content */}
      <div className="tw-p-6 tw-flex tw-flex-col tw-flex-grow">
        <h3 className="tw-text-xl tw-font-bold tw-text-black tw-mb-3 tw-line-clamp-2" title={data.title}>
          {data.title}
        </h3>
        <p className="tw-text-sm tw-text-gray-600 tw-leading-relaxed tw-mb-6 tw-line-clamp-4 tw-flex-grow">
          {data.description}
        </p>

        {/* Fake Button (Visual Only) */}
        <div className="tw-mt-auto">
          <span className="tw-block tw-w-full tw-py-3 tw-bg-black tw-text-white tw-font-bold tw-rounded-lg tw-border-2 tw-border-transparent tw-text-center tw-transition-all tw-duration-300 hover:tw-bg-[#ffd700] hover:tw-text-black hover:tw-border-[#ffd700]">
            Explore Case Study <span className="tw-ml-1">→</span>
          </span>
        </div>
      </div>
    </Link>
  </div>
);

// --- Main Component ---
function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [highlightedId, setHighlightedId] = useState(null);

  // Function to handle sidebar click
  const handleFilterClick = (industry) => {
    // Find if a case study exists for this industry
    const matchingStudy = caseStudiesData.find(study => study.category === industry);

    if (matchingStudy) {
      // If it exists:
      // 1. Show 'All' so the card is rendered in the list
      setActiveFilter("All");
      
      // 2. Set the ID to highlight
      setHighlightedId(matchingStudy.id);

      // 3. Scroll to the card after a short delay (to ensure render)
      setTimeout(() => {
        const element = document.getElementById(`card-${matchingStudy.id}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);

      // 4. Remove the highlight after 2 seconds
      setTimeout(() => {
        setHighlightedId(null);
      }, 2000);

    } else {
      // If no match (empty category), just filter the list like before
      setActiveFilter(industry);
      setHighlightedId(null);
    }
  };

  // Filter Logic
  const filteredStudies = activeFilter === "All" 
    ? caseStudiesData 
    : caseStudiesData.filter(study => study.category === activeFilter);

  return (
    <div className="tw-bg-gray-50 tw-min-h-screen">
      <div className="tw-flex tw-flex-col lg:tw-flex-row">
        
        {/* --- Sidebar Filter --- */}
        <div className="tw-w-full lg:tw-w-80 tw-bg-black tw-text-white tw-p-6 lg:tw-min-h-screen lg:tw-sticky lg:tw-top-0 tw-flex-shrink-0">
          <h2 className="tw-text-2xl tw-font-bold tw-text-[#ffd700] tw-mb-6">
            Filter by Industry
          </h2>
          
          {/* Filter List (Scrollable on mobile, vertical list on desktop) */}
          <div className="tw-flex lg:tw-flex-col tw-gap-2 tw-overflow-x-auto lg:tw-overflow-visible tw-pb-4 lg:tw-pb-0 scrollbar-hide">
            <button
              onClick={() => setActiveFilter("All")}
              className={`tw-px-4 tw-py-3 tw-rounded-lg tw-text-left tw-text-sm tw-font-medium tw-transition-colors tw-duration-200 tw-whitespace-nowrap
                ${activeFilter === "All" 
                  ? "tw-bg-[#ffd700] tw-text-black" 
                  : "tw-bg-gray-900 tw-text-gray-300 hover:tw-bg-gray-800 hover:tw-text-white"
                }`}
            >
              View All
            </button>
            
            {industries.map((industry, index) => (
              <button
                key={index}
                onClick={() => handleFilterClick(industry)}
                className={`tw-block tw-w-full tw-px-4 tw-py-3 tw-rounded-lg tw-text-left tw-text-sm tw-font-medium tw-transition-colors tw-duration-200 tw-whitespace-nowrap
                  ${activeFilter === industry 
                    ? "tw-bg-[#ffd700] tw-text-black" 
                    : "tw-bg-gray-900 tw-text-gray-300 hover:tw-bg-gray-800 hover:tw-text-white"
                  }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>

        {/* --- Main Content --- */}
        <div className="tw-flex-1 tw-p-4 md:tw-p-8">
          
          <div className="tw-max-w-6xl tw-mx-auto">
            {/* New Header Section - Compact Layout */}
            <div className="tw-mb-6">
              <h1 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-black tw-mb-2 tw-text-center">
                Case Studies
                <span className="tw-block tw-h-1.5 tw-w-24 tw-bg-[#ffd700] tw-mt-2 tw-mx-auto"></span>
              </h1>
              
              {/* Description Text - Compact spacing */}
              <div className="tw-space-y-2 tw-text-gray-700 tw-text-base md:tw-text-base tw-leading-relaxed tw-text-center tw-max-w-4xl tw-mx-auto">
                <p>
                  At <span className="tw-font-bold tw-text-black">IOTAFLOW</span>, we believe real-world results define true innovation. Our advanced <span className="tw-font-bold tw-text-black">flow measurement technologies</span>, from <span className="tw-font-bold tw-text-black">ultrasonic and electromagnetic meters</span> to <span className="tw-font-bold tw-text-black">mechanical, vortex, and thermal solutions</span>, are engineered to deliver precision, reliability, and measurable impact across industries.
                </p>
                <p>
                  Each case study demonstrates how our <span className="tw-font-bold tw-text-black">innovative flow metering systems</span> empower <span className="tw-font-bold tw-text-black">water utilities</span>, energy providers, process industries, and <span className="tw-font-bold tw-text-black">OEMs</span> to overcome complex flow challenges, optimize system performance, and ensure data integrity.
                </p>
                <p>
                  Whether it’s <span className="tw-font-bold tw-text-black">reducing non-revenue water</span>, enhancing energy efficiency, or <span className="tw-font-bold tw-text-black">improving gas and oil metering precision</span>, these success stories showcase measurable impact through engineering excellence.
                </p>
                
              </div>
            </div>

            {/* Case Studies Grid */}
            {filteredStudies.length > 0 ? (
              <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-8">
                {filteredStudies.map((study) => (
                  <CaseStudyCard 
                    key={study.id} 
                    data={study} 
                    isHighlighted={highlightedId === study.id} 
                  />
                ))}
              </div>
            ) : (
              // Empty State
              <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-py-20 tw-text-center tw-bg-white tw-rounded-xl tw-border tw-border-dashed tw-border-gray-300">
                <div className="tw-text-6xl tw-mb-4">📂</div>
                <h3 className="tw-text-xl tw-font-bold tw-text-gray-900">No Case Studies Found</h3>
                <p className="tw-text-gray-500 tw-mt-2">
                  We haven't added case studies for <span className="tw-font-semibold text-black">{activeFilter}</span> yet.
                </p>
                <button 
                  onClick={() => setActiveFilter("All")}
                  className="tw-mt-6 tw-px-6 tw-py-2 tw-bg-black tw-text-white tw-rounded-md hover:tw-bg-gray-800"
                >
                  View All
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default CaseStudies;