import React, { useState } from 'react';
import { Container, Accordion, useAccordionButton, Card } from 'react-bootstrap';

// --- FAQ data can be easily updated here ---
// I've removed the <p> tags from the answers to prevent style conflicts.
const faqs = [
    {
        q: "What types of flow meters are available, and how do they differ?",
        a: "At IOTAFLOW, we don’t believe in a one-size-fits-all solution. Through partnerships with 8+ global technology leaders across Europe and Japan, we offer a complete portfolio of flow measurement technologies — so you always get the right-fit solution, not a forced one. Our range includes Electromagnetic (Mag) meters, Ultrasonic meters, Thermal Mass meters, Coriolis mass meters, Vortex meters, Positive Displacement & Oval Gear meters, and Rotameters. With 25+ years of engineering expertise, IOTAFLOW delivers solutions that are accurate, efficient, and application-specific — never compromised.",
    },
    {
        q: "Which flow meter should I choose for my application?",
        a: "The best flow meter depends on the type of fluid (liquid, gas, slurry), flow range, accuracy requirements, temperature and pressure conditions, and integration needs (digital output, IoT/LoRaWAN, etc.). Our team at IOTAFLOW works with global partners to recommend the right-fit solution, ensuring accuracy and efficiency without overspending.",
    },
    {
        q: "What factors affect accuracy in flow measurement?",
        a: "Several factors can reduce accuracy: poor installation, air bubbles or solid particles, incorrect meter selection, wear and tear, and lack of regular calibration. At IOTAFLOW, we not only supply the right flow meter but also guide you on proper installation, filtration, and calibration to ensure long-term accuracy and peace of mind.",
    },
    {
        q: "Why is proper meter installation and flow conditioning essential?",
        a: "Proper installation and flow conditioning are critical for accurate measurement. Factors like turbulence, short pipe runs, or incorrect alignment can create distorted flow profiles that lead to errors. Using straight pipe runs, flow conditioners, and correct mounting ensures your flow meter delivers reliable and repeatable data. At IOTAFLOW, we guide customers through best practices in installation and setup to ensure long-term accuracy.",
    },
    {
        q: "How do I integrate flow meter data into my control systems?",
        a: "Most modern flow meters provide outputs such as Analog (4–20mA), Pulse outputs, and Digital protocols (Modbus, Profibus, Ethernet, etc.). At IOTAFLOW, we deliver solutions that integrate seamlessly with your SCADA, PLC, or IoT / LoRaWAN systems, enabling real-time monitoring and control.",
    },
    {
        q: "What details should I provide when requesting a flow meter?",
        a: "To receive the most accurate solution, please provide: fluid type and properties, flow rate and pressure range, temperature conditions, accuracy requirements, pipe size and connection details, preferred signal outputs, and any IoT / LoRaWAN or CGWA Compliance requirements.",
    },
];

// 1. Create a custom toggle component for full styling control
function CustomToggle({ children, eventKey, activeKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);
  const isOpen = activeKey === eventKey;

  return (
    <div
      onClick={decoratedOnClick}
      className={`
        tw-w-full tw-cursor-pointer tw-p-5 tw-text-xl tw-font-bold tw-flex tw-transition-all tw-duration-300
        focus:tw-outline-none
        ${isOpen ? 'tw-bg-black tw-text-white' : 'tw-bg-white tw-text-black'}
      `}
    >
      <span className="tw-font-bold tw-mr-3">{isOpen ? "–" : "+"}</span>
      <span>{children}</span>
    </div>
  );
}


function Faqs() {
  const [activeKey, setActiveKey] = useState("-1");

  return (
    <section className="tw-py-20 tw-pb-[140px]">
      <Container>
        <h3 className="tw-text-3xl tw-font-bold tw-mb-8">
            <span className="tw-border-l-4 tw-border-yellow-400 tw-pl-3">FAQ’S</span>
        </h3>

        <Accordion
          activeKey={activeKey}
          onSelect={(k) => setActiveKey(k ?? "")}
        >
          {faqs.map((f, idx) => {
            const key = String(idx);
            const isOpen = activeKey === key;
            return (
              // 2. Use Card component for structure instead of Accordion.Item
              <Card key={f.q} className="tw-border-2 tw-border-black tw-rounded-lg tw-mb-3 tw-overflow-hidden !tw-bg-transparent">
                <Card.Header className="!tw-p-0 !tw-border-0">
                  {/* 3. Use the new CustomToggle */}
                  <CustomToggle eventKey={key} activeKey={activeKey}>
                    {f.q}
                  </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey={key}>
                  <Card.Body
                    className={`
                      !tw-p-6
                      ${isOpen ? 'tw-bg-black' : 'tw-bg-white'}
                    `}
                  >
                    {/* The color classes are now applied directly to the <p> tag */}
                    <p className={`
                        tw-text-base tw-leading-relaxed tw-m-0
                        ${isOpen ? 'tw-text-white' : 'tw-text-gray-700'}
                    `}>
                        {f.a}
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            );
          })}
        </Accordion>
      </Container>
    </section>
  );
}

export default Faqs;
