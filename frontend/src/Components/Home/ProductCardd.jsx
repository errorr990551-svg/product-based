import React from 'react';
import { Col } from 'react-bootstrap';
import './ProductCard.css';

function ProductCard({ icon, title, details }) {
  return (
    <Col md={4} className="d-flex justify-content-center mb-4">
      <div className="product-card text-center">
        <div className="iconn-box py-4">
          <img src={icon} alt={title} className="img-fluid" />
          <div className="title-box py-2">{title}</div>
        </div>

        <div className="details-box text-start">
          {details}   {/* ✅ No <p> wrapper, safe for nested tags */}
        </div>
      </div>
    </Col>
  );
}

export default ProductCard;
