import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";


import img2 from "../images/2000x2000.jpg";


import related1 from "../images/p2a.png";
import related2 from "../images/p3a.jpg";
import related3 from "../images/p4a.jpg";
import related4 from "../images/p5a.png";

import "bootstrap/dist/css/bootstrap.min.css";
import Breadcrumbs from "./Breadcrumbs";
import EnquiryButton from "./common/EnquiryButton";

function ProductDetail() {
  const images = [ img2];
  const ROTATE_MS = 2000;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [mainImage, setMainImage] = useState(images[0]);
  const [isPaused, setIsPaused] = useState(false);
  const [activeTab, setActiveTab] = useState("Description");

  const tabContentRef = useRef(null);
  const imgWrapperRef = useRef(null);

  useEffect(() => {
    if (tabContentRef.current) {
      tabContentRef.current.classList.remove("fade-in");
      void tabContentRef.current.offsetWidth;
      tabContentRef.current.classList.add("fade-in");
    }
  }, [activeTab]);

  useEffect(() => {
    if (imgWrapperRef.current) {
      imgWrapperRef.current.classList.remove("img-fade-in");
      void imgWrapperRef.current.offsetWidth;
      imgWrapperRef.current.classList.add("img-fade-in");
    }
  }, [mainImage]);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % images.length;
        setMainImage(images[next]);
        return next;
      });
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [isPaused, images, ROTATE_MS]);

  const handleThumbClick = (img, idx) => {
    setMainImage(img);
    setCurrentIndex(idx);
  };

  const relatedProducts = [
    { img: related1, title: "INLINE ULTRASONIC ROBUST Series", link: "/product-detail/detail2" },
    { img: related2, title: "INTRUSIVE ULTRASONIC UF 1500 Series (1 - 4 channels)", link: "/product-detail/detail3" },
    { img: related3, title: "Clamp-ON (Fixed) ULTRASONIC UF 1500 Series", link: "/product-detail/detail4" },
    { img: related4, title: "Clamp-ON (Portable) ULTRASONIC PF 222/333", link: "/product-detail/detail5" },
  ];

  return (
    <div className="text-dark">
      <Breadcrumbs/>
      <div className="container py-5">
        <div className="row">
          {/* LEFT: images */}
          <div className="col-lg-6 d-flex flex-column align-items-center">
            <div
              className="border mb-3 p-2 rounded shadow-sm position-relative overflow-hidden main-image-wrapper"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div ref={imgWrapperRef} className="img-canvas img-fade-in">
                <img src={mainImage} alt="Main Meter" className="main-image" />
              </div>
            </div>

            <div className="d-flex gap-2 gap-md-3 flex-wrap justify-content-center mt-3">
              {images.map((img, i) => (
                <div key={i} className="d-flex flex-column align-items-center mb-2">
                  <img
                    src={img}
                    alt={`thumb-${i}`}
                    onClick={() => handleThumbClick(img, i)}
                    className="img-thumbnail"
                    style={{
                      width: "50px",
                      height: "50px",
                      maxWidth: "60px",
                      maxHeight: "60px",
                      cursor: "pointer",
                      objectFit: "cover",
                      border: mainImage === img ? "2px solid #000" : "1px solid #ddd",
                      borderRadius: "0px",
                    }}
                  />
                  <div
                    style={{
                      height: "3px",
                      width: "60%",
                      backgroundColor: mainImage === img ? "#ffcc00" : "transparent",
                      marginTop: "3px",
                      borderRadius: "2px",
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: copy */}
          <div className="col-lg-6 mt-5 mt-lg-0">
            <p className="text-muted">Water Meters</p>
            <h3 className="fw-semibold">Ultrimis™ Domestic Ultrasonic Flow Meters</h3>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">&#9679;Ultrimis ultrasonic water meter (DN15–DN50) for domestic use. </li>
              <li className="mb-2">&#9679;IP68, battery-powered, R800 accuracy, NFC/LoRaWAN/WM-Bus, CE & WRAS certified.</li>
              
            </ul>
            <EnquiryButton/>
          </div>
        </div>
      </div>

      {/* Sticky tabs */}
      <div className="container sticky-top bg-white shadow-sm" style={{ top: "0px", zIndex: 1020 }}>
        <ul className="nav nav-tabs border-0 justify-content-center flex-wrap">
          {["Description", "Features", "Technical data", "Downloads"].map((tab) => (
            <li className="nav-item" key={tab}>
              <button
                className={`nav-link ${activeTab === tab ? "active-tab" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Tab content */}
      <div className="container">
        <div ref={tabContentRef} className="p-4 border shadow-sm bg-white fade-in">
          {activeTab === "Description" && (
            <div className="row">
              <div className="col-md-6">
                <ul>
  <li><strong>Product Name:</strong> Ultrimis™ Domestic Ultrasonic Water Meter – Apator Powogaz</li>
  <li><strong>Description:</strong> Compact, high-precision ultrasonic water meter designed for domestic and commercial applications.</li>
  <li><strong>Technology:</strong> Patented W-Sonic Technology ensures reliable, maintenance-free operation with no moving parts.</li>
  <li><strong>Accuracy:</strong> Maintains long-term metering accuracy even at very low flow rates.</li>
  <li><strong>Durability:</strong> Built for Indian conditions with IP68 protection and extended battery life of up to 16 years.</li>
  <li><strong>Communication Protocols:</strong> Compatible with NFC, Wireless M-Bus, and LoRaWAN.</li>
  <li><strong>Installation Flexibility:</strong> Supports all mounting positions without requiring straight pipe sections.</li>
  <li><strong>Availability:</strong> Distributed in India by IOTAFLOW Systems Pvt. Ltd., authorized channel partner of Apator Powogaz.</li>

  {/* Responsive Decorative Separator Line */}
          <div style={{
            height: '4px',
            width: '100%',
            maxWidth: '700px',
            background: 'linear-gradient(to right, #eaff00, #ffcc00)',
            margin: '2rem auto'
          }} />

  <li><strong>Applications:</strong>
    <ul>
      <li>Domestic water metering in apartments, group housing, and residential complexes</li>
      <li>Commercial building water billing in offices, malls, hotels, and hospitals</li>
      <li>Smart city water management systems with AMR/AMI integration</li>
      <li>Replacement of mechanical meters (Woltman, multijet) in old buildings</li>
      <li>Cold and hot water flow monitoring in utility pipelines</li>
      <li>Water consumption and leakage monitoring in public and private infrastructure</li>
      <li>Metering solutions for municipal water supply and urban development projects</li>
    </ul>
  </li>
</ul>
              </div>
            </div>
          )}

          {activeTab === "Features" && (
           <ul>
  <li>Ultrasonic W-Sonic™ technology for stable, high-accuracy metering up to R800</li>
  <li>No moving parts – maintenance-free and wear-resistant</li>
  <li>Flexible installation – horizontal, vertical, or angled positions without straight pipe runs</li>
  <li>Fully sealed IP68 housing – submersible, dustproof, and ideal for underground chambers</li>
  <li>Battery-powered with a service life of up to 16 years</li>
  <li>High metering accuracy:
    <ul>
      <li>±2% for cold water</li>
      <li>±3% for hot water</li>
      <li>±5% for very low flow</li>
    </ul>
  </li>
  <li>Reverse flow detection and bi-directional measurement supported</li>
  <li>Tamper-proof design with logging for:
    <ul>
      <li>Backflow</li>
      <li>Zero flow</li>
      <li>Battery status</li>
      <li>Unauthorized access</li>
    </ul>
  </li>
  <li>Communication-ready:
    <ul>
      <li>NFC (mobile diagnostics)</li>
      <li>Wireless M-Bus (OMS)</li>
      <li>LoRaWAN</li>
    </ul>
  </li>
  <li>Compact and lightweight body suitable for small residential installations</li>
  <li>Environmentally friendly – low lithium content and energy-efficient</li>
</ul>
          )}

          {activeTab === "Technical data" && (
            <table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Pipe Sizes</td>
      <td>DN15 to DN50</td>
    </tr>
    <tr>
      <td>Measurement Range</td>
      <td>Q1: 0.75 l/h to Q4: up to 31.25 m³/h (model dependent)</td>
    </tr>
    <tr>
      <td>R Ratio</td>
      <td>Up to R800</td>
    </tr>
    <tr>
      <td>Temperature Classes</td>
      <td>T30, T50, T70 (max 70°C)</td>
    </tr>
    <tr>
      <td>Pressure Rating</td>
      <td>MAP16 (16 bar max)</td>
    </tr>
    <tr>
      <td>Accuracy Class</td>
      <td>±2% (cold), ±3% (hot), ±5% (low flow)</td>
    </tr>
    <tr>
      <td>Reverse Flow Measurement</td>
      <td>Supported</td>
    </tr>
    <tr>
      <td>Communications</td>
      <td>NFC, Wireless M-Bus (OMS), LoRaWAN</td>
    </tr>
    <tr>
      <td>Power Source</td>
      <td>Integrated lithium battery (up to 16 years)</td>
    </tr>
    <tr>
      <td>Protection Rating</td>
      <td>IP68 (submersible and dust-tight)</td>
    </tr>
    <tr>
      <td>Certifications</td>
      <td>CE, WRAS, DVGW, KIWA, WELMEC, OIML R49, EN-ISO 4064</td>
    </tr>
    <tr>
      <td>Regulatory Compliance</td>
      <td>MID (Directive 2014/32/EU), RED (Directive 2014/53/EU)</td>
    </tr>
  </tbody>
</table>
          )}

          {activeTab === "Downloads" && (
            <p>Visit our documentation page to download the full technical specifications and data sheets.</p>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div style={{ backgroundColor: "#f6f8fc" }} className="py-5">
        <div className="container">
          <h5 className="fw-semibold text-center mb-4">YOU MAY ALSO BE INTERESTED IN</h5>
          <div className="row justify-content-center">
            {relatedProducts.map((product, idx) => (
              <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4 text-center" key={idx}>
                <Link to={product.link} className="text-decoration-none text-dark">
                  <div
                    className="p-3 shadow-sm d-flex align-items-center justify-content-center mx-auto hover-scale"
                    style={{
                      backgroundColor: "#fff",
                      width: "100%",
                      maxWidth: "180px",
                      aspectRatio: "1/1",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                    }}
                  >
                    <img
                      src={product.img}
                      alt={product.title}
                      style={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <p className="fw-semibold mt-2" style={{ fontSize: "14px" }}>{product.title}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.2s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .main-image-wrapper {
          width: 100%;
          max-width: 400px;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
        }

        .main-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .img-canvas { width: 100%; height: 100%; }
        .img-fade-in { opacity: 0; transition: opacity 0.4s ease; }
        .img-fade-in { opacity: 1; }

        .nav-tabs .nav-link {
          color: black;
          border: none;
          border-bottom: 3px solid transparent;
          transition: all 0.3s ease;
          background-color: white;
          white-space: nowrap;      /* Add this line */
          padding: 1rem 1.2rem;     /* Add this line */
        }

        .nav-tabs .nav-link:hover { background-color: #ffcc00; color: black; }
        .nav-tabs .nav-link.active-tab { border-bottom: 3px solid #ffcc00; color: black; background-color: white; }

        .hover-scale { transition: transform 0.3s ease; }
        .hover-scale:hover { transform: scale(1.05); }

        .btn-enquiry {
          position: relative;
          overflow: hidden;
          background-color:  #ffcc00;
          
          padding: 8px 20px;
           color:black;
          cursor: pointer;
        }

        .btn-enquiry::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: black;
         
          transform: translateX(-100%);
          z-index: 1;
        }

        .btn-enquiry:hover::before { animation: slideInLeft 0.4s ease forwards; }
        .btn-enquiry:not(:hover)::before { animation: slideOutRight 0.4s ease forwards; }

        @keyframes slideInLeft { from { transform: translateX(-100%); } to { transform: translateX(0); } }
        @keyframes slideOutRight { from { transform: translateX(0); } to { transform: translateX(100%); } }

        .btn-enquiry span { position: relative; z-index: 2; transition: color 0.4s ease; }
        .btn-enquiry:hover span { color: white; }

        @media (max-width: 991px) {
          .main-image-wrapper { height: auto; max-width: 100%; }
          .nav-tabs .nav-link { font-size: 14px; padding: 0.5rem 0.75rem; }
        }
        @media (max-width: 767px) {
          .nav-tabs { flex-wrap: wrap; justify-content: flex-start;}
        }
      `}</style>
    </div>
  );
}

export default ProductDetail;
