import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// --- You can easily change the icons and text here in the future ---
const featuresData = [
  {
    icon: '/icons/experience-icon.png', // Replace with your actual icon path
    title: 'Years Of Experience',
    description: 'With 75+ years of experience in this industry, we have established ourselves as a trusted name.',
  },
  {
    icon: '/icons/customize-icon.png', // Replace with your actual icon path
    title: 'Customize Collection',
    description: 'We aim to nurture the needs of our clients by offering tailored and customized solutions.',
  },
  {
    icon: '/icons/shipping-icon.png', // Replace with your actual icon path
    title: 'Worldwide Shipment',
    description: 'With worldwide reach, we are devoted to delivering undamaged products promptly.',
  },
  {
    icon: '/icons/satisfaction-icon.png', // Replace with your actual icon path
    title: 'Client Satisfaction',
    description: 'Since our establishment, we are committed to bringing the utmost satisfaction to our clients.',
  },
  {
    icon: '/icons/experts-icon.png', // Replace with your actual icon path
    title: 'Team Of Experts',
    description: 'We have a dedicated team of experts who are committed to offering unparalleled service.',
  },
  {
    icon: '/icons/quality-icon.png', // Replace with your actual icon path
    title: 'Premium Quality Products',
    description: 'Experience top-quality products that enhance your operations and provide lasting value.',
  },
];

function RightChoiceSeo() {
  return (
    <section className="tw-bg-white tw-py-20 tw-text-[#1f1e1d]">
      <Container>
        <div className="tw-text-center tw-mb-12">
          <h2 className="tw-font-bold tw-text-4xl tw-relative tw-pb-4">
            Why We're the Right Choice?
            {/* Yellow underline for the title */}
            <span className="tw-absolute tw-bottom-0 tw-left-1/2 tw--translate-x-1/2 tw-w-20 tw-h-1 tw-bg-yellow-400"></span>
          </h2>
        </div>
        <Row className="justify-content-center">
          {featuresData.map((feature, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              {/* Added 'group', 'relative', and 'overflow-hidden' for the hover effect */}
              <div className="group tw-relative tw-bg-white tw-p-6 tw-rounded-lg tw-h-full hover:tw-bg-[#ffcc00] hover:tw--translate-y-2 tw-transition-all tw-duration-300 tw-ease-in-out tw-overflow-hidden">
                
                {/* Default State: Icon, Title, and Description (fades out on group hover) */}
                <div className="tw-flex tw-items-start tw-transition-opacity tw-duration-300 group-hover:tw-opacity-0">
                  <div className="tw-mr-5">
                    <img src={feature.icon} alt={`${feature.title} icon`} className="tw-w-12 tw-h-12" />
                  </div>
                  <div className="tw-text-left">
                    <h5 className="tw-text-yellow-400 tw-font-semibold tw-text-xl tw-mb-2">{feature.title}</h5>
                    {/* Description is now visible in the default state */}
                    <p className="tw-text-[#1f1e1d] tw-text-base tw-mb-0">{feature.description}</p>
                  </div>
                </div>

                {/* Hover State: Full Description Only (positioned absolutely, fades in on group hover) */}
                <div className="tw-absolute tw-inset-0 tw-p-6 tw-flex tw-items-center tw-justify-center tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-300">
                  <p className="tw-text-[#1f1e1d] tw-text-base tw-text-center tw-mb-0">{feature.description}</p>
                </div>

              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default RightChoiceSeo;