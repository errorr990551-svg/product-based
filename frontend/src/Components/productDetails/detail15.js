import { useState } from "react";
import api from "../../services/api";

import React, { useEffect } from 'react';
import bannerImg from '../../images/Schimdt_banner.png';
import model20250Img from '../../images/SS_20.250.png';
import model20261Img from '../../images/SS_20.261.png';
import model20415Img from '../../images/SS_20.415.png';
import model20600Img from '../../images/SS_20.600.png';
import model23400Img from '../../images/SS_23.400.png';
import model30300Img from '../../images/SS_30.300.png';


// --- Placeholder Links ---
const calculatorLink = "https://apps.schmidttechnology.de/stroemungsrechner/en/volumenstrom-geschwindigkeit.html";
const productLinkPlaceholder = "#"; 


// --- Application Data ---
const applicationsData = [
  { title: "Compressed air flow measurement", image: "https://placehold.co/600x400/1a202c/ffd700?text=Compressed+Air" },
  { title: "Industrial gas distribution lines", image: "https://placehold.co/600x400/1a202c/ffd700?text=Gas+Distribution" },
  { title: "Energy audits and consumption tracking", image: "https://placehold.co/600x400/1a202c/ffd700?text=Energy+Audits" },
  { title: "Ventilation and HVAC air balancing", image: "https://placehold.co/600x400/1a202c/ffd700?text=HVAC+Balancing" },
  { title: "Cleanrooms & Pharmaceuticals", image: "https://placehold.co/600x400/1a202c/ffd700?text=Cleanrooms" },
  { title: "Hazardous gas area monitoring (ATEX zones)", image: "https://placehold.co/600x400/1a202c/ffd700?text=Hazardous+Areas" },
  { title: "Burners, Furnaces & Combustion Control", image: "https://placehold.co/600x400/1a202c/ffd700?text=Combustion+Control" },
  { title: "Sewage Treatment & Biogas", image: "https://placehold.co/600x400/1a202c/ffd700?text=Sewage+%26+Biogas" },
  { title: "Heavy‑Duty Industrial Applications", image: "https://placehold.co/600x400/1a202c/ffd700?text=Heavy+Industry" },
];

// --- Component for individual Model Row (Compact Version) ---
const ModelRow = ({ title, description, imagePlaceholder, link }) => (
  // Reduced vertical padding (py-4) and gap
  <div className="tw-group tw-flex tw-flex-col md:tw-flex-row tw-items-start tw-gap-4 lg:tw-gap-8 tw-py-4 tw-border-b tw-border-gray-200 last:tw-border-0">
    
    {/* Left: Clickable Image - Made narrower (1/4 instead of 1/3) */}
    <div className="tw-w-full md:tw-w-1/4 lg:tw-w-1/5 tw-flex-shrink-0">
      <a 
        href={link || productLinkPlaceholder} 
        target="_blank" 
        rel="noopener noreferrer"
        className="tw-block tw-relative tw-rounded-xl tw-overflow-hidden tw-shadow-sm hover:tw-shadow-lg tw-transition-all tw-duration-500 tw-cursor-pointer"
      >
        {/* Aspect ratio container */}
        <div className="tw-aspect-[4/3] tw-w-full tw-bg-gray-100">
          <img 
            src={imagePlaceholder || "https://placehold.co/600x400/f3f4f6/1a202c?text=View+Product"} 
            alt={`View ${title}`} 
            className="tw-w-full tw-h-full tw-object-contain tw-transition-transform tw-duration-700 group-hover:tw-scale-110" 
          />
        </div>
      </a>
    </div>

    {/* Right: Text Content */}
    <div className="tw-flex-1">
      {/* Title - Compact margin */}
      <h4 className="tw-text-lg md:tw-text-xl tw-font-bold tw-text-[#e6c200] tw-mb-2">
        {title}
      </h4>
      <p className="tw-text-gray-600 tw-text-sm md:tw-text-base tw-leading-snug tw-mb-2">
        {description}
      </p>

      {/* Added Arrow Link */}
      <a 
        href={link || productLinkPlaceholder}
        target="_blank" 
        rel="noopener noreferrer"
        className="tw-inline-flex tw-items-center tw-text-[#ffd700] hover:tw-text-[#e6c200] tw-font-bold tw-text-xs md:tw-text-sm tw-transition-colors tw-no-underline"
      >
        View product <span className="tw-ml-1">→</span>
      </a>
    </div>
    
  </div>
);

// --- Component for Section Header (Compact) ---
const SectionHeader = ({ number, title, idealFor, industries }) => (
  <div className="tw-mb-4">
    <div className="tw-flex tw-items-center tw-gap-3 tw-mb-3">
      <span className="tw-flex-shrink-0 tw-w-8 tw-h-8 tw-bg-black tw-text-[#ffd700] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-base shadow-md">
        {number}
      </span>
      <h3 className="tw-text-xl md:tw-text-3xl tw-font-bold tw-text-black">
        {title}
      </h3>
    </div>
    <div className="tw-pl-0 md:tw-pl-11 tw-text-gray-700 tw-space-y-1 tw-text-sm md:tw-text-base">
      <p><strong className="tw-text-black">Ideal for:</strong> {idealFor}</p>
      <p><strong className="tw-text-black">Typical industries:</strong> {industries}</p>
    </div>
  </div>
);

// --- Component for Application Card (Compact) ---
const ApplicationCard = ({ title, image }) => (
  // Reduced height to h-24 / h-32
  <div className="tw-group tw-relative tw-h-24 md:tw-h-32 tw-rounded-lg tw-overflow-hidden tw-shadow-sm hover:tw-shadow-md tw-transition-all tw-duration-300">
    {/* Background Image */}
    <div 
      className="tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-transition-transform tw-duration-700 group-hover:tw-scale-110"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
    
    {/* Overlay */}
    <div className="tw-absolute tw-inset-0 tw-bg-black/60 group-hover:tw-bg-black/70 tw-transition-colors tw-duration-300"></div>

    {/* Content */}
    <div className="tw-relative tw-z-10 tw-h-full tw-flex tw-items-center tw-justify-center tw-p-2 tw-text-center">
      <h4 className="tw-text-xs md:tw-text-sm tw-font-bold tw-text-white group-hover:tw-text-[#ffd700] tw-transition-colors tw-leading-tight">
        {title}
      </h4>
    </div>
    
    {/* Bottom Border Accent */}
    <div className="tw-absolute tw-bottom-0 tw-left-0 tw-w-full tw-h-1 tw-bg-[#ffd700] tw-transform tw-scale-x-0 group-hover:tw-scale-x-100 tw-transition-transform tw-duration-300"></div>
  </div>
);


const Detail15 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
});
const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState("");
const [error, setError] = useState("");

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");
  setSuccess("");

  try {
    await api.post("/contact", formData);
    setSuccess("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  } catch (err) {
    console.error(err);
    setError("Failed to send message. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="tw-bg-gray-50 tw-min-h-screen tw-font-sans">
      
      {/* ==================== HERO SECTION (Compact) ==================== */}
      {/* Reduced height to 300px/350px */}
      <div className="tw-relative tw-w-full tw-h-[300px] md:tw-h-[350px] tw-flex tw-items-center tw-justify-center tw-overflow-hidden">
        {/* Banner Image Background */}
        <div 
          className="tw-absolute tw-inset-0 tw-bg-cover tw-bg-center"
          style={{ backgroundImage: `url(${bannerImg})` }}
        ></div>
        
        {/* Dark Overlay for contrast */}
        <div className="tw-absolute tw-inset-0 tw-bg-black/50"></div>

        {/* Centered Text */}
        <div className="tw-relative tw-z-10 tw-flex tw-flex-col tw-items-center tw-justify-center tw-text-center tw-p-4">
          <h5 className="tw-text-white tw-font-extrabold tw-uppercase tw-tracking-widest tw-mb-2 tw-text-xl md:tw-text-3xl tw-drop-shadow-md">
            SCHMIDT
          </h5>
          
          <h1 className="tw-text-2xl md:tw-text-4xl tw-font-extrabold tw-text-white tw-leading-tight tw-drop-shadow-lg">
            THERMAL MASS <br/> FLOW SENSORS
          </h1>
        </div>
      </div>


      {/* ==================== CONTENT SECTION (Compact) ==================== */}
      {/* Reduced padding to py-10 */}
      <div className="tw-bg-black tw-text-white tw-py-10">
        <div className="tw-container tw-mx-auto tw-px-4">
          <div className="tw-max-w-5xl tw-mx-auto">
            
            {/* Calculator Intro & Button */}
            <div className="tw-text-center tw-mb-10">
              <p className="tw-text-gray-300 tw-text-base md:tw-text-lg tw-max-w-3xl tw-mx-auto tw-mb-6 tw-leading-relaxed">
                Instantly calculate the flow velocity or volume flow of air and industrial gases including compressed air, nitrogen, oxygen, carbon dioxide, argon, methane, natural gas, biogas, helium, and hydrogen with our smart, interactive calculator powered by SCHMIDT Technology, Germany.
              </p>
              <a 
                href={calculatorLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="tw-inline-block tw-bg-[#ffd700] tw-text-black tw-font-bold tw-py-3 tw-px-8 tw-rounded-full tw-shadow-lg tw-transition-transform hover:tw-scale-105 hover:tw-bg-yellow-400 tw-no-underline tw-text-sm"
              >
                Launch Calculator ↗
              </a>
            </div>

            {/* Brand Intro - Reduced padding */}
            <div className="tw-bg-white/5 tw-backdrop-blur-sm tw-p-6 md:tw-p-10 tw-rounded-2xl tw-border-l-8 tw-border-[#ffd700]">
              <h2 className="tw-text-xl md:tw-text-2xl tw-font-bold tw-text-white tw-mb-4">Precision Engineering by SCHMIDT</h2>
              <div className="tw-space-y-3 tw-text-gray-300 tw-text-base md:tw-text-lg tw-leading-relaxed">
                <p>
                  SCHMIDT Technology, a globally trusted German brand, is a pioneer in precision-engineered thermal mass flow sensors for the accurate measurement of air and gases across industrial and utility applications.
                </p>
                <p>
                  With more than 35 years of expertise, SCHMIDT flow sensors deliver unmatched accuracy and long-term stability for compressed air and a wide range of gases, including compressed air, nitrogen, oxygen, argon, carbon dioxide, methane, natural gas, helium, and biogas.
                </p>
                <p>
                  Engineered on the thermal anemometer principle, SCHMIDT sensors directly measure mass flow and velocity without requiring separate pressure or temperature compensation. This makes them ideal for energy monitoring, leak detection, process control, and cleanroom applications, providing reliable performance even in demanding industrial environments.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ==================== PRODUCT SECTIONS (Compact) ==================== */}
      {/* Reduced vertical spacing */}
      <div className="tw-container tw-mx-auto tw-px-4 tw-py-12 md:tw-py-16 tw-space-y-12">

        {/* --- SECTION 1: Compressed Air --- */}
        <section className="tw-max-w-6xl tw-mx-auto">
          <SectionHeader 
            number="1"
            title="Flow Sensors for Compressed Air & Industrial Processes"
            idealFor="Energy audits, compressor monitoring, leakage detection, process gas flow, and industrial automation."
            industries="Manufacturing, metal, cement, food processing, chemicals, and power plants."
          />
          
          <div className="tw-pl-0 md:tw-pl-11 tw-mb-6">
            <ModelRow 
              title="SS 20.600 / SS 20.600 Ex"
              description="Chamber head sensors with wide measuring range (0.2–220 m/s), withstand up to 40 bar, ideal for compressed air and industrial gas systems."
              imagePlaceholder={model20600Img}
              link="https://www.schmidttechnology.de/en/produkt/schmidt-flow-sensor-ss-20-600/?utm_source=chatgpt.com"
            />
            <ModelRow 
              title="SS 20.651"
              description="Chamber head sensor for drying processes and air compressors, up to 350 °C and 16 bar."
              imagePlaceholder={model20600Img} // Reusing image
              link="https://www.schmidttechnology.de/en/produkt/schmidt-flow-sensor-ss-20-651/"
            />
             <ModelRow 
              title="SS 20.700 / SS 23.700 Ex"
              description="Double pin “heavy-duty” sensors for biogas, natural gas, and harsh gas media. Stainless-steel encapsulation for contamination resistance."
              imagePlaceholder="https://placehold.co/600x400/f3f4f6/1a202c?text=SS+20.700"
              link="https://www.schmidttechnology.de/en/produkt/schmidt-flow-sensor-ss-20-700/"
            />
            <ModelRow 
              title="IL 30.0xx MPM"
              description="Inline flow sensors with multi-point measurement (MPM) for direct volume flow in compressed air lines up to 16 bar."
              imagePlaceholder={model30300Img}
              link="https://www.schmidttechnology.de/en/produkt/schmidt-mass-flow-sensor-il-30-005-il-30-010-mpm-il-30-015-mpm-il-30-020-mpm/"
            />
            <ModelRow 
              title="S 20.500"
              description="Dumb-bell head flow sensor for high-speed air and gas measurement up to 50 m/s, ATEX-certified for ventilation and industrial environments. "
              imagePlaceholder={model30300Img}
              link="#"
            />
            <ModelRow 
              title="SS 20.261"
              description="Chamber-head sensor for precise compressed air flow monitoring up to 90 m/s, ideal for energy audits and leakage detection."
              imagePlaceholder={model30300Img}
              link="#"
            />
          </div>

         
        </section>

        {/* --- SECTION 2: Cleanroom & Pharma --- */}
        <section className="tw-max-w-6xl tw-mx-auto">
          <SectionHeader 
            number="2"
            title="Cleanroom & Pharmaceutical Applications"
            idealFor="Laminar airflow validation, differential pressure control, contamination prevention, GMP and ISO cleanroom compliance."
            industries="Pharmaceutical manufacturing, biotechnology, life sciences, semiconductor, and healthcare facilities."
          />
          
          <div className="tw-pl-0 md:tw-pl-11 tw-mb-6">
            <ModelRow 
              title="SS 20.250 / SS 20.250 HD"
              description="Dumb-bell head sensors for laminar flow from 0.06–20 m/s. Integrated temperature measurement and clean design."
              imagePlaceholder={model20250Img}
              link="https://www.schmidttechnology.de/en/produkt/schmidt-flow-sensor-ss-20-250/"
            />
            <ModelRow 
              title="SS 20.400 / SS 23.400 Ex"
              description="Thermopile sensors for low-velocity clean gases (0.05–20 m/s), with optional bidirectional flow measurement."
              imagePlaceholder={model23400Img}
              link="https://www.schmidttechnology.de/en/produkt/schmidt-flow-sensor-ss-20-400/"
            />
            <ModelRow 
              title="SS 20.415 / SS 20.515 / SS 20.715"
              description="Ceiling-mount laminar flow sensors for cleanroom installations; Twin versions (SS 20.415 Twin / SS 20.515 Twin) offer redundant dual sensing."
              imagePlaceholder={model20415Img}
              link="https://www.schmidttechnology.de/en/produkt/schmidt-flow-sensor-ss-20-415-led/"
            />
             <ModelRow 
              title="SS 20.450"
              description="Verification probe for on-site validation of other sensors; Bluetooth-enabled."
              imagePlaceholder="https://placehold.co/600x400/f3f4f6/1a202c?text=SS+20.450"
              link="#"
            />
            <ModelRow 
              title="SS 20.420"
              description=" Ultra‑compact stainless‑steel thermopile flow sensor for unidirectional or bidirectional clean‑air measurement (0–10 m/s)."
              imagePlaceholder="https://placehold.co/600x400/f3f4f6/1a202c?text=SS+20.420"
              link="#"
            />
          </div>

          
        </section>

        {/* --- SECTION 3: Ventilation & HVAC --- */}
        <section className="tw-max-w-6xl tw-mx-auto">
          <SectionHeader 
            number="3"
            title="Ventilation & HVAC Flow Measurement"
            idealFor="Air-handling units (AHUs), duct flow monitoring, ventilation balancing, and HVAC system optimization."
            industries="Commercial buildings, factories, infrastructure, data centers."
          />
          
          <div className="tw-pl-0 md:tw-pl-11 tw-mb-6">
             <ModelRow 
              title="HVAC 100"
              description="Compact immersion-type sensor for building ventilation systems; 0.2–20 m/s; dust-resistant."
              imagePlaceholder="https://placehold.co/600x400/f3f4f6/1a202c?text=HVAC+100"
              link="https://www.schmidttechnology.de/en/produkt/schmidt-flow-sensor-hvac-100/"
            />
            <ModelRow 
              title="SS 20.260"
              description="Chamber head sensor for AHU and duct flow measurement up to 60 m/s."
              imagePlaceholder="https://placehold.co/600x400/f3f4f6/1a202c?text=SS+20.260"
              link="https://www.schmidttechnology.de/en/produkt/schmidt-flow-sensor-ss-20-260/"
            />
             <ModelRow 
              title="SS 20.200"
              description="Flow switch for airflow monitoring with switching output and LED indication."
              imagePlaceholder="https://placehold.co/600x400/f3f4f6/1a202c?text=SS+20.200"
              link="https://www.schmidttechnology.de/en/produkt/schmidt-flow-switch-ss-20-200/"
            />
            <ModelRow 
              title="SS 20.500 / SS 20.500 Ex"
              description="Dumb-bell head sensor for air conditioning and ventilation systems, up to 50 m/s and ATEX zones 2 & 22."
              imagePlaceholder="https://placehold.co/600x400/f3f4f6/1a202c?text=SS+20.500"
              link="https://www.schmidttechnology.de/en/produkt/schmidt-flow-sensor-ss-20-500/"
            />
            <ModelRow 
              title="SS 20.250"
              description="Low-velocity flow sensor for balancing and low-pressure HVAC applications."
              imagePlaceholder={model20250Img}
              link="https://www.schmidttechnology.de/en/produkt/schmidt-flow-sensor-ss-20-500/"
            />
            <ModelRow 
              title="SS 20.225"
              description="Compact dumb-bell head flow sensor (0–20 m/s) with robust stainless steel probe and coated option."
              imagePlaceholder={model20250Img}
              link="#"
            />
            <ModelRow 
              title="SS 20.420"
              description="Ultra‑compact stainless‑steel thermopile flow sensor (±0–10 m/s) with fast 0.2 s response."
              imagePlaceholder={model20250Img}
              link="#"
            />
          </div>

          
        </section>

        {/* --- SECTION 4: Energy & Environmental --- */}
        <section className="tw-max-w-6xl tw-mx-auto">
          <SectionHeader 
            number="4"
            title="Energy & Environmental Monitoring"
            idealFor="Sustainability projects, exhaust gas flow monitoring, biogas plants, and energy audits."
            industries="Environmental monitoring, utilities, sustainability audits, energy plants."
          />
          
          <div className="tw-pl-0 md:tw-pl-11 tw-mb-6">
            <ModelRow 
              title="SS 20.700 / SS 23.700 Ex"
              description="Double pin stainless steel sensors for biogas and process exhaust gases; resistant to humidity and aggressive media."
              imagePlaceholder="https://placehold.co/600x400/f3f4f6/1a202c?text=SS+20.700"
              link="https://www.schmidttechnology.de/en/produkt/schmidt-flow-sensor-ss-23-700-ex/"
            />
            <ModelRow 
              title="SS 20.600 Ex / SS 20.651"
              description="Chamber head sensors for energy audits and emission monitoring in high-pressure and high-temperature systems."
              imagePlaceholder={model20600Img}
              link="https://www.schmidttechnology.de/en/produkt/schmidt-flow-sensor-ss-20-600/"
            />
             <ModelRow 
              title="IL 30.0xx MPM"
              description="Inline version for compressed air energy monitoring with wireless data transfer (Bluetooth)."
              imagePlaceholder={model30300Img}
              link="https://www.schmidttechnology.de/en/produkt/schmidt-mass-flow-sensor-il-30-005-il-30-010-mpm-il-30-015-mpm-il-30-020-mpm/"
            />
          </div>

          
        </section>

        {/* --- SECTION 5: Display & Integration --- */}
        <section className="tw-max-w-6xl tw-mx-auto">
          <SectionHeader 
            number="5"
            title="Display & Integration Solutions"
            idealFor="On-site display, system monitoring, and control integration."
            industries="Industrial Automation, Control Rooms, Plant Management."
          />
          
          <div className="tw-pl-0 md:tw-pl-11 tw-mb-10">
            <ModelRow 
              title="MD 10.010 / MD 10.015"
              description="LED measured-value displays for flow, volume, or temperature; wall or panel mounting."
              imagePlaceholder="https://placehold.co/600x400/f3f4f6/1a202c?text=MD+10.010"
              link="#"
            />
             <ModelRow 
              title="MD 10.020"
              description="Remote display module for IL 30.0xx MPM sensors; plug-and-play with dual-line readout."
              imagePlaceholder="https://placehold.co/600x400/f3f4f6/1a202c?text=MD+10.020"
              link="#"
            />
            <ModelRow 
              title="BT 10.010"
              description="Bluetooth® module for wireless data transmission and sensor configuration via the SCHMIDT® Sensor App."
              imagePlaceholder="https://placehold.co/600x400/f3f4f6/1a202c?text=BT+10.010"
              link="#"
            />
          </div>
        </section>

        {/* --- SECTION 6: Applications (New) --- */}
        <section className="tw-max-w-6xl tw-mx-auto tw-pb-10">
           <div className="tw-mb-6 tw-text-center">
            <h2 className="tw-text-2xl md:tw-text-4xl tw-font-bold tw-text-black tw-mb-4">
              Applications
            </h2>
            <div className="tw-w-24 tw-h-1.5 tw-bg-[#ffd700] tw-mx-auto tw-rounded-full"></div>
          </div>
          
          <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-3">
            {applicationsData.map((app, index) => (
              <ApplicationCard 
                key={index} 
                title={app.title} 
                image={app.image} 
              />
            ))}
          </div>
        </section>


        <section className="tw-bg-gray-100 tw-py-6 tw-rounded-2xl">
  <div className="tw-grid lg:tw-grid-cols-2 tw-gap-6 lg:tw-gap-8">
    
    {/* Left: Contact Form & Info */}
    <div className="tw-p-3 md:tw-p-0">
      <div className="tw-mb-4">
        <h4 className="tw-text-[#e6c200] tw-font-bold tw-uppercase tw-tracking-widest tw-mb-1 tw-text-xs">
          Ready to Collaborate?
        </h4>
        <h2 className="tw-text-xl md:tw-text-2xl tw-font-bold tw-text-black tw-mb-2 tw-leading-tight">
          Contact IOTAFLOW for Schmidt Flow Sensor Solutions in India
        </h2>
        <div className="tw-w-12 tw-h-1 tw-bg-[#ffd700] tw-rounded-full"></div>
      </div>

      <div className="tw-bg-white tw-p-4 tw-rounded-xl tw-shadow-sm tw-border-t-4 tw-border-[#ffd700]">
        <form className="tw-space-y-3" onSubmit={handleSubmit}>
  {/* Success & Error Messages */}
  {success && (
    <div className="tw-p-2 tw-bg-green-50 tw-text-green-700 tw-rounded-lg tw-text-xs">
      {success}
    </div>
  )}
  {error && (
    <div className="tw-p-2 tw-bg-red-50 tw-text-red-600 tw-rounded-lg tw-text-xs">
      {error}
    </div>
  )}

  <div className="tw-grid grid-cols-2 tw-gap-3">
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Name"
      required
      className="tw-w-full tw-p-2 tw-bg-gray-50 tw-border tw-border-gray-200 tw-rounded-lg focus:tw-outline-none focus:tw-border-[#ffd700] focus:tw-ring-1 focus:tw-ring-[#ffd700] tw-text-sm"
    />
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Email"
      required
      className="tw-w-full tw-p-2 tw-bg-gray-50 tw-border tw-border-gray-200 tw-rounded-lg focus:tw-outline-none focus:tw-border-[#ffd700] focus:tw-ring-1 focus:tw-ring-[#ffd700] tw-text-sm"
    />
  </div>

  {/* NEW PHONE FIELD */}
  <input
    type="tel"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    placeholder="Phone Number"
    required
    className="tw-w-full tw-p-2 tw-bg-gray-50 tw-border tw-border-gray-200 tw-rounded-lg focus:tw-outline-none focus:tw-border-[#ffd700] focus:tw-ring-1 focus:tw-ring-[#ffd700] tw-text-sm"
  />

  <input
    type="text"
    name="company"
    value={formData.company}
    onChange={handleChange}
    placeholder="Company"
    className="tw-w-full tw-p-2 tw-bg-gray-50 tw-border tw-border-gray-200 tw-rounded-lg focus:tw-outline-none focus:tw-border-[#ffd700] focus:tw-ring-1 focus:tw-ring-[#ffd700] tw-text-sm"
  />

  <textarea
    rows="3"
    name="message"
    value={formData.message}
    onChange={handleChange}
    placeholder="Inquiry"
    required
    className="tw-w-full tw-p-2 tw-bg-gray-50 tw-border tw-border-gray-200 tw-rounded-lg focus:tw-outline-none focus:tw-border-[#ffd700] focus:tw-ring-1 focus:tw-ring-[#ffd700] tw-text-sm"
  ></textarea>

  <button
    type="submit"
    disabled={loading}
    className="tw-w-full tw-py-3 tw-bg-black tw-text-white tw-font-bold tw-rounded-lg hover:tw-bg-gray-800 tw-transition-colors tw-text-sm disabled:tw-opacity-60"
  >
    {loading ? "Sending..." : "Send Request"}
  </button>
</form>


        <div className="tw-mt-4 tw-border-t tw-border-gray-100 tw-pt-3">
          <p className="tw-font-semibold tw-text-black tw-mb-1 tw-text-xs">
            Get in touch directly:
          </p>
          <div className="tw-space-y-0.5 tw-text-gray-700 tw-text-xs">
            <p>📞 +91-9910693866</p>
            <p>📧 contact@iotaflow.com</p>
          </div>
          
        </div>
      </div>
    </div>

    {/* Right: Youtube Videos (Smaller Height) */}
    <div className="tw-flex tw-flex-col tw-gap-4 tw-justify-center">
      {/* Video 1 */}
      <div className="tw-bg-black tw-rounded-lg tw-overflow-hidden tw-shadow-md">
        <div className="tw-w-full tw-h-[180px]">
          <iframe
            className="tw-w-full tw-h-full"
            src="https://www.youtube.com/embed/8gex6KDndCU"
            title="Schmidt Technology Video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Video 2 */}
      <div className="tw-bg-black tw-rounded-lg tw-overflow-hidden tw-shadow-md">
        <div className="tw-w-full tw-h-[180px]">
          <iframe
            className="tw-w-full tw-h-full"
            src="https://www.youtube.com/embed/8gex6KDndCU"
            title="Schmidt Technology Video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>

  </div>
</section>


      </div>
    </div>
  );
}

export default Detail15;