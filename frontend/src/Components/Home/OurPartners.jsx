import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Partner.css";

// Import logos
import aquametro from '../../images/par11.png';
import apator from '../../images/par33.png';
import Schmidt from '../../images/par44.png';
import micro from '../../images/par55.png';
import ultraflex from '../../images/par77.png';
import elgas from '../../images/par22.png';
import vzl from '../../images/par88.png';
import aichi from '../../images/par66.png';


export function OurPartners() {
  // ✅ Use JSX for text so <strong> works
  const logos = [
    { 
      img: aquametro, 
      text: (
        <>
          Aquametro Oil & Marine is a global leader in fuel measurement, monitoring, 
          and management systems for marine and industrial applications. As their 
          official channel partner in India, <strong>IOTAFLOW Systems </strong> 
          provides Aquametro’s advanced flow meters and fuel management solutions 
          to Indian industries and shipping companies.
        </>
      ),
      link: "https://www.aquametro-oil-marine.com/en/"
    },
    { 
      img: elgas, 
      text: (
        <>
          Elgas S.R.O, from the Czech Republic, is a recognized manufacturer of 
          advanced gas metering and data logging devices. <strong>IOTAFLOW Systems </strong> 
          represents Elgas in India, offering their reliable gas metering solutions 
          to energy companies and industrial consumers.
        </>
      ),
      link: "https://www.elgas.cz/en/gas-meters"
    },
    { 
      img: apator, 
      text: (
        <>
          Apator is a European leader in metering, automation, and smart grid solutions 
          for electricity, gas, and water industries. As Apator’s channel partner in India, 
          <strong>IOTAFLOW Systems</strong> delivers their state-of-the-art metering 
          solutions to Indian utilities and infrastructure projects.
        </>
      ),
      link: "https://www.apator.com/en"
    },
    { 
      img: Schmidt, 
      text: (
        <>
          SCHMIDT Technology is a renowned German manufacturer of precision thermal 
          mass flow sensors and innovative measurement systems. 
          <strong> IOTAFLOW Systems</strong>, as their channel partner in India, 
          brings SCHMIDT’s trusted flow measurement technology to support industrial 
          process efficiency and energy optimization across the country.
        </>
      ),
      link: "https://www.schmidttechnology.de/en/"
    },
    { 
      img: micro, 
      text: (
        <>
          Micronics is a UK-based specialist in ultrasonic clamp-on and portable flow 
          measurement systems. <strong>IOTAFLOW Systems</strong>, as Micronics’ channel 
          partner in India, provides industries with easy-to-install, non-intrusive 
          flow meters for water, energy, and process applications.
        </>
      ),
      link: "https://micronicsflowmeters.com/"
    },
    { 
      img: aichi, 
      text: (
        <>
          Aichi Tokei Denki, based in Japan, is a pioneer in flow measurement and 
          precision instrumentation with over a century of expertise. Partnering with 
          Aichi Tokei Denki, <strong>IOTAFLOW Systems</strong> supplies their 
          high-accuracy flow meters and measurement devices to the Indian market.
        </>
      ),
      link: "https://www.schmidttechnology.de/en/"
    },
    { 
      img: ultraflex, 
      text: (
        <>
          Faure Herman and ULTRAFLUX are leading names in ultrasonic and turbine flow 
          meter technologies, known for unmatched precision in fluid measurement. 
          As their trusted channel partner in India, <strong>IOTAFLOW Systems </strong>
          makes their cutting-edge flow metering solutions accessible to Indian industries.
        </>
      ),
      link: "https://www.ultraflux.net/en/"
    },
    { 
      img: vzl, 
      text: (
        <>
          Vzljot is a leading Russian manufacturer of flow meters and measuring 
          instruments for industrial and utility applications. As their technological 
          partner in India, <strong>IOTAFLOW Systems</strong> delivers Vzljot’s 
          proven solutions to support accurate measurement and process control 
          in Indian industries.
        </>
      ),
      link: "https://vzljot.ru/"
    }, 
  ];

  return (
    <section className="clients-section">
      <Container>
        <h3 className="section-heading">
          <span className="heading-bar" /> OUR PARTNERS
        </h3>

        <Swiper
          slidesPerView={4}
          spaceBetween={24}
          loop
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 2 },
            576: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
          }}
        >
          {logos.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="client-logo-card">
                <img src={item.img} alt={`Partner ${i}`} />

                {/* Hover / info area */}
                <div className="client-hover">
                  <div className="client-hover-content">
                    <p>{item.text}</p>
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="partner-link"
                    >
                      Visit Website →
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}

export default OurPartners;
