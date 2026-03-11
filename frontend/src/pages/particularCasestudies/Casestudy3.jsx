import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import WaterImg from "../../images/Case_study_images_Water_Water_stock.png"
import img1 from "../../images/Case_study_images_Water_Water(1).png"
import img2 from "../../images/Case_study_images_Water_Water(2).png"


import product1Img from "../../images/d4a.png";
import product2Img from "../../images/d2a.png";

// Related Products Data
const relatedProducts = [
  {
    id: 1,
    title: "Clamp-On Fixed UF 1500 Series",
    image: product1Img,
    link: "/product-detail/detail4", // Link to product page
  },
  {
    id: 2,
    title: "Intrusive Ultrasonic UF 1500 Series",
    image: product2Img,
    link: "/product-detail/detail3", // Link to product page
  }
  
];

function Casestudy3() {
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
          backgroundImage: `url(${WaterImg})`,
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="tw-absolute tw-inset-0 tw-bg-black/70"></div>

        <div className="tw-container tw-mx-auto tw-px-4 tw-relative tw-z-10">
          <div className="tw-max-w-5xl tw-mx-auto text-left">
            <div className="tw-inline-block tw-border-l-4 tw-border-[#ffd700] tw-pl-4 tw-mb-6">
              <h5 className="tw-text-[#ffd700] tw-font-bold tw-uppercase tw-tracking-widest tw-text-sm md:tw-text-base">
                Water & Wastewater Case Study
              </h5>
            </div>

            <h1 className="tw-text-3xl md:tw-text-5xl tw-font-bold tw-leading-tight tw-mb-8">
              Custom 4-Track Ultrasonic Flow Meter with Built-In Level Measurement Enhances Accuracy for a Major Municipal Water Project
            </h1>

            <p className="tw-text-gray-300 tw-text-lg md:tw-text-xl tw-leading-relaxed tw-max-w-4xl tw-text-justify">
              When conventional flow meters failed to provide accurate readings under variable pipe conditions, a leading municipal water utility turned to IOTAFLOW for an innovative solution. The result — a custom-engineered 4-Track Insertion Ultrasonic Flow Meter with built-in level measurement. This intelligent hybrid design delivered exceptional accuracy, reliability, and real-time visibility for one of the city’s largest water distribution systems.
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
                The Challenge – Measuring Flow in Partially Filled Pipelines
                <span className="tw-block tw-h-1 tw-w-20 tw-bg-[#ffd700] tw-mt-2"></span>
              </h2>
              {/* Justified text */}
              <div className="tw-text-gray-700 tw-text-lg tw-leading-relaxed tw-space-y-4 tw-text-justify">
                <p>
                  Municipal water networks often operate under fluctuating conditions where large-diameter pipelines are not always running full. Traditional flow meters struggle in these environments, causing data inaccuracies that affect volume calculations, billing, and overall system planning.
                </p>
                <p>
                  The water authority needed a technologically advanced yet field-robust solution — capable of accurately measuring flow even when the pipe wasn’t fully charged, without frequent recalibration or external sensors.
                </p>
              </div>
            </section>

            {/* Image Column */}
            <div className="tw-relative tw-h-80 lg:tw-h-[400px] tw-w-full tw-bg-gray-200 tw-rounded-2xl tw-overflow-hidden tw-shadow-xl">
              <img 
                src={img1}
                alt="Partially Filled Pipeline Challenge" 
                className="tw-w-full tw-h-full tw-object-cover"
              />
            </div>
          </div>

          {/* --- Section 2: The Solution (Full Width / Centered) --- */}
          <section className="tw-w-full tw-max-w-4xl tw-mx-auto tw-bg-gray-50 tw-p-8 md:tw-p-12 tw-rounded-2xl tw-border-l-8 tw-border-[#ffd700] tw-shadow-sm">
            <h2 className="tw-text-2xl md:tw-text-3xl tw-font-bold tw-text-black tw-mb-6">
              The IOTAFLOW Solution – An Integrated 4-Track Design for Total Flow Visibility
            </h2>
            {/* Justified text */}
            <p className="tw-text-gray-700 tw-text-lg tw-leading-relaxed tw-mb-8 tw-text-justify">
              IOTAFLOW responded by developing a custom 4-Track Insertion Ultrasonic Flow Meter that combined both velocity and level measurement within a single housing. This innovation eliminated the complexity of separate instrumentation while maintaining the highest accuracy under variable hydraulic conditions.
            </p>

            <ul className="tw-space-y-8">
              <li className="tw-flex tw-items-start">
                <span className="tw-flex-shrink-0 tw-w-12 tw-h-12 tw-bg-black tw-text-[#ffd700] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-xl tw-mr-5">1</span>
                <div className="tw-w-full">
                  <strong className="tw-block tw-text-black tw-text-xl tw-mb-2">Four-Track Architecture:</strong>
                  <p className="tw-text-gray-700 tw-text-lg tw-text-justify">
                    The pipe’s cross-section was divided into four precisely calibrated ultrasonic paths, capturing comprehensive flow velocity data across varying levels.
                  </p>
                </div>
              </li>
              <li className="tw-flex tw-items-start">
                <span className="tw-flex-shrink-0 tw-w-12 tw-h-12 tw-bg-black tw-text-[#ffd700] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-xl tw-mr-5">2</span>
                <div className="tw-w-full">
                  <strong className="tw-block tw-text-black tw-text-xl tw-mb-2">Built-In Level Sensing:</strong>
                  <p className="tw-text-gray-700 tw-text-lg tw-text-justify">
                    The flow meter featured an integrated level measurement module that continuously monitored the actual water height inside the pipe.
                  </p>
                </div>
              </li>
              <li className="tw-flex tw-items-start">
                <span className="tw-flex-shrink-0 tw-w-12 tw-h-12 tw-bg-black tw-text-[#ffd700] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-xl tw-mr-5">3</span>
                <div className="tw-w-full">
                  <strong className="tw-block tw-text-black tw-text-xl tw-mb-2">Intelligent Data Fusion:</strong>
                  <p className="tw-text-gray-700 tw-text-lg tw-text-justify">
                    Internal electronics dynamically combined flow velocity and level information to compute total flow volume, automatically compensating for partially filled conditions.
                  </p>
                </div>
              </li>
              <li className="tw-flex tw-items-start">
                <span className="tw-flex-shrink-0 tw-w-12 tw-h-12 tw-bg-black tw-text-[#ffd700] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-xl tw-mr-5">4</span>
                <div className="tw-w-full">
                  <strong className="tw-block tw-text-black tw-text-xl tw-mb-2">Compact & Maintenance-Free Design:</strong>
                  <p className="tw-text-gray-700 tw-text-lg tw-text-justify">
                    The all-in-one assembly minimized external wiring, reduced installation space, and ensured seamless field operation.
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
                alt="4-Track Flow Meter Results" 
                className="tw-w-full tw-h-full tw-object-cover"
              />
            </div>

            {/* Text Column */}
            <section className="lg:tw-order-2 tw-w-full">
              <h2 className="tw-text-2xl md:tw-text-3xl tw-font-bold tw-text-black tw-mb-6">
                The Results – Accuracy, Efficiency & Reliability
                <span className="tw-block tw-h-1 tw-w-20 tw-bg-[#ffd700] tw-mt-2"></span>
              </h2>
              {/* Justified text */}
              <p className="tw-text-gray-700 tw-text-lg tw-leading-relaxed tw-mb-8 tw-text-justify">
                The newly installed system delivered exceptional performance, transforming the utility’s ability to manage and optimize water resources.
              </p>
              
              <h3 className="tw-text-xl tw-font-bold tw-text-black tw-mb-4">Key Outcomes:</h3>
              <ul className="tw-space-y-4 tw-mb-8">
                {[
                  "Accurate flow measurement under both full and partial pipe conditions",
                  "Simplified installation",
                  "Continuous, maintenance-free operation with real-time monitoring",
                  "Improved operational efficiency and cost control",
                  "Enhanced data reliability for reporting and regulatory compliance"
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
              The Impact – Redefining Flow Measurement for Urban Water Networks
              <span className="tw-block tw-h-1 tw-w-full tw-bg-[#ffd700] tw-mt-2"></span>
            </h2>
            {/* Justified text within the centered container */}
            <p className="tw-text-gray-700 tw-text-lg tw-leading-relaxed tw-text-justify">
              This project showcases IOTAFLOW’s engineering excellence in creating solutions purpose-built for complex infrastructure challenges. The utility gained higher accuracy, lower maintenance, and smarter water management.
            </p>
            <p className="tw-text-gray-700 tw-text-lg tw-leading-relaxed tw-text-justify tw-mt-4">
              The success of this deployment highlights how IOTAFLOW continues to push the boundaries of precision metering, supporting cities and utilities in their journey toward sustainability and digital transformation.
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
            Looking to improve accuracy in your municipal water systems?
          </h2>
          <div className="tw-text-black/90 tw-text-lg tw-max-w-3xl tw-mx-auto tw-mb-10 tw-leading-relaxed">
            
            <p>
              Our advanced flow metering technologies deliver custom-built precision for water utilities, treatment plants, and large-scale infrastructure projects.
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

export default Casestudy3;