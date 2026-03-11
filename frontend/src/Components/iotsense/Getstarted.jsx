import React from 'react';
import { Link } from 'react-router-dom'; // Added Link for the Contact button

// --- Placeholder Icons ---
// You can replace these with your actual icon components when they are ready.

const IconStep1 = ({ className }) => ( // Deploy
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
  </svg>
);
const IconStep2 = ({ className }) => ( // Stream
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);
const IconStep3 = ({ className }) => ( // Build
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);
const IconStep4 = ({ className }) => ( // ROI
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);
const IconStep5 = ({ className }) => ( // Expand
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5" />
  </svg>
);
// --- End Placeholder Icons ---

// The data for the 5 steps
const steps = [
  {
    icon: <IconStep1 className="tw-w-7 tw-h-7 tw-text-black" />,
    title: "Deploy & Connect",
    text: "Deploy your flow meters, smart water meters, IoT sensors and connect them to the IOT Sense gateway."
  },
  {
    icon: <IconStep2 className="tw-w-7 tw-h-7 tw-text-black" />,
    title: "Stream & Explore",
    text: (
    <>
      The data will stream into our portal — login via{" "}
      <Link
      to="/"
      onClick={() => window.scrollTo(0, 0)}
      className="tw-no-underline"
    >
      iotaflow.in
    </Link>
      , explore dashboards, set alerts, build workflows.
    </>
  )
  },
  {
    icon: <IconStep3 className="tw-w-7 tw-h-7 tw-text-black" />,
    title: "Build & Customize",
    text: "Use the no-code builder to craft your own dashboards, reports, compliance logs and automation rules."
  },
  {
    icon: <IconStep4 className="tw-w-7 tw-h-7 tw-text-black" />,
    title: "Realise ROI",
    text: "Start realising ROI in months: improved flow-efficiency, leak detection, utility cost savings, streamlined compliance."
  },
  {
    icon: <IconStep5 className="tw-w-7 tw-h-7 tw-text-black" />,
    title: "Expand & Scale",
    text: "Expand as you go: add more sites, integrate pump/valve data, tie in energy, link to CMMS/ERP and move to Industry 4.0 maturity."
  }
];

// Single Step Card Component
const StepCard = ({ icon, title, text, stepNumber }) => (
  <div className="tw-relative tw-flex tw-flex-col tw-bg-white tw-shadow-lg tw-rounded-xl tw-overflow-hidden tw-border tw-border-gray-200/50 tw-transition-all tw-duration-300 hover:tw-shadow-2xl hover:tw-border-gray-300 tw-pb-4"> {/* Added padding-bottom for the line */}
    {/* Icon and Step Badge in Upper Left Corner */}
    <div className="tw-absolute -tw-top-5 -tw-left-5">
      <div className="tw-relative tw-w-20 tw-h-20 tw-rounded-full tw-bg-[#ffd700] tw-flex tw-items-center tw-justify-center tw-shadow-md">
        <div className="tw-absolute -tw-right-1 -tw-bottom-1 tw-w-10 tw-h-10 tw-rounded-full tw-bg-[#ffd700] tw-flex tw-items-center tw-justify-center tw-shadow-sm tw-z-10">
          <span className="tw-text-xs tw-font-bold tw-text-black">STEP {stepNumber}</span>
        </div>
        <div className="tw-absolute tw-left-1/2 tw-top-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2 tw-z-20">
          {icon}
        </div>
      </div>
    </div>

    <div className="tw-p-6 tw-pt-20">
      {/* Content */}
      <h3 className="tw-mt-5 tw-text-lg tw-font-semibold tw-text-black">
        {title}
      </h3>
      <p className="tw-mt-2 tw-text-sm tw-text-gray-600">
        {text}
      </p>
    </div>

    {/* Yellow accent lines in bottom right corner */}
    <div className="tw-absolute tw-bottom-0 tw-right-0 tw-w-2/3 tw-h-1.5 tw-bg-[#ffd700]"></div>
    <div className="tw-absolute tw-bottom-0 tw-right-0 tw-w-1.5 tw-h-1/3 tw-bg-[#ffd700]"></div>
  </div>
);

// Main Component
function Getstarted() {
  return (
    <div className="tw-bg-black tw-py-16 sm:tw-py-24">
      <div className="tw-container tw-mx-auto tw-px-4">
        
        {/* Header Section */}
        <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-items-end tw-mb-20 tw-gap-8">
          
          {/* Left Side: Heading with Arrow */}
          <div className="tw-relative tw-text-left tw-w-fit">
            <h2 className="tw-text-3xl lg:tw-text-5xl tw-font-bold tw-text-white tw-relative tw-z-10">
              How to Get Started
            </h2>
            
            {/* Custom Bold Arrow Underline */}
            <div className="tw-absolute tw-left-0 tw-top-full tw-mt-2 tw-flex tw-items-center tw-w-[115%]">
              {/* Bold Arrow Shaft */}
              <div className="tw-h-2 tw-bg-[#ffd700] tw-flex-grow tw-rounded-l-sm"></div>
              
              {/* Bold Arrow Head using CSS Borders */}
              <div 
                className="tw-w-0 tw-h-0 
                tw-border-t-[12px] tw-border-t-transparent
                tw-border-b-[12px] tw-border-b-transparent
                tw-border-l-[20px] tw-border-l-[#ffd700]
                -tw-ml-[1px]" // Negative margin to ensure seamless connection
              ></div>
            </div>
          </div>

          {/* Right Side: Contact Button */}
          <Link 
            to="/contact" 
            className="tw-inline-flex tw-items-center tw-justify-center tw-px-8 tw-py-3 tw-text-base tw-font-bold tw-text-black tw-bg-[#ffd700] tw-rounded-full tw-shadow-md tw-transition-all tw-duration-300 hover:tw-bg-yellow-400 hover:tw-shadow-lg hover:-tw-translate-y-1 tw-no-underline"
          >
            Contact Us <span className="tw-ml-2">→</span>
          </Link>

        </div>

        {/* Steps Grid */}
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-5 tw-gap-8">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              title={step.title}
              text={step.text}
              stepNumber={index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Getstarted;