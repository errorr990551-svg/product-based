import React from 'react';
import SEO from "../common/SEO";
import './AboutUsSection.css';
import teamImage from '../../images/about us website img.jpg';  // Your single team image
import KPISection from './KPISection';

//import AnimatedVideoSection from './AnimatedVideoSection';
import LeanSection from './LeanSection';
import ClientsSection from './ClientsSection';




function AboutUsSection() {
  return (
    <>
      <SEO 
        title="About IOTAFLOW Systems | 34+ Years in Flow Meter Manufacturing"
        description="Learn about IOTAFLOW Systems, a leader in high-precision flow measurement since 1999. Specializing in European-standard manufacturing, Lean practices, and IoT automation."
        keywords="IOTAFLOW Systems history, Pankaj Malik IOTAFLOW, flow meter manufacturer India, technical collaboration Aflowt Germany, flow meter calibration lab India, lean manufacturing flow meters"
      />
      
      <section className="about-us-section py-5">

        <div className="container">
          <div className="row align-items-center">

            {/* Left Side: Image with white blur background */}

            <div className="col-md-5 text-end position-relative">
              <div className="team-image-wrapper ms-md-0 me-md-3 mx-auto">
                <div className="blur-bg"></div>
                <img src={teamImage} alt="The IOTAFLOW Systems engineering team and problem solvers led by Mr. Pankaj Malik" className="img-fluid position-relative" />
              </div>
            </div>

            {/* Right Side: Text */}
            <div className="col-md-7 mt-5 mt-md-0">
              <h1 className="fw-bold">Welcome to IOTAFLOW !</h1>
              <p className="mt-3">
                Where the essence of our name reflects our commitment to precision and comprehensive
              </p>
              <p>
                <strong>Flow Meter</strong> Solutions. Derived from <strong>“IOTA”</strong>, meaning minuscule or minute,
                we embody this concept by crafting flow meters with an iota of error.
                The word <strong>“FLOW”</strong> underscores our unwavering dedication to designing instruments for
                everything that flows be it Air, Water, Oil, Gas, Steam, or chemical. Yes, We have it all.
              </p>
              <p>
                At IOTAFLOW, we reject the notion of a one-size-fits-all approach.
                Instead, we embrace a vision where our customers receive bespoke technological solutions without compromise.
                To achieve this, we’ve forged Strategic Partnerships with ten domain leaders across Europe, America, and Japan. These collaborations
                empower us to offer a diverse range of cutting-edge technologies without the need to push any particular product or technology.
              </p>
              <p>With IOTAFLOW, you can trust that our flow meters are meticulously designed to deliver unparalleled accuracy and reliability.
                Join us in revolutionizing the flow measurement, where every detail matters and precision reigns supreme.
              </p>
              <p>The objective of timely delivery and defect-free products sent us on a treasure hunt, and we discovered 2-second lean.
                As a result, we have IOTAFLOW University to help us grow our people. With an army of growth-minded people, we deliver products almost 80% within 2 weeks, with a goal to reach 3 days by 2027.
                 Product complaints are down by 70%, with a goal to bring it down to almost zero by the end of 2025.</p>
            </div>

          </div>
        </div>
        <KPISection />
        {/* <div className="animated-image-section-wrapper py-5">
          <AnimatedVideoSection />

        </div> */}
        <LeanSection />
        <ClientsSection />
        {/* <FooterSection /> */}
      </section>
    </>
  );
}

export default AboutUsSection;
