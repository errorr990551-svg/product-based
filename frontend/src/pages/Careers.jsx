import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from "../Components/common/SEO";

import visionImg from "../images/Vission.png";
import missionImg from "../images/Mission.png";

import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";
import icon5 from "../images/icon5 (2).png";
import icon6 from "../images/icon6.png";

// Placeholder for the banner image
// You can replace this with your actual local image import later
// import careersBanner from '../../images/careers_banner.jpg';
const careersBanner = "https://plus.unsplash.com/premium_photo-1661771773771-a093c948ba92?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// Placeholders for Vision & Mission Backgrounds - Replace these with your actual images
const visionBg = visionImg
const missionBg = missionImg;


// Job Data
const jobRoles = [
  {
    title: "Sales & Application Engineers",
    description: "Promote flow meters and IoT telemetry systems for industrial water, air, oil, gases & chemical applications. Ideal for engineers in instrumentation and automation sales.",
    icon: icon1,
    alt: "Industrial flow meter sales and application engineering career icon"
  },
  {
    title: "Business Development Managers / Public Sector Liaisoning",
    description: "Handle government and PSU projects in smart metering and automation.",
    icon: icon2,
    alt: "Business development and government liaisoning career icon"
  },
  {
    title: "Mechanical Design Engineers",
    description: "Design and develop flow meter components, strainers, and assemblies using CAD and 3D modeling. Support lean manufacturing and R&D innovations.",
    icon: icon3,
    alt: "Mechanical design engineer using CAD for flow meter component development"
  },
  {
    title: "Field Service & Commissioning Engineers",
    description: "Install, calibrate, and commission flow meters and telemetry systems on-site. Ensure data accuracy and compliance reporting for CGWA/CPCB projects.",
    icon: icon4,
    alt: "Field service and commissioning engineer icon"
  },
  {
    title: "Automation / IoT Engineers",
    description: "Develop and integrate RTUs, 4G gateways, LoraWan, PLC/SCADA systems for industrial telemetry. Enable real-time IoT-based monitoring and Industry 5.0 automation.",
    icon: icon5,
    alt: "Automation and IoT engineering career icon"
  },
  {
    title: "Production & Quality Control Engineers",
    description: "Manage assembly, testing, and process optimization for flow meters and accessories. Maintain quality, safety, and ISO/CGWA standards across production lines.",
    icon: icon6,
    alt: "Production and quality control engineer icon"
  }
];

const Careers = () => {
  // Ensure page starts at top when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tw-bg-white tw-min-h-screen tw-font-sans">
      <SEO 
        title="Engineering Careers in Industrial IoT & Flow Meters | IOTAFLOW"
        description="Join IOTAFLOW Systems. Explore career opportunities in Industrial IoT, Flow Meter Design, and Automation Engineering. Build the future of smart metering. Apply now!"
        keywords="IOTAFLOW careers, instrumentation engineering jobs, industrial IoT jobs India, mechanical design engineer vacancies, flow meter calibration jobs, automation engineer careers, smart metering jobs, IOTAFLOW systems recruitment, engineering jobs Jharkhand, IoT telemetry careers"
      />
      
      {/* ==================== HERO SECTION ==================== */}
      {/* Updated: Reduced min-height from 85vh to 60vh */}
      <div className="tw-relative tw-w-full tw-min-h-[50vh] md:tw-min-h-[60vh] tw-flex tw-items-center tw-justify-center tw-overflow-hidden">
        
        {/* Background Image with Parallax-like fixed attachment if desired, or simple cover */}
        <div 
          className="tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-bg-no-repeat"
          style={{ 
            backgroundImage: `url(${careersBanner})`,
            backgroundAttachment: 'fixed' // Optional: Adds a nice parallax effect
          }}
        ></div>

        {/* Dark Gradient Overlay for Text Readability */}
        <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-b tw-from-black/80 tw-via-black/70 tw-to-black/90"></div>

        {/* Hidden SEO Image for alt text */}
        <img 
          src={careersBanner} 
          alt="IOTAFLOW Systems engineering team collaborating on industrial flow meter design" 
          className="tw-hidden" 
        />

        {/* Content Container */}
        {/* Updated: Reduced padding from py-20 to py-16 */}
        <div className="tw-relative tw-z-10 tw-container tw-mx-auto tw-px-4 tw-text-center tw-py-12 md:tw-py-16">
          
          {/* Main Title */}
          {/* Updated: Reduced margin-bottom */}
          <h1 className="tw-text-3xl sm:tw-text-4xl md:tw-text-5xl tw-font-bold tw-text-white tw-mb-4 tw-tracking-tight">
            Engineering Careers & Life at <span className="tw-text-[#ffd700]">IOTAFLOW</span> Systems
          </h1>

          {/* Yellow Divider Line */}
          {/* Updated: Reduced margin-bottom */}
          <div className="tw-w-24 tw-h-1.5 tw-bg-[#ffd700] tw-mx-auto tw-mb-8 tw-rounded-full"></div>

          {/* Description Text Block */}
          {/* Updated: Reduced spacing between paragraphs and font size */}
          <div className="tw-max-w-4xl tw-mx-auto tw-space-y-4 tw-text-base md:tw-text-lg tw-text-gray-200 tw-leading-relaxed">
            <p>
              At <span className="tw-font-bold tw-text-white">IOTAFLOW Systems</span>, work is more than projects and deadlines, it’s about building something meaningful together.
              We believe true innovation happens when talented people collaborate, share ideas, and enjoy what they do.
            </p>
            
            <p>
              That’s why we’ve created a workplace that balances engineering excellence with personal growth and well-being.
              Beyond the shop floor and design tables, our teams take time to celebrate milestones, share achievements, and learn together.
            </p>

            <p>
              From technical workshops and skill-building sessions to team outings and cultural events, life at IOTAFLOW is designed to help you learn, relax, and recharge.
              We value work-life balance because great engineers don’t just build machines, they build better lives.
            </p>

            
          </div>

        </div>
      </div>

      {/* ==================== GROW WITH US SECTION ==================== */}
      <div className="tw-py-16 md:tw-py-24 tw-bg-gray-50">
        <div className="tw-container tw-mx-auto tw-px-4">
          
          {/* Section Header */}
          <div className="tw-text-center tw-mb-16 tw-max-w-4xl tw-mx-auto">
            <h2 className="tw-text-3xl md:tw-text-5xl tw-font-bold tw-text-black tw-mb-6">
              Current Job Openings in Instrumentation & IoT
              <span className="tw-block tw-h-1.5 tw-w-24 tw-bg-[#ffd700] tw-mt-3 tw-mx-auto tw-rounded-full"></span>
            </h2>
            <p className="tw-text-gray-700 tw-text-lg md:tw-text-xl tw-leading-relaxed">
              At <span className="tw-font-bold tw-text-black">IOTAFLOW</span>, you’ll find career opportunities across multiple domains. We empower our teams to drive innovation in industrial IoT, flow measurement, and sustainable engineering.
            </p>
          </div>

          {/* Job Opportunities Grid - Fixed missing tw- prefix on grid-cols-1 */}
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
            {jobRoles.map((role, index) => (
              <div 
                key={index} 
                className="tw-group tw-bg-gray-100 tw-rounded-xl tw-overflow-hidden tw-shadow-md hover:tw-shadow-2xl tw-transition-all tw-duration-300 tw-border tw-border-gray-100 hover:tw-border-[#ffd700] hover:tw-translate-y-[-5px] tw-flex tw-flex-col tw-justify-between"
              >
                {/* Content - Increased Padding */}
                <div className="tw-p-8">
                  <div className="tw-mb-4 tw-w-16 tw-h-16 tw-bg-white tw-rounded-full tw-flex tw-items-center tw-justify-center tw-shadow-sm group-hover:tw-shadow-md tw-transition-all">
                    <img src={role.icon} alt={role.alt} className="tw-w-10 tw-h-10 tw-object-contain" />
                  </div>
                  <h3 className="tw-text-xl tw-font-bold tw-text-black tw-mb-4 group-hover:tw-text-[#e6c200] tw-transition-colors">
                    {role.title}
                  </h3>
                  <p className="tw-text-gray-600 tw-text-base tw-leading-relaxed">
                    {role.description}
                  </p>
                </div>
                
                {/* Bottom Accent */}
                <div className="tw-h-1.5 tw-bg-gray-100 tw-w-full">
                  <div className="tw-h-full tw-bg-[#ffd700] tw-w-0 group-hover:tw-w-full tw-transition-all tw-duration-500"></div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>


      {/* ==================== VISION & MISSION SECTION ==================== */}
      <div className="tw-grid md:tw-grid-cols-2 tw-w-full">
        
        {/* --- Our Vision Column --- */}
        <div className="tw-flex tw-flex-col md:tw-relative md:tw-min-h-[500px] md:tw-flex-row md:tw-items-center">
          {/* Mobile Image (Visible only on mobile) */}
          <div className="md:tw-hidden tw-w-full tw-h-64 tw-bg-cover tw-bg-center" style={{ backgroundImage: `url(${visionBg})` }}></div>
          
          {/* Desktop Background Image (Absolute) */}
          <div 
            className="tw-hidden md:tw-block tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-bg-no-repeat tw-transition-transform tw-duration-1000 hover:tw-scale-105"
            style={{ backgroundImage: `url(${visionBg})` }}
          ></div>
          {/* Overlay (Desktop Only) */}
          <div className="tw-hidden md:tw-block tw-absolute tw-inset-0 tw-bg-black/80"></div>
          
          <div className="tw-relative tw-z-10 tw-bg-black md:tw-bg-transparent tw-p-8 md:tw-px-16 md:tw-py-20 tw-text-left tw-max-w-2xl tw-flex-grow">
            <h2 className="tw-text-3xl md:tw-text-5xl tw-font-bold tw-text-white tw-mb-8">
              Our Vision
              <span className="tw-block tw-h-1.5 tw-w-20 tw-bg-[#ffd700] tw-mt-3 tw-rounded-full"></span>
            </h2>
            <div className="tw-space-y-6 tw-text-lg tw-text-gray-300 tw-leading-relaxed">
              <p>
                At <span className="tw-font-bold tw-text-white">IOTAFLOW Systems</span>, our vision is to empower people to build smarter flow meters, stronger IoT solutions, and a sustainable future.
                We believe every improvement, reducing waste, saving energy, or refining a process, protects both our planet and our people.
              </p>
              <p>
                Our <span className="tw-font-bold tw-text-[#ffd700]">Lean culture</span> is people-first. 
                When employees are empowered, trusted, and trained to improve continuously, innovation becomes part of everyday work.
              </p>
              <p>
                We focus on growth through learning, by upskilling our engineers, technicians, and field teams through cross-departmental collaboration, technical training, and real project exposure.
              </p>
              
            </div>
          </div>
        </div>

        {/* --- Our Mission Column --- */}
        <div className="tw-flex tw-flex-col md:tw-relative md:tw-min-h-[500px] md:tw-flex-row md:tw-items-center">
          {/* Mobile Image (Visible only on mobile) */}
          <div className="md:tw-hidden tw-w-full tw-h-64 tw-bg-cover tw-bg-center" style={{ backgroundImage: `url(${missionBg})` }}></div>

          {/* Desktop Background Image (Absolute) */}
          <div 
            className="tw-hidden md:tw-block tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-bg-no-repeat tw-transition-transform tw-duration-1000 hover:tw-scale-105"
            style={{ backgroundImage: `url(${missionBg})` }}
          ></div>
          {/* Overlay (Desktop Only) */}
          <div className="tw-hidden md:tw-block tw-absolute tw-inset-0 tw-bg-black/90"></div>

          <div className="tw-relative tw-z-10 tw-bg-black md:tw-bg-transparent tw-p-8 md:tw-px-16 md:tw-py-20 tw-text-left tw-max-w-2xl tw-flex-grow">
            <h2 className="tw-text-3xl md:tw-text-5xl tw-font-bold tw-text-white tw-mb-8">
              Our Mission
              <span className="tw-block tw-h-1.5 tw-w-20 tw-bg-[#ffd700] tw-mt-3 tw-rounded-full"></span>
            </h2>
            <div className="tw-space-y-6 tw-text-lg tw-text-gray-300 tw-leading-relaxed">
              <p>
                Our mission is to create a respectful, collaborative workplace where everyone can perform to their full potential and contribute to building world-class flow meter and telemetry solutions.
              </p>
              <p>
                We believe in <span className="tw-font-bold tw-text-white">fixing problems, not finding fault</span>. Teams work together to identify root causes, create shared solutions, and ensure that every product leaving our facility meets the highest standards of quality and compliance.
              </p>
              <p>
                At <span className="tw-font-bold tw-text-[#ffd700]">IOTAFLOW</span>, Lean is not just a method, it’s our mindset. We empower every individual, whether a mechanical designer, instrumentation engineer, IoT developer, or field service technician — to learn, lead, and innovate within their role.
              </p>
              
            </div>
          </div>
        </div>

      </div>

      {/* ==================== HOW TO APPLY SECTION ==================== */}
      <div className="tw-py-20 md:tw-py-28 tw-bg-[#ffd700] tw-text-black tw-relative tw-overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-opacity-10 tw-pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, #000 3px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>

        <div className="tw-container tw-mx-auto tw-px-4 tw-relative tw-z-10">
          <div className="tw-max-w-5xl tw-mx-auto">
            
            <div className="tw-text-center tw-mb-16">
              <h2 className="tw-text-4xl md:tw-text-6xl tw-font-bold tw-mb-6 tw-tracking-tight tw-text-black">
                Ready to Apply ?
              </h2>
              
            </div>

            {/* Application Form Button */}
            <div className="tw-text-center tw-mb-16">
               <Link 
                  to="/application-form" 
                  className="tw-inline-flex tw-items-center tw-justify-center tw-bg-black tw-text-white tw-font-bold tw-py-4 tw-px-12 tw-rounded-full tw-shadow-2xl tw-transition-all tw-duration-300 hover:tw-bg-gray-900 hover:tw-scale-105 hover:tw-shadow-xl tw-no-underline tw-text-lg"
                >
                  <span className="tw-mr-3">📝</span> Fill Application Form
                </Link>
                <p className="tw-mt-4 tw-text-black/70 tw-font-medium">
                  Prefer a structured form? Click above to submit your details directly.
                </p>
            </div>
            
            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8 tw-mb-12">
              
              {/* Email Application Card */}
              <div className="tw-group tw-bg-white tw-p-10 tw-rounded-3xl tw-shadow-2xl tw-transition-all tw-duration-300 hover:-tw-translate-y-2 hover:tw-shadow-black/20">
                <div className="tw-w-16 tw-h-16 tw-bg-black tw-text-[#ffd700] tw-rounded-2xl tw-flex tw-items-center tw-justify-center tw-text-3xl tw-mb-8 tw-shadow-lg group-hover:tw-scale-110 tw-transition-transform">
                  📧
                </div>
                <h3 className="tw-text-2xl tw-font-bold tw-mb-4 tw-text-black">Send via Email</h3>
                <p className="tw-text-gray-600 tw-mb-8 tw-leading-relaxed">
                  Prefer a direct approach? Send your CV and cover letter directly to our recruitment team.
                </p>
                <div className="tw-flex tw-flex-col tw-gap-3">
                  <a href="mailto:hr@iotaflow.com" className="tw-inline-flex tw-items-center tw-font-bold tw-text-lg tw-text-black hover:tw-text-gray-600 tw-transition-colors tw-no-underline">
                    <span className="tw-w-2 tw-h-2 tw-bg-[#ffd700] tw-rounded-full tw-mr-3"></span>
                    hr@iotaflow.com
                  </a>
                  <a href="mailto:hiring@iotaflow.com" className="tw-inline-flex tw-items-center tw-font-bold tw-text-lg tw-text-black hover:tw-text-gray-600 tw-transition-colors tw-no-underline">
                    <span className="tw-w-2 tw-h-2 tw-bg-[#ffd700] tw-rounded-full tw-mr-3"></span>
                    hiring@iotaflow.com
                  </a>
                </div>
              </div>

              {/* LinkedIn Card - Fixed missing tw- prefix on text-white */}
              <div className="tw-group tw-bg-black tw-p-10 tw-rounded-3xl tw-shadow-2xl tw-transition-all tw-duration-300 hover:-tw-translate-y-2 hover:tw-shadow-black/20 tw-text-white">
                <div className="tw-w-16 tw-h-16 tw-bg-white tw-text-[#0077b5] tw-rounded-2xl tw-flex tw-items-center tw-justify-center tw-text-3xl tw-mb-8 tw-shadow-lg group-hover:tw-scale-110 tw-transition-transform">
                  🔗
                </div>
                <h3 className="tw-text-2xl tw-font-bold tw-mb-4 tw-text-white">Apply via LinkedIn</h3>
                <p className="tw-text-gray-400 tw-mb-8 tw-leading-relaxed">
                  View our latest openings, company updates, and apply directly through our official LinkedIn page.
                </p>
                <a 
                  href=" https://www.linkedin.com/company/iota-flow-systems-private-limited/?viewAsMember=true" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="tw-inline-block tw-w-full tw-text-center tw-bg-[#0077b5] tw-text-white tw-font-bold tw-py-4 tw-px-8 tw-rounded-xl hover:tw-bg-[#005582] tw-transition-all tw-transform active:tw-scale-95 tw-no-underline tw-shadow-lg"
                >
                  Visit IOTAFLOW Careers
                </a>
              </div>

            </div>

            

            {/* Tip Box */}
            <div className="tw-bg-white/90 tw-backdrop-blur-sm tw-p-8 tw-rounded-2xl tw-border-l-8 tw-border-black tw-shadow-xl">
              <div className="tw-flex tw-gap-4">
                <span className="tw-text-3xl">💡</span>
                <div>
                  <h4 className="tw-font-bold tw-text-xl tw-mb-2 tw-text-black">Application Tip</h4>
                  <p className="tw-text-gray-800 tw-leading-relaxed">
                    When applying, please mention your specific area of interest (e.g., <span className="tw-font-semibold">Mechanical Design, IoT Software, Instrumentation, Service, or Sales</span>) in the subject line. Our HR team reviews every application carefully and will reach out if your profile matches an available role.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ==================== WHY JOIN US SECTION ==================== */}
      <div className="tw-py-16 md:tw-py-24 tw-bg-black tw-text-white">
        <div className="tw-container tw-mx-auto tw-px-4">
          {/* Fixed missing tw- prefix on flex-col */}
          <div className="tw-flex tw-flex-col lg:tw-flex-row tw-gap-12 tw-items-center lg:tw-items-start">
            
            {/* Left: Heading & Intro */}
            <div className="tw-w-full lg:tw-w-1/3 tw-text-center lg:tw-text-left">
              <h2 className="tw-text-3xl md:tw-text-5xl tw-font-bold tw-mb-6">
                Why Join Us
                <span className="tw-block tw-h-1.5 tw-w-24 tw-bg-[#ffd700] tw-mt-3 tw-rounded-full tw-mx-auto lg:tw-mx-0"></span>
              </h2>
              <p className="tw-text-gray-400 tw-text-lg">
                Be part of a team that values innovation, growth, and people first. Discover the benefits of building a career with IOTAFLOW.
              </p>
            </div>

            {/* Right: Benefits List */}
            <div className="tw-w-full lg:tw-w-2/3">
              <ul className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
                {[
                  "Hands-on learning in industrial IoT and smart metering technology",
                  "Exposure to CGWA, CPCB, and Industry 4.0-compliant systems",
                  "A culture built on lean principles and continuous improvement",
                  "Opportunities for cross-team collaboration and leadership growth",
                  "Balanced work environment focused on innovation and people"
                ].map((benefit, index) => (
                  <li key={index} className="tw-flex tw-items-start tw-bg-gray-900 tw-p-5 tw-rounded-xl tw-border tw-border-gray-800 hover:tw-border-[#ffd700] tw-transition-colors">
                    <span className="tw-flex-shrink-0 tw-w-8 tw-h-8 tw-bg-[#ffd700] tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mr-4 tw-text-black tw-font-bold">
                      ✓
                    </span>
                    <span className="tw-text-gray-200 tw-text-base md:tw-text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      

    </div>
  )
}

export default Careers;