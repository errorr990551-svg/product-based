import React from 'react';


import IconTelemetryImg from '../../images/Iotsense_Emoticons_RemoteTelemetrySystem.png';
import SmartWaterImg from '../../images/Iotsense_Emoticons_SmartWaterMeterSupport.png';
import IndeustryReadyImg from '../../images/Iotsense_Emoticons_Industry_4.0_Ready.png';
import RegulatoryImg from '../../images/Iotsense_Emoticons_Regulatory_Compliance.png';
import IconDatabaseImg from '../../images/Iotsense_Emoticons_Data_Accessibility.png';


// Card component to display each feature
const FeatureCard = ({ icon, title, className }) => (
  <div className={`tw-bg-white tw-border tw-border-gray-100 tw-rounded-xl tw-shadow-lg tw-p-6 tw-flex tw-items-center tw-gap-4 tw-text-left tw-transition-all tw-duration-300 hover:tw-shadow-xl hover:tw-scale-[1.02] ${className}`}>
    {/* Icon Wrapper */}
    <div className="tw-inline-flex tw-flex-shrink-0 tw-items-center tw-justify-center">
      {/* Image Tag for Icon - increased size since it includes background */}
      <img 
        src={icon} 
        alt="" 
        className="tw-w-12 tw-h-12 tw-object-contain" 
      />
    </div>
    <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900">
      {title}
    </h3>
  </div>
);

// Main Component
function WhychooseIOT() {
  const features = [
    {
      icon: IconTelemetryImg, // Pass the image source
      title: "Remote Telemetry System (RTS) for Flow",
    },
    {
      icon: SmartWaterImg,
      title: "Smart Water Meter / Digital Water Meter Support",
    },
    {
      icon: IndeustryReadyImg,
      title: "Industry 5.0 & IIoT Ready",
    },
    {
      icon: RegulatoryImg,
      title: "Regulatory Compliance",
    },
    {
      icon: IconDatabaseImg,
      title: "Data & Visualisation Anytime, Anywhere",
    }
  ];

  return (
    <div className="tw-bg-gray-50 tw-py-16 sm:tw-py-24">
      <div className="tw-container tw-mx-auto tw-px-4">
        {/* Header Section */}
        <div className="tw-text-center tw-max-w-3xl tw-mx-auto">
          <h2 className="tw-text-3xl lg:tw-text-4xl tw-font-bold tw-text-black">
            Why Choose IOT Sense?
          </h2>
        </div>

        {/* Features Container */}
        <div className="tw-mt-12 tw-flex tw-flex-wrap tw-justify-center tw-gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              className="tw-w-full md:tw-w-[calc(50%-1rem)] lg:tw-w-[calc(33.333%-1.333rem)]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhychooseIOT;