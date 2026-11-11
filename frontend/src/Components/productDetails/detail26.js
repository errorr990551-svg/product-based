import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SEO from "../common/SEO";
import "../ProductDetailCustom.css";

// for pdf icon
import { FaRegFilePdf } from "react-icons/fa6";

// Product images
import img1 from "../../images/d26a.webp";
import img2 from "../../images/d26b.webp";
import img3 from "../../images/d26c.webp";

// Related product images
import related1 from "../../images/d2a.webp";
import related2 from "../../images/d7aa.webp";
import related3 from "../../images/d10a.webp";
import related4 from "../../images/d16a.webp";

// Badges and icons
import arrowIcon from "../../images/Arrow icon png.webp";
import fireIcon from "../../images/icon-fire-protection.svg";
import noPowerIcon from "../../images/icon-no-power.svg";
import directDialIcon from "../../images/icon-direct-dial.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import EnquiryButton from "../common/EnquiryButton";

function ProductDetail() {
  const images = [img1, img2, img3];
  const ROTATE_MS = 2500;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [mainImage, setMainImage] = useState(images[0]);
  const [isPaused, setIsPaused] = useState(false);
  const [activeTab, setActiveTab] = useState("Description");
  const [downloadFiles, setDownloadFiles] = useState({
    catalogue: [
      {
        title: "Catalogue (Cat. No. 150.02.0926)",
        path: "#", // Link to be added
        size: "Available on Request",
      },
    ],
    manual: [],
  });

  // Helper function to format bytes into KB/MB/GB
  const formatBytes = (bytes, decimals = 2) => {
    if (!+bytes) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  };

  useEffect(() => {
    const fetchAllFileSizes = async () => {
      const newDownloadFiles = JSON.parse(JSON.stringify(downloadFiles));

      const fetchSize = async (file) => {
        if (!file.path || file.path === "#") return;
        try {
          const response = await fetch(file.path);
          if (response.ok) {
            const size = response.headers.get("content-length");
            file.size = size ? formatBytes(size) : "N/A";
          } else {
            file.size = "N/A";
          }
        } catch (error) {
          console.error(`Failed to fetch size for ${file.path}:`, error);
          file.size = "N/A";
        }
      };

      const promises = [
        ...newDownloadFiles.catalogue.map(fetchSize),
        ...newDownloadFiles.manual.map(fetchSize),
      ];

      await Promise.all(promises);
      setDownloadFiles(newDownloadFiles);
    };

    fetchAllFileSizes();
  }, []);

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
    { img: related1, title: "Inline Ultrasonic Flow Meter", link: "/product-detail/detail2" },
    { img: related2, title: "MF-PRO Electromagnetic Flow Meter", link: "/product-detail/detail7" },
    { img: related3, title: "Woltmann Turbine Water Meter", link: "/product-detail/detail10" },
    { img: related4, title: "VFM Vortex Flow Meter", link: "/product-detail/detail16" },
  ];

  return (
    <div className="text-dark">
      <SEO
        title="Fire Pump Test Meter | Direct-Reading Flow Testing | IOTAFLOW"
        description="UL complied IOTAFLOW Fire Pump Test Meter for fire pump flow testing. Carbon steel venturi body, direct-reading dual dial, ±2% FS accuracy, rated up to 34.5 bar (500 psi)."
        keywords="fire pump test meter, fire protection flow meter, direct reading fire flow meter, NFPA 20 fire pump test meter, venturi fire flow meter, IOTAFLOW fire pump meter"
      />

      <div className="container py-5">
        <div className="row">
          {/* LEFT: images */}
          <div className="col-lg-6 d-flex flex-column align-items-center">
            <div
              className="border mb-2 p-2 rounded shadow-sm position-relative overflow-hidden main-image-wrapper"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div ref={imgWrapperRef} className="img-canvas img-fade-in">
                <img
                  src={mainImage}
                  alt="IOTAFLOW Fire Pump Test Meter"
                  className="main-image mt-2"
                />
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
            <p className="text-muted tw-uppercase tw-tracking-wide tw-font-semibold tw-text-sm">
              Fire Protection
            </p>
            <h1 className="tw-text-3xl tw-font-bold tw-text-gray-900">
              Fire Pump Test Meter (d26)
            </h1>
            <p className="tw-text-base tw-font-medium tw-text-gray-600 tw-mt-1">
              IOTAFLOW Fire Pump Test Meter – Direct-Reading Flow Testing for Fire Pump Systems
            </p>

            {/* Feature Bullets */}
            <ul className="list-unstyled mt-3">
              <li className="mb-2 list-item-with-icon">
                <span>
                  <img src={arrowIcon} alt="arrow icon" className="Icon" />
                </span>
                UL complied fire pump test meter for accurate flow testing.
              </li>
              <li className="mb-2 list-item-with-icon">
                <span>
                  <img src={arrowIcon} alt="arrow icon" className="Icon" />
                </span>
                Carbon steel body, ±2% FS accuracy, grooved/ANSI/butt weld ends, rated up to 34.5 bar (500 psi).
              </li>
              <li className="mb-2 list-item-with-icon">
                <span>
                  <img src={arrowIcon} alt="arrow icon" className="Icon" />
                </span>
                Direct-reading dual-scale dial (LPM/GPM &amp; ΔP) with no external power required.
              </li>

              {/* Badges Row */}
              <li className="tw-flex tw-flex-wrap tw-items-center tw-gap-3 tw-mt-4">
                <div
                  className="tw-flex tw-items-center tw-gap-2 tw-bg-red-50 tw-border tw-border-red-200 tw-px-3 tw-py-1.5 tw-rounded-lg"
                  title="Fire Protection"
                >
                  <img
                    src={fireIcon}
                    alt="Fire Protection"
                    style={{ width: "22px", height: "22px" }}
                  />
                  <span className="tw-text-xs tw-font-semibold tw-text-red-700">
                    Fire Protection
                  </span>
                </div>

                <div
                  className="tw-flex tw-items-center tw-gap-2 tw-bg-green-50 tw-border tw-border-green-200 tw-px-3 tw-py-1.5 tw-rounded-lg"
                  title="No Power Required"
                >
                  <img
                    src={noPowerIcon}
                    alt="No Power Required"
                    style={{ width: "22px", height: "22px" }}
                  />
                  <span className="tw-text-xs tw-font-semibold tw-text-green-800">
                    No Power Required
                  </span>
                </div>

                <div
                  className="tw-flex tw-items-center tw-gap-2 tw-bg-blue-50 tw-border tw-border-blue-200 tw-px-3 tw-py-1.5 tw-rounded-lg"
                  title="Direct-Reading Dial"
                >
                  <img
                    src={directDialIcon}
                    alt="Direct-Reading Dial"
                    style={{ width: "22px", height: "22px" }}
                  />
                  <span className="tw-text-xs tw-font-semibold tw-text-blue-800">
                    Direct-Reading Dial
                  </span>
                </div>
              </li>
            </ul>

            <div className="tw-mt-4">
              <EnquiryButton />
            </div>
          </div>
        </div>

        {/* Sticky tabs */}
        <div
          className="container sticky-top bg-white shadow-sm mt-4"
          style={{ top: "0px", zIndex: 1020 }}
        >
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
              <div className="col-12 col-lg-10">
                <p className="tw-text-gray-700 tw-leading-relaxed">
                  A fire pump is only as dependable as its last flow test. The{" "}
                  <strong>IOTAFLOW Fire Pump Test Meter</strong> is a differential pressure flow
                  meter built specifically for fire pump performance testing. Installed
                  permanently in the pump's test line, it lets maintenance teams confirm that the
                  pump is delivering its rated flow (LPM/GPM) – quickly, safely, and without
                  setting up hoses, nozzles and pitot gauges for every test.
                </p>
                <p className="tw-text-gray-700 tw-leading-relaxed">
                  The meter combines a carbon steel venturi-type flow body with a differential
                  pressure gauge (Buna convoluted diaphragm), connected through ¼" brass ball
                  valves. Its dual-scale dial shows flow rate and differential pressure directly –
                  no charts, conversions or external power needed. It is available with Grooved,
                  ANSI 150, ANSI 300 and Butt Weld connections, in line sizes from DN100 to DN250,
                  and is UL complied for fire protection service.
                </p>
                <p className="tw-text-gray-700 tw-leading-relaxed">
                  Ideal for fire protection contractors, facility managers and plant safety teams
                  who need reliable, repeatable flow data during commissioning, acceptance tests
                  and routine fire pump testing.
                </p>

                {/* Decorative Separator Line */}
                <div
                  style={{
                    height: "4px",
                    width: "100%",
                    maxWidth: "700px",
                    background: "linear-gradient(to right, #ffcc00, #ffd700)",
                    margin: "2rem 0",
                  }}
                />

                <h4 className="tw-text-xl tw-font-bold tw-text-gray-900 tw-mb-3">Applications</h4>
                <ul className="tw-space-y-2 tw-list-disc tw-pl-5 tw-text-gray-700">
                  <li>
                    <strong>Periodic &amp; Annual Fire Pump Testing</strong> – Performance checks at
                    rated (100%) and peak (150%) flow points, in line with NFPA 20 / NFPA 25
                    practice
                  </li>
                  <li>
                    <strong>Commissioning &amp; Acceptance Tests</strong> – Verifying new fire pump
                    installations before handover
                  </li>
                  <li>
                    <strong>High-Rise &amp; Commercial Buildings</strong> – Residential towers,
                    malls, hotels, hospitals and IT parks
                  </li>
                  <li>
                    <strong>Industrial Plants</strong> – Refineries, petrochemical, power, chemical
                    and pharmaceutical facilities
                  </li>
                  <li>
                    <strong>Warehouses &amp; Data Centres</strong> – Logistics parks, cold storage
                    and mission-critical facilities
                  </li>
                  <li>
                    <strong>Infrastructure Projects</strong> – Airports, metro rail, tunnels and
                    SEZs
                  </li>
                  <li>
                    <strong>Fire Hydrant &amp; Sprinkler Pump Sets</strong> – Flow verification on
                    fire water ring mains and pump houses
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
                  <li>
                    <strong>Direct-Reading Dual-Scale Dial</strong> – Read flow rate and
                    differential pressure (ΔP) at a glance; no charts or calculations
                  </li>
                  <li>
                    <strong>No External Power Needed</strong> – Fully mechanical,
                    diaphragm-operated gauge keeps working during power outages and in remote pump
                    rooms
                  </li>
                  <li>
                    <strong>UL Complied</strong> – Verified compliance for fire protection service
                  </li>
                  <li>
                    <strong>Rugged Carbon Steel Body</strong> – Built for permanent installation in
                    fire pump test lines
                  </li>
                  <li>
                    <strong>Flexible End Connections</strong> – Grooved, ANSI 150 (B16.5), ANSI 300
                    (B16.5) and Butt Weld
                  </li>
                  <li>
                    <strong>High Pressure Rating</strong> – Up to 34.5 bar (500 psi) for Grooved,
                    Butt Weld and ANSI 300; 19 bar (275 psi) for ANSI 150
                  </li>
                  <li>
                    <strong>±2% Full-Scale Accuracy</strong> – Dependable readings for checking pump
                    performance against its curve
                  </li>
                </ul>
              </div>

              {/* Right Column */}
              <div className="col-md-6">
                <ul className="list-unstyled feature-list-spaced">
                  <li>
                    <strong>Sensitive Diaphragm Sensing</strong> – Buna convoluted diaphragm gives
                    a smooth, stable response to differential pressure
                  </li>
                  <li>
                    <strong>Quick Air Purging</strong> – Shut-off and vent valves purge trapped air
                    from the sensing hoses in seconds for true readings
                  </li>
                  <li>
                    <strong>Gauge Isolation</strong> – ¼" brass ball valves let the gauge be
                    isolated when not in use
                  </li>
                  <li>
                    <strong>Dial Options</strong> – 4" standard dial; 6" dial available as option
                    for easier reading
                  </li>
                  <li>
                    <strong>Choice of Gauge Body</strong> – Aluminium, SS304 or SS316
                  </li>
                  <li>
                    <strong>Polycarbonate ID Tag</strong> – Durable tag for clear meter
                    identification
                  </li>
                  <li>
                    <strong>Compact Installation</strong> – Needs only 5D straight pipe upstream
                    and 2D downstream
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "Technical data" && (
            <div className="tw-space-y-8">
              <div>
                <h4 className="tw-text-lg tw-font-bold tw-text-gray-900 tw-mb-3">
                  Technical Specification
                </h4>
                <table className="tech-specs-table">
                  <thead>
                    <tr>
                      <th>
                        <b>Parameter</b>
                      </th>
                      <th>Specification</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <b>Line Sizes</b>
                      </td>
                      <td>DN100 to DN250</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Measuring Principle</b>
                      </td>
                      <td>Differential pressure (venturi type)</td>
                    </tr>
                    <tr>
                      <td>
                        <b>End Connections</b>
                      </td>
                      <td>Grooved, ANSI 150 (B16.5), ANSI 300 (B16.5), Butt Weld</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Body Material</b>
                      </td>
                      <td>Carbon Steel</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Valves</b>
                      </td>
                      <td>¼" Brass Ball Valve</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Gauge Body Construction</b>
                      </td>
                      <td>Aluminium / SS304 / SS316</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Gauge Operation</b>
                      </td>
                      <td>Diaphragm (Buna convoluted)</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Accuracy</b>
                      </td>
                      <td>±2% of full scale</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Max. Temperature</b>
                      </td>
                      <td>80°C (176°F)</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Max. Working Pressure</b>
                      </td>
                      <td>
                        34.5 bar (500 psi) – Grooved, Butt Weld &amp; ANSI 300; 19 bar (275 psi) –
                        ANSI 150
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Dial Size</b>
                      </td>
                      <td>4" standard; 6" available</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Approx. Weight (Gauge)</b>
                      </td>
                      <td>1.7 kg (3.75 lb)</td>
                    </tr>
                    <tr>
                      <td>
                        <b>ID Tag</b>
                      </td>
                      <td>Polycarbonate</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Approval</b>
                      </td>
                      <td>UL Complied</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Straight Pipe Requirement</b>
                      </td>
                      <td>5D upstream, 2D downstream</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h4 className="tw-text-lg tw-font-bold tw-text-gray-900 tw-mb-3">
                  DN Size vs. Flow Rate
                </h4>
                <div className="tw-overflow-x-auto">
                  <table className="tech-specs-table">
                    <thead>
                      <tr>
                        <th style={{ width: "35%" }}>
                          <b>Size in DN</b>
                        </th>
                        <th>
                          <b>Flow Rate (m³/hour)</b>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b>DN100</b>
                        </td>
                        <td>60.0</td>
                      </tr>
                      <tr>
                        <td>
                          <b>DN150</b>
                        </td>
                        <td>159.0 / 171.0 / 190.0 / 273.0</td>
                      </tr>
                      <tr>
                        <td>
                          <b>DN200</b>
                        </td>
                        <td>273.0 / 340.0 / 410.0 / 748.4 / 900.0</td>
                      </tr>
                      <tr>
                        <td>
                          <b>DN250</b>
                        </td>
                        <td>495.0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Downloads" && (
            <div className="row">
              <div className="col-md-6">
                <h4 className="download-heading">Catalogue</h4>
                {downloadFiles.catalogue.map((file, index) => (
                  <a
                    key={`catalogue-${index}`}
                    href={file.path}
                    download={file.path !== "#"}
                    className="download-item"
                    onClick={(e) => {
                      if (file.path === "#") {
                        e.preventDefault();
                        alert(
                          "Catalogue (Cat. No. 150.02.0926) download link will be available soon. Please enquire directly for immediate dispatch."
                        );
                      }
                    }}
                  >
                    <FaRegFilePdf className="pdf-icon-fa" />
                    <div className="download-info">
                      <span className="download-title">{file.title}</span>
                      <span className="download-size">
                        {file.path === "#" ? "(PDF) Available on Request" : `(PDF) ${file.size}`}
                      </span>
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
                  <p className="fw-semibold mt-2" style={{ fontSize: "14px" }}>
                    {product.title}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Embedded Component Styles */}
      <style>{`
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
        .img-fade-in { opacity: 1; transition: opacity 0.4s ease; }

        .nav-tabs .nav-link {
          color: black;
          border: none;
          border-bottom: 3px solid transparent;
          transition: all 0.3s ease;
          background-color: white;
          white-space: nowrap;
          padding: 1rem 1.2rem;
        }
        .sticky-top .nav-tabs .nav-item {
          flex-grow: 0;
        }

        .nav-tabs .nav-link:hover { background-color: #ffcc00; color: black; }
        .nav-tabs .nav-link.active-tab { border-bottom: 3px solid #ffcc00; color: black; background-color: white; }

        .hover-scale { transition: transform 0.3s ease; }
        .hover-scale:hover { transform: scale(1.05); }

        .list-item-with-icon {
          display: flex;
          align-items: center;
        }

        .Icon {
          width: 2rem !important;
          height: 2rem !important;
          margin-right: 0.75rem;
          color: #ffcc00;
        }

        .feature-list-spaced li {
          margin-bottom: 1rem;
        }

        .column-separator {
          border-right: 2.5px solid #ffcc00;
          padding-right: 1rem;
        }

        .tech-specs-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 1rem;
        }

        .tech-specs-table td {
          padding: 1rem 0.75rem;
          border-bottom: 1px solid #eee;
        }

        .tech-specs-table td:first-child {
          border-right: 2px solid #ffcc00;
          padding-right: 1rem;
          width: 35%;
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
          background-color: #f8f9fa;
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
          color: #6c757d;
        }

        .pdf-icon-fa {
          color: #ffcc00;
          font-size: 2.5rem;
          margin-right: 1rem;
        }

        @media (max-width: 991px) {
          .main-image-wrapper { height: auto; max-width: 100%; }
          .nav-tabs .nav-link { font-size: 14px; padding: 0.5rem 0.75rem; }
        }
        @media (max-width: 767px) {
          .nav-tabs { flex-wrap: wrap; justify-content: flex-start; }
        }
      `}</style>
    </div>
  );
}

export default ProductDetail;

