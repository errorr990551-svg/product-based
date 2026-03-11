import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../ProductDetailCustom.css";

// for pdf icon
import { FaRegFilePdf } from "react-icons/fa6";



import img1 from "../../images/MTFM (1).png";
import img2 from "../../images/MTFM (2).png";
import img3 from "../../images/MTFM (3).png";
import img4 from "../../images/MTFM (4).png";


import related1 from "../../images/d25a.png";
import related2 from "../../images/d13a.png";
import related3 from "../../images/d12a.png";



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
  const images = [img1, img2, img3,img4];
  const ROTATE_MS = 2000;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [mainImage, setMainImage] = useState(images[0]);
  const [isPaused, setIsPaused] = useState(false);
  const [activeTab, setActiveTab] = useState("Description");
  const [downloadFiles, setDownloadFiles] = useState({
    catalogue: [
      {
        title: '116_Metal tube Flowmeter- Catalogue',
        path: '/documents/116_Metal tube Flowmeter.pdf',
        size: 'Loading...' // Initial state for size
      }
    ],
    manual: [
      {
        title: 'Metal Tube Flow Meter User- Manual',
        path: '/documents/Metal Tube Flow Meter User Manual.pdf',
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
    { img: related1, title: "Acrylic / Glass Tube Rotameter", link: "/product-detail/detail25" },
        { img: related2, title: "OFZ Micro Stream Flow Sensor", link: "/product-detail/detail13" },

    { img: related3, title: "Oval Gear Oil Flow Meter", link: "/product-detail/detail12" },
    // { img: related3, title: "Clamp-ON (Fixed) ULTRASONIC UF 1500 Series", link: "/product-detail/detail4" },
    // { img: related4, title: "Clamp-ON (Portable) ULTRASONIC PF 222/333", link: "/product-detail/detail5" },
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
            <p className="text-muted">Rotameters (Universal)</p>
            <h1 className="tw-text-3xl tw-font-semibold">Metal Tube Rotameter (Variable Area Flow Meter)</h1>
            
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
IOTAFLOW Metal Tube Rotameter – High-Pressure Variable Area Flow Meter.</li>
              <li className="mb-2 list-item-with-icon"> {/* Added a helper class for consistent styling */}
                <span> 
                  <img 
                    src={arrowIcon} 
                    alt="arrow icon" 
                    className="Icon" // Your original class name
                  /> 
                </span>
Durable metal tube rotameter for process water, steam, compressed air, and chemicals.</li>

              <li className="mb-2 list-item-with-icon"> {/* Added a helper class for consistent styling */}
                <span> 
                  <img 
                    src={arrowIcon} 
                    alt="arrow icon" 
                    className="Icon" // Your original class name
                  /> 
                </span>
Made in India for reliable industrial and utility flow measurement.</li>

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
The <b>IOTAFLOW Metal Tube Rotameter Series</b> delivers accurate, reliable measurement of liquids, gases, and steam in demanding industrial environments.<br/>
Built with a robust <b>SS316 stainless steel body</b> (optional PTFE lining) and available in multiple connection types including flanged, sanitary, and tri-clamp, these variable area flow meters are designed for <b>high pressure (up to 100 bar)</b> and <b>high temperature (up to 300°C)</b> service.<br/>
</p>
<p>
With <b>magnetic coupling indication, optional 4–20 mA transmitters, and switch outputs</b>, they ensure safe operation without leakage risk.<br/>
Ideal for utilities, chemical plants, food & beverage, oil & gas, and process industries requiring dependable flow monitoring.<br/>
</p>


          {/* Responsive Decorative Separator Line */}
          <div style={{
            height: '4px',
            width: '100%',
            maxWidth: '700px',
            background: 'linear-gradient(to right, #eaff00, #ffcc00)',
            margin: '2rem auto'
          }} />
<p>
<p><b>Applications</b><br/></p>

<b>Industrial & Process Industries</b><br/>
<b>• Chemical processing</b> — Monitoring flows of acids, bases, solvents, and reagents in chemical plants and laboratories.<br/>
<b>• Oil and gas sectors</b> — Measuring fuels, lubricants, condensate, and vented gases under high temperature and high-pressure conditions.<br/>
<b>• High-pressure offshore systems</b> — Used on oil platforms for drilling mud, hydraulic fluids, and high-temperature coolant metering.<br/>
<br/>

<b>Utilities & Water Treatment</b><br/>
<b>• Water and wastewater plants</b> — Measuring raw and treated water, chemical dosing flows, and air/gas lines during treatment.<br/>
<b>• Power generation</b> — Monitoring boiler feedwater, cooling fluid, and steam flows in thermal and renewable power stations.<br/>
<br/>

<b>Pharmaceutical, Food & Beverage</b><br/>
<b>• Pharma manufacturing</b> — Measuring flows of pure water, solvents, reagents in sterile plant environments.<br/>
<b>• Food and beverage industry</b> — Used for ingredient dosing, syrup and oil flow control, and sanitary process monitoring.<br/>
<br/>

<p><b>Specialty & Advanced Applications</b><br/></p>
<b>• Semiconductor fabrication</b> — Monitoring specialty gases and ultra-pure fluids in cleanroom and labs.<br/>
<b>• Research & development</b> — Utility in pilot plants, R&D flow validation, safely handling variable or corrosive fluids.<br/>
<b>• Transport systems</b> — Used to regulate the flow of LNG vapors during regasification, especially valuable in loading/unloading operations.<br/>
</p>


                      </div>
                    </div>
                  )}

                  {activeTab === "Features" && (
                    <div className="row">
                      {/* Left Column */}
                      <div className="col-md-6 column-separator">
                        <ul className="list-unstyled feature-list-spaced">
  <li>
    <strong>Measures liquids, gases, and steam</strong> with high accuracy (±2% FS, optional ±1.6% FS)
  </li>
  <li>
    <strong>Rugged SS316 / PTFE-lined construction</strong> for corrosive media
  </li>
  <li>
    <strong>Wide flow ranges:</strong> 0.1 Nm³/h to 450 Nm³/h air; 30 L/h to 150,000 L/h water
  </li>
  <li>
    Handles up to <strong>300°C fluid temperature</strong>
  </li>
  <li>
    Operates at <strong>max pressure 40 kg/cm²</strong> (optional 100 kg/cm²)
  </li>
  <li>
    Magnetic coupling ensures no direct contact between indicator and process fluid
  </li>
</ul>




                      </div>
                      {/* Right Column */}
                      <div className="col-md-6">
                        <ul className="list-unstyled feature-list-spaced">
  <li>
    Multiple outputs: <strong>micro-switch, inductive alarm, 4–20 mA transmitter</strong>
  </li>
  <li>
    Housing protection: <strong>IP65/IP67</strong>, optional <strong>Explosion Proof</strong>
  </li>
  <li>
    Flexible mounting lengths: standard 250 mm, explosion proof 350 mm
  </li>
  <li>
    Multiple process connections: <strong>flange, tri-clamp, sanitary, threaded</strong>
  </li>
  <li>
    Suitable for clean or slightly dirty fluids
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
      <th>Specification</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>Outer Casing Material</b></td>
      <td>High-strength aluminium alloy with corrosion-resistant protective coating</td>
    </tr>
    <tr>
      <td><b>Body Wetted Parts</b></td>
      <td>SS316 stainless steel, PTFE-lined, or industrial-grade plastic (custom materials available on request)</td>
    </tr>
    <tr>
      <td><b>Flow Indication Method</b></td>
      <td>Magnetic coupling transmission to indicator – eliminates direct process contact for enhanced safety</td>
    </tr>
    <tr>
      <td><b>Connection Types</b></td>
      <td>Flanged (ANSI/DIN standards), Tri-Clamp, Sanitary; custom connections on request</td>
    </tr>
    <tr>
      <td><b>Operating Temperature</b></td>
      <td>Standard: up to 200°C; High-temperature version: up to 300°C</td>
    </tr>
    <tr>
      <td><b>Housing Protection Rating</b></td>
      <td>IP65 / IP67 weatherproof; optional explosion-proof enclosure</td>
    </tr>
    <tr>
      <td><b>Explosion-Proof Classification</b></td>
      <td>Class I, Groups B, C &amp; D; Class II, Groups E, F &amp; G; NEMA 4, 7, 9 compliance</td>
    </tr>
    <tr>
      <td><b>Measurement Accuracy</b></td>
      <td>±2% of full scale (optional high-precision ±1.6% FS)</td>
    </tr>
    <tr>
      <td><b>Maximum Operating Pressure</b></td>
      <td>Standard: 40 kg/cm² (4 MPa); High-pressure version: up to 100 kg/cm² (10 MPa)</td>
    </tr>
    <tr>
      <td><b>Output &amp; Alarm Options</b></td>
      <td>
        - Micro-switch: 3A/250VAC, 5A/30VDC, 0.4A/125VDC<br/>
        - Adjustable inductive alarm switch<br/>
        - 4–20 mA two-wire analog transmitter output
      </td>
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