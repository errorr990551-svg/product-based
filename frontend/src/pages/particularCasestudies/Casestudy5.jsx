import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import HVACImg from "../../images/Case_study_images_Hvac_Hvac_stock.png"
import img1 from "../../images/Case_study_images_Hvac_Hvac(1).png"
import img2 from "../../images/Case_study_images_Hvac_Hvac(2).png"

import product1Img from "../../images/d17a.png";
import product2Img from "../../images/d7aa.png";
import product3Img from "../../images/d2a.png";

// Related Products Data
const relatedProducts = [
  {
    id: 1,
    title: "Ultrasonic BTU Energy Meter",
    image: product1Img,
    link: "/product-detail/detail7", // Link to product page
  },
  {
      id: 2,
      title: "MF-PRO Electromagnetic Flow Meter",
      image: product2Img,
      link: "/product-detail/detail7", // Link to product page
    },
  {
    id: 3,
    title: "Inline Ultrasonic ROBUST Series Flow Meter",
    image: product3Img,
    link: "/product-detail/detail2", // Link to product page
  }
  
];

function Casestudy5() {
  // Ensure page starts at top when navigating here
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tw-bg-white tw-min-h-screen tw-font-sans">
      
      {/* --- Hero Section --- */}
      <div
        className="tw-text-white tw-py-20 md:tw-py-28 tw-bg-cover tw-bg-center tw-bg-no-repeat tw-relative"
        style={{
          backgroundImage: `url(${HVACImg})`,
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="tw-absolute tw-inset-0 tw-bg-black/70"></div>

        <div className="tw-container tw-mx-auto tw-px-4 tw-relative tw-z-10">
          <div className="tw-max-w-5xl tw-mx-auto text-left">
            <div className="tw-inline-block tw-border-l-4 tw-border-[#ffd700] tw-pl-4 tw-mb-6">
              <h5 className="tw-text-[#ffd700] tw-font-bold tw-uppercase tw-tracking-widest tw-text-sm md:tw-text-base">
                HVAC & Building Automation Case Study
              </h5>
            </div>

            <h1 className="tw-text-3xl md:tw-text-5xl tw-font-bold tw-leading-tight tw-mb-8">
              Integrated Flow Metering Solution Enhances Water and Energy Efficiency in a Premier Hospitality Project
            </h1>

            <p className="tw-text-gray-300 tw-text-lg md:tw-text-xl tw-leading-relaxed tw-max-w-4xl tw-text-justify">
              Efficient control of water and energy systems is vital for modern high-rise hospitality infrastructure. For a landmark project in Colombo, Sri Lanka, executed by a leading EPC contractor, IOTAFLOW delivered a complete flow metering solution integrating Electromagnetic, Ultrasonic, and BTU meters. Covering multiple service networks from chilled water and wastewater to domestic and process water the system ensured precise monitoring, optimized energy usage, and seamless Building Management System (BMS) integration for real-time control.
            </p>
          </div>
        </div>
      </div>

      {/* --- Main Content --- */}
      <div className="tw-container tw-mx-auto tw-px-4 tw-py-16 md:tw-py-24">
        <div className="tw-max-w-7xl tw-mx-auto tw-space-y-24">

          {/* --- Section 1: The Challenge (Text Left / Image Right) --- */}
          <div className="tw-grid lg:tw-grid-cols-2 tw-gap-12 lg:tw-gap-20 tw-items-center">
            {/* Text Column */}
            <section className="tw-w-full">
              <h2 className="tw-text-2xl md:tw-text-3xl tw-font-bold tw-text-black tw-mb-6">
                The Challenge – Multi-Utility Monitoring in a Complex Infrastructure
                <span className="tw-block tw-h-1 tw-w-20 tw-bg-[#ffd700] tw-mt-2"></span>
              </h2>
              {/* Justified text */}
              <div className="tw-text-gray-700 tw-text-lg tw-leading-relaxed tw-space-y-4 tw-text-justify">
                <p>
                  The project featured a mix of luxury hotel facilities, commercial spaces, and technical plants, each requiring accurate measurement of chilled water, HVAC energy, and water consumption. The EPC contractor needed a unified metering solution capable of delivering high-accuracy readings, minimal maintenance, and centralized data access through the site’s automation system.
                </p>
                <p>
                  Traditional mechanical meters lacked the range and integration capability to handle such varied service conditions — from large-diameter chilled water lines to low-flow domestic systems.
                </p>
              </div>
            </section>

            {/* Image Column */}
            <div className="tw-relative tw-h-80 lg:tw-h-[400px] tw-w-full tw-bg-gray-200 tw-rounded-2xl tw-overflow-hidden tw-shadow-xl">
              <img 
                src={img1} 
                alt="Complex Hospitality Infrastructure" 
                className="tw-w-full tw-h-full tw-object-cover"
              />
            </div>
          </div>

          {/* --- Section 2: The Solution (Full Width / Centered) --- */}
          <section className="tw-w-full tw-max-w-4xl tw-mx-auto tw-bg-gray-50 tw-p-8 md:tw-p-12 tw-rounded-2xl tw-border-l-8 tw-border-[#ffd700] tw-shadow-sm">
            <h2 className="tw-text-2xl md:tw-text-3xl tw-font-bold tw-text-black tw-mb-6">
              The IOTAFLOW Solution – Multi-Technology Precision Metering Network
            </h2>
            {/* Justified text */}
            <p className="tw-text-gray-700 tw-text-lg tw-leading-relaxed tw-mb-8 tw-text-justify">
              IOTAFLOW engineered and supplied a hybrid flow metering network customized for the project’s diverse operational requirements.
            </p>

            <ul className="tw-space-y-8">
              <li className="tw-flex tw-items-start">
                <span className="tw-flex-shrink-0 tw-w-12 tw-h-12 tw-bg-black tw-text-[#ffd700] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-xl tw-mr-5">1</span>
                <div className="tw-w-full">
                  <strong className="tw-block tw-text-black tw-text-xl tw-mb-2">Electromagnetic Flow Meters:</strong>
                  <p className="tw-text-gray-700 tw-text-lg tw-text-justify">
                    For treated, domestic, and process water networks requiring high accuracy and stable long-term performance.
                  </p>
                </div>
              </li>
              <li className="tw-flex tw-items-start">
                <span className="tw-flex-shrink-0 tw-w-12 tw-h-12 tw-bg-black tw-text-[#ffd700] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-xl tw-mr-5">2</span>
                <div className="tw-w-full">
                  <strong className="tw-block tw-text-black tw-text-xl tw-mb-2">Ultrasonic Flow Meters (Clamp-On & Insertion):</strong>
                  <p className="tw-text-gray-700 tw-text-lg tw-text-justify">
                    For chilled water and wastewater systems where non-intrusive or low-maintenance solutions were critical.
                  </p>
                </div>
              </li>
              <li className="tw-flex tw-items-start">
                <span className="tw-flex-shrink-0 tw-w-12 tw-h-12 tw-bg-black tw-text-[#ffd700] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-xl tw-mr-5">3</span>
                <div className="tw-w-full">
                  <strong className="tw-block tw-text-black tw-text-xl tw-mb-2">BTU (Energy) Meters:</strong>
                  <p className="tw-text-gray-700 tw-text-lg tw-text-justify">
                    Installed in chilled water loops to calculate real-time energy transfer and system efficiency within the HVAC network.
                  </p>
                </div>
              </li>
              <li className="tw-flex tw-items-start">
                <span className="tw-flex-shrink-0 tw-w-12 tw-h-12 tw-bg-black tw-text-[#ffd700] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-xl tw-mr-5">4</span>
                <div className="tw-w-full">
                  <strong className="tw-block tw-text-black tw-text-xl tw-mb-2">Integration & Performance:</strong>
                  <p className="tw-text-gray-700 tw-text-lg tw-text-justify">
                    All meters were factory-calibrated, configured with MODBUS/RS485 communication, and integrated into the project’s Building Management System (BMS) for consolidated monitoring, trend analysis, and reporting.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          {/* --- Section 3: The Results (Image Left / Text Right) --- */}
          <div className="tw-grid lg:tw-grid-cols-2 tw-gap-12 lg:tw-gap-20 tw-items-center">
            {/* Image Column */}
            <div className="tw-relative tw-h-80 lg:tw-h-[500px] tw-w-full tw-bg-gray-200 tw-rounded-2xl tw-overflow-hidden tw-shadow-xl lg:tw-order-1">
              <img 
                src={img2} 
                alt="Efficiency and Insight Results" 
                className="tw-w-full tw-h-full tw-object-cover"
              />
            </div>

            {/* Text Column */}
            <section className="lg:tw-order-2 tw-w-full">
              <h2 className="tw-text-2xl md:tw-text-3xl tw-font-bold tw-text-black tw-mb-6">
                The Results – Efficiency, Insight & Sustainability
                <span className="tw-block tw-h-1 tw-w-20 tw-bg-[#ffd700] tw-mt-2"></span>
              </h2>
              {/* Justified text */}
              <p className="tw-text-gray-700 tw-text-lg tw-leading-relaxed tw-mb-8 tw-text-justify">
                The integrated metering solution provided facility managers with complete flow and energy visibility across all service utilities.
              </p>
              
              <h3 className="tw-text-xl tw-font-bold tw-text-black tw-mb-4">Key Outcomes:</h3>
              <ul className="tw-space-y-4 tw-mb-8">
                {[
                  "Accurate measurement of water and energy consumption across multiple systems",
                  "Improved chilled water balancing and HVAC performance through BTU metering",
                  "Centralized BMS integration for real-time data and alerts",
                  "Non-intrusive, low-maintenance design reducing lifecycle costs",
                  "Support for sustainability reporting and LEED compliance initiatives"
                ].map((item, index) => (
                  <li key={index} className="tw-flex tw-items-start text-lg text-gray-700">
                    {/* Updated Bullet Style: Black Circle with Yellow Tick */}
                    <span className="tw-flex-shrink-0 tw-w-6 tw-h-6 tw-bg-black tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mr-3 tw-mt-1">
                      <svg className="tw-w-4 tw-h-4 tw-text-[#ffd700]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* --- Section 4: The Impact (Centered) --- */}
          <section className="tw-w-full tw-max-w-4xl tw-mx-auto tw-text-center">
            <h2 className="tw-text-2xl md:tw-text-3xl tw-font-bold tw-text-black tw-mb-6 tw-inline-block">
              The Impact – Comprehensive Flow Intelligence for Modern Infrastructure
              <span className="tw-block tw-h-1 tw-w-full tw-bg-[#ffd700] tw-mt-2"></span>
            </h2>
            {/* Justified text within the centered container */}
            <p className="tw-text-gray-700 tw-text-lg tw-leading-relaxed tw-text-justify">
              By combining Electromagnetic, Ultrasonic, and BTU metering technologies, IOTAFLOW enabled the project to achieve exceptional control, reliability, and energy optimization across critical utilities. The deployment demonstrates how a multi-technology approach transforms traditional metering into intelligent infrastructure management, helping facilities achieve performance and sustainability goals simultaneously.
            </p>
          </section>

        </div>
      </div>

      <div style={{ backgroundColor: "#f6f8fc" }} className="tw-py-16 md:tw-py-24">
              <div className="tw-container tw-mx-auto tw-px-4">
                <div className="tw-text-center tw-mb-12">
                  <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-black tw-mb-4">
                    Related Products
                  </h2>
                  <div className="tw-w-24 tw-h-1.5 tw-bg-[#ffd700] tw-mx-auto tw-rounded-full"></div>
                  <p className="tw-text-gray-600 tw-mt-4 tw-text-lg">
                    Explore the technologies powering this solution.
                  </p>
                </div>
      
                <div className="tw-flex tw-flex-wrap tw-justify-center tw-gap-8">
                  {relatedProducts.map((product) => (
                    <div key={product.id} className="tw-text-center tw-mb-4">
                      <Link to={product.link} className="tw-no-underline tw-text-black tw-group">
                        <div
                          className="tw-bg-white tw-shadow-sm tw-border tw-border-gray-200 tw-rounded-md tw-p-3 tw-mx-auto tw-flex tw-items-center tw-justify-center tw-transition-transform tw-duration-300 group-hover:tw-scale-105 group-hover:tw-shadow-md group-hover:tw-border-[#ffd700]"
                          style={{
                            width: "100%",
                            maxWidth: "200px", 
                            aspectRatio: "1/1",
                          }}
                        >
                          <img
                            src={product.image}
                            alt={product.title}
                            className="tw-w-full tw-h-full tw-object-contain"
                          />
                        </div>
                        <p className="tw-font-semibold tw-mt-3 tw-text-sm md:tw-text-base group-hover:tw-text-[#d4af37] tw-transition-colors tw-max-w-[200px] tw-mx-auto">
                          {product.title}
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

      {/* --- Call to Action --- */}
      <div className="tw-bg-[#ffd700] tw-py-20">
        <div className="tw-container tw-mx-auto tw-px-4 tw-text-center">
          <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-black tw-mb-6">
            Planning your next hospitality or commercial project?
          </h2>
          <div className="tw-text-black/90 tw-text-lg tw-max-w-3xl tw-mx-auto tw-mb-10 tw-leading-relaxed">
            
            <p>
              We design and supply integrated flow metering systems combining water, HVAC, and energy monitoring ensuring accuracy, connectivity, and long-term operational value.
            </p>
          </div>
          <Link 
            to="/contact" 
            className="tw-inline-block tw-bg-black tw-text-white tw-font-bold tw-py-4 tw-px-12 tw-rounded-full tw-shadow-lg tw-transition-all tw-duration-300 hover:tw-bg-gray-900 hover:tw-scale-105 hover:tw-shadow-xl tw-no-underline"
          >
            Contact Us Now
          </Link>
        </div>
      </div>

    </div>
  );
}

export default Casestudy5;