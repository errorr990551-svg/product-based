import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../ProductDetailCustom.css";

// for pdf icon
import { FaRegFilePdf } from "react-icons/fa6";



import img2 from "../../images/d3b.png";
import img4 from "../../images/d3d.png";
import img3 from "../../images/d3c.png";

import related1 from "../../images/d2a.png";
import related2 from "../../images/d4a.png";
import related3 from "../../images/d5a.png";
import related4 from "../../images/d1a.png";



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







import "bootstrap/dist/css/bootstrap.min.css";
import Breadcrumbs from "../Breadcrumbs";
import EnquiryButton from "../common/EnquiryButton";

function ProductDetail() {
  const images = [ img2, img4,img3];
  const ROTATE_MS = 2000;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [mainImage, setMainImage] = useState(images[0]);
  const [isPaused, setIsPaused] = useState(false);
  const [activeTab, setActiveTab] = useState("Description");
  const [downloadFiles, setDownloadFiles] = useState({
    catalogue: [
      {
        title: 'UF-1500 Intrusive USFM (Partial Full)- Catalogue',
        path: '/documents/UF-1500 Intrusive USFM (Partial Full).pdf',
        size: 'Loading...' // Initial state for size
      }
    ],
    manual: [
      {
        title: 'Ultrasonic flow meter UF15xx series installation- Manual',
        path: '/documents/Ultrasonic flow meter UF15xx series installation  (1).pdf',
        size: 'Loading...'
      },
      {
        title: 'Ultrasonic flow meter UF15xx series operation 1 or 2 - Manual',
        path: '/documents/Ultrasonic flow meter UF15xx series operation 1 or 2 .pdf',
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
    { img: related1, title: "Inline Ultrasonic ROBUST Series Flow Meter", link: "/product-detail/detail2" },
    { img: related2, title: "Clamp-On Fixed Ultrasonic UF 1500 Series Flow Meter", link: "/product-detail/detail4" },
    { img: related3, title: "Clamp-On Portable Ultrasonic PF 222/333 Flow Meter", link: "/product-detail/detail5" },
    { img: related4, title: "Ultrimis™ Domestic Ultrasonic Water Meter ", link: "/product" },
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
            <p className="text-muted">Ultrasonic Flow Meter</p>
            <h1 className="tw-text-3xl tw-font-semibold">Intrusive Ultrasonic UF 1500 Series Flow Meter (1 - 4 channels)</h1>
            
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
Discover the UF-1500 Insertion Ultrasonic Flow Meter by IOTAFLOW – ideal for accurate, bidirectional flow monitoring in full or partially filled large-diameter pipes. 
</li>
              <li className="mb-2 list-item-with-icon"> {/* Added a helper class for consistent styling */}
                <span> 
                  <img 
                    src={arrowIcon} 
                    alt="arrow icon" 
                    className="Icon" // Your original class name
                  /> 
                </span>
Supports DN15 to DN6000 mm.         </li>

              <li className="tw-flex tw-items-center tw-gap-2 tw-mt-2"> 
                <span>
                  <img
                    src={iot}
                    alt="iot"
                    className="Icon" // Your original class name
                  /> 
                </span> 
                 <span>
                  <img
                    src={datalogger}
                    alt="datalogger"
                    className="Icon" // Your original class name
                  /> 
                </span> 
                <span>
                  <img
                    src={Ethernet}
                    alt="Ethernet"
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
        <p><b>UF-1500 Series Insertion Ultrasonic Flow Meter – Precision Flow Measurement for Large Pipelines</b></p>        
<p>Discover the <b>UF-1500 Insertion Ultrasonic Flow Meter</b> by <b>IOTAFLOW</b> is a high-precision, <b>4-channel (4-beam) insertion-type flow meter</b> designed for <b>accurate, bidirectional flow measurement in large-diameter pipelines.</b> Using advanced <b>ultrasonic time-pulse technology</b> with <b> multi-point sensing</b>, it delivers stable and reliable readings even in challenging flow conditions.</p>
<p> Engineered for use in <b>both full and partially filled pipes</b>, the UF-1500 provides robust performance across a wide range of industrial fluids including <b>potable water, wastewater, chemicals, and food-grade liquids.</b> Its <b>non-intrusive insertion design</b> ensures minimal pressure loss, making it an ideal solution for <b>high-capacity municipal, utility, and industrial flow applications.</b></p>
<p> With compatibility for pipe diameters from <b>DN15 mm to DN6000 mm</b>, and built-in support for <b>Z, V, and U configuration schemes</b>, it’s the go-to solution for <b>large-scale, high-accuracy flow monitoring</b> in mission-critical environments.</p>

          {/* Responsive Decorative Separator Line */}
          <div style={{
            height: '4px',
            width: '100%',
            maxWidth: '700px',
            background: 'linear-gradient(to right, #eaff00, #ffcc00)',
            margin: '2rem auto'
          }} />

          <p><b>Applications</b></p>
          <p>The UF-1500 Insertion Ultrasonic Flow Meter is designed for mission-critical flow measurement across a wide spectrum of industries and fluids:</p>
<ul>
<li>Industrial Sectors:
<ul>
<li>Power Generation (boiler feedwater, condensate loops)</li>
<li>Municipal Water Supply and Wastewater Treatment</li>
<li>Chemical and Petrochemical Plants</li>
<li>Food and Beverage Production (milk, syrups, CIP)</li>
<li>Oil and Gas Pipeline Monitoring</li>
<li>HVAC and Thermal Energy Management</li>
</ul>
</li>
<li>Compatible Fluids:
<ul>
<li>Potable and process water (hot/cold)</li>
<li>Partially filled pipelines</li>
<li>Wastewater and sewage</li>
<li>Acids, alkalis, and corrosive fluids</li>
<li>Dairy, juices, syrups, and other liquid foods</li>
</ul>
</li>
</ul>


                      </div>
                    </div>
                  )}

                  {activeTab === "Features" && (
                    <div className="row">
                      {/* Left Column */}
                      <div className="col-md-6 column-separator">
                        <ul className="list-unstyled feature-list-spaced">
                      

<li><b>4-Channel Measurement</b>: Enhanced accuracy using four-beam sensing across multiple insertion points for precise volumetric flow readings.</li>
<li><b>Non-Intrusive, Low-Pressure Loss Design</b>: Insertion sensors minimize obstruction and maintain fluid integrity—ideal for process-critical pipelines.</li>
<li><b>Wide Diameter Compatibility</b>: Supports DN15 mm to DN6000 mm pipes across metallic, plastic, and composite materials.</li>
<li><b>Advanced DSP Technology</b>: Robust digital signal processing ensures <b>noise immunity, stable readings</b>, and <b>low drift performance.</b></li>
<li><b>High Accuracy & Repeatability</b>: Achieves <b>±1.5% accuracy</b> with <b>±0.1% repeatability</b>, even under turbulent or variable flow conditions.</li>
<li><b>Data Logging & Retention</b>: Internal storage logs hourly, daily, and monthly data—preserved for up to 1 year without external power.</li>
</ul>


                      </div>
                      {/* Right Column */}
                      <div className="col-md-6">
                        <ul className="list-unstyled feature-list-spaced">
<li><b>Industrial Outputs</b>: RS-232/RS-485 (Modbus), 4–20 mA analog, pulse output, and optional Ethernet—ready for SCADA, PLC, and BMS integration.</li>
<li><b>Durable Build</b>: Wetted parts made from <b>SS316 stainless steel</b>; sensor heads rated <b>IP67</b>, control unit <b>IP54</b>.</li>
<li><b>Extreme Environment Ready</b>: Operates between <b>-40°C to +65°C</b> ambient and <b>-30°C to +150°C</b> liquid temp (extendable to +350°C).</li>
<li><b>Secure Configuration</b>: Password-protected settings and data protection from unauthorized access.</li>
<li><b>Batching and Alarm Modes</b>: Supports volume-based batching, start-stop batching, and real-time diagnostics with alarm logging.</li>
</ul>
                      </div>
                    </div>
                  )}

          {activeTab === "Technical data" && (
            <table className="tech-specs-table">
  <tr>
    <td><b>Parameter</b></td>
    <td><b>Value</b></td>
  </tr>
  <tr>
    <td><b>Nominal diameter of the pipeline</b></td>
    <td>DN 15-6000</td>
  </tr>
  <tr>
    <td><b>Principle, Transit Time</b></td>
    <td></td>
  </tr>
  <tr>
    <td><b>Measuring Channels</b></td>
    <td>1 to 4 (Single Track | Dual Track | Four Track)</td>
  </tr>
  <tr>
    <td><b>Clamp-on PEA Accuracy, %, with flowrate range</b></td>
    <td>from 1:100:</td>
  </tr>
  <tr>
    <td><b>Single-beam sounding ±2 | Two-beam sounding ±1 | Four-beam sounding ±0.5</b></td>
    <td></td>
  </tr>
  <tr>
    <td><b>Flow velocity range</b></td>
    <td>0.1-20 m/s</td>
  </tr>
  <tr>
    <td><b>Fluid temperature range</b></td>
    <td>- 30- (+160) °C, Ambient</td>
  </tr>
  <tr>
    <td><b>Temperature for transmitter</b></td>
    <td>0 – (+50)°C Maximum</td>
  </tr>
  <tr>
    <td><b>Pipeline pressure</b></td>
    <td>2.5/25 MPa/bar</td>
  </tr>
  <tr>
    <td><b>Transmitter/transducers protection</b></td>
    <td>IP54/IP68</td>
  </tr>
  <tr>
    <td><b>Measurement data logging</b></td>
    <td></td>
  </tr>
  <tr>
    <td><b>number of records</b></td>
    <td>Hourly log 1440 - Daily log 60 -</td>
  </tr>
  <tr>
    <td><b>Monthly log</b></td>
    <td>Programmable 14400 -Batching 512</td>
  </tr>
  <tr>
    <td><b>Power supply</b></td>
    <td>24VDC</td>
  </tr>
  <tr>
    <td><b>Power consumption</b></td>
    <td>&lt;12W</td>
  </tr>
  <tr>
    <td><b>Transmitter weight</b></td>
    <td>&lt;3 kg,</td>
  </tr>
  <tr>
    <td><b>Transmitter dimensions</b></td>
    <td>250x132x90 mm.</td>
  </tr>
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