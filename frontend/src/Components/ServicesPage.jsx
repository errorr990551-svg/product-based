import React, { useEffect } from 'react';

// --- Actual Images for "On-site service support" section ---
import serviceImg1 from '../images/Service_1.jpg';
import serviceImg2 from '../images/Service_2.jpg';
import serviceImg3 from '../images/Service_3.png';

// --- Actual Images for "Inhouse Calibration Lab" section ---
import calibImg1 from '../images/Calibration_water.jpg';
import calibImg2 from '../images/Oil Calibration Bench.png'; // Using same image - replace if you have different oil calibration image

// --- Actual Images for "Service Cases Graph" section ---
import graphImg1 from '../images/Service_case_graph.jpg';
import graphImg2 from '../images/Service_case_graph.jpg'; // Using same image - replace if you have different graph

// --- Actual Image for "Automation Services" section ---
import automationImg from '../images/Automation_service.png';

// --- Placeholder Logos for Testimonials ---
const logoAmbuja = "https://placehold.co/100x100/f3f4f6/1a202c?text=Ambuja";
const logoMangalore = "https://placehold.co/100x100/f3f4f6/1a202c?text=MSEZ";
const logoUltraTech = "https://placehold.co/100x100/f3f4f6/1a202c?text=UltraTech";
const logoAdani = "https://placehold.co/100x100/f3f4f6/1a202c?text=Adani";

const servicesList = [
  {
    title: "Installation & Commissioning",
    description: "Professional installation and commissioning of flow meters and telemetry systems ensuring accurate measurement, process compliance, and seamless integration with existing infrastructure. Expert engineers validate alignment, flow profile, and data connectivity for CGWA - compliant operations."
  },
  {
    title: "AMC / CAMC",
    description: "Comprehensive Annual and Comprehensive Maintenance Contracts designed for continuous system uptime, reduced operational risk, and extended instrument life. Includes preventive maintenance, calibration checks, and full system health audits."
  },
  {
    title: "On-site NABL calibration (water, wastewater, fluids, slurries & liquids – ISO 17025)",
    description: "NABL-accredited on-site calibration of liquid flow using portable ultrasonic flow meters in compliance with ISO/IEC 17025 standards."
  },
  {
    title: "On-site calibration for air & gases (portable thermal mass)",
    description: "Precise on-site calibration of air and gas flow meters using portable thermal mass flow meters."
  },
  {
    title: "Factory Calibration – Oil & Air Meters",
    description: "In-house calibration of oil and air flow meters on dedicated test benches under controlled conditions."
  },
  {
    title: "Site survey & assessment",
    description: "Comprehensive site surveys and hydraulic assessments to identify ideal flow meter sizing, positioning, and integration methods.Optimizes system performance while minimizing pressure loss and maintenance downtime."
  },
  {
    title: "IoT / telemetry integration",
    description: "Seamless integration of flow metering systems with IOT and telemetry gateways for real-time monitoring, analytics, and remote data visualization. Compatible with IOTAFLOW Cloud (iotaflow.in) and NIC / CGWA / CPCB data compliance frameworks."
  }
];

const testimonials = [
  {
    company: "Ambuja Cements Ltd",
    role: "Environmental Head",
    quote: "The service support was prompt and helped us restore operations quickly.",
    context: "A CT failed in a magmeter due to lightning, impacting measurement continuity.",
    outcome: "The failed CT was replaced and the system restored within one week, supporting plant uptime.",
    logo: logoAmbuja
  },
  {
    company: "Mangalore SEZ Limited",
    role: "", // No role provided
    quote: "The team’s on-site support helped us avoid prolonged downtime.",
    context: "An 800 NB magmeter CT failed, with additional logistics challenges.",
    outcome: "A service team repaired the meter on-site within 2 days using complete tools and spares.",
    logo: logoMangalore
  },
  {
    company: "UltraTech Cement – Dalla",
    role: "Head – Instrumentation & Utilities",
    quote: "The replacement was handled quickly, allowing us to continue as planned.",
    context: "Ultrasonic sensors were damaged during transit, delaying site activities.",
    outcome: "Replacement sensors were dispatched and installed within 3 days.",
    logo: logoUltraTech
  },
  {
    company: "Adani Natural Resources",
    role: "Head – Technical Services",
    quote: "The delivery was completed within the required urgent timeline.",
    context: "An urgent application required accelerated delivery.",
    outcome: "Equipment was delivered within one week, acknowledged via a formal performance letter.",
    logo: logoAdani
  }
];

const ServicesPage = () => {
  // Ensure page starts at top when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tw-bg-white tw-min-h-screen tw-font-sans">

      {/* ==================== SECTION 1: On-site Service Support ==================== */}
      <section className="tw-py-12 md:tw-py-16 lg:tw-py-24">
        <div className="tw-container tw-mx-auto tw-px-4">
          
          {/* Grid Layout: Adjusted columns to make image section smaller (7 cols text / 5 cols images) */}
          <div className="tw-grid lg:tw-grid-cols-12 tw-gap-6 md:tw-gap-12 lg:tw-gap-16 tw-items-stretch">
            
            {/* --- Left Column: Text Content (Span 7) --- */}
            <div className="lg:tw-col-span-7 tw-flex tw-flex-col">
              {/* Section Heading */}
              <div className="tw-mb-10">
                <h5 className="tw-text-[#ffd700] tw-font-bold tw-uppercase tw-tracking-widest tw-mb-2">
                  Our Expertise
                </h5>
                <h1 className="tw-text-2xl md:tw-text-4xl lg:tw-text-5xl tw-font-bold tw-text-black">
                  On-site service support
                </h1>
                <div className="tw-h-1.5 tw-w-24 tw-bg-[#ffd700] tw-mt-4 tw-rounded-full"></div>
              </div>

              {/* Service List (Text Only, No Cards) */}
              <div className="tw-space-y-8 tw-flex-1">
                {servicesList.map((service, index) => (
                  <div key={index} className="tw-group">
                    <h3 className="tw-text-xl md:tw-text-2xl tw-font-bold tw-text-black tw-mb-2 group-hover:tw-text-[#e6c200] tw-transition-colors">
                      {service.title}
                    </h3>
                    <p className="tw-text-gray-600 tw-text-base md:tw-text-lg tw-leading-relaxed">
                      {service.description}
                    </p>
                    {/* Subtle Separator (except for last item) */}
                    {index !== servicesList.length - 1 && (
                      <div className="tw-h-px tw-bg-gray-200 tw-mt-6 tw-w-full"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* --- Right Column: Vertical Image Stack (Span 5 - Smaller) --- */}
            <div className="lg:tw-col-span-4 tw-relative tw-mt-8 lg:tw-mt-0 tw-h-full tw-min-h-[500px] lg:tw-min-h-auto">
              {/* Flex column to stack images, h-full to fill height, gap for spacing */}
              <div className="tw-flex tw-flex-col tw-gap-6 tw-h-full tw-justify-between">
                
                {/* Image 1 */}
                <div className="tw-flex-1 tw-rounded-2xl tw-overflow-hidden tw-shadow-xl">
                  <img 
                    src={serviceImg1} 
                    alt="Installation and commissioning" 
                    className="tw-w-full tw-h-full tw-object-cover tw-transition-transform tw-duration-700 hover:tw-scale-105"
                  />
                </div>

                {/* Image 2 */}
                <div className="tw-flex-1 tw-rounded-2xl tw-overflow-hidden tw-shadow-xl">
                  <img 
                    src={serviceImg2} 
                    alt="Service technician on site" 
                    className="tw-w-full tw-h-full tw-object-cover tw-transition-transform tw-duration-700 hover:tw-scale-105"
                  />
                </div>

                {/* Image 3 */}
                <div className="tw-flex-1 tw-rounded-2xl tw-overflow-hidden tw-shadow-xl">
                  <img 
                    src={serviceImg3} 
                    alt="Calibration and testing" 
                    className="tw-w-full tw-h-full tw-object-cover tw-transition-transform tw-duration-700 hover:tw-scale-105"
                  />
                </div>

                
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="tw-py-12 md:tw-py-16 lg:tw-py-24 tw-bg-gray-50">
        <div className="tw-container tw-mx-auto tw-px-4">
          <div className="tw-text-center tw-mb-8 md:tw-mb-12">
            <h2 className="tw-text-2xl md:tw-text-3xl lg:tw-text-4xl xl:tw-text-5xl tw-font-bold tw-text-black tw-mb-4 tw-max-w-5xl tw-mx-auto tw-leading-tight">
              NABL Traceable Calibration Lab for Water & Oil Flow Meters (ISO 17025 Compliant)
            </h2>
            <div className="tw-h-1.5 tw-w-24 tw-bg-[#ffd700] tw-mx-auto tw-rounded-full"></div>
            <p className="tw-text-gray-600 tw-text-sm md:tw-text-base lg:tw-text-lg tw-leading-relaxed tw-mt-3 md:tw-mt-4 tw-max-w-3xl tw-mx-auto">
              Our in-house calibration lab is ISO 17025 accredited, ensuring precise and reliable calibration services.
            </p>
          </div>

          <div className="tw-grid md:tw-grid-cols-2 tw-gap-4 md:tw-gap-6 lg:tw-gap-12">
            {/* Item 1 - Water */}
            <div className="tw-group tw-flex tw-flex-col">
              <div className="tw-rounded-2xl tw-overflow-hidden tw-shadow-xl tw-bg-white tw-aspect-video tw-mb-6">
                <img src={calibImg1} alt="Water Calibration Bench" className="tw-w-full tw-h-full tw-object-cover tw-transition-transform tw-duration-500 group-hover:tw-scale-105" />
              </div>
              <h3 className="tw-text-xl md:tw-text-2xl tw-font-bold tw-text-black tw-text-center tw-mb-3">
                  Water Calibration Bench
              </h3>
              <p className="tw-text-gray-600 tw-text-center tw-leading-relaxed tw-px-4 tw-flex-grow">
                Our NABL-traceable water calibration bench provides high-precision testing for Woltmann, electromagnetic, and ultrasonic flow meters. Each calibration follows ISO 17025 standards, ensuring reliable, repeatable accuracy for CGWA and CPCB-compliant applications.
              </p>
            </div>

            {/* Item 2 - Oil */}
            <div className="tw-group tw-flex tw-flex-col">
              <div className="tw-rounded-2xl tw-overflow-hidden tw-shadow-xl tw-bg-white tw-aspect-video tw-mb-6">
                <img src={calibImg2} alt="Oil Calibration Bench" className="tw-w-full tw-h-full tw-object-cover tw-transition-transform tw-duration-500 group-hover:tw-scale-105" />
              </div>
              <h3 className="tw-text-xl md:tw-text-2xl tw-font-bold tw-text-black tw-text-center tw-mb-3">
                  Oil Calibration Bench
              </h3>
              <p className="tw-text-gray-600 tw-text-center tw-leading-relaxed tw-px-4 tw-flex-grow">
                Our dedicated oil flow calibration setup handles RPD, turbine and positive displacement meters under controlled flow and viscosity conditions. Calibrations are traceable to NABL standards, guaranteeing dependable performance for industrial and process applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: Service Cases Graph ==================== */}
      <section className="tw-py-12 md:tw-py-16 lg:tw-py-24 tw-bg-gray-50">
        <div className="tw-container tw-mx-auto tw-px-4">
            <div className="tw-grid md:tw-grid-cols-2 tw-gap-4 md:tw-gap-6 lg:tw-gap-8 lg:tw-gap-12 tw-items-center">
                {/* Left: Graph Image */}
                <div className="tw-rounded-2xl tw-overflow-hidden tw-shadow-xl tw-bg-white tw-aspect-video">
                    <img src={graphImg1} alt="Service Cases Graph" className="tw-w-full tw-h-full tw-object-cover tw-transition-transform tw-duration-500 hover:tw-scale-105" />
                </div>

                {/* Right: Heading */}
                <div>
                    <h2 className="tw-text-2xl md:tw-text-3xl lg:tw-text-4xl xl:tw-text-5xl tw-font-bold tw-text-black tw-mb-4 md:tw-mb-6 tw-leading-tight">
                        How Lean Practices Helped Us Reduce Service Cases Over the Last 4 Years?
                    </h2>
                    <div className="tw-h-1.5 tw-w-24 tw-bg-[#ffd700] tw-rounded-full"></div>
                </div>
            </div>
        </div>
      </section>

      {/* ==================== SECTION 5: Testimonials / Service Feedback ==================== */}
      <section className="tw-py-12 md:tw-py-16 lg:tw-py-24 tw-bg-white">
        <div className="tw-container tw-mx-auto tw-px-4">
          {/* Section Heading */}
          <div className="tw-text-center tw-mb-12 md:tw-mb-16">
            <h2 className="tw-text-2xl md:tw-text-4xl lg:tw-text-5xl tw-font-bold tw-text-black tw-mb-4">
              Testimonials / Service Feedback
            </h2>
            <div className="tw-h-1.5 tw-w-24 tw-bg-[#ffd700] tw-mx-auto tw-rounded-full"></div>
            <p className="tw-text-gray-600 tw-mt-4 tw-text-sm md:tw-text-base lg:tw-text-lg">
              Hear what our partners have to say about our service excellence.
            </p>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="tw-grid grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-4 md:tw-gap-6 lg:tw-gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="tw-bg-white tw-rounded-xl tw-shadow-lg tw-border tw-border-gray-100 tw-border-l-4 tw-border-l-[#ffd700] tw-p-6 tw-flex tw-flex-col tw-transition-transform tw-duration-300 hover:tw-translate-y-[-5px]"
              >
                {/* Header: Logo & Company */}
                <div className="tw-flex tw-flex-col tw-items-start tw-mb-4">
                  <div className="tw-w-16 tw-h-16 tw-bg-gray-50 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-mb-3 tw-overflow-hidden">
                    {/* Placeholder Logo Image */}
                    <img 
                      src={testimonial.logo} 
                      alt={`${testimonial.company} Logo`} 
                      className="tw-w-full tw-h-full tw-object-contain tw-p-1"
                    />
                  </div>
                  <h3 className="tw-text-lg tw-font-bold tw-text-black tw-leading-tight">
                    {testimonial.company}
                  </h3>
                  {testimonial.role && (
                    <p className="tw-text-sm tw-text-gray-500 tw-mt-1">{testimonial.role}</p>
                  )}
                </div>

                {/* Quote */}
                <div className="tw-mb-6">
                   <div className="tw-text-[#ffd700] tw-text-2xl tw-mb-2">
                     <i className="fas fa-quote-left"></i> {/* Assuming font-awesome is available, or use SVG */}
                     <span className="tw-sr-only">Quote</span>
                   </div>
                   <p className="tw-text-gray-800 tw-italic tw-font-medium">
                     "{testimonial.quote}"
                   </p>
                </div>

                {/* Context & Outcome */}
                <div className="tw-mt-auto tw-space-y-4 tw-border-t tw-border-gray-100 tw-pt-4">
                  <div>
                    <span className="tw-text-xs tw-font-bold tw-text-black tw-uppercase tw-tracking-wide tw-block tw-mb-1">Context</span>
                    <p className="tw-text-sm tw-text-gray-600">{testimonial.context}</p>
                  </div>
                  <div>
                    <span className="tw-text-xs tw-font-bold tw-text-black tw-uppercase tw-tracking-wide tw-block tw-mb-1">Outcome</span>
                    <p className="tw-text-sm tw-text-gray-600">{testimonial.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ==================== SECTION 4: Automation Services ==================== */}
      <section className="tw-py-12 md:tw-py-16 lg:tw-py-24 tw-bg-white">
        <div className="tw-container tw-mx-auto tw-px-4">
          <div className="tw-grid lg:tw-grid-cols-2 tw-gap-6 md:tw-gap-12 lg:tw-gap-20 tw-items-center">
            
            {/* Left: Text Content */}
            <div>
               <h2 className="tw-text-2xl md:tw-text-4xl tw-font-bold tw-text-black tw-mb-6 tw-leading-tight">
                  Beyond flow measurement we provide automation services like fuel ratio control, combustion system optimization, dosing control
                  <span className="tw-block tw-h-1.5 tw-w-24 tw-bg-[#ffd700] tw-mt-4 tw-rounded-full"></span>
               </h2>
               
               <div className="tw-text-gray-600 tw-text-base md:tw-text-lg tw-leading-relaxed tw-space-y-6">
                  <p>
                    We develop intelligent control solutions that manage critical process parameters such as fuel–air balance, thermal efficiency, and accurate chemical injection. These systems are engineered to deliver stable operations, minimize energy losses, and maintain consistent output quality across varying operating conditions.
                  </p>
                  <p>
                    By integrating real-time process data with advanced control logic, our solutions enable improved operational visibility, enhanced safety, and long-term reliability. The result is optimized performance, reduced manual intervention, and improved compliance with industry standards across diverse industrial applications.
                  </p>
               </div>
            </div>

            {/* Right: Image */}
            <div className="tw-relative tw-h-[250px] md:tw-h-[350px] lg:tw-h-[450px] tw-w-full tw-rounded-2xl tw-overflow-hidden tw-shadow-2xl tw-bg-gray-50 tw-flex tw-items-center tw-justify-center">
               <img 
                 src={automationImg} 
                 alt="Automation Services and Control Solutions" 
                 className="tw-w-full tw-h-full tw-object-contain tw-transition-transform tw-duration-700 hover:tw-scale-105" 
               />
               {/* Decorative Element */}
               <div className="tw-absolute tw-bottom-0 tw-right-0 tw-w-24 tw-h-24 tw-bg-[#ffd700] tw-rounded-tl-full tw-opacity-80"></div>
            </div>

          </div>
        </div>
      </section>

      

    </div>
  )
}

export default ServicesPage;