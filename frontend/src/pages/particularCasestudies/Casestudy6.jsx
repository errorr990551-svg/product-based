import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import IndustrialAutomationHeroBg from "../../images/Aluminum_Manufacturing_Plant_Aluminum1.png";
import img1 from "../../images/Aluminum_Manufacturing_Plant_Aluminum2.png"
import img2 from "../../images/Aluminum_Manufacturing_Plant_Aluminum3.png"

// Placeholder for Related Product Images
// Replace these with your actual image imports
import product1Img from "../../images/SS_20.250.png";


// Related Products Data
const relatedProducts = [
  {
    
  
    id: 1,
    title: "Thermal Mass Flow Meter",
    image: product1Img,
    link: "/product-detail/detail15",
  },
];

function Casestudy6() {
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
          backgroundImage: `url(${IndustrialAutomationHeroBg})`,
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="tw-absolute tw-inset-0 tw-bg-black/70"></div>

        <div className="tw-container tw-mx-auto tw-px-4 tw-relative tw-z-10">
          <div className="tw-max-w-5xl tw-mx-auto text-left">
            <div className="tw-inline-block tw-border-l-4 tw-border-[#ffd700] tw-pl-4 tw-mb-6">
              <h5 className="tw-text-[#ffd700] tw-font-bold tw-uppercase tw-tracking-widest tw-text-sm md:tw-text-base">
                Industrial & Process Automation Case Study
              </h5>
            </div>

            <h1 className="tw-text-3xl md:tw-text-5xl tw-font-bold tw-leading-tight tw-mb-8">
              PLC-Based Combustion Control System Improves Efficiency and Reduces Emissions at a Leading Aluminum Manufacturing Plant
            </h1>

            <p className="tw-text-gray-300 tw-text-lg md:tw-text-xl tw-leading-relaxed tw-max-w-4xl tw-text-justify">
              In the aluminum industry, combustion efficiency directly influences energy costs, environmental performance, and process reliability. A leading aluminum producer in India collaborated with IOTAFLOW to automate its industrial burner systems using a closed-loop air–fuel ratio control solution. This project leveraged PLC-based logic, precision flow sensors, and modulating valves to ensure 100% optimized combustion — reducing fuel consumption, emissions, and maintenance requirements across the production line.
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
                The Challenge – Inconsistent Combustion and High Fuel Usage
                <span className="tw-block tw-h-1 tw-w-20 tw-bg-[#ffd700] tw-mt-2"></span>
              </h2>
              {/* Justified text */}
              <div className="tw-text-gray-700 tw-text-lg tw-leading-relaxed tw-space-y-4 tw-text-justify">
                <p>
                  The client’s existing burner systems relied on manual air and fuel adjustment, resulting in unstable flame quality, variable efficiency, and elevated carbon emissions. Inconsistent combustion also led to higher fuel costs and frequent maintenance interventions due to soot buildup and incomplete burning.
                </p>
                <p>
                  To address these inefficiencies, the plant required a fully automated solution capable of maintaining a precise air–fuel ratio under varying load and temperature conditions.
                </p>
              </div>
            </section>

            {/* Image Column */}
            <div className="tw-relative tw-h-80 lg:tw-h-[400px] tw-w-full tw-bg-gray-200 tw-rounded-2xl tw-overflow-hidden tw-shadow-xl">
              <img 
                src={img1} 
                alt="Combustion Challenge Overview" 
                className="tw-w-full tw-h-full tw-object-cover"
              />
            </div>
          </div>

          {/* --- Section 2: The Solution (Full Width / Centered) --- */}
          <section className="tw-w-full tw-max-w-4xl tw-mx-auto tw-bg-gray-50 tw-p-8 md:tw-p-12 tw-rounded-2xl tw-border-l-8 tw-border-[#ffd700] tw-shadow-sm">
            <h2 className="tw-text-2xl md:tw-text-3xl tw-font-bold tw-text-black tw-mb-6">
              The IOTAFLOW Solution – Closed-Loop PLC Automation with Intelligent Flow Control
            </h2>
            {/* Justified text */}
            <p className="tw-text-gray-700 tw-text-lg tw-leading-relaxed tw-mb-8 tw-text-justify">
              IOTAFLOW engineered and implemented a PLC-based combustion control system integrated with flow measurement and modulating valve technology. This closed-loop architecture delivered a self-correcting combustion process that maintained stability, efficiency, and environmental compliance.
            </p>

            <ul className="tw-space-y-8">
              <li className="tw-flex tw-items-start">
                <span className="tw-flex-shrink-0 tw-w-12 tw-h-12 tw-bg-black tw-text-[#ffd700] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-xl tw-mr-5">1</span>
                <div className="tw-w-full">
                  <strong className="tw-block tw-text-black tw-text-xl tw-mb-2">Flow Measurement:</strong>
                  <p className="tw-text-gray-700 tw-text-lg tw-text-justify">
                    High-accuracy flow sensors installed on both air and fuel lines for real-time monitoring.
                  </p>
                </div>
              </li>
              <li className="tw-flex tw-items-start">
                <span className="tw-flex-shrink-0 tw-w-12 tw-h-12 tw-bg-black tw-text-[#ffd700] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-xl tw-mr-5">2</span>
                <div className="tw-w-full">
                  <strong className="tw-block tw-text-black tw-text-xl tw-mb-2">Automation Control:</strong>
                  <p className="tw-text-gray-700 tw-text-lg tw-text-justify">
                    A PID-based PLC logic continuously adjusted modulating control valves to maintain the ideal air–fuel ratio.
                  </p>
                </div>
              </li>
              <li className="tw-flex tw-items-start">
                <span className="tw-flex-shrink-0 tw-w-12 tw-h-12 tw-bg-black tw-text-[#ffd700] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-xl tw-mr-5">3</span>
                <div className="tw-w-full">
                  <strong className="tw-block tw-text-black tw-text-xl tw-mb-2">Dynamic Feedback Loop:</strong>
                  <p className="tw-text-gray-700 tw-text-lg tw-text-justify">
                    Real-time data from flow meters and process sensors ensured optimal combustion under all operating conditions.
                  </p>
                </div>
              </li>
              <li className="tw-flex tw-items-start">
                <span className="tw-flex-shrink-0 tw-w-12 tw-h-12 tw-bg-black tw-text-[#ffd700] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-xl tw-mr-5">4</span>
                <div className="tw-w-full">
                  <strong className="tw-block tw-text-black tw-text-xl tw-mb-2">System Integration:</strong>
                  <p className="tw-text-gray-700 tw-text-lg tw-text-justify">
                    The automation panel interfaced with the existing plant SCADA system, providing remote monitoring, alarms, and data logging for energy audits.
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
                alt="Efficiency and Results Visual" 
                className="tw-w-full tw-h-full tw-object-cover"
              />
            </div>

            {/* Text Column */}
            <section className="lg:tw-order-2 tw-w-full">
              <h2 className="tw-text-2xl md:tw-text-3xl tw-font-bold tw-text-black tw-mb-6">
                The Results – Efficiency, Savings & Emission Reduction
                <span className="tw-block tw-h-1 tw-w-20 tw-bg-[#ffd700] tw-mt-2"></span>
              </h2>
              {/* Justified text */}
              <p className="tw-text-gray-700 tw-text-lg tw-leading-relaxed tw-mb-8 tw-text-justify">
                After commissioning, the automated system demonstrated significant improvements across performance metrics.
              </p>
              
              <h3 className="tw-text-xl tw-font-bold tw-text-black tw-mb-4">Key Achievements:</h3>
              <ul className="tw-space-y-4 tw-mb-8">
                {[
                  "5–12% reduction in fuel consumption depending on load conditions",
                  "Stable and complete combustion with minimal manual intervention",
                  "Reduced CO and NOx emissions, supporting sustainability compliance",
                  "Lower maintenance downtime due to cleaner flame and reduced soot buildup",
                  "Enhanced operator safety through fully automated, self-regulating controls"
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
              The Impact – Intelligent Automation for Sustainable Manufacturing
              <span className="tw-block tw-h-1 tw-w-full tw-bg-[#ffd700] tw-mt-2"></span>
            </h2>
            {/* Justified text within the centered container */}
            <p className="tw-text-gray-700 tw-text-lg tw-leading-relaxed tw-text-justify">
              The automation upgrade transformed the client’s burner operation into a digitally intelligent combustion system, aligning with modern Industry 4.0 standards. By integrating flow intelligence with control logic, IOTAFLOW enabled the plant to achieve tangible cost savings, reduced emissions, and a lower carbon footprint — while enhancing long-term process reliability and sustainability.
            </p>
            <p className="tw-text-gray-700 tw-text-lg tw-leading-relaxed tw-text-justify tw-mt-4">
              This project demonstrates how flow-based automation can significantly improve energy efficiency and environmental performance across industrial manufacturing processes.
            </p>
          </section>

        </div>
      </div>

      {/* --- Call to Action --- */}
      <div className="tw-bg-[#ffd700] tw-py-20">
        <div className="tw-container tw-mx-auto tw-px-4 tw-text-center">
          <h2 className="tw-text-3xl md:tw-text-4xl tw-font-bold tw-text-black tw-mb-6">
            Looking to automate your combustion or process flow systems?
          </h2>
          <div className="tw-text-black/90 tw-text-lg tw-max-w-3xl tw-mx-auto tw-mb-10 tw-leading-relaxed">
            
            <p>
              Our PLC-integrated flow control solutions deliver higher efficiency, cleaner combustion, and measurable sustainability benefits for process industries worldwide.

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

    </div>
  );
}

export default Casestudy6;