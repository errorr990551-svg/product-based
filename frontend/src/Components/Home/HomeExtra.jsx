import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Accordion } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./home-extra.css";

/* === import every logo that lives under src/images (put correct cases!) === */
import adani from "../../images/adani.png";
import cairn from "../../images/Cairn.png"; // <-- make sure this EXACTLY matches the file name
import client2 from "../../images/client2.jpg";
import client3 from "../../images/client3.png";
import client4_1 from "../../images/client4 (1).jpg";
import client4_180 from "../../images/client4-180x96.png";
import client5_180 from "../../images/client5-180x96.png";
import client5 from "../../images/client5.jpg";
import client6_180 from "../../images/client6-180x96.png";
import client6 from "../../images/client6.jpg";
import client7_180 from "../../images/client7-180x96.png";
import client8_180 from "../../images/client8-180x96.png";
import client8 from "../../images/client8.jpg";
import client9_180 from "../../images/client9-180x96.png";
import client10_180 from "../../images/client10-180x96.png";
import client11_180 from "../../images/client11-180x96.png";
import client12_180 from "../../images/client12-180x96.png";
import drReddys from "../../images/Dr.-Reddys.png";
import essarSteel from "../../images/essar-steel.png";
import gaar from "../../images/Gaar.png";
import hindustan from "../../images/hindustan.png";
import itcHotels from "../../images/itc-hotels.png";
import jindal from "../../images/jindal.png";
import ltLogo from "../../images/lt_logo.png";
import mahindraRise from "../../images/Mahindra-rise.png";
import motherDairy from "../../images/mother-dairy.png";
import ntpc from "../../images/NTPC.png";
import ocmLuxury from "../../images/ocm-lxury.png";
import oilLtd from "../../images/oilltd.png";
import roorkee from "../../images/roorkee.png";
import schneider from "../../images/Schneider.png";
import smec from "../../images/smec.png";
import sterlingWilson from "../../images/sterling-wilson.png";
import taj from "../../images/Taj.png";
import ultratech from "../../images/ultratech-cement.png";
import voltas from "../../images/voltas.png";
import cl2 from "../../images/Client logo icon_2.png";
import cl3 from "../../images/Client logo icon_3.png";

import cl6 from "../../images/Client logo icon_6.png";
import cl8 from "../../images/Client logo icon_8.png";
import cl9 from "../../images/Client logo icon_9.png";
import cl12 from "../../images/Client logo icon_12.png";
import cl13 from "../../images/Client logo icon_13.png";
import cl14 from "../../images/Client logo icon_14.png";
import cl15 from "../../images/Client logo icon_15.png";
import cl16 from "../../images/Client logo icon_16.png";
import cl17 from "../../images/Client logo icon_17.png";
import cl18 from "../../images/Client logo icon_18.png";
import cl19 from "../../images/Client logo icon_19.png";
import cl20 from "../../images/Client logo icon_20.png";
import cl21 from "../../images/Client logo icon_21.png";
import cl22 from "../../images/Client logo icon_22.png";
import n7 from "../../images/New_7.png";
import n11 from "../../images/New_11.png";
import n23 from "../../images/New_23.png";
import n24 from "../../images/New_24.png";
import n25 from "../../images/New_25 Hindalco.png";
import n26 from "../../images/New_26.png";
import n27 from "../../images/New_27.png";
import n28 from "../../images/New_28.png";
import n29 from "../../images/New_29.png";
import n30 from "../../images/New_30.png";
import n31 from "../../images/New_31.png";
import n32 from "../../images/New_32.png";
import n33 from "../../images/New_33.png";
import n34 from "../../images/34.png";



/* ---------------- HERO ---------------- */
export function HeroBanner() {
  // Put bg1.jpg into /public/images/bg1.jpg (or import it from src if you prefer)
  const HERO_IMG = "/images/bg1.jpg";

  return (
    <section
      className="hero-banner"
      style={{ backgroundImage: `url(${HERO_IMG})` }}
    >
      <div className="hero-overlay" />
      <Container className="h-100">
        <Row className="h-100 align-items-center justify-content-end">
          <Col lg={6} className="hero-copy">
            <h1 className="display-1 fw-bold mb-3">
              IOTAFLOW <span className="badge-systems">Systems</span>
            </h1>
            <h2 className="display-5 fw-bold mb-3">
              FLOW METER | IOT/AMR | Calibration
            </h2>
            <p className="lead">
              We measure success by the way we touch the lives of the people. Be
              it our Team, our customers, our vendors or our bankers.
            </p>
            <Button variant="outline-dark" size="lg" className="rounded-0">
              Explore the experience
            </Button>
          </Col>
        </Row>
      </Container>

      <ScrollTop />
    </section>
  );
}

/* ---------------- COMBINED TEXT + CIRCLES ---------------- */
export function StatsModern() {
  return (
    <section className="stats-modern">
      <Container>
        <Row className="align-items-center text-center text-lg-start">
          {/* LEFT CONTENT */}
          <Col lg={6} className="mb-5 mb-lg-0">
            <h2 className="display-4 fw-bold mb-4">
              Your Flow Matters, Our Meters Make the Difference!
            </h2>
            <p className="lead mb-4">
<b>IOTA</b> means minuscule or minute, which we take as inspiration to design and deliver flow meters that have an IOTA of error. <b>FLOW</b> word is there to keep us focused on the fact that we shall design and deliver flow meters for everything that flows.

            </p>
            <ul className="list-unstyled modern-bullets">
              <li>
                <i className="bi bi-check-circle-fill"></i><b>ZED Gold Certified for Quality</b>
              </li>
              <p>Recognition for excellence in manufacturing and process quality.</p>
              <li>
                <i className="bi bi-check-circle-fill"></i><b>European Technology, Built in India</b>
              </li>
              <p>Through our technology transfer with Aflowt Germany, we deliver world-class flow solutions with local reliability.</p>
              <li>
                <i className="bi bi-check-circle-fill"></i> <b>25+ Years of Engineering Expertise</b>
              </li>
              <p> Over two decades of proven experience in flow measurement and utility management.</p>
              <li>
                <i className="bi bi-check-circle-fill"></i> <b>Government-Approved Solutions</b>
              </li>
              <p> Trusted and approved by leading government departments and authorities.</p>

            </ul>
          </Col>

          {/* RIGHT STATS */}
          <Col lg={6}>
            <div className="stats-right">
              <div className="stat-card vertical-card">
                <h3>8+</h3>
                <p>Global Partnerships</p>
              </div>

              <div className="stat-card main-card">
                <h2>10,000+</h2>
                <p>Flow meters delivered</p>
              </div>

              <div className="stat-card vertical-card">
                <h3>98%</h3>
                <p>Customer Satisfaction</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

/* ---------------- DIFFERENCE (OPTIONAL) ---------------- */
export function DifferenceBlock() {
  const bullets = [
    "10+ Global Partnerships",
    "125+ Awards Recieved",
    "2-2 Lean Manufacturing",
    "98% customer satisfaction",
  ];

  return (
    <section className="difference-block">
      <Container>
        <Row>
          <Col lg={8}>
            <h2 className="display-1 fw-bold mb-4">Difference!</h2>
            <p className="lead">
              IOTA means minuscule or minute, which we take as inspiration to design and deliver flow meters that have an IOTA of error. FLOW word is there to keep us focused on the fact that we shall design and deliver flow meters for everything that flows.
            </p>

            <Row className="mt-5 g-4">
              {bullets.map((b) => (
                <Col md={6} key={b}>

                  <div className="bullet-line">

                    <span className="bullet-icon">

                      <i className="bi bi-chevron-right" />
                    </span>
                    <span className="bullet-text fw-bold">{b}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

/* ---------------- OUR CLIENTS (SLIDER) ---------------- */
export function ClientsSection() {
  const logos = [
    cl2,cl3,cl6,cl8,cl9,cl12,cl13,cl14,cl15,cl16,cl17,cl18,cl19,cl20,cl21,cl22,n7,n11,n23,n24,n25,n26,n27,n28,n29,n30,n31,n32,n33,n34,

  ];

  return (
    <section className="clients-sectionn">
      <Container>
        <h3 className="section-heading">
          <span className="heading-bar" /> OUR CLIENTS
        </h3>

         <Swiper
                  slidesPerView={4}
                  spaceBetween={24}
                  loop
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  modules={[Autoplay]}
                  breakpoints={{
                    0: { slidesPerView: 2 },
                    576: { slidesPerView: 3 },
                    992: { slidesPerView: 4 },
                  }}
                >
                  {logos.map((src, i) => (
                    <SwiperSlide key={i}>
                      <div className="client-logo-cardd">
                        <img src={src} alt={`client-${i}`} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

      </Container>
    </section>
  );
}

/* ---------------- MORE ABOUT US (VIDEOS) ---------------- */
export function MoreAboutUs() {
  return (
    <section className="more-about-us">
      <Container>
        <h3 className="section-heading">
          <span className="heading-bar" /> MORE ABOUT US
        </h3>

        <Row className="g-4">
          <Col md={4}>
            <div className="ratio ratio-16x9 video-frame">
              <iframe src="https://www.youtube.com/embed/VZZiKbyaNww" title="video1" allowFullScreen />
            </div>
          </Col>
          <Col md={4}>
            <div className="ratio ratio-16x9 video-frame">
              <iframe src="https://www.youtube.com/embed/2PgkpKsiGsY" title="video2" allowFullScreen />
            </div>
          </Col>
          <Col md={4}>
            <div className="ratio ratio-16x9 video-frame">
              <iframe src="https://www.youtube.com/embed/3NVPU0yrmu0" title="video3" allowFullScreen />
            </div>

          </Col>
        </Row>

      </Container>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
export function FAQSection() {
  const [activeKey, setActiveKey] = useState("-1");

  const faqs = [
    {
      q: "What types of flow meters are available, and how do they differ?",
      a: <p>At IOTAFLOW, we don’t believe in a one-size-fits-all solution. Through partnerships with 8+ global technology leaders across Europe and Japan, we offer a complete portfolio of flow measurement technologies — so you always get the right-fit solution, not a forced one.
        Our range includes:
        Electromagnetic (Mag) meters – Reliable for water, slurry, acids, alkalis.


        Ultrasonic meters – Flexible for liquids, air, natural gas, and BTU/energy measurement.


        Thermal Mass meters – Efficient for air & gases, ideal for leakage detection.


        Coriolis mass meters – Precise mass flow for critical processes.


        Vortex meters – Versatile for steam, gases, and liquids.


        Positive Displacement & Oval Gear meters – Durable for oils, fuels, solvents and low flow.


        Rotameters & Metal Tube Flow meters – Practical and mechanical for visual monitoring.


        With 25+ years of engineering expertise, IOTAFLOW delivers solutions that are accurate, efficient, and application-specific — never compromised.
        </p>,
    },

    {
      q: " Which flow meter should I choose for my application?",
      a: <p> The best flow meter depends on:
        The type of fluid (liquid, gas, slurry, corrosive, etc.)


        The flow range & velocity


        Accuracy requirements


        Temperature and pressure conditions


        Integration needs (digital output, IOT/ Online Telemetry solution, LoraWan etc.)


        Our team at IOTAFLOW works with global partners to recommend the right-fit solution, ensuring accuracy and efficiency without overspending.
        </p>,
    },
    {
      q: " What factors affect accuracy in flow measurement?",
      a: <p>Several factors can reduce the accuracy of a flow meter if not managed properly:
        Poor installation – turbulence or short pipe runs can disturb the flow profile.


        Air bubbles or solid particles – these interfere with consistent readings.


        Incorrect meter selection – using the wrong meter type for the fluid or application.


        Wear and tear over time – especially if no filtration is used in the process.


        Lack of regular calibration – without periodic checks, even the best meters can drift.


        At IOTAFLOW, we not only supply the right flow meter but also guide you on proper installation, filtration, and calibration to ensure long-term accuracy and peace of mind.
        That’s why proper selection, installation, and ongoing support are critical. With our 98% customer satisfaction record, we ensure accuracy is maintained year after year.
        </p>,
    },
    {
      q: "Why is proper meter installation and flow conditioning essential?",
      a: <p>Proper installation and flow conditioning are critical for accurate measurement. Factors like turbulence, short pipe runs, or incorrect alignment can create distorted flow profiles that lead to errors. Using straight pipe runs, flow conditioners, and correct mounting ensures your flow meter delivers reliable and repeatable data. At IOTAFLOW, we guide customers through best practices in installation and setup to ensure long-term accuracy.</p>,
    },
    {
      q: " How do I integrate flow meter data into my control systems?",
      a: <p>Most modern flow meters provide outputs such as:
        Analog (4–20mA)


        Pulse outputs


        Digital protocols (Modbus, Profibus, Ethernet, etc.)


        At IOTAFLOW, we deliver solutions that integrate seamlessly with your SCADA, PLC, or IoT / LoraWan systems, enabling real-time monitoring and control.</p>,
    },
    {
      q: "What details should I provide when requesting a flow meter?",
      a: <p>When specifying a flow meter, it’s important to share complete details so that you receive the most accurate, compliant, and cost-effective solution. We typically need:
        Fluid type and properties – liquid, gas, slurry, clean, or corrosive.


        Flow rate and pressure range – minimum, maximum, and operating values.


        Temperature conditions – process and ambient.


        Accuracy requirements – tolerance levels as per your process needs.


        Pipe size and connection details – flange, threaded, or customized fittings.


        Preferred signal outputs – analog (4–20mA), pulse, or digital protocols (Modbus, Profibus, Ethernet, HART etc.).


        IoT / LoRaWAN requirements – for remote monitoring, smart utilities, and Industry 4.0 integration.


        CGWA Compliance requirements – flow meters for groundwater extraction must meet Central Ground Water Authority (CGWA) guidelines in India, which mandate tamper-proof, telemetry-enabled devices with online data submission.</p>,
    },
    {
      q: "How can I achieve accurate measurement at very low flow rates and detect air leakages?",
      a: <p>Accurate measurement at very low flow rates, especially in air and gas systems, is critical for preventing hidden losses and improving efficiency. Traditional flow meters often struggle at these ranges, which is why advanced technologies are essential.
        At IOTAFLOW Systems, we specialize in solutions designed for precision and leakage detection:
        Ultrasonic Air Flow Meters – with turndown ratios up to 1:60, these meters deliver highly accurate results in compressed air and gas networks, making it possible to identify even small leaks.


        Thermal Mass Flow Meters – with turndown ratios up to 1:100, these are ideal for continuous monitoring of low flows in air and gas applications, ensuring accurate tracking and energy savings.


        By offering Ultrasonic and Thermal mass technology, we help industries in India not only measure low flow rates with confidence but also detect air and gas leakages that drain money and efficiency.
        Backed by our global technology partnerships, IOTAFLOW provides application-specific, reliable, and energy-saving flow measurement solutions tailored to your needs.</p>,
    },
    {
      q: "What is the maximum fluid velocity for magnetic flow meters?",
      a: <p>Magnetic flow meters (magmeters) are widely used for accurate liquid measurement, but their performance depends on fluid velocity. In general, most magmeters work best below 10 m/s for clean conductive liquids and below 3 m/s for slurry or sludge applications. Exceeding these limits can affect both accuracy and meter life.
        At IOTAFLOW Systems, we provide advanced magmeters that deliver reliable results across a wide velocity range:
        MF-PRO Models – ensure ±0.5% accuracy for all liquids within the 3–10 m/s velocity range.


        MF-TER Models – deliver even higher precision with ±0.2% accuracy, making them ideal for industries where performance and repeatability are critical.
        By offering specialized magnetic flow meters for different applications, we help industries in India select solutions that balance velocity, accuracy, durability, and compliance — ensuring long-term reliability in utility and process measurement.</p>,
    },
    {
      q: "How can flow meters improve compressor efficiency and reduce energy losses?",
      a: <p>Compressed air is often called the “fourth utility” in industries — but it’s also one of the most expensive. On average, 23% of an industrial facility’s total energy is consumed by compressors, and a significant portion of this is wasted due to leaks and inefficiencies.
        Installing the right flow measurement system helps industries take control of this hidden cost.
        With Ultrasonic Air Flow Meters (UFM) from IOTAFLOW Systems, you can:
        Detects air leakages early, even at very low flow rates.


        Measure compressor efficiency in real time by installing the meter directly on the compressor delivery line.


        Optimize compressor load management, preventing unnecessary energy use.


        Reduce energy costs while extending compressor life.


        Our Ultrasonic Air Flow Meters (with turndown ratios up to 1:60) are purpose-built for compressed air and gas monitoring, giving industries in India a reliable way to track consumption, identify losses, and achieve sustainable energy savings year after year.</p>,
    },
    {
      q: "Can ultrasonic flow meters measure flow in partially filled pipelines (Partial Flow)?",
      a: <p>Yes — but not all ultrasonic flow meters are designed for this challenge. In partially filled or large-diameter pipelines, conventional clamp-on or single-path ultrasonic meters often lose accuracy because of unstable velocity profiles and varying liquid levels.
        The solution lies in multi-path insertion ultrasonic flow meters.
        At IOTAFLOW Systems, our customized 4-track insertion ultrasonic flow meters are specifically engineered for such applications, making them ideal for industries where flow conditions are complex and traditional meters fail. They provide:
        Reliable measurement in partially filled pipelines


        High accuracy across large diameters and variable flow conditions


        Long-term durability and application-specific adaptability


        This makes ultrasonic insertion technology one of the most effective solutions for challenging industrial flow measurement requirements.</p>,
    },

  ];

  return (
    <section className="faq-section" id="faq">
      <Container>
        <h3 className="section-heading">
          <span className="heading-bar" /> FAQ’S
        </h3>

        <Accordion
          activeKey={activeKey}
          onSelect={(k) => setActiveKey(k ?? "")}
          className="faq-accordion"
        >
          {faqs.map((f, idx) => {
            const key = String(idx);
            const isOpen = activeKey === key;
            return (
              <Accordion.Item
                eventKey={key}
                key={f.q}
                className={`faq-item ${isOpen ? "is-open" : ""}`}
              >
                <Accordion.Header>
                  <span className="sign">{isOpen ? "–" : "+"}</span> {f.q}
                </Accordion.Header>
                <Accordion.Body>{f.a}</Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </Container>
    </section>
  );
}

/* ---------------- Scroll To Top (reusable) ---------------- */
export function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      className="scroll-top global"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      <i className="bi bi-chevron-up"></i>
    </button>
  );
}

/* ---------------- Export a single plug-and-play component ---------------- */
export default function HomeExtra() {
  return (
    <>
      {/* <HeroBanner /> */}
      <StatsModern />
      {/* <DifferenceBlock /> */}
      <ClientsSection />
      <MoreAboutUs />
      <FAQSection />
    </>
  );
}
