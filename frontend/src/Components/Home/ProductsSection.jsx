import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCardd';

import waterIcon from '../../images/icon1.png';
import airIcon from '../../images/icon2.png';
import oilIcon from '../../images/icon3.png';

import gasIcon from '../../images/icon4.png';
import steamIcon from '../../images/icon5 (2).png';
import chemicalIcon from '../../images/icon6.png';
//import { div } from 'framer-motion/client';


function ProductsSection() {
  return (
    <Container className="py-5">
      <h5 className="fw-bold mb-4 text-start">
        <span style={{ borderLeft: '3px solid #ffcc00', paddingLeft: '10px' }}>
          Leave your UTILITIES for us to Measure.
        </span>
      </h5>

      {/* First row */}
      <Row>
        <ProductCard
          icon={waterIcon}
          title="Water Flow Meter"
          details={
            <div>
              <p>
                A water flow meter measures the flow of water in various applications, such as household usage, municipal water systems, sewage flow tracking, and industrial cooling.
              </p>
              <p><strong>Types of Water Flow Meters:</strong></p>
              <ol>
                <li><strong>Electromagnetic Flow Meters:</strong> Use electrodes to measure conductive fluids with high accuracy. They are low maintenance and don’t impede water flow.</li>
                <li><strong>Ultrasonic Flow Meters:</strong> These inline meters have no moving parts, providing accurate, economical monitoring for hot water and demineralized water applications.</li>
                <li><strong>Mechanical Flow Meters:</strong> Utilize a Turbine to track flow rates. They require regular maintenance due to mechanical wear.</li>
              </ol>
            </div>
          }
        />

        <ProductCard
          icon={airIcon}
          title="Air Flow Meter"
          details={
            <div>
              <p>
                Air flow meters measure air velocity and play a crucial role in various industries, from HVAC systems to power plants. Measuring air flow can be challenging, but different types of instruments are available:
              </p>
              <ol>
                <li><strong>Differential Pressure Flow Meters:</strong> Include orifice, Vortex & V-cone. They require additional pressure and temperature measurements.</li>
                <li><strong>Thermal Mass Flow Meters:</strong> Measure mass flow directly, without needing extra devices. They handle large compressed air pipes, offer high rangeability, and are easy to install. They detect low flow rates, do not create pressure drops, and are cost-efficient for mass flow measurement.</li>
              </ol>
            </div>
          }
        />

        <ProductCard
          icon={oilIcon}
          title="Oil Flow Meter"
          details={
            <div>
              <p>
                Positive Displacement (PD) meters are highly reliable and accurate for measuring oil flow, suitable for fluids like hydrocarbons, oils, diesel, fuels, and solvents. They work by counting the rotations of a rotor within a chamber of fixed volume, translating to precise volumetric flow rates.
              </p>
              <p>
                The benefits of PD meters include their high accuracy, achieved through precision manufacturing with minimal clearance between internal parts. They also offer consistent accuracy over many cycles, require low maintenance, and have a lifespan of 10–20 years. Additionally, PD meters are effective even with uneven flow distribution and have wide turndown ratios.
              </p>
            </div>
          }
        />
      </Row>

      {/* Second row */}
      <Row>
        <ProductCard
          icon={gasIcon}
          title="Gas Flow Meter"
          details={
            <div>
              <p>
                Gas Measurement is crucial in chemical process industries for ensuring safety, process control, and efficiency. Among the types of flow meters:
              </p>
              <ol>
                <li><strong>Rotary Positive Displacement meters</strong> are highly accurate, measuring volumetric flow by mechanically displacing fluid components.</li>
                <li><strong>Turbine flow meters</strong> measure flow based on a spinning rotor/turbine, offering high accuracy for clean, dry Natural gases (CNG, PNG & LPG).</li>
                <li><strong>Conical shaped flow meters</strong> for measurement of Coke-Oven gas, Coal Bed Methane (CBM), and high-temperature/pressure gas mixtures.</li>
              </ol>
              <p>Each type requires pressure and temperature compensation.</p>
            </div>
          }
        />

        <ProductCard
          icon={steamIcon}
          title="Steam Flow Meter"
          details={
            <div>
              <p>
                Accurate steam flow measurement is essential for optimal performance and energy savings in industries such as power plants, chemical plants, refineries, and manufacturing units.
              </p>
              <p>
                <strong>Vortex flow meters</strong>, for instance, operate on the vortex shedding principle, where a bluff body in the flow stream creates alternating vortices.
              </p>
              <p>
                Orifice flow meter is another option for optimal measurement of steam.
              </p>
              <p>
                Precise steam measurement helps prevent energy wastage, reduce costs, and enhance system efficiency. Key considerations include steam state (Saturated or Superheated), pressure, and temperature.
              </p>
            </div>
          }
        />

        <ProductCard
          icon={chemicalIcon}
          title="Chemical Flow Meter"
          details={
            <div>
              <p>
                Chemical flow meters are essential for measuring both corrosive and non-corrosive fluids, widely used in petrochemical plants and refineries. They handle substances like acids, alkalis, detergents, and slurry.
              </p>
              <p>
                <strong>Electromagnetic flow meters</strong>, with appropriate electrodes and liners, are ideal for corrosive chemicals such as Sulphuric acid, hydrochloric acid, and caustic soda & Brine.
              </p>
              <p>
                <strong>Metal Tube Rotameters</strong> with PTFE linings also measure aggressive fluids effectively.
              </p>
              <p>
                For high-viscosity fluids like Molasses, resin, and glue, <strong>Oval gear flow meters</strong> are preferred due to their dual oval gears that ensure accurate measurement.
              </p>
            </div>
          }
        />
      </Row>
    </Container>
  );
}

export default ProductsSection;