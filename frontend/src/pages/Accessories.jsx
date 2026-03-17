import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

// --- Placeholder Images for Preview ---
import strainerImage from '../../src/images/Strainers___Filters__2_-removebg-preview.png';
import matchingFlagesImage from '../../src/images/Matching_Flange_Nut_BoltandGasket.png';
import AirReleaseImage from '../../src/images/Air_Release_Systems-removebg-preview.png';
import RemoteDisplayImage from '../../src/images/remoteDisplayUnit.png';
import telementryImage from '../../src/images/Telemetry_Systems_-_4G_RTU_IOT_Gateways-removebg-preview.png';
import CustomFlowImage from '../../src/images/Custom_Flow_Straighteners-removebg-preview.png';
import SolarPowerSystemImage from '../../src/images/solarPowerSystem.png';

const accessoriesData = [
  {
    id: 1,
    title: "Strainers & Filters",
    description: (
      <>
        <p className="tw-mb-4">
          Industrial-grade strainers engineered for cold water, hot water, and oil service, ensuring long-term protection and accuracy for Woltmann, Multijet, and RPD flow meters. Available in Simplex, Duplex, Y-type, and TEE-type configurations for 8 mm–900 mm lines with flanged or screwed connections (PN 16 / Class #150).
        </p>
        <p className="tw-mb-4">
          Constructed from MS, Cast Iron, SS304, or SS316 with SS304 baskets rated 150 microns–1.6 mm (40 mesh / 250 µ).
        </p>
        <p>
           Withstand 10 bar working / 16 bar test pressure, feature neoprene seals, ¼″–1″ drain plugs, and optional 3 way valve and butterfly valve isolation on duplex versions.

        </p>
        <p>
          Designed to extend meter life, maintain flow accuracy, and ensure compliance for industrial and utility applications under CGWA / CPCB monitoring frameworks.
        </p>
      </>
    ),
    // Replace with 'strainerImage' in your local project
    image: strainerImage
  },
  {
    id: 2,
    title: "Matching Flanges, Nuts, Bolts & Gaskets (Installation Kit)",
    description: (
      <>
        <p className="tw-mb-4">
          Comprehensive installation kits comprising precision-machined mating flanges, nuts, bolts, and gaskets for secure coupling of Woltmann, electromagnetic, ultrasonic, turbine, Vortex and RPD flow meters.
        </p>
        <p className="tw-mb-4">
          Available for 8 mm–1200 mm line sizes, manufactured in MS, SS304, or SS316, and supplied with flanges drilled to ASME/ANSI B16.5 Table and EN 1092-1 PN Series standards for global compatibility.
        </p>
        <p>
          Suitable for water, oil, air, steam, slurry, and chemical services, the kits ensure accurate alignment, uniform sealing, and correct torque transfer, preventing meter strain and leakage.
        </p>
        <p>
           Delivered with GI/SS fasteners and CAF / EPDM / PTFE gaskets, they provide long-term sealing integrity and compliance with CGWA / CPCB flow-meter installation requirements.
        </p>
      </>
    ),
    image: matchingFlagesImage
  },
  {
    id: 3,
    title: "Air Release Systems",
    description: (
      <>
        <p className="tw-mb-4">
          IOTAFLOW Air Release Systems are designed for oil and hydrocarbon pipelines to remove trapped air and ensure accurate performance of RPD, Turbine, and Oval Gear flow meters. Suitable for 15 mm to 250 mm meter sizes, this unit is installed on the cover of IOTAFLOW Simplex Strainers for easy integration.
        </p>
        <p className="tw-mb-4">
          Built with a cast aluminium body and stainless-steel ball, the system quickly releases air pockets that cause wrong readings, pressure drops, corrosion, and water hammer. By maintaining a clean, air-free flow, it improves meter accuracy, pump efficiency, and overall pipeline reliability.
        </p>
        <p>
          Optimized for Indian conditions and widely used in industrial oil flow lines.
        </p>
      </>
    ),
    // Replace with 'AirReleaseImage'
    image: AirReleaseImage
  },
  {
    id: 4,
    title: "Remote Display Units",
    description: (
      <>
        <div className="tw-mb-6">
          <h4 className="tw-font-bold tw-text-black-800 tw-mb-2">Model: FI-106 Series – Flow Indicator Totalizers</h4>
          <p className="tw-mb-2">
            Remote Display Units are designed for clear, panel-mounted indication of flow rate and total flow for field-installed flow meters, making them ideal for Indian industrial sites where the meter is installed at a height, in a hazardous zone, or in difficult-to-access locations. Compatible with RPD, Turbine, Electromagnetic, Ultrasonic, and other inline meters, these units accept 0–20 mA, 4–20 mA, and voltage (1–5 V / 0–5 V) signals with linear or square-root extraction.
          </p>
          <p>
            Available in standard ABS enclosures and flame-proof CMRI-certified models, they offer large readouts up to 0–9999 (flow) and 0–99,999,999 (total) with optional pressure and temperature compensation for improved accuracy. Powered by 230 VAC, 24 VDC, 110 VAC, or 24 VAC, each model includes 24 V DC transmitter supply, RS485 communication, dual relay alarms, &lt; 6 W consumption, and 1.4 kV input–output isolation for stable performance.
          </p>
          <p>
            Ideal for oil, water, chemical, and industrial utilities, these remote indicators ensure accurate monitoring, safer operation and CGWA/CPCB-compliant flow logging—a key accessory for dependable and accessible flow measurement in Indian process plants.
          </p>
        </div>
        <div>
          <h4 className="tw-font-bold tw-text-black-800 tw-mb-2">Model: FI-108 Series (Data Logger Models)</h4>
          <p className="tw-mb-2">
            IOTAFLOW FI-108 Series Remote Display Data Loggers provide local indication and long-term data storage for flow meters installed in industrial pipelines. Available in 1/2/3/4/8-channel configurations, the FI-108 accepts universal input signals and logs up to 180 days of data at one-minute intervals, making it suitable for utilities, oil lines, water networks, and process plants requiring dependable historical records.
          </p>
          <p>
            Equipped with a 3-inch LCD display, onboard RTC (real-time clock), and USB 2.0 data export, the unit simplifies reporting for CGWA/CPCB submissions and operational audits. Powered by 220 VAC, it includes low and high relay outputs for alarm conditions.
          </p>
          <p>
            Sized at 160 mm × 80 mm, the FI-108 Series is a compact, panel-mounted accessory that enhances visibility, provides accurate local monitoring, and strengthens digital compliance in Indian industrial flow-metering systems.
          </p>
        </div>
      </>
    ),
    // Replace with 'RemoteDisplayImage'
    image: RemoteDisplayImage
  },
  {
    id: 5,
    title: "Telemetry Systems - 4G RTU IOT Gateways",
    description: (
      <>
        <p className="tw-mb-4">
          IOTAFLOW Telemetry Systems combine 4G RTU Gateways and RTU-IOT4G NIC-compliant units to deliver fully automated, real-time data transfer for industrial water, oil, and groundwater monitoring applications. Built with integrated RTU, power supply, SIM tray, and 4G GSM/GPRS modem, these gateways support Modbus inputs from 1, 2, or 4 flow meters, allowing multiple meters to report through a single device. Powered by 220 VAC/ 24 VDC, each unit ensures continuous, interruption-free transmission of flow data to either the IOTAFLOW Cloud (iotaflow.in) or directly to NIC servers, depending on regulatory requirements.
        </p>
        <p>
          Designed for India’s regulatory landscape, the system meets CGWA, CPCB, SPCB, and State Groundwater authority compliance by enabling automatic hourly data transfer, tamper-proof logging, and authenticated online reporting. Ideal for Woltmann, electromagnetic, ultrasonic, turbine, RPD, and industrial utility meters, these gateways eliminate manual data collection, ensure accurate flow monitoring, and support Industry 4.0-ready remote telemetry systems widely adopted across Indian industrial infrastructure.
        </p>
      </>
    ),
    // Replace with 'telementryImage'
    image:telementryImage
  },
  
  {
    id: 6,
    title: "Custom Flow Straighteners",
    description: (
      <>
        <p>
          IOTAFLOW Flow Straighteners ensure stable, swirl-free flow for accurate readings in electromagnetic, ultrasonic, and turbine flow meters. Built for DN 8 mm to 1200 mm meter sizes pipelines, featuring an SS bundle core with MS or SS body and supplied with flanges drilled to ASME/ANSI B16.5 Table, they deliver uniform velocity profiles and improved meter precision. Ideal for water, oil, and process lines, these straighteners enhance flow stability, reduce measurement error, and meet CGWA/CPCB compliance for Indian industrial flow systems.

        </p>
      </>
    ),
    // Replace with 'CustomFlowImage'
    image: CustomFlowImage
  },
  {
    id: 7,
    title: "Solar Power System for Flow Meters",
    description: (
      <>
        <p>
          The IOTAFLOW Solar Power System provides a reliable, renewable power source for remote and unmanned flow meter installations. Designed for continuous operation in off-grid and industrial locations, the system includes a 100W/12V Exide Solar PV Module, UPS Solar NXG 750/12V controller, and a 12.8V, 36AH LiFePO4 battery for efficient energy storage.

        </p>
        <p>
          Ideal for CGWA, CPCB, and NIC-compliant telemetry systems, it ensures 24x7 operation of IOT-based flow meters, RTUs, and telemetry gateways without dependence on grid supply. Compact, maintenance-free, and weather-resistant, this solar flow meter power solution supports Industry 4.0 and smart water management applications across India.

        </p>
      </>
    ),
    // Replace with 'CustomFlowImage'
    image: SolarPowerSystemImage
  }

];

const AccessoryItem = ({ item, isReversed }) => {
  return (
    // ADDED: id attribute to allow navigation to this specific section
    <div id={`accessory-${item.id}`} className={`tw-flex tw-flex-col ${isReversed ? 'md:tw-flex-row-reverse' : 'md:tw-flex-row'} tw-items-center tw-gap-4 md:tw-gap-8 lg:tw-gap-16 tw-py-8 md:tw-py-12 lg:tw-py-20 tw-scroll-mt-24`}>
      
      {/* Image Side with Background Design */}
      <div className="tw-w-full md:tw-w-1/2 tw-relative tw-flex tw-items-center tw-justify-center">
        {/* The Decorative Background Shape */}
        <div 
          className={`tw-absolute tw-top-0 tw-bottom-0 tw-w-[100%] tw-bg-gray-100 tw-z-0
            ${isReversed 
              ? 'tw-rounded-l-[100px] tw-right-[-20%]' 
              : 'tw-rounded-r-[100px] tw-left-[-20%]'
            }
            hidden md:tw-block
          `}
        ></div>
         {/* Mobile Background Shape */}
         <div className="md:tw-hidden tw-absolute tw-inset-0 tw-bg-gray-100 tw-rounded-3xl tw-transform tw-scale-90 tw-z-0"></div>

        <img 
          src={item.image} 
          alt={item.title} 
          // ADDED: Conditional translate class to shift image outside towards the ending (center)
          className={`tw-relative tw-z-10 tw-w-full tw-max-w-xxl tw-h-auto tw-object-contain tw-drop-shadow-xl tw-transition-transform tw-duration-500 hover:tw-scale-105
            ${isReversed ? 'md:-tw-translate-x-27' : 'md:tw-translate-x-27'}
          `}
        />
      </div>

      {/* Content Side */}
      <div className="tw-w-full md:tw-w-1/2 tw-text-left">
        <h3 className="tw-text-xl md:tw-text-2xl lg:tw-text-3xl tw-font-bold tw-text-gray-900 tw-mb-4 md:tw-mb-6">
          {item.title}
        </h3>
        
        <div className="tw-text-sm md:tw-text-base tw-text-gray-600 tw-leading-relaxed tw-mb-6 md:tw-mb-8">
          {item.description}
        </div>

        <a 
          href="#contact" 
          className="tw-inline-flex tw-items-center tw-justify-center tw-px-6 md:tw-px-8 tw-py-2 md:tw-py-3 tw-text-sm md:tw-text-base tw-font-bold tw-text-black tw-bg-[#ffd700] tw-rounded-full tw-shadow-md tw-transition-all tw-duration-300 hover:tw-bg-yellow-400 hover:tw-shadow-lg hover:-tw-translate-y-1 tw-no-underline"
        >
          Contact Us <span className="tw-ml-2">→</span>
        </a>
      </div>
    </div>
  );
};

function Accessories() {
  const { hash } = useLocation();

  // Effect to handle scrolling when hash changes (e.g., clicking from navbar)
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1)); // Remove the '#'
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Slight delay to ensure rendering
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="tw-bg-white tw-overflow-hidden">
      <div className="tw-container tw-mx-auto tw-px-4 tw-py-8 md:tw-py-16">
        
        {/* Optional Header - Updated Content */}
        <div className="tw-text-center tw-max-w-4xl tw-mx-auto tw-mb-12 md:tw-mb-16">
          <h2 className="tw-text-2xl md:tw-text-4xl lg:tw-text-5xl tw-font-bold tw-text-black tw-leading-tight">
            Flow Meter Accessories – The Complete Ecosystem for Reliable Flow Measurement
          </h2>
          <div className="tw-mt-4 md:tw-mt-6 tw-space-y-4">
            <h3 className="tw-text-lg md:tw-text-xl tw-font-bold tw-text-[#ffd700] tw-tracking-wide">
              Beyond Flow Meters — Building a Complete Measurement System
            </h3>
            <p className="tw-text-base md:tw-text-lg tw-text-gray-600 tw-leading-relaxed">
              Flow meters perform best when installed with the right accessories. IOTAFLOW ensures that every meter you deploy runs at peak efficiency, stays protected, and remains compliant. From filtration to telemetry, every accessory in our catalog is built to keep your operations precise, compliant, and maintenance-free.
            </p>
          </div>
        </div>

        {/* Accessories List */}
        <div className="tw-space-y-6 md:tw-space-y-8">
          {accessoriesData.map((item, index) => (
            <AccessoryItem 
              key={item.id} 
              item={item} 
              isReversed={index % 2 !== 0} // Alternates: False, True, False...
            />
          ))}
        </div>

       

      </div>

       {/* --- Call to Action --- */}
      <div className="tw-bg-[#ffd700] tw-py-12 md:tw-py-20">
        <div className="tw-container tw-mx-auto tw-px-4 tw-text-center">
          <h2 className="tw-text-2xl md:tw-text-3xl lg:tw-text-4xl tw-font-bold tw-text-black tw-mb-6">
            “Precision isn’t purchased — it’s built.”
          </h2>
          
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

export default Accessories;
