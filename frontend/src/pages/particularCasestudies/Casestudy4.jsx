import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import MiningImg from "../../images/Case_study_images_Minning_Mining_stock.png"
import img1 from "../../images/Case_study_images_Minning_Mining(1).png"
import img2 from "../../images/Case_study_images_Minning_Mining(2).png"

import product1Img from "../../images/d3a.png";


// Related Products Data
const relatedProducts = [
  {
    id: 1,
    title: "INTRUSIVE ULTRASONIC UF 1500 Series (1 - 4 channels)",
    image: product1Img,
    link: "/product-detail/detail3", // Link to product page
  }
  
];

function Casestudy4() {
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
          backgroundImage: `url(${MiningImg})`,
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="tw-absolute tw-inset-0 tw-bg-black/70"></div>

        <div className="tw-container tw-mx-auto tw-px-4 tw-relative tw-z-10">
          <div className="tw-max-w-5xl tw-mx-auto text-left">
            <div className="tw-inline-block tw-border-l-4 tw-border-[#ffd700] tw-pl-4 tw-mb-6">
              <h5 className="tw-text-[#ffd700] tw-font-bold tw-uppercase tw-tracking-widest tw-text-sm md:tw-text-base">
                Mining & Fertilizer Industry Case Study
              </h5>
            </div>

            <h1 className="tw-text-3xl md:tw-text-5xl tw-font-bold tw-leading-tight tw-mb-8">
              High-Accuracy Area Velocity Flow Meters Enhance Process Efficiency for a Leading Mining & Fertilizer Producer in Saudi Arabia
            </h1>

            <p className="tw-text-gray-300 tw-text-lg md:tw-text-xl tw-leading-relaxed tw-max-w-4xl tw-text-justify">
              In large-scale mining and fertilizer production, process flow accuracy is critical for efficiency and safety. A leading industrial phosphate producer in Saudi Arabia partnered with IOTAFLOW to implement custom-built Area Velocity Flow Meter (AVFM) systems for its advanced process network. Each system was engineered to provide precise flow measurement in partially filled and open-channel pipelines, ensuring reliable data for process optimization and regulatory compliance.
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
                The Challenge – Accurate Flow Measurement in Complex Industrial Pipelines
                <span className="tw-block tw-h-1 tw-w-20 tw-bg-[#ffd700] tw-mt-2"></span>
              </h2>
              {/* Justified text */}
              <div className="tw-text-gray-700 tw-text-lg tw-leading-relaxed tw-space-y-4 tw-text-justify">
                <p>
                  The client’s phosphate production facility operates extensive process pipelines carrying water, slurry, and chemical streams under variable flow conditions. Traditional inline meters were unable to maintain measurement stability when the pipelines weren’t running full, leading to unreliable readings and process inefficiencies.
                </p>
                <p>
                  The facility required a custom flow monitoring solution that could provide high-accuracy measurement across multiple line sizes and varying fill levels with minimal maintenance and long-term reliability in harsh operating environments.
                </p>
              </div>
            </section>

            {/* Image Column */}
            <div className="tw-relative tw-h-80 lg:tw-h-[400px] tw-w-full tw-bg-gray-200 tw-rounded-2xl tw-overflow-hidden tw-shadow-xl">
              <img 
                src={img1} 
                alt="Complex Industrial Pipelines" 
                className="tw-w-full tw-h-full tw-object-cover"
              />
            </div>
          </div>

          {/* --- Section 2: The Solution (Full Width / Centered) --- */}
          <section className="tw-w-full tw-max-w-4xl tw-mx-auto tw-bg-gray-50 tw-p-8 md:tw-p-12 tw-rounded-2xl tw-border-l-8 tw-border-[#ffd700] tw-shadow-sm">
            <h2 className="tw-text-2xl md:tw-text-3xl tw-font-bold tw-text-black tw-mb-6">
              The IOTAFLOW Solution – Custom 4-Track Area Velocity Flow Meter (Ultrasonic insertion) Systems
            </h2>
            {/* Justified text */}
            <p className="tw-text-gray-700 tw-text-lg tw-leading-relaxed tw-mb-8 tw-text-justify">
              To meet the project’s stringent performance requirements, IOTAFLOW designed, manufactured, and tested a complete suite of custom-engineered Area Velocity Flow Meter (AVFM) systems, ranging from DN500 to DN1400.
            </p>

            <ul className="tw-space-y-8">
              <li className="tw-flex tw-items-start">
                <span className="tw-flex-shrink-0 tw-w-12 tw-h-12 tw-bg-black tw-text-[#ffd700] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-xl tw-mr-5">1</span>
                <div className="tw-w-full">
                  <strong className="tw-block tw-text-black tw-text-xl tw-mb-2">4-Track Insertion Ultrasonic Sensing:</strong>
                  <p className="tw-text-gray-700 tw-text-lg tw-text-justify">
                    Ensured accurate velocity profiling across the pipe’s cross-section, even during partial flow conditions.
                  </p>
                </div>
              </li>
              <li className="tw-flex tw-items-start">
                <span className="tw-flex-shrink-0 tw-w-12 tw-h-12 tw-bg-black tw-text-[#ffd700] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-xl tw-mr-5">2</span>
                <div className="tw-w-full">
                  <strong className="tw-block tw-text-black tw-text-xl tw-mb-2">Custom Fabricated Spool Design:</strong>
                  <p className="tw-text-gray-700 tw-text-lg tw-text-justify">
                    Each meter was tailor-built to project specifications, with optimized flow geometry and welded sensor housings.
                  </p>
                </div>
              </li>
              <li className="tw-flex tw-items-start">
                <span className="tw-flex-shrink-0 tw-w-12 tw-h-12 tw-bg-black tw-text-[#ffd700] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-xl tw-mr-5">3</span>
                <div className="tw-w-full">
                  <strong className="tw-block tw-text-black tw-text-xl tw-mb-2">Fully Integrated Electronics:</strong>
                  <p className="tw-text-gray-700 tw-text-lg tw-text-justify">
                    Provided real-time velocity, area, and totalized flow data through robust industrial interfaces.
                  </p>
                </div>
              </li>
              <li className="tw-flex tw-items-start">
                <span className="tw-flex-shrink-0 tw-w-12 tw-h-12 tw-bg-black tw-text-[#ffd700] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-xl tw-mr-5">4</span>
                <div className="tw-w-full">
                  <strong className="tw-block tw-text-black tw-text-xl tw-mb-2">Comprehensive Testing:</strong>
                  <p className="tw-text-gray-700 tw-text-lg tw-text-justify">
                    Every meter underwent hydrostatic, welding, and calibration tests, verified under internationally recognized QA/QC standards.
                  </p>
                </div>
              </li>
              <li className="tw-flex tw-items-start">
                <span className="tw-flex-shrink-0 tw-w-12 tw-h-12 tw-bg-black tw-text-[#ffd700] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-xl tw-mr-5">5</span>
                <div className="tw-w-full">
                  <strong className="tw-block tw-text-black tw-text-xl tw-mb-2">Turnkey Execution:</strong>
                  <p className="tw-text-gray-700 tw-text-lg tw-text-justify">
                    Manufacturing, inspection, and final testing were fully completed in-house by IOTAFLOW’s engineering team, ensuring total process control and consistency.
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
                alt="AVFM System Results" 
                className="tw-w-full tw-h-full tw-object-cover"
              />
            </div>

            {/* Text Column */}
            <section className="lg:tw-order-2 tw-w-full">
              <h2 className="tw-text-2xl md:tw-text-3xl tw-font-bold tw-text-black tw-mb-6">
                The Results – Reliable Flow Intelligence Across the Phosphate Process
                <span className="tw-block tw-h-1 tw-w-20 tw-bg-[#ffd700] tw-mt-2"></span>
              </h2>
              {/* Justified text */}
              <p className="tw-text-gray-700 tw-text-lg tw-leading-relaxed tw-mb-8 tw-text-justify">
                The deployment of IOTAFLOW’s custom AVFM systems delivered measurable improvements in process visibility and operational reliability.
              </p>
              
              <h3 className="tw-text-xl tw-font-bold tw-text-black tw-mb-4">Key Results:</h3>
              <ul className="tw-space-y-4 tw-mb-8">
                {[
                  "Accurate and repeatable flow measurement in partially filled pipelines",
                  "Improved control of process efficiency and water/chemical utilization",
                  "Reduced maintenance downtime through durable non-intrusive design",
                  "Full QA/QC traceability and compliance with EPC and client standards",
                  "Reliable data for performance analysis and process optimization"
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
              The Impact – Engineering Precision for the Process Industry
              <span className="tw-block tw-h-1 tw-w-full tw-bg-[#ffd700] tw-mt-2"></span>
            </h2>
            {/* Justified text within the centered container */}
            <p className="tw-text-gray-700 tw-text-lg tw-leading-relaxed tw-text-justify">
              This project underscores IOTAFLOW’s ability to deliver custom-engineered flow solutions for the world’s most demanding industrial environments. By providing high-precision Area Velocity Flow Meters tailored to complex phosphate production systems, IOTAFLOW helped enable smarter, safer, and more efficient operations reinforcing its reputation as a trusted technology partner in industrial metering innovation.
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
            Need accurate flow measurement for partially filled process lines?
          </h2>
          <div className="tw-text-black/90 tw-text-lg tw-max-w-3xl tw-mx-auto tw-mb-10 tw-leading-relaxed">
            
            <p>
              Our custom Insertion ultrasonic and area velocity metering solutions ensure precision, reliability, and performance for mining, fertilizer, and process industries worldwide.
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

export default Casestudy4;