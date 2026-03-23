import React from 'react';

import realWorldImg from '../../images/Ultrasonic_Flow_meter_Air_ATZTA TRXTRZ_PPT_(3).png';

function Realworld() {
  return (
    // Reduced vertical padding (py-10 instead of py-16/24)
    <div className="tw-bg-white tw-py-10 sm:tw-py-12">
      <div className="tw-container tw-mx-auto tw-px-4">
        
        {/* Reduced gap between columns (gap-8 instead of gap-12/20) */}
        <div className="tw-max-w-7xl tw-mx-auto tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-8 lg:tw-gap-12 tw-items-center">
          
          {/* Left Side: Content with Vertical Line */}
          <div className="tw-flex tw-items-stretch">
            
            {/* The Vertical Grey Line */}
            <div className="tw-w-1.5 tw-bg-gray-300 tw-rounded-full tw-flex-shrink-0 tw-mr-5 sm:tw-mr-6"></div>

            {/* Text Content */}
            <div className="tw-py-1">
              {/* Reduced heading size and margin */}
              <h3 className="tw-text-xl sm:tw-text-2xl tw-font-bold tw-text-gray-900 tw-mb-4">
                Real-World Application: Enhancing Compressor Efficiency with TRX Ultrasonic Air Flow Meter
              </h3>

              {/* Reduced text size and spacing */}
              <div className="tw-space-y-3 tw-text-sm sm:tw-text-base tw-text-gray-700 tw-leading-relaxed">
                <p>
                  Compressed air systems are among the most energy-intensive operations in manufacturing — accounting for <span className="tw-font-bold tw-text-black">up to 23% of a plant’s total energy consumption.</span>
                </p>
                
                <p>
                  By integrating our TRX Ultrasonic Air Flow Meter (UFM) with the IoT Sense platform and an energy meter, you can achieve real-time monitoring of air generation versus energy consumption. The system tracks kilowatt-hours (kWh) consumed per cubic meter (m³) of compressed air produced, providing an instant snapshot of compressor performance.
                </p>
                
                <p className="tw-italic tw-text-gray-600 tw-font-medium">
                  An interactive live dashboard instantly detects efficiency drops, leakages, or overloading, enabling proactive, predictive maintenance that drives energy savings, enhances operational transparency, and reduces compressor energy costs for sustainable performance.
                </p>
              </div>

              {/* Learn More Button - slightly smaller padding/margin */}
              <div className="tw-mt-6">
                <a 
                  href="/" 
                  className="tw-inline-flex tw-items-center tw-justify-center tw-px-6 tw-py-2 tw-text-sm sm:tw-text-base tw-font-bold tw-text-black tw-bg-[#ffd700] tw-rounded-lg tw-shadow-md tw-transition-all tw-duration-300 hover:tw-bg-yellow-400 hover:tw-shadow-lg hover:-tw-translate-y-1 tw-no-underline"
                >
                  Learn More
                </a>
              </div>

            </div>
          </div>

          {/* Right Side: Image Placeholder */}
          {/* Reduced height (h-64/min-h-300px instead of min-h-400px) */}
          <div className="tw-relative tw-w-full tw-h-56 sm:tw-h-72 lg:tw-h-full tw-min-h-[300px] tw-bg-white tw-rounded-xl tw-overflow-hidden tw-flex tw-items-center tw-justify-center tw-shadow-sm">
            <img 
              // Replace placeholder with 'realWorldImg' variable in your project
              src={realWorldImg} 
              alt="Real-world application showing TRX Ultrasonic Air Flow Meter integration with IOT Sense" 
              className="tw-w-full tw-h-full tw-object-contain"
            />
          </div>

        </div>

      </div>
    </div>
  );
}

export default Realworld;