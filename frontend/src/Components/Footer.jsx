import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import Logo from "../images/Iotaf logo icon.webp";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { usePopup } from "../context/PopupContext";
import LazyIframe from "./LazyIframe";


const FOOTER_PRODUCTS = [
  ["Domestic Ultrasonic Water Meter", "/product"],
  ["Inline Ultrasonic Flow Meter", "/product-detail/detail2"],
  ["Intrusive Ultrasonic Flow Meter", "/product-detail/detail3"],
  ["Clamp-On Ultrasonic Flow Meter", "/product-detail/detail4"],
  ["Portable Ultrasonic Flow Meter", "/product-detail/detail5"],
  ["Area Velocity Doppler Flow Meter", "/product-detail/detail6"],
  ["Ultrasonic BTU & Energy Meter", "/product-detail/detail17"],
  ["Ultrasonic Gas Flow Meter", "/product-detail/detail20"],
  ["Biogas Flow Meter", "/product-detail/detail22"],
  ["Compressed Air & Nitrogen Flow Meter", "/product-detail/detail14"],
  ["Electromagnetic Flow Meter", "/product-detail/detail7"],
  ["Ex-Proof Electromagnetic Flow Meter", "/product-detail/detail7b"],
  ["Compact Electromagnetic Flow Meter", "/product-detail/detail8"],
  ["Smart Single-Jet Water Meter", "/product-detail/detail9"],
  ["Woltmann Water Meter", "/product-detail/detail10"],
  ["Ring Piston Flow Meter", "/product-detail/detail11"],
  ["Oval Gear Flow Meter", "/product-detail/detail12"],
  ["Micro Stream Flow Sensor", "/product-detail/detail13"],
  ["Thermal Mass Flow Meter", "/product-detail/detail15"],
  ["Vortex Flow Meter", "/product-detail/detail16"],
  ["Insertion Vortex Flow Meter", "/product-detail/detail18"],
  ["Turbine Gas Meter", "/product-detail/detail19"],
  ["RPD Gas Meter", "/product-detail/detail21"],
  ["Conical Flow Meter", "/product-detail/detail23"],
  ["Metal Tube Rotameter", "/product-detail/detail24"],
  ["Glass / Acrylic Rotameter", "/product-detail/detail25"],
  ["Fire Pump Test Meter", "/product-detail/detail26"],
  ["Flow Meter Accessories", "/accessories"],
  ["IoTSense Platform", "/iotsense"],
];

function Footer() {
  const { contactDetailsRevealed, openPopup } = usePopup();
  return (
    <footer className="footer text-light pt-5">
      {/* Wave Shape */}
      <div className="footer-wave">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
        >
          <path
            fill="#1a1a1a"
            d="M0,64 C360,160 1080,0 1440,96 L1440,0 L0,0 Z"
          ></path>
        </svg>
      </div>

      {/* Footer Content */}
      <Container>
        <Row className="gy-5">
          {/* Logo + About */}
          <Col lg={4} md={12}>
          {/* Logo + Company Name → Home */}
          <Link
            to="/"
            className="text-decoration-none text-reset"
          >
            <div className="main-con mb-3">
              <div className="footer-logo me-3">
                <img
                  src={Logo}
                  alt="IOTAFlow Logo"
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div>
                <h4 className="fw-bold mb-0">IOTAFLOW</h4>
                <small className="d-block fw-2">
                  <span>SYSTEMS PVT. LTD</span>
                </small>
              </div>
            </div>
          </Link>

            <p>
              At IOTAFLOW Systems, we embrace Lean <br />
              principles to deliver flow measurement, <br />
              IOT automation, and calibration solutions <br />
              that drive energy efficiency across industrial utilities.
            </p>

            <div className="mt-3">
  <p className="mb-1">Follow us</p>
  <div className="social-icons">
    <a href="https://www.youtube.com/@iotaflow7013" target="_blank" rel="noopener noreferrer">
      <i className="bi bi-youtube"></i>
    </a>

    <a href=" https://www.linkedin.com/company/iota-flow-systems-private-limited/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
      <i className="bi bi-linkedin"></i>
    </a>

    <a href="https://www.instagram.com/iotaflow_systems/?hl=en" target="_blank" rel="noopener noreferrer">
      <i className="bi bi-instagram"></i>
    </a>

    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
      <i className="bi bi-twitter"></i>
    </a>
  </div>
</div>
          </Col>

          {/* Company Links */}
          <Col lg={2} md={6}>
            <FooterCol
              title="Company"
              items={[
                { label: "About Us", href: "/about-us" },
                { label: "Certifications", href: "/about-us/certification" },
                { label: "Services", href: "/services" },
                { label: "Accessories", href: "/accessories" },
                { label: "Case Studies", href: "/casestudies" },
                { label: "Lean Resources", href: "/lean-manufacturing" },
                { label: "Market Area", href: "/market-area" }
              ]}
            />
          </Col>

          {/* Support Links */}
          <Col lg={2} md={6}>
            <FooterCol
              title="Support"
              items={[
                { label: "FAQs", action: "faq" },
                { label: "Flow Velocity Calculator", href: "/flow-calculator" },
                { label: "Lodge a Complaint", href: "/complaint" },
                { label: "Feedback", href: "/contact" }
              ]}
            />
          </Col>

          {/* Careers */}
          <Col lg={2} md={6}>
            <FooterCol
              title="Careers"
              items={[
                { label: "Career Opportunities", href: "/careers" }
              ]}
            />
          </Col>

          {/* Contact Us */}
          <Col lg={2} md={6}>
            <div className="footer-col">
              <h5 className="fw-bold mb-3 footer-col-title">
                Contact Us
                <span className="footer-col-underline" />
              </h5>
              {contactDetailsRevealed ? (
                <>
                  <p className="mb-1">
                    <i className="bi bi-telephone me-2"></i>
                    <a href="tel:+919910693866" className="text-decoration-none text-reset">
                      +91-9910693866
                    </a>
                  </p>

                  <p className="mb-1">
                    <i className="bi bi-telephone me-2"></i>
                    <a href="tel:+919779085987" className="text-decoration-none text-reset">
                      +91-9779085987
                    </a>
                  </p>

                  <p className="mb-1">
                    <i className="bi bi-envelope me-2"></i>
                    <a href="mailto:contact@iotaflow.com" className="text-decoration-none text-reset">
                      contact@iotaflow.com
                    </a>
                  </p>
                </>
              ) : (
                <button
                  onClick={() => openPopup("reveal_contact")}
                  className="footer-reveal-btn"
                >
                  Show Contact Details
                </button>
              )}
              
              <p className="mb-1">
                <i className="bi bi-geo-alt me-2"></i> Find Us
              </p>
              <div className="map">
                <LazyIframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2619677918765!2d77.1224383!3d28.621909699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d034d4c4c02d3%3A0x4b397a3052ad9053!2sIOTAFLOW%20Systems%20Pvt%20Ltd%20-%20Flow%20meter%20manufacturer%20%26%20exporter%20in%20india!5e0!3m2!1sen!2sin!4v1755784905876!5m2!1sen!2sin"
                  width="100%"
                  height="120"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Company Location"
                />
              </div>
            </div>
          </Col>
        </Row>

        {/* All products – plain links so every product page is reachable from every page */}
        <nav aria-label="All products" className="footer-products mt-4">
          <h5 className="fw-bold mb-2 footer-col-title">
            Our Products
            <span className="footer-col-underline" />
          </h5>
          <ul className="footer-products-list list-unstyled mb-0">
            {FOOTER_PRODUCTS.map(([label, href]) => (
              <li key={href}>
                <Link to={href} className="text-decoration-none text-light-50">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      {/* Yellow Divider */}
      <div className="footer-divider"></div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom py-3 d-flex">
        <Container className=" text-start">
          <small>© {new Date().getFullYear()} IOTAFLOW Systems Pvt. Ltd</small>
        </Container>
        <Container className=" text-end">
          <small><a href="https://errorr.in/" className="text-decoration-none text-reset">Designed and Promoted By  Errorr.in - Best Digital Marketing Company in India.</a></small>
        </Container>
      </div>
       
    </footer>
  );
}

function FooterCol({ title, items }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleFaqClick = () => {
    // If already on home page → just scroll
    if (location.pathname === "/") {
      const faqSection = document.getElementById("faq");
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: "smooth" });
      }
    } 
    // If on another page → navigate first, then scroll
    else {
      navigate("/");

      // wait for page render
      setTimeout(() => {
        const faqSection = document.getElementById("faq");
        if (faqSection) {
          faqSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  return (
    <div className="footer-col">
      <h5 className="fw-bold mb-3 footer-col-title">
        {title}
        <span className="footer-col-underline" />
      </h5>

      <ul className="list-unstyled d-grid gap-2 mb-0">
        {items.map((item) => (
          <li key={item.label}>
            {item.action === "faq" ? (
              <span
                className="text-decoration-none text-light-50"
                style={{ cursor: "pointer" }}
                onClick={handleFaqClick}
              >
                {item.label}
              </span>
            ) : (
              <Link
                to={item.href}
                className="text-decoration-none text-light-50"
                onClick={() => window.scrollTo(0, 0)}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;