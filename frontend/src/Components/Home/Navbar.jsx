import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./CustomNavbar.css";
import Logo from "../../images/Iotaf logo full.png";
import icon from "../../images/greater.png";
import GaugeIcon from "../../images/clockIconn.png";

function CustomNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Ultrasonic Flow Meters");
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setProductDropdownOpen(false);
    setAboutDropdownOpen(false);
    setResourcesDropdownOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setProductDropdownOpen(false);
    setAboutDropdownOpen(false);
    setResourcesDropdownOpen(false);
  };

  const toggleProductDropdown = (e) => {
    e.preventDefault();
    setProductDropdownOpen(!productDropdownOpen);
  };

  const toggleAboutDropdown = (e) => {
    if (e) e.preventDefault();
    if (e) e.stopPropagation();
    setAboutDropdownOpen(!aboutDropdownOpen);
  };

  const toggleResourcesDropdown = (e) => {
    if (e) e.preventDefault();
    if (e) e.stopPropagation();
    setResourcesDropdownOpen(!resourcesDropdownOpen);
  };

  const productData = {
    "Ultrasonic Flow Meters": [
      { name: "Domestic Ultrasonic Water Meter", link: "/product" },
      { name: "Inline Ultrasonic Flow Meter", link: "/product-detail/detail2" },
      { name: "Intrusive Ultrasonic Flow Meter (1–4 Channels)", link: "/product-detail/detail3" },
      { name: "Clamp-On (Fixed) Ultrasonic Flow Meter", link: "/product-detail/detail4" },
      { name: "Clamp-On (Portable) Ultrasonic Flow Meter", link: "/product-detail/detail5" },
      { name: "Ultrasonic BTU & Energy Meter", link: "/product-detail/detail17" },
      { name: "Area Velocity Doppler Flow Meter", link: "/product-detail/detail6" },
      { name: "Ultra-NXT Ultrasonic Gas Flow Meter", link: "/product-detail/detail20" },
      { name: "UF-Biosonic (Biogas Flow Meter)", link: "/product-detail/detail22" },
      { name: "TRX Ultrasonic Flow Meter (Air & Nitrogen)", link: "/product-detail/detail14" },
    ],
    "Electromagnetic Flow Meters": [
      { name: "MF-PRO", link: "/product-detail/detail7" },
      { name: "MF-TER (Ex-proof for Oil & Gas)", link: "/product-detail/detail7b" },
      { name: "Compact / Micro Electromagnetic Flow Meter", link: "/product-detail/detail8" },
    ],
    "Water Meters": [
      { name: "Smart Single-Jet Water Meter", link: "/product-detail/detail9" },
      { name: "Woltmann Turbine Water Meter", link: "/product-detail/detail10" },
    ],
    "Positive Displacement Meters": [
      { name: "RPD (Ring Piston) Flow Meters", link: "/product-detail/detail11" },
      { name: "Oval Gear Flow Meters", link: "/product-detail/detail12" },
      { name: "Micro Stream Flow Sensor (OFZ Series)", link: "/product-detail/detail13" },
    ],
    "Rotameters (Variable Area Flow Meters)": [
      { name: "Metal tube Rotameters", link: "/product-detail/detail24" },
      { name: "Acrylic / Glass Tube Rotameters", link: "/product-detail/detail25" },
    ],
    "Special Application Flow Meters": [
      { name: "Conical Shape Flow Meter (Coke Oven Gas, High-Pressure/High-Temperature Gases, Wet Air, etc.)", link: "/product-detail/detail23" },
    ],
    "Thermal Mass Flow Meters": [
      { name: "Thermal Mass Flow Meter (Air & Gases: O₂, CO₂, Argon, Natural Gas, Biogas, etc.)", link: "/product-detail/detail15" },
    ],
    "Gas Flow Meters (Mechanical)": [
      { name: "EQZ/EQZK Turbine Gas Meters", link: "/product-detail/detail19" },
      { name: "GasPro RPD Gas Meter", link: "/product-detail/detail21" },
    ],
    "Vortex Flow Meters": [
      { name: <>VFM Vortex Flow Meters <br /> (Universal: Steam, Air, Gases, Liquids)</>, link: "/product-detail/detail16" },
      { name: "IVF Insertion Vortex Flow Meter", link: "/product-detail/detail18" },
    ],
    "Accessories": [
      { name: "Strainers & Filters", link: "/accessories#accessory-1" },
      { name: "Matching Flanges, Nuts, Bolts & Gaskets", link: "/accessories#accessory-2" },
      { name: "Air Release Systems", link: "/accessories#accessory-3" },
      { name: "Remote Display Units", link: "/accessories#accessory-4" },
      { name: "Telemetry Systems - 4G RTU IOT Gateways", link: "/accessories#accessory-5" },
      { name: "Custom Flow Straighteners", link: "/accessories#accessory-6" },
      { name: "Solar Power System for Flow Meters", link: "/accessories#accessory-7" },
    ],
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="top-bar">
        <span>
          <a
            href="mailto:contact@iotaflow.com"
            className="top-bar-link"
          >
            ✉ contact@iotaflow.com
          </a>
        </span>

        <span>
          <a
            href="tel:+919910693866"
            className="top-bar-link"
          >
            📞 +91-9910693866
          </a>
        </span>
      </div>

      {/* Navbar */}
      <nav className="custom-navbar">
        <div className="nav-container">
          {/* Logo */}
          <div className="nav-logo">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>

          {/* Hamburger */}
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Menu Items */}
          <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
            <NavLink to="/" className="nav-item" onClick={closeMenu}>
              Home
            </NavLink>

            {/* About Us dropdown */}
            <div className="nav-item dropdown">
              <span className="nav-link" onClick={toggleAboutDropdown}>
                About Us <span className="mobile-arrow">{aboutDropdownOpen ? "▲" : "▼"}</span>
              </span>
              {aboutDropdownOpen && (
                <div className="dropdown-menu regular mobile-open">
                  <NavLink to="/about-us" onClick={closeMenu}>
                    Company
                  </NavLink>
                  <NavLink to="/about-us/certification" onClick={closeMenu}>
                    Certification
                  </NavLink>
                </div>
              )}
            </div>

            {/* Products dropdown */}
            <div className="nav-item dropdown products-dropdown">
              <span 
                className="nav-link" 
                onClick={toggleProductDropdown}
              >
                Product <span className="mobile-arrow">{productDropdownOpen ? "▲" : "▼"}</span>
              </span>
              {productDropdownOpen && (
                <div className="dropdown-menu mega-menu mobile-open">
                  <div className="products-grid">
                    {/* Left Categories */}
                    <div className="product-categories">
                      <ul className="category-list">
                        {Object.keys(productData).map((category) => (
                          <li
                            key={category}
                            className={`category-item ${activeCategory === category ? "active" : ""}`}
                            onClick={() => setActiveCategory(category)}
                          >
                            {category}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Right Products */}
                    <div className="product-items">
                      {productData[activeCategory].map((product) => (
                        <Link
                          to={product.link}
                          key={product.name}
                          className="product-card"
                          onClick={closeMenu}
                        >
                          <div className="product-icon">
                            <img src={GaugeIcon} alt="icon" />
                          </div>
                          <div className="product-info">
                            <h5 className="product-name">{product.name}</h5>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/careers" className="nav-item" onClick={closeMenu}>
              Careers
            </NavLink>
            <NavLink to="/services" className="nav-item" onClick={closeMenu}>
              Services
            </NavLink>
            <NavLink to="/iotsense" className="nav-item" onClick={closeMenu}>
              IOT Sense
            </NavLink>

            {/* Resources dropdown */}
            <div className="nav-item dropdown">
              <span className="nav-link" onClick={toggleResourcesDropdown}>
                Lean Resources <span className="mobile-arrow">{resourcesDropdownOpen ? "▲" : "▼"}</span>
              </span>
              {resourcesDropdownOpen && (
                <div className="dropdown-menu regular mobile-open">
                  <NavLink to="/lean-manufacturing" onClick={closeMenu}>
                    Lean Journey
                  </NavLink>
                  <NavLink to="/casestudies" onClick={closeMenu}>
                    Case Studies
                  </NavLink>
                </div>
              )}
            </div>

            {/* Mobile Contact Button */}
            <Link to="/contact" className="mobile-contact-link">
              <button className="contact-btn mobile-contact" onClick={closeMenu}>
                <span>Contact Us &gt;</span>
              </button>
            </Link>
          </div>

          {/* Desktop Contact Button */}
          <Link to="/contact" className="desktop-contact-link">
            <button className="contact-btn desktop-contact">
              <span className="tw-flex tw-items-center tw-gap-2">
                Contact Us <img src={icon} alt="icon" className="icon-btn" />
              </span>
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default CustomNavbar;