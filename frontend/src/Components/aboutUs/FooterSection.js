import React from 'react';
import './FooterSection.css';

function FooterSection() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="footer-logo mb-2">
              <h3><span className="logo-x">X</span><span className="logo-arrows">❯❯</span> SAMATEX</h3>
            </div>
            <p>Samatex - is the leading company with the known name and rich history in a wide range of industries.</p>
            <p>We have presence on 5 continents in 207 countries worldwide.</p>
            <button className="btn btn-outline-light mt-2">Find locations &rsaquo;</button>
          </div>
          <div className="col-md-8 row">
            {[
              ['Company', ['Overview', 'History', 'Vision', 'Core values', 'Leadership', 'Strategy']],
              ['Investors', ['Overview', 'Earnings Releases', 'Presentations', 'Governance', 'Financial Info', 'Stock Information']],
              ['Community', ['Overview', 'Community Stories', 'Health & Wellness', 'Arts & Culture', 'Education', 'Parks & Recreation']],
              ['Careers', ['Overview', 'Job Openings', 'Our Culture', 'Workforce Diversity', 'Supply Chain', 'Spotlights']],
            ].map(([title, links], i) => (
              <div className="col-6 col-md-3" key={i}>
                <h5>{title}</h5>
                <ul className="list-unstyled">
                  {links.map((link, j) => (
                    <li key={j}><a href="#!">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom d-flex justify-content-between align-items-center">
          <p className="mb-0">© Samatex Ind. 2019</p>
          <div className="footer-icons">
            <i className="fab fa-youtube"></i>
            <i className="fab fa-google"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-skype"></i>
            <i className="far fa-envelope"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
