import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

/* === Import every logo that lives under src/images (put correct cases!) === */
import adani from "../../images/adani.webp";
import cairn from "../../images/Cairn.webp";
import client2 from "../../images/client2.webp";
import client3 from "../../images/client3.webp";
import client4_1 from "../../images/client4 (1).webp";
import client4_180 from "../../images/client4-180x96.webp";
import client5_180 from "../../images/client5-180x96.webp";
import client5 from "../../images/client5.webp";
import client6_180 from "../../images/client6-180x96.webp";
import client6 from "../../images/client6.webp";
import client7_180 from "../../images/client7-180x96.webp";
import client8_180 from "../../images/client8-180x96.webp";
import client8 from "../../images/client8.webp";
import client9_180 from "../../images/client9-180x96.webp";
import client10_180 from "../../images/client10-180x96.webp";
import client11_180 from "../../images/client11-180x96.webp";
import client12_180 from "../../images/client12-180x96.webp";
import drReddys from "../../images/Dr.-Reddys.webp";
import essarSteel from "../../images/essar-steel.webp";
import gaar from "../../images/Gaar.webp";
import hindustan from "../../images/hindustan.webp";
import itcHotels from "../../images/itc-hotels.webp";
import jindal from "../../images/jindal.webp";
import ltLogo from "../../images/lt_logo.webp";
import mahindraRise from "../../images/Mahindra-rise.webp";
import motherDairy from "../../images/mother-dairy.webp";
import ntpc from "../../images/NTPC.webp";
import ocmLuxury from "../../images/ocm-lxury.webp";
import oilLtd from "../../images/oilltd.webp";
import roorkee from "../../images/roorkee.webp";
import schneider from "../../images/Schneider.webp";
import smec from "../../images/smec.webp";
import sterlingWilson from "../../images/sterling-wilson.webp";
import taj from "../../images/Taj.webp";
import ultratech from "../../images/ultratech-cement.webp";
import voltas from "../../images/voltas.webp";

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