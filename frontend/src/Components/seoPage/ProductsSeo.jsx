import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Assuming you are using react-router-dom for navigation
import ultrasonicimg from "../../images/p1a.png";
import electromagneticimg from "../../images/p7a.jpg";
import watermetersimg from "../../images/sja.png";
import podisplacementimg from "../../images/p11a.jpg";
import rotameterimg from "../../images/p24a.jpg";
import sappflowmeter from "../../images/p23a.png";
import thermalmassimg from "../../images/p15a.png";
import gasflowmeterimg from "../../images/p19a.png";
import vorteximg from "../../images/p16a.jpg";

const productData = {
  "Ultrasonic Flow Meters": {
    name: "Ultrasonic Flow Meters",
    link: "/product",
    image: ultrasonicimg
  },
  "Electromagnetic Flow Meters": {
    name: "Electromagnetic Flow Meters",
    link: "/product-detail/detail7",
    image: electromagneticimg
  },
  "Water Meters": {
    name: "Water Meters",
    link: "/product-detail/detail9",
    image: watermetersimg
  },
  "Positive Displacement Meters": {
    name: "Positive Displacement Meters",
    link: "/product-detail/detail11",
    image: podisplacementimg
  },
  "Rotameters (Variable Area Flow Meters)": {
    name: "Rotameters (Variable Area Flow Meters)",
    link: "/product-detail/detail24",
    image: rotameterimg
  },
  "Special Application Flow Meters": {
    name: "Special Application Flow Meters",
    link: "/product-detail/detail23",
    image: sappflowmeter
  },
  "Thermal Mass Flow Meters": {
    name: "Thermal Mass Flow Meters",
    link: "/product-detail/detail15",
    image: thermalmassimg
  },
  "Gas Flow Meters (Mechanical)": {
    name: "Gas Flow Meters (Mechanical)",
    link: "/product-detail/detail19",
    image: gasflowmeterimg
  },
  "Vortex Flow Meters": {
    name: "Vortex Flow Meters",
    link: "/product-detail/detail16",
    image: vorteximg
  }
};

// Convert the object to an array to easily map over it
const products = Object.values(productData);

function ProductsSeo() {
  return (
    <section className="tw-bg-white tw-py-20">
      <Container>
        <div className="tw-text-center tw-mb-12">
          <h2 className="tw-font-bold tw-text-4xl tw-relative tw-pb-4">
            Our Products
            {/* Yellow underline for the title */}
            <span className="tw-absolute tw-bottom-0 tw-left-1/2 tw--translate-x-1/2 tw-w-24 tw-h-1 tw-bg-yellow-400"></span>
          </h2>
        </div>

        <Row>
          {products.map((product, index) => (
            <Col key={index} md={6} lg={4} className="tw-mb-8">
              {/* Added onClick handler to scroll to top */}
              <Link to={product.link} onClick={() => window.scrollTo(0, 0)} className="tw-block tw-group">
                <div className="tw-relative tw-overflow-hidden tw-rounded-lg tw-shadow-lg tw-aspect-video">
                  {/* Background Image */}
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="tw-w-full tw-h-full tw-object-cover tw-transition-transform tw-duration-500 tw-ease-in-out group-hover:tw-scale-110 tw-will-change-transform" 
                  />
                  {/* Dark Overlay */}
                  <div className="tw-absolute tw-inset-0 tw-bg-black/50 tw-transition-all tw-duration-300 group-hover:tw-bg-black/70"></div>
                  
                  {/* Text Content */}
                  <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-p-4">
                    <h5 className="tw-text-white tw-font-bold tw-text-xl tw-text-center tw-transition-transform tw-duration-300 group-hover:tw-scale-105">
                      {product.name}
                    </h5>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ProductsSeo;