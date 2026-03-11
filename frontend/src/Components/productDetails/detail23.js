import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../ProductDetailCustom.css";

// for pdf icon
import { FaRegFilePdf } from "react-icons/fa6";



import img1 from "../../images/Conical (1).png";
import img2 from "../../images/Conical (2).png";
import img3 from "../../images/Conical (3).png";


import related1 from "../../images/d20a.png";
import related2 from "../../images/d22a.png";
import related3 from "../../images/d19a.png";
import related4 from "../../images/d18a.png";



//icons to be added
import arrowIcon from "../../images/Arrow icon png.png";
import NFCsymbol from "../../images/NFC.png";
import Exproofimg from "../../images/Ex proof.png";
import IBRimg from "../../images/IBR.png";
import LoraWANimg from "../../images/Lora wan.png";
import mbusimg from "../../images/m bus.png";
import AMR from "../../images/AMR Ready.png";
import battery from "../../images/Battery operated symbol.png";
import datalogger from "../../images/built-in data logger..png";
import ce from "../../images/CE.png";
import CGWA from "../../images/CGWA Compliant symbol.png";
import EAC from "../../images/EAC TR TS Compliance.png";
import Ethernet from "../../images/Ethernet.png";
import GOST from "../../images/GOST-R Certified symbol.png";
import HART from "../../images/HART Enabled symbol.png";
import MID from "../../images/MID Certified.png";
import Wsonic from "../../images/W Sonic technology.png";
import iot from "../../images/IOT Ready.png";
import rohs from "../../images/Rohs compliant.png";








import "bootstrap/dist/css/bootstrap.min.css";
import Breadcrumbs from "../Breadcrumbs";
import EnquiryButton from "../common/EnquiryButton";

function ProductDetail() {
  const images = [img1, img2,img3];
  const ROTATE_MS = 2000;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [mainImage, setMainImage] = useState(images[0]);
  const [isPaused, setIsPaused] = useState(false);
  const [activeTab, setActiveTab] = useState("Description");
  const [downloadFiles, setDownloadFiles] = useState({
    catalogue: [
      {
        title: '121_Conical Shaped Flow Meter- Catalogue',
        path: '/documents/121_Conical Shaped Flow Meter.pdf',
        size: 'Loading...' // Initial state for size
      }
    ],
    manual: [
      {
        title: 'Conical shaped Flow meter User- Manual',
        path: '/documents/Conical shaped Flow meter User Manual.pdf',
        size: 'Loading...'
      }
      
    ]
  });

  // Helper function to format bytes into KB/MB/GB
  const formatBytes = (bytes, decimals = 2) => {
    if (!+bytes) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  };

  useEffect(() => {
    const fetchAllFileSizes = async () => {
      // Create a new state object to avoid direct mutation
      const newDownloadFiles = JSON.parse(JSON.stringify(downloadFiles));
      
      // A function to fetch and update the size for a single file
      const fetchSize = async (file) => {
        try {
          const response = await fetch(file.path);
          if (response.ok) {
            const size = response.headers.get('content-length');
            file.size = size ? formatBytes(size) : 'N/A';
          } else {
            file.size = 'N/A';
          }
        } catch (error) {
          console.error(`Failed to fetch size for ${file.path}:`, error);
          file.size = 'N/A';
        }
      };

      // Create an array of all fetch promises
      const promises = [
        ...newDownloadFiles.catalogue.map(fetchSize),
        ...newDownloadFiles.manual.map(fetchSize)
      ];

      // Wait for all fetches to complete
      await Promise.all(promises);

      // Update the state once with all the new sizes
      setDownloadFiles(newDownloadFiles);
    };

    fetchAllFileSizes();
  }, []); // Empty dependency array to run only once


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
    { img: related1, title: "Ultra-NXT Ultrasonic Gas Flow Meter", link: "/product-detail/detail20" },
    { img: related2, title: "UF-Biosonic Ultrasonic Biogas Flow Meter", link: "/product-detail/detail22" },
    { img: related3, title: "EQZ/EQZK Turbine Gas Flow Meter", link: "/product-detail/detail19" },
    { img: related4, title: "IVF Insertion Vortex Flow Meter", link: "/product-detail/detail18" },
  ];

  return (
    <div className="text-dark">
      {/* <Breadcrumbs/> */}
      <div className="container py-5">
        <div className="row">
          {/* LEFT: images */}
          <div className="col-lg-6 d-flex flex-column align-items-center m">
            <div
              className="border mb-2 p-2 rounded shadow-sm position-relative overflow-hidden main-image-wrapper"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div ref={imgWrapperRef} className="img-canvas img-fade-in">
                <img src={mainImage} alt="Main Meter" className="main-image mt-2" />
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
         <div className="col-lg-6 product-detail-right">
            <p className="text-muted">Special Application Flow Meters</p>
            <h1 className="tw-text-3xl tw-font-semibold">Conical Shaped Flow Meter</h1>
            
            {/* Reverted to original Bootstrap-style list with your Icon class */}
            <ul className="list-unstyled mt-3">
              <li className="mb-2 list-item-with-icon"> {/* Added a helper class for consistent styling */}
                <span> 
                  <img 
                    src={arrowIcon} 
                    alt="arrow icon" 
                    className="Icon" // Your original class name
                  /> 
                </span>
Innovative cone-style flow meter for tough gas, steam & biogas conditions.</li>
              <li className="mb-2 list-item-with-icon"> {/* Added a helper class for consistent styling */}
                <span> 
                  <img 
                    src={arrowIcon} 
                    alt="arrow icon" 
                    className="Icon" // Your original class name
                  /> 
                </span>
High accuracy, low pressure loss & excellent performance in dusty or corrosive media.</li>
              <li className="mb-2 list-item-with-icon"> {/* Added a helper class for consistent styling */}
                <span> 
                  <img 
                    src={arrowIcon} 
                    alt="arrow icon" 
                    className="Icon" // Your original class name
                  /> 
                </span>
Ideal for compact installations across energy, steel, mining & process industries.</li>


            </ul>
            
            <EnquiryButton/>
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
      </div>

    
      

      {/* Tab content */}
      <div className="container">
        <div ref={tabContentRef} className="p-4 border shadow-sm bg-white fade-in">
          {activeTab === "Description" && (
            <div className="row">
              <div className="col-md-6">
<p>
IOTAFLOW CSF – Conical Shaped Flow Meter<br/>
<br/>
<b>Accurate Flow Measurement for Complex Gas and Steam Applications</b><br/>
The <b>IOTAFLOW Conical Shaped Flow Meter (CSF)</b> is a high-performance <b>differential pressure flow meter</b> engineered for challenging industrial conditions where precision, reliability, and compact installation are critical.<br/>
Its unique <b>centrally suspended cone design</b> reshapes the velocity profile of the flow, resulting in <b>exceptional accuracy, stable signal output, and minimal pressure drop</b>—ideal for industries handling difficult fluids such as <b>Biogas, CBM, Steam, and Dust-Laden Air</b>.<br/>
<br/>
Whether you're measuring corrosive gases, hot steam, or low-pressure flows, the CSF meter ensures <b>consistent, repeatable performance</b> with <b>low maintenance and long service life</b>.<br/>
</p>



          {/* Responsive Decorative Separator Line */}
          <div style={{
            height: '4px',
            width: '100%',
            maxWidth: '700px',
            background: 'linear-gradient(to right, #eaff00, #ffcc00)',
            margin: '2rem auto'
          }} />
        <p>Application-Specific Use Cases</p>
        <p>Ideal for <b>industrial flow measurement</b> in both standard and aggressive service environments:</p>
<table style={{ borderCollapse: "collapse", width: "100%" }}>
  <thead>
    <tr>
      <th style={{ border: "1px solid #333", padding: "8px", textAlign: "left" }}>Application Area</th>
      <th style={{ border: "1px solid #333", padding: "8px", textAlign: "left" }}>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: "1px solid #333", padding: "8px" }}><b>Biogas</b></td>
      <td style={{ border: "1px solid #333", padding: "8px" }}>Measures variable, low-pressure flows with high moisture content and particulates. Excellent for digesters and renewable gas systems.</td>
    </tr>
    <tr>
      <td style={{ border: "1px solid #333", padding: "8px" }}><b>Coke Oven Gas</b></td>
      <td style={{ border: "1px solid #333", padding: "8px" }}>Resistant to corrosive and dusty by-products in steel plants; stable in fluctuating operating conditions.</td>
    </tr>
    <tr>
      <td style={{ border: "1px solid #333", padding: "8px" }}><b>Coal Bed Methane (CBM)</b></td>
      <td style={{ border: "1px solid #333", padding: "8px" }}>Suitable for low-pressure gas extraction and monitoring in upstream energy sectors.</td>
    </tr>
    <tr>
      <td style={{ border: "1px solid #333", padding: "8px" }}><b>Gas Mixtures</b></td>
      <td style={{ border: "1px solid #333", padding: "8px" }}>High accuracy for blended or multi-component gas streams; maintains performance with wide turndown.</td>
    </tr>
    <tr>
      <td style={{ border: "1px solid #333", padding: "8px" }}><b>Dust-Laden Air</b></td>
      <td style={{ border: "1px solid #333", padding: "8px" }}>Maintains measurement accuracy even in air with particulates; ideal for ventilation, exhaust, and mining systems.</td>
    </tr>
    <tr>
      <td style={{ border: "1px solid #333", padding: "8px" }}><b>Steam (Saturated/Superheated)</b></td>
      <td style={{ border: "1px solid #333", padding: "8px" }}>Reduces noise and head loss in both high- and low-pressure steam lines; ideal for power plants and boiler monitoring.</td>
    </tr>
  </tbody>
</table>



                      </div>
                    </div>
                  )}

                  {activeTab === "Features" && (
                    <div className="row">
                      {/* Left Column */}
                      <div className="col-md-6 column-separator">
                        <ul className="list-unstyled feature-list-spaced">
  <li>
    <strong>High Accuracy (±1.0%) &amp; Repeatability (±0.5%)</strong><br/>
    Engineered to deliver consistent performance in harsh and variable flow environments.
  </li>
  <li>
    <strong>Wide Turndown Ratio</strong><br/>
    Handles flow variation with ease—up to <strong>10:1 rangeability</strong>, compared to 3:1 in conventional orifice meters.
  </li>
  <li>
    <strong>Minimal Signal Noise</strong><br/>
    Generates a high-frequency, <strong>low-noise signal</strong>, perfect for applications involving gases and steam where signal stability is critical.
  </li>
  <li>
    <strong>Self-Conditioning Flow Design</strong><br/>
    The cone acts as an integrated flow conditioner, eliminating the need for long straight piping (only <strong>0–3D upstream</strong> and <strong>0–1D downstream</strong> required).
  </li>
</ul>




                      </div>
                      {/* Right Column */}
                      <div className="col-md-6">
                        <ul className="list-unstyled feature-list-spaced">
  <li>
    <strong>Low Head Loss</strong><br/>
    Optimized design reduces pressure drop, improving overall system efficiency and reducing energy costs.
  </li>
  <li>
    <strong>Built for Harsh Media</strong><br/>
    Available in corrosion- and heat-resistant materials including <strong>SS316, SS304, Duplex, Hastelloy, and Carbon Steel</strong>—tailored to suit aggressive gases and steam.
  </li>
  <li>
    <strong>Custom Sizing from 0.5” to 120”+</strong><br/>
    Flexible for small pipelines or massive plant installations. Available in <strong>flanged, threaded, or welded-end connections</strong>.
  </li>
  <li>
    <strong>Smart Instrumentation Integration</strong><br/>
    Compatible with digital indicators, totalizers, 3-way manifolds, and differential pressure transmitters.
  </li>
</ul>

                      </div>
                    </div>
                  )}

          {activeTab === "Technical data" && (
            <table className="tech-specs-table">
<thead>
    <tr>
      <th><b>Parameter</b></th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>Pipe Range</b></td>
      <td>DN10 to DN3000 or larger</td>
    </tr>
    <tr>
      <td><b>Accuracy</b></td>
      <td>±1% for Total System</td>
    </tr>
    <tr>
      <td><b>Turn Down</b></td>
      <td>10:1 with compact Installation</td>
    </tr>
    <tr>
      <td><b>Body Material</b></td>
      <td>Duplex 2205, 304, or 316 stainless steel, Hastelloy C-276, 254 SMO, carbon steels; Special Materials on request</td>
    </tr>
    <tr>
      <td><b>End Fittings</b></td>
      <td>Flanged, threaded, hub or weld-end standard; others on request</td>
    </tr>
    <tr>
      <td><b>RTD Sensor Type</b></td>
      <td>PT-100, thin film</td>
    </tr>
    <tr>
      <td><b>RTD Range</b></td>
      <td>-58° to 752° F (-50° to 400° C)</td>
    </tr>
    <tr>
      <td><b>Manifold Configuration</b></td>
      <td>3-Valve</td>
    </tr>
    <tr>
      <td><b>dP Transmitter Housing</b></td>
      <td>F30 Aluminum</td>
    </tr>
    <tr>
      <td><b>dP Transmitter Membrane</b></td>
      <td>316L</td>
    </tr>
    <tr>
      <td><b>dP Transmitter Enclosure</b></td>
      <td>NEMA 4X/6P, IP66/67</td>
    </tr>
    <tr>
      <td><b>Electrical Connections</b></td>
      <td>NPT1/2 thread</td>
    </tr>
    <tr>
      <td><b>Flow Computer Output</b></td>
      <td>4-20 mA, Isolated Pulse</td>
    </tr>
    <tr>
      <td><b>Pressure Range</b></td>
      <td>Up to 1500 psi (100 bar)</td>
    </tr>
    <tr>
      <td><b>Temperature Range</b></td>
      <td>Up to 1,600 °F (870°C)</td>
    </tr>
    <tr>
      <td><b>Applications</b></td>
      <td>Biogas, Coke Oven Gas, Coal Bed Methane (CBM), Gas Mixtures, Air (with Dust), Steam</td>
    </tr>
  </tbody>
</table>

          )}      

          {activeTab === "Downloads" && (
            <div className="row">
              {/* Catalogue Column */}
              <div className="col-md-6">
                <h4 className="download-heading">Catalogue</h4>
                {downloadFiles.catalogue.map((file, index) => (
                  <a key={`catalogue-${index}`} href={file.path} download className="download-item">
                    <FaRegFilePdf className="pdf-icon-fa" />
                    <div className="download-info">
                      <span className="download-title">{file.title}</span>
                      <span className="download-size">(PDF) {file.size}</span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Manual Column */}
              <div className="col-md-6">
                <h4 className="download-heading">Manual</h4>
                {downloadFiles.manual.map((file, index) => (
                  <a key={`manual-${index}`} href={file.path} download className="download-item">
                    <FaRegFilePdf className="pdf-icon-fa" />
                    <div className="download-info">
                      <span className="download-title">{file.title}</span>
                      <span className="download-size">(PDF) {file.size}</span>
                    </div>
                  </a>
                ))}
    </div>
  </div>
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
      <style >{`
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
          .sticky-top .nav-tabs .nav-item {
          flex-grow: 0;
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
        
        /* CSS for the image (Icon class) */
        .list-item-with-icon { /* Helper class to manage flex display for the list item */
          display: flex;
          align-items: center; /* Vertically aligns icon and text */
        }

        /* Specific styles for your .Icon class */
        .Icon {
          width: 2rem !important;
          height: 2rem !important;
          margin-right: 0.75rem; /* Adds space between the icon and the text */
          /*
            IMPORTANT: The 'color' property below will only work if arrowIcon
            is an SVG that uses 'fill="currentColor"' or 'stroke="currentColor"'.
            For PNG/JPG, you need to use CSS 'filter' or edit the image directly.
          */
          color: #ffcc00; 
        }

        .feature-list-spaced li {
          margin-bottom: 1rem; /* Adjust this value to increase or decrease spacing */
        }

        .column-separator {
          border-right: 2.5px solid #ffcc00; /* Yellow theme color */
          padding-right: 1rem; /* Adds some space between the text and the line */
        }

        .tech-specs-table {
          width: 100%;
          border-collapse: collapse; /* Removes double borders */
          margin-top: 1rem;
        }

        .tech-specs-table td {
          padding: 1rem 0.75rem; /* Adds vertical and horizontal spacing inside cells */
          border-bottom: 1px solid #eee; /* Light gray line between rows */
        }

        /* Style for the left column (the bolded titles) */
        .tech-specs-table td:first-child {
          border-right: 2px solid #ffcc00; /* Yellow vertical line */
          padding-right: 1rem; /* Extra space next to the yellow line */
          width: 35%; /* Gives the first column a consistent width */
        }

        .download-heading {
          font-size: 1.5rem;
          font-weight: 600;
          border-bottom: 1px solid #eee;
          padding-bottom: 0.5rem;
          margin-bottom: 1rem;
        }

        .download-item {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: inherit;
          margin-bottom: 1rem;
          padding: 0.5rem;
          border-radius: 4px;
          transition: background-color 0.2s ease-in-out;
        }

        .download-item:hover {
          background-color: #f8f9fa; /* A light background color on hover */
        }

        .pdf-icon {
          background-color: #ffcc00; /* Yellow theme color */
          color: #fff;
          font-weight: bold;
          font-size: 0.8rem;
          padding: 0.8rem 0.6rem;
          border-radius: 4px;
          margin-right: 1rem;
          text-align: center;
        }

        .download-info {
          display: flex;
          flex-direction: column;
        }

        .download-title {
          font-weight: 600;
        }

        .download-size {
          font-size: 0.9rem;
          color: #6c757d; /* Muted text color */
        }

        .pdf-icon-fa {
          color: #ffcc00; /* Yellow theme color */
          font-size: 2.5rem; /* Adjust size as needed */
          margin-right: 1rem;
        }

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