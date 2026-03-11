import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

/* === Import every logo that lives under src/images (put correct cases!) === */
import adani from "../../images/adani.png";
import cairn from "../../images/Cairn.png";
import client2 from "../../images/client2.jpg";
import client3 from "../../images/client3.png";
import client4_1 from "../../images/client4 (1).jpg";
import client4_180 from "../../images/client4-180x96.png";
import client5_180 from "../../images/client5-180x96.png";
import client5 from "../../images/client5.jpg";
import client6_180 from "../../images/client6-180x96.png";
import client6 from "../../images/client6.jpg";
import client7_180 from "../../images/client7-180x96.png";
import client8_180 from "../../images/client8-180x96.png";
import client8 from "../../images/client8.jpg";
import client9_180 from "../../images/client9-180x96.png";
import client10_180 from "../../images/client10-180x96.png";
import client11_180 from "../../images/client11-180x96.png";
import client12_180 from "../../images/client12-180x96.png";
import drReddys from "../../images/Dr.-Reddys.png";
import essarSteel from "../../images/essar-steel.png";
import gaar from "../../images/Gaar.png";
import hindustan from "../../images/hindustan.png";
import itcHotels from "../../images/itc-hotels.png";
import jindal from "../../images/jindal.png";
import ltLogo from "../../images/lt_logo.png";
import mahindraRise from "../../images/Mahindra-rise.png";
import motherDairy from "../../images/mother-dairy.png";
import ntpc from "../../images/NTPC.png";
import ocmLuxury from "../../images/ocm-lxury.png";
import oilLtd from "../../images/oilltd.png";
import roorkee from "../../images/roorkee.png";
import schneider from "../../images/Schneider.png";
import smec from "../../images/smec.png";
import sterlingWilson from "../../images/sterling-wilson.png";
import taj from "../../images/Taj.png";
import ultratech from "../../images/ultratech-cement.png";
import voltas from "../../images/voltas.png";

function OurClients() {
  const logos = [
    adani, cairn, client2, client3, client4_1, client4_180, client5_180, 
    client5, client6_180, client6, client7_180, client8_180, client8, 
    client9_180, client10_180, client11_180, client12_180, drReddys, 
    essarSteel, gaar, hindustan, itcHotels, jindal, ltLogo, mahindraRise, 
    motherDairy, ntpc, ocmLuxury, oilLtd, roorkee, schneider, smec, 
    sterlingWilson, taj, ultratech, voltas,
  ];

  return (
    <section className="tw-py-2 tw-mt-[30px]">
      <Container>
        <h3 className="tw-font-bold tw-text-base tw-tracking-wider tw-uppercase tw-flex tw-items-center tw-gap-2.5 tw-mb-5">
          <span className="tw-w-1 tw-h-6 tw-bg-yellow-400 tw-inline-block" /> OUR CLIENTS
        </h3>

        <Swiper
          slidesPerView={4}
          spaceBetween={24}
          loop={true}
          autoplay={{ 
            delay: 2000, 
            disableOnInteraction: false 
          }}
          modules={[Autoplay]}
          breakpoints={{
            0: { slidesPerView: 2 },
            576: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
          }}
        >
          {logos.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="tw-bg-white tw-rounded-xl tw-shadow-md tw-h-[300px] tw-flex tw-items-center tw-justify-center">
                <img 
                  src={src} 
                  alt={`client-logo-${i}`} 
                  className="
                    tw-max-h-[200px] 
                    tw-max-w-[90%] 
                    tw-object-contain 
                    tw-grayscale-[20%] 
                    tw-transition-all tw-duration-300 
                    hover:tw-grayscale-0 
                    hover:tw-scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}

export default OurClients;