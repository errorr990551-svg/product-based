import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SteelImg from "../../images/Case_study_images_Steel&Metallurgy_Steel_stock.png"
import caseStudyImg from "../../images/Case_study_Try.png"
import img2 from "../../images/Case_study_images_Steel&Metallurgy_Steel(2).png"

import product1Img from "../../images/d7aa.png";


// Related Products Data
const relatedProducts = [
  {
    id: 1,
    title: "MF-PRO Electromagnetic Flow Meter",
    image: product1Img,
    link: "/product-detail/detail7", // Link to product page
  }
  
];

function Casestudy1() {
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
          backgroundImage: `url(${SteelImg})`,
        }}
      >
        {/* Dark overlay for readability */}
        <div className="tw-absolute tw-inset-0 tw-bg-black/70"></div>

        <div className="tw-container tw-mx-auto tw-px-4 tw-relative tw-z-10">
          <div className="tw-max-w-5xl tw-mx-auto text-left">
            <div className="tw-inline-block tw-border-l-4 tw-border-[#ffd700] tw-pl-4 tw-mb-6">
              <h5 className="tw-text-[#ffd700] tw-font-bold tw-uppercase tw-tracking-widest tw-text-sm md:tw-text-base">
                Steel & Metallurgy Case Study
              </h5>
            </div>

            <h1 className="tw-text-3xl md:tw-text-5xl tw-font-bold tw-leading-tight tw-mb-8">
              Smart Flow Measurement Prevents Cooling System Failures in a Major Steel Plant
            </h1>

            <p className="tw-text-gray-300 tw-text-lg md:tw-text-xl tw-leading-relaxed tw-max-w-4xl tw-text-justify">
              In the demanding world of steel production, where extreme heat and pressure are constant, even a small undetected leak can trigger catastrophic consequences. One of India’s largest steel manufacturers implemented IOTAFLOW’s electromagnetic flow metering and telemetry solution to detect cooling stave failures in real time — preventing accidents, minimizing downtime, and ensuring continuous furnace performance.
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
                The Challenge – Hidden Dangers in Cooling Systems
                <span className="tw-block tw-h-1 tw-w-20 tw-bg-[#ffd700] tw-mt-2"></span>
              </h2>
              {/* Justified text */}
              <div className="tw-text-gray-700 tw-text-lg tw-leading-relaxed tw-space-y-4 tw-text-justify">
                <p>
                  Blast furnaces rely on a network of cooling staves to regulate temperature and protect furnace walls from extreme heat. Over time, high thermal stress can cause microscopic cracks in these staves, allowing water to seep into molten metal — a serious safety hazard.
                </p>
                <p>
                  Traditional inspection methods often fail to detect these minor leaks until it’s too late, leading to emergency shutdowns, production loss, and potential equipment damage.
                </p>
              </div>
            </section>

            {/* Image Column */}
            <div className="tw-relative tw-h-80 lg:tw-h-[400px] tw-w-full tw-bg-gray-200 tw-rounded-2xl tw-overflow-hidden tw-shadow-xl">
              <img 
                src={caseStudyImg}
                alt="Cooling System Overview" 
                className="tw-w-full tw-h-full tw-object-cover"
              />
            </div>
          </div>

          {/* --- Section 2: The Solution (Full Width / Centered) --- */}
          {/* Added tw-w-full to ensure it stretches */}
          <section className="tw-w-full tw-max-w-4xl tw-mx-auto tw-bg-gray-50 tw-p-8 md:tw-p-12 tw-rounded-2xl tw-border-l-8 tw-border-[#ffd700] tw-shadow-sm">
            <h2 className="tw-text-2xl md:tw-text-3xl tw-font-bold tw-text-black tw-mb-6">
              The IOTAFLOW Solution – Real-Time Intelligence for Critical Systems
            </h2>
            {/* Justified text */}
            <p className="tw-text-gray-700 tw-text-lg tw-leading-relaxed tw-mb-8 tw-text-justify">
              To overcome this challenge, the manufacturer partnered with IOTAFLOW to implement a real-time, data-driven flow monitoring solution using high-accuracy electromagnetic flow meters and telemetry systems.
            </p>

            <ul className="tw-space-y-8">
              <li className="tw-flex tw-items-start">
                <span className="tw-flex-shrink-0 tw-w-12 tw-h-12 tw-bg-black tw-text-[#ffd700] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-xl tw-mr-5">1</span>
                <div className="tw-w-full">
                  <strong className="tw-block tw-text-black tw-text-xl tw-mb-2">Precision Monitoring:</strong>
                  <p className="tw-text-gray-700 tw-text-lg tw-text-justify">
                    Electromagnetic flow meters were installed on both the inlet and outlet lines of each cooling stave, measuring even the smallest variations in flow.
                  </p>
                </div>
              </li>
              <li className="tw-flex tw-items-start">
                <span className="tw-flex-shrink-0 tw-w-12 tw-h-12 tw-bg-black tw-text-[#ffd700] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-xl tw-mr-5">2</span>
                <div className="tw-w-full">
                  <strong className="tw-block tw-text-black tw-text-xl tw-mb-2">Instant Leak Detection:</strong>
                  <p className="tw-text-gray-700 tw-text-lg tw-text-justify">
                    Continuous data comparison between inlet and outlet flows allowed immediate detection of anomalies, signaling early-stage leakage.
                  </p>
                </div>
              </li>
              <li className="tw-flex tw-items-start">
                <span className="tw-flex-shrink-0 tw-w-12 tw-h-12 tw-bg-black tw-text-[#ffd700] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-xl tw-mr-5">3</span>
                <div className="tw-w-full">
                  <strong className="tw-block tw-text-black tw-text-xl tw-mb-2">Telemetry Integration:</strong>
                  <p className="tw-text-gray-700 tw-text-lg tw-text-justify">
                    All meter data was wirelessly transmitted to the control room, where operators could view live readings, receive instant alerts, and analyze performance trends for predictive maintenance.
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
                alt="Results and Impact Visual" 
                className="tw-w-full tw-h-full tw-object-cover"
              />
            </div>

            {/* Text Column */}
            <section className="lg:tw-order-2 tw-w-full">
              <h2 className="tw-text-2xl md:tw-text-3xl tw-font-bold tw-text-black tw-mb-6">
                The Results – Safety, Efficiency & Predictive Reliability
                <span className="tw-block tw-h-1 tw-w-20 tw-bg-[#ffd700] tw-mt-2"></span>
              </h2>
              {/* Justified text */}
              <p className="tw-text-gray-700 tw-text-lg tw-leading-relaxed tw-mb-8 tw-text-justify">
                By implementing IOTAFLOW’s smart metering solution, the manufacturer gained early visibility into potential stave failures — well before catastrophic failure.
              </p>
              
              <h3 className="tw-text-xl tw-font-bold tw-text-black tw-mb-4">Key Outcomes:</h3>
              <ul className="tw-space-y-4 tw-mb-8">
                {[
                  "Early detection of cooling stave leaks and flow imbalances",
                  "Reduced emergency shutdowns and unscheduled downtime",
                  "Improved worker safety and asset protection",
                  "Enhanced data-driven maintenance planning",
                  "Optimized process water usage and energy efficiency"
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
              {/* Quote box stretched to full width */}
              <div className="tw-w-full tw-bg-black tw-p-6 tw-rounded-lg tw-border-l-4 tw-border-[#ffd700]">
                <p className="tw-text-white tw-font-medium tw-italic tw-text-lg tw-text-justify">
                  "This solution transformed reactive maintenance into proactive protection — delivering both operational reliability and measurable cost savings."
                </p>
              </div>
            </section>
          </div>

          {/* --- Section 4: The Impact (Centered) --- */}
          <section className="tw-w-full tw-max-w-4xl tw-mx-auto tw-text-center">
            <h2 className="tw-text-2xl md:tw-text-3xl tw-font-bold tw-text-black tw-mb-6 tw-inline-block">
              The Impact – Intelligent Flow Monitoring for the Future of Steel
              <span className="tw-block tw-h-1 tw-w-full tw-bg-[#ffd700] tw-mt-2"></span>
            </h2>
            {/* Justified text within the centered container */}
            <p className="tw-text-gray-700 tw-text-lg tw-leading-relaxed tw-text-justify">
              The success of this implementation marks a new era of digital intelligence in steel production. By combining electromagnetic precision with real-time telemetry, IOTAFLOW empowers metallurgical facilities to achieve zero unplanned downtime, predictive asset management, and sustainable operations in one of the world’s most demanding industrial processes.
            </p>
          </section>

        </div>
      </div>


      {/* --- Related Products Section (Example Style) --- */}
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
            Ready to improve safety and uptime in your steel operations?
          </h2>
          <div className="tw-text-black/90 tw-text-lg tw-max-w-3xl tw-mx-auto tw-mb-10 tw-leading-relaxed">
            
            <p>
              Our experts can design a flow monitoring solution tailored to your blast furnace, cooling system, or process flow network helping you move from reactive maintenance to predictive performance.
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

export default Casestudy1;