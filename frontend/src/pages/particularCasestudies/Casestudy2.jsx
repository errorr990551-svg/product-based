import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import MetroImg from "../../images/Case_study_images_DMRC_Metro_DMRCstock.png"
import img1 from "../../images/Case_study_images_DMRC_Metro_DMRC(1).png"
import img2 from "../../images/Case_study_images_DMRC_Metro_DMRC(2).png"

import product1Img from "../../images/d7aa.png";
import product2Img from "../../images/d2a.png";

// Related Products Data
const relatedProducts = [
  {
    id: 1,
    title: "MF-PRO Electromagnetic Flow Meter",
    image: product1Img,
    link: "/product-detail/detail7", // Link to product page
  },
  {
    id: 2,
    title: "INLINE ULTRASONIC ROBUST Series",
    image: product2Img,
    link: "/product-detail/detail2", // Link to product page
  }
  
];

function Casestudy2() {
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
          backgroundImage: `url(${MetroImg})`,
        }}
      >
        {/* Dark overlay for readability */}
        <div className="tw-absolute tw-inset-0 tw-bg-black/70"></div>

        <div className="tw-container tw-mx-auto tw-px-4 tw-relative tw-z-10">
          <div className="tw-max-w-5xl tw-mx-auto text-left">
            <div className="tw-inline-block tw-border-l-4 tw-border-[#ffd700] tw-pl-4 tw-mb-6">
              <h5 className="tw-text-[#ffd700] tw-font-bold tw-uppercase tw-tracking-widest tw-text-sm md:tw-text-base">
                Infrastructure & Urban Utilities Case Study
              </h5>
            </div>

            <h1 className="tw-text-3xl md:tw-text-5xl tw-font-bold tw-leading-tight tw-mb-8">
              Intelligent Flow Measurement Drives Sustainable Water Management in a Major Metro Rail Network
            </h1>

            <p className="tw-text-gray-300 tw-text-lg md:tw-text-xl tw-leading-relaxed tw-max-w-4xl tw-text-justify">
              As cities expand, managing water resources across large urban transit systems becomes increasingly critical. One of India’s largest metro rail networks adopted IOTAFLOW’s advanced flow metering solutions to achieve greater control over water consumption, reuse, and conservation. From wastewater recycling and rainwater harvesting to cooling and pumping operations, IOTAFLOW’s precision meters now play a key role in improving sustainability, efficiency, and compliance across the metro’s infrastructure.
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
                The Challenge – Managing Water in Complex Transit Infrastructure
                <span className="tw-block tw-h-1 tw-w-20 tw-bg-[#ffd700] tw-mt-2"></span>
              </h2>
              {/* Justified text */}
              <div className="tw-text-gray-700 tw-text-lg tw-leading-relaxed tw-space-y-4 tw-text-justify">
                <p>
                  Metro systems consume enormous volumes of water daily for cooling, washing, sanitation, and safety systems. Without precise flow monitoring, leaks and inefficiencies can lead to excessive wastage and high operational costs.
                </p>
                <p>
                  Additionally, modern regulations demand accurate water usage data for sustainability and compliance reporting something difficult to achieve in a network of this scale without real-time data visibility.
                </p>
              </div>
            </section>

            {/* Image Column */}
            <div className="tw-relative tw-h-80 lg:tw-h-[400px] tw-w-full tw-bg-gray-200 tw-rounded-2xl tw-overflow-hidden tw-shadow-xl">
              <img 
                src= {img1} 
                alt="Metro Water Infrastructure Overview" 
                className="tw-w-full tw-h-full tw-object-cover"
              />
            </div>
          </div>

          {/* --- Section 2: The Solution (Full Width / Centered) --- */}
          <section className="tw-w-full tw-max-w-4xl tw-mx-auto tw-bg-gray-50 tw-p-8 md:tw-p-12 tw-rounded-2xl tw-border-l-8 tw-border-[#ffd700] tw-shadow-sm">
            <h2 className="tw-text-2xl md:tw-text-3xl tw-font-bold tw-text-black tw-mb-6">
              The IOTAFLOW Solution – Smart Flow Monitoring for Total Water Visibility
            </h2>
            {/* Justified text */}
            <p className="tw-text-gray-700 tw-text-lg tw-leading-relaxed tw-mb-8 tw-text-justify">
              IOTAFLOW deployed high-accuracy electromagnetic flow meters across key water management systems within the metro infrastructure.
            </p>

            <ul className="tw-space-y-8">
              <li className="tw-flex tw-items-start">
                <span className="tw-flex-shrink-0 tw-w-12 tw-h-12 tw-bg-black tw-text-[#ffd700] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-xl tw-mr-5">1</span>
                <div className="tw-w-full">
                  <strong className="tw-block tw-text-black tw-text-xl tw-mb-2">Wastewater Treatment & Reuse:</strong>
                  <p className="tw-text-gray-700 tw-text-lg tw-text-justify">
                    Flow meters monitor effluent and sewage treatment plants, ensuring accurate water recycling for washing train coaches and other non-potable uses.
                  </p>
                </div>
              </li>
              <li className="tw-flex tw-items-start">
                <span className="tw-flex-shrink-0 tw-w-12 tw-h-12 tw-bg-black tw-text-[#ffd700] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-xl tw-mr-5">2</span>
                <div className="tw-w-full">
                  <strong className="tw-block tw-text-black tw-text-xl tw-mb-2">Rainwater Harvesting:</strong>
                  <p className="tw-text-gray-700 tw-text-lg tw-text-justify">
                    Real-time flow data measures the quantity of rainwater collected and reused, optimizing system performance and sustainability metrics.
                  </p>
                </div>
              </li>
              <li className="tw-flex tw-items-start">
                <span className="tw-flex-shrink-0 tw-w-12 tw-h-12 tw-bg-black tw-text-[#ffd700] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-xl tw-mr-5">3</span>
                <div className="tw-w-full">
                  <strong className="tw-block tw-text-black tw-text-xl tw-mb-2">Groundwater Recharge:</strong>
                  <p className="tw-text-gray-700 tw-text-lg tw-text-justify">
                    Meters quantify water redirected from viaduct outlets to recharge structures, ensuring effective aquifer replenishment.
                  </p>
                </div>
              </li>
              <li className="tw-flex tw-items-start">
                <span className="tw-flex-shrink-0 tw-w-12 tw-h-12 tw-bg-black tw-text-[#ffd700] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-xl tw-mr-5">4</span>
                <div className="tw-w-full">
                  <strong className="tw-block tw-text-black tw-text-xl tw-mb-2">Cooling & Pumping Systems:</strong>
                  <p className="tw-text-gray-700 tw-text-lg tw-text-justify">
                    Flow meters monitor HVAC and water circulation systems, detecting leaks, ensuring proper flow balance, and reducing energy usage.
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
                src= {img2} 
                alt="Metro Efficiency Visual" 
                className="tw-w-full tw-h-full tw-object-cover"
              />
            </div>

            {/* Text Column */}
            <section className="lg:tw-order-2 tw-w-full">
              <h2 className="tw-text-2xl md:tw-text-3xl tw-font-bold tw-text-black tw-mb-6">
                The Results – Conservation, Efficiency & Compliance
                <span className="tw-block tw-h-1 tw-w-20 tw-bg-[#ffd700] tw-mt-2"></span>
              </h2>
              {/* Justified text */}
              <p className="tw-text-gray-700 tw-text-lg tw-leading-relaxed tw-mb-8 tw-text-justify">
                The integration of IOTAFLOW’s technology provided the metro rail network with measurable improvements in water management and operational efficiency.
              </p>
              
              <h3 className="tw-text-xl tw-font-bold tw-text-black tw-mb-4">Key Achievements:</h3>
              <ul className="tw-space-y-4 tw-mb-8">
                {[
                  "Accurate measurement of treated and reused water volumes",
                  "Early leak detection across cooling and pumping systems",
                  "Enhanced operational reliability and reduced water wastage",
                  "Real-time monitoring of environmental performance metrics",
                  "Simplified reporting for environmental compliance and audits",
                  "Significant cost savings through efficient pump and system performance"
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
              The Impact – Building Sustainable Urban Infrastructure
              <span className="tw-block tw-h-1 tw-w-full tw-bg-[#ffd700] tw-mt-2"></span>
            </h2>
            {/* Justified text within the centered container */}
            <p className="tw-text-gray-700 tw-text-lg tw-leading-relaxed tw-text-justify">
              With IOTAFLOW’s intelligent metering, the metro network has set a new benchmark for sustainable water management in public infrastructure. Continuous flow monitoring and data analytics have enabled data-driven decisions on maintenance, upgrades, and conservation planning ensuring responsible resource management while supporting the city’s sustainability goals.
            </p>
            <p className="tw-text-gray-700 tw-text-lg tw-leading-relaxed tw-text-justify tw-mt-4">
              This initiative demonstrates how smart metering technology can transform urban utilities into models of efficiency and environmental stewardship.
            </p>
          </section>

        </div>
      </div>

      <div style={{ backgroundColor: "#f6f8fc" }} className="tw-py-8 md:tw-py-24">
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
            Want to optimize water management across your infrastructure?
          </h2>
          <div className="tw-text-black/90 tw-text-lg tw-max-w-3xl tw-mx-auto tw-mb-10 tw-leading-relaxed">
            
            <p>
              Our flow metering and telemetry solutions empower cities, utilities, and large facilities to achieve efficiency, sustainability, and operational excellence.
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

export default Casestudy2;