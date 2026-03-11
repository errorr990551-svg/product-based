import React from 'react';
import myVideo from '../../images/iotsensevideo.mp4';

function IOTvideo() {
  return (
    <div className="tw-relative tw-w-full tw-h-[600px] tw-flex tw-items-center tw-overflow-hidden">
      {/* Video Background - Absolute Positioning */}
      <video
        className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        {/* Replace the src below with your local variable: src={myVideo} */}
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="tw-relative tw-z-10 tw-container tw-mx-auto tw-px-4">
        
        <div className="tw-max-w-2xl tw-bg-black/20 tw-p-4 md:tw-p-6 tw-rounded-xl tw-border-l-4 tw-border-[#ffd700]">
          
          {/* Updated: Smaller Heading Size */}
          <h1 className="tw-text-2xl md:tw-text-4xl tw-font-bold tw-text-black tw-mb-4">
            <span className="tw-text-[#ffaa00]">IOT Sense</span> – Smart Flow Intelligence Platform
          </h1>
          
          {/* Updated: Smaller Description Size */}
          <p className="tw-text-sm md:tw-text-lg tw-text-black tw-leading-relaxed">
            Transform your flow-data into actionable intelligence with IOT Sense: the next-generation IoT & Industry 4.0 platform built specifically for flow measurement, smart water-/utility-metering and remote telemetry systems. Real-time dashboards, cloud connectivity, regulatory compliance (CGWA, CPCB, NIC data-requirements) and full workflow automation — all in one unified solution.
          </p>
        </div>
      </div>
    </div>
  );
}

export default IOTvideo;