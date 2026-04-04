import React from "react";
import "./ClientsSection.css";

import cl2 from "../../images/Client logo icon_2.webp";
import cl3 from "../../images/Client logo icon_3.webp";
import cl6 from "../../images/Client logo icon_6.webp";
import cl8 from "../../images/Client logo icon_8.webp";
import cl9 from "../../images/Client logo icon_9.webp";
import cl12 from "../../images/Client logo icon_12.webp";
import cl13 from "../../images/Client logo icon_13.webp";
import cl14 from "../../images/Client logo icon_14.webp";
import cl15 from "../../images/Client logo icon_15.webp";
import cl16 from "../../images/Client logo icon_16.webp";
import cl17 from "../../images/Client logo icon_17.webp";
import cl18 from "../../images/Client logo icon_18.webp";
import cl19 from "../../images/Client logo icon_19.webp";
import cl20 from "../../images/Client logo icon_20.webp";
import cl21 from "../../images/Client logo icon_21.webp";
import cl22 from "../../images/Client logo icon_22.webp";
import n7 from "../../images/New_7.webp";
import n11 from "../../images/New_11.webp";
import n23 from "../../images/New_23.webp";
import n24 from "../../images/New_24.webp";
import n25 from "../../images/New_25 Hindalco.webp";
import n26 from "../../images/New_26.webp";
import n27 from "../../images/New_27.webp";
import n28 from "../../images/New_28.webp";
import n29 from "../../images/New_29.webp";
import n30 from "../../images/New_30.webp";
import n31 from "../../images/New_31.webp";
import n32 from "../../images/New_32.webp";
import n33 from "../../images/New_33.webp";
import n34 from "../../images/34.webp";

const logos = [
  cl2, cl3, cl6, cl8, cl9, cl12, cl13, cl14, cl15, cl16, cl17, cl18,
  cl19, cl20, cl21, cl22, n7, n11, n23, n24, n25, n26, n27, n28,
  n29, n30, n31, n32, n33, n34,
];

function ClientsSection() {
  return (
    <section className="clients-section py-5">
      <h5 className="section-title">
        <span></span> OUR CLIENTS
      </h5>

      {/* IMPORTANT: Do NOT use Bootstrap container here */}
      <div className="w-100">
        <div className="slider-wrapper mt-4">
          <div className="slider-track">
            {[...logos, ...logos].map((logo, idx) => (
              <div className="client-logo" key={idx}>
                <img src={logo} alt={`Client ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;
