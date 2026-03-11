import React from 'react';
import './KPISection.css';

function KPISection() {
  const kpis = [
    { number: '6', text: 'Inventory Turnarounds' },
    { number: '10', text: 'Days - Takt Time' },
    { number: '250', text: 'Improvement Videos - Youtube' },
    { number: '25', text: 'Approvals' },
  ];

  return (
    <section className="kpi-section py-5">
      <div className="container">
        <h6 className="fw-bold text-dark mb-4">
          <span className="kpi-line me-2"></span> OUR KPI's
        </h6>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {kpis.map((item, idx) => (
            <div key={idx} className="kpi-item text-center">
              <div className="circle-wrapper">
                <div className="circle-number text-warning fw-bold">{item.number}</div>
                <div className="circle-text">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KPISection;
