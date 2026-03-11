import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import Logo from "../images/Iotaf logo icon.png";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";


function Footer() {
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

    <a href="https://www.instagram.com/iotaflowsystems?igsh=ejhkMzI4cm53bjFm" target="_blank" rel="noopener noreferrer">
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
                { label: "Services", href: "/services" },
                { label: "Case Studies", href: "/casestudies" },
                { label: "Lean Resources", href: "/resources" }
              ]}
            />
          </Col>

          {/* Support Links */}
          <Col lg={2} md={6}>
            <FooterCol
              title="Support"
              items={[
                { label: "FAQs", action: "faq" },
                { label: "Lodge a Complaint", href: "/complaint" },
                { label: "Feedback", href: "/feedback" },
                { label: "Downloads", href: "/downloads" }
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
              
              <p className="mb-1">
                <i className="bi bi-geo-alt me-2"></i> Find Us
              </p>
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2619677918765!2d77.1224383!3d28.621909699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d034d4c4c02d3%3A0x4b397a3052ad9053!2sIOTAFLOW%20Systems%20Pvt%20Ltd%20-%20Flow%20meter%20manufacturer%20%26%20exporter%20in%20india!5e0!3m2!1sen!2sin!4v1755784905876!5m2!1sen!2sin"
                  width="100%"
                  height="120"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Company Location"
                ></iframe>
              </div>
            </div>
          </Col>
        </Row>
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