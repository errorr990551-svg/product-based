import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../ProductDetailCustom.css";

// for pdf icon
import { FaRegFilePdf } from "react-icons/fa6";



import img1 from "../../images/Woltman 1 .png";
import img2 from "../../images/Woltman 2.png";
import img3 from "../../images/Woltman 3.png";
import img4 from "../../images/Woltman 4.png";

import related1 from "../../images/d9a.png";
import related2 from "../../images/d1a.png";
import related3 from "../../images/d2a.png";
import related4 from "../../images/d5a.png";



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
import deg360 from "../../images/360 Deg Rotatable.png";
import batteryip66 from "../../images/Battery + IP66 rating.png";
import ccs from "../../images/CCS Type Approval.png";
import coldhot from "../../images/Cold + Hot Water.png";
import dnvgl from "../../images/DNV-GL Type Approval.png";
import highpt from "../../images/High Pressure & Temperature Capability.png";
import iacs from "../../images/IACS E10 Compliance.png";
import inttemp from "../../images/Integrated temp measurement.png";
import ip66 from "../../images/IP66 Protection.png";
import iso from "../../images/ISO 17025 Accredited Calibration.png";
import legalcom from "../../images/Legal & Commercial Use (fiscal approval).png";
import lsg from "../../images/Liquids • Steam • Gas.png";
import marine from "../../images/Marine Class Approved.png";
import nooil from "../../images/No Oil Level Maintenance Required.png";
import oiml from "../../images/OIML R49.png";
import pipewprobe from "../../images/Pipe with probe (Insertion symbol).png";
import propler from "../../images/Propler Icon.png";
import pulse from "../../images/Pulse & Analog Output.png";
import realtime from "../../images/Real-Time Display.png";
import short from "../../images/Short pipe arrows.png";
import tempsens from "../../images/Temperature Sensor.png";
import therm from "../../images/Thermometer + gauge.png";
import water from "../../images/Water meter (N).png";
import wireless from "../../images/Wireless & Comm module.png";










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
        title: 'Apator_Woltman- Catalogue',
        path: '/documents/Apator_Woltman.pdf',
        size: 'Loading...' // Initial state for size
      }

    ],
    manual: [
      {
        title: 'WOLTMAN WATER METER- Manual',
        path: '/documents/WOLTMAN WATER METER MANUAL.pdf',
        size: 'Loading...'
      },
       {
        title: 'Apator_Woltman User- Manual',
        path: '/documents/Apator_Woltman User Manual.pdf',
        size: 'Loading...'
      },
      
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
    { img: related1, title: "Smart D+ Single-Jet Water Meter", link: "/product-detail/detail9" },
    { img: related2, title: "Ultrimis™ Domestic Ultrasonic Water Meter ", link: "/product" },
    { img: related3, title: "Inline Ultrasonic ROBUST Series Flow Meter", link: "/product-detail/detail2" },
    { img: related4, title: "Clamp-On Portable Ultrasonic PF 222/333 Flow Meter", link: "/product-detail/detail5" },
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
            <p className="text-muted">Water Meter</p>
            <h1 className="tw-text-3xl tw-font-semibold">Woltmann Turbine Hot & Cold Mechanical Water Meter</h1>
            
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
Apator Woltmann Flow Meter – For High-Capacity Water Measurement.</li>
              <li className="mb-2 list-item-with-icon"> {/* Added a helper class for consistent styling */}
                <span> 
                  <img 
                    src={arrowIcon} 
                    alt="arrow icon" 
                    className="Icon" // Your original class name
                  /> 
                </span>
Apator Woltmann Flow Meters for bulk water metering with IP68 protection, wide flow range.</li>
              <li className="mb-2 list-item-with-icon"> {/* Added a helper class for consistent styling */}
                <span> 
                  <img 
                    src={arrowIcon} 
                    alt="arrow icon" 
                    className="Icon" // Your original class name
                  /> 
                </span>
AMR compatibility & precision for industrial and municipal use.</li>

<li className="tw-flex tw-items-center tw-gap-2 tw-mt-2"> 
                <span>
                  <img
                    src={wireless}
                    alt="wireless"
                    className="Icon" // Your original class name
                  /> 
                </span> 
                 <span>
                  <img
                    src={propler}
                    alt="propler"
                    className="Icon" // Your original class name
                  /> 
                </span> 
                <span>
                  <img
                    src={coldhot}
                    alt="coldhot"
                    className="Icon" // Your original class name
                  /> 
                </span>  
                <span>
                  <img
                    src={deg360}
                    alt="deg360"
                    className="Icon" // Your original class name
                  /> 
                </span>  
                                 



              </li>
              
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
<p> The <b>Woltmann Turbine Hot & Cold Mechanical Water Meter</b> is designed for measuring bulk water flow in a variety of industrial, commercial, and waterworks applications. It operates on the Woltmann principle, where a turbine with helical blades rotates inside the pipe as water flows through. The magnetic transmission ensures the register is hermetically sealed and detached from water, enhancing durability and reducing maintenance needs. This meter supports high flow rates, up to 600 m³/h or more, and withstands fluid temperatures up to 130°C for hot water applications. The device is suitable for horizontal, vertical, or inclined installation and features pulse output options for integration with monitoring systems. Certified to international standards such as MID, ISO 4064, and WRAS, it ensures reliable performance in demanding water metering conditions. </p>


          {/* Responsive Decorative Separator Line */}
          <div style={{
            height: '4px',
            width: '100%',
            maxWidth: '700px',
            background: 'linear-gradient(to right, #eaff00, #ffcc00)',
            margin: '2rem auto'
          }} />
        <p><b>Application</b></p>
        <p>Apator Turbine flow meter is optimized for applications where accurate volumetric flow measurement and long-life durability are required in commercial, industrial, and municipal systems.</p>
 <ul> <li>Industrial water flow measurement in factories and plants</li> <li>Water distribution monitoring in municipal waterworks</li> <li>Bulk hot and cold water metering in commercial and residential complexes</li> <li>Usage in heating systems for multi-residential and commercial buildings</li> <li>Agricultural water supply flow measurement</li> <li>Integration with remote monitoring systems using pulse output</li> </ul>


                      </div>
                    </div>
                  )}

                  {activeTab === "Features" && (
                    <div className="row">
                      {/* Left Column */}
                      <div className="col-md-6 column-separator">
                        <ul className="list-unstyled feature-list-spaced">
<li><strong>Horizontal Woltmann-type turbine flow meter</strong></li>
  <li><strong>Magnetic transmission</strong> with super dry IP68-rated register</li>
  <li>Size range: <strong>DN50 to DN500</strong> (flanged connection)</li>
  <li><strong>Removable measuring mechanism</strong> for quick maintenance</li>
  <li>Body material: <strong>epoxy-coated cast iron</strong> for anti-corrosion protection</li>
  <li>Operating temperature: Available in <strong>cold water (50°C)</strong> and hot water versions (<strong>90°C &amp; 130°C</strong>)</li>
  <li><strong>Pulse output</strong> (standard) and optional:</li>
  </ul>




                      </div>
                      {/* Right Column */}
                      <div className="col-md-6">
                        <ul className="list-unstyled feature-list-spaced">
                          
    <li>Relay output</li>
    <li>Analog output (4–20 mA)</li>
    <li>RS485 communication</li>

  <li><strong>Battery-operated digital version</strong> (1.5–2 year battery life)</li>
  <li>Flow totalizer with <strong>resettable and non-resettable</strong> functions</li>
  <li><strong>Low pressure loss</strong>, suitable for high-flow systems</li>
  <li>360° <strong>rotating register</strong> for easy reading in any position</li>
  <li>Compatible with <strong>AMR/AMI systems</strong></li>
  <li>Conforms to <strong>EN 14154 and MID Directive 2004/22/EC</strong></li>
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
      <td><b>Product</b></td>
      <td>Turbine Mechanical Water Meter with Magnetic Transmission</td>
    </tr>
    <tr>
      <td><b>Pipe Range</b></td>
      <td>DN50 - DN500, Removable mechanism, 360° Rotatable</td>
    </tr>
    <tr>
      <td><b>Accuracy</b></td>
      <td>Class B as per ISO 4064</td>
    </tr>
    <tr>
      <td><b>Suitable for</b></td>
      <td>Cold Water (50°C) / Hot Water (90°C & 130°C versions)</td>
    </tr>
    <tr>
      <td><b>Body Material</b></td>
      <td>Cast Iron or Stainless Steel with epoxy outer coating</td>
    </tr>
    <tr>
      <td><b>Display Parameters</b></td>
      <td>Flow rate / Total / Reset-able total</td>
    </tr>
    <tr>
      <td><b>Relay Output</b></td>
      <td>On flow rate</td>
    </tr>
    <tr>
      <td><b>Outputs</b></td>
      <td>Pulse output for AMR communication, Analog (4~20 mA) output</td>
    </tr>
    <tr>
      <td><b>Digital Option Input</b></td>
      <td>24 VDC</td>
    </tr>
    <tr>
      <td><b>Battery</b></td>
      <td>In-built battery (life 1.5 ~ 2 years) (Optional)</td>
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