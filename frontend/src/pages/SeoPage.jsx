import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Row, Col, Carousel, Button, Accordion, useAccordionButton, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import EnquiryButton from '../Components/common/EnquiryButton';
import { mumbaiSeoData, delhiSeoData, bengaluruSeoData, hyderabadSeoData, ahmedabadSeoData, chennaiSeoData } from "../data/citySeoData";

// ====================================================================
// 🟢 IMAGE PLACEHOLDERS (Replace these with your real imports)
// ====================================================================
import slide1 from "../images/banner 25.jpg";
import slide2 from "../images/bg2.jpg";
import slide3 from "../images/Flow web banner  (1600 x 833 px).jpg";

/* === Import every logo that lives under src/images (put correct cases!) === */
import adani from "../images/adani.png";
import cairn from "../images/Cairn.png";
import client2 from "../images/client2.jpg";
import client3 from "../images/client3.png";
import client4_1 from "../images/client4 (1).jpg";
import client4_180 from "../images/client4-180x96.png";
import client5_180 from "../images/client5-180x96.png";
import client5 from "../images/client5.jpg";
import client6_180 from "../images/client6-180x96.png";
import client6 from "../images/client6.jpg";
import client7_180 from "../images/client7-180x96.png";
import client8_180 from "../images/client8-180x96.png";
import client8 from "../images/client8.jpg";
import client9_180 from "../images/client9-180x96.png";
import client10_180 from "../images/client10-180x96.png";
import client11_180 from "../images/client11-180x96.png";
import client12_180 from "../images/client12-180x96.png";
import drReddys from "../images/Dr.-Reddys.png";
import essarSteel from "../images/essar-steel.png";
import gaar from "../images/Gaar.png";
import hindustan from "../images/hindustan.png";
import itcHotels from "../images/itc-hotels.png";
import jindal from "../images/jindal.png";
import ltLogo from "../images/lt_logo.png";
import mahindraRise from "../images/Mahindra-rise.png";
import motherDairy from "../images/mother-dairy.png";
import ntpc from "../images/NTPC.png";
import ocmLuxury from "../images/ocm-lxury.png";
import oilLtd from "../images/oilltd.png";
import roorkee from "../images/roorkee.png";
import schneider from "../images/Schneider.png";
import smec from "../images/smec.png";
import sterlingWilson from "../images/sterling-wilson.png";
import taj from "../images/Taj.png";
import ultratech from "../images/ultratech-cement.png";
import voltas from "../images/voltas.png";



// Product Images
import ultrasonicimg from "../images/p1a.png";
import electromagneticimg from "../images/p7a.jpg";
import watermetersimg from "../images/sja.png";
import podisplacementimg from "../images/p11a.jpg";
import rotameterimg from "../images/p24a.jpg";
import sappflowmeter from "../images/p23a.png";
import thermalmassimg from "../images/p15a.png";
import gasflowmeterimg from "../images/p19a.png";
import vorteximg from "../images/p16a.jpg";


// ================= CITY DATA MAP =================
const cityDataMap = {
  mumbai: mumbaiSeoData,
  delhi: delhiSeoData,
  bengaluru: bengaluruSeoData,
  hyderabad: hyderabadSeoData,
  ahmedabad: ahmedabadSeoData,
  chennai: chennaiSeoData,
};


const productData = {
  "Ultrasonic Flow Meters": { name: "Ultrasonic Flow Meters", link: "/product", image: ultrasonicimg },
  "Electromagnetic Flow Meters": { name: "Electromagnetic Flow Meters", link: "/product-detail/detail7", image: electromagneticimg },
  "Water Meters": { name: "Water Meters", link: "/product-detail/detail9", image: watermetersimg },
  "Positive Displacement Meters": { name: "Positive Displacement Meters", link: "/product-detail/detail11", image: podisplacementimg },
  "Rotameters (Variable Area Flow Meters)": { name: "Rotameters (Variable Area Flow Meters)", link: "/product-detail/detail24", image: rotameterimg },
  "Special Application Flow Meters": { name: "Special Application Flow Meters", link: "/product-detail/detail23", image: sappflowmeter },
  "Thermal Mass Flow Meters": { name: "Thermal Mass Flow Meters", link: "/product-detail/detail15", image: thermalmassimg },
  "Gas Flow Meters (Mechanical)": { name: "Gas Flow Meters (Mechanical)", link: "/product-detail/detail19", image: gasflowmeterimg },
  "Vortex Flow Meters": { name: "Vortex Flow Meters", link: "/product-detail/detail16", image: vorteximg }
};

const videoData = {
  videos: [
    { videoId: "3NVPU0yrmu0" },
    { videoId: "sORDnJrCrOc" }
  ],
};

// ====================================================================
// 🔹 HELPER COMPONENTS
// ====================================================================

function CustomToggle({ children, eventKey, activeKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);
  const isOpen = activeKey === eventKey;
  return (
    <div onClick={decoratedOnClick} className={`tw-w-full tw-cursor-pointer tw-p-5 tw-text-xl tw-font-bold tw-flex tw-transition-all tw-duration-300 focus:tw-outline-none ${isOpen ? 'tw-bg-black tw-text-white' : 'tw-bg-white tw-text-black'}`}>
      <span className="tw-font-bold tw-mr-3">{isOpen ? "–" : "+"}</span>
      <span>{children}</span>
    </div>
  );
}

const YouTubeEmbed = ({ videoId, title }) => (
  <>
    <iframe className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-rounded-xl" src={`https://www.youtube.com/embed/${videoId}`} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-bg-black/20 group-hover:tw-bg-black/40 tw-transition-all tw-duration-300 tw-rounded-xl tw-pointer-events-none">
        <svg className="tw-w-16 tw-h-16 tw-text-white/80" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
    </div>
  </>
);





// ====================================================================
// 🔹 SECTIONS
// ====================================================================

function BannerSliderSeo({ slides }) {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const handleNext = useCallback(() => {
    setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
  }, []);

  const handlePrev = useCallback(() => {
    setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(handleNext, 4000);
    return () => clearInterval(timer);
  }, [paused, handleNext]);

  return (
    <div
      className="tw-relative tw-w-full tw-overflow-hidden tw-bg-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="tw-relative tw-w-full"
        >
          {/* Image with zoom effect */}
          <motion.img
            src={slides[index].img}
            alt={slides[index].heading}
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 4, ease: "easeInOut" }}
            className="tw-block tw-w-full tw-object-cover tw-max-h-[300px] sm:tw-max-h-[380px] md:tw-max-h-[600px]"
          />

          {/* Caption Overlay */}
          <div className="tw-absolute tw-bottom-5 sm:tw-bottom-[35px] md:tw-bottom-10 tw-left-0 tw-right-0 tw-px-32 tw-text-left">
            <div className="caption-bg tw-inline-block tw-max-w-[95%] sm:tw-max-w-[90%] md:tw-max-w-[85%] lg:tw-max-w-[650px] tw-bg-black/50 tw-p-3 sm:tw-p-[14px] md:tw-p-5 tw-rounded-lg tw-text-white">
              <h1 className="tw-font-bold tw-text-yellow-400 tw-text-[1.4rem] sm:tw-text-[1.8rem] md:tw-text-[2rem] lg:tw-text-[2.5rem] tw-leading-tight">
                {slides[index].heading}
              </h1>
              <h2 className="tw-font-bold tw-text-white tw-text-[1.1rem] sm:tw-text-[1.25rem] md:tw-text-[1.4rem] lg:tw-text-[1.8rem] tw-leading-tight">
                {slides[index].subHeading}
              </h2>
              <p className="tw-text-[0.85rem] sm:tw-text-[0.95rem] md:tw-text-[1rem] lg:tw-text-[1.2rem] tw-mb-3">
                {slides[index].text}
              </p>

              {/* Button — hidden on mobile (<576px / below sm breakpoint) */}
              <button onClick={() => navigate("/product")} className="btnClass tw-hidden sm:tw-inline-block tw-bg-yellow-400 tw-text-black tw-font-semibold tw-text-[1.1rem] tw-px-5 tw-py-[10px] tw-rounded-md tw-border-none tw-cursor-pointer tw-overflow-hidden tw-relative">
                <span>Our Products</span>
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dot Indicators */}
      <div className="tw-absolute tw-bottom-3 tw-left-1/2 -tw-translate-x-1/2 tw-flex tw-gap-2 tw-z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`tw-w-2.5 tw-h-2.5 tw-rounded-full tw-border-none tw-cursor-pointer tw-transition-all tw-duration-300 ${
              i === index
                ? "tw-bg-yellow-400 tw-scale-125"
                : "tw-bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Prev / Next Controls — hidden on mobile, visible md+ */}
      <div className="tw-hidden md:tw-flex tw-absolute tw-bottom-5 tw-right-5 tw-z-10 tw-gap-2">
        <button
          onClick={handlePrev}
          className="tw-bg-white tw-text-black tw-font-bold tw-px-3 tw-py-1.5 tw-rounded tw-border-none tw-cursor-pointer tw-shadow-md hover:tw-bg-gray-100 tw-transition-colors"
          aria-label="Previous slide"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="tw-bg-yellow-400 tw-text-black tw-font-bold tw-px-3 tw-py-1.5 tw-rounded tw-border-none tw-cursor-pointer tw-shadow-md hover:tw-bg-yellow-300 tw-transition-colors"
          aria-label="Next slide"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

function RightChoiceSeo({ featuresData }) {
  return (
    <section className="tw-bg-white tw-py-20 tw-text-[#1f1e1d]">
      <Container>
        <div className="tw-text-center tw-mb-12">
          <h2 className="tw-font-bold tw-text-4xl tw-relative tw-pb-4">
            Why We're the Right Choice?
            <span className="tw-absolute tw-bottom-0 tw-left-1/2 tw--translate-x-1/2 tw-w-20 tw-h-1 tw-bg-yellow-400"></span>
          </h2>
        </div>
        <Row className="justify-content-center">
          {featuresData.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Col key={index} md={6} lg={4} className="mb-4">
                <div className="group tw-relative tw-bg-white tw-p-6 tw-rounded-lg tw-h-full hover:tw-bg-[#ffcc00] hover:tw--translate-y-2 tw-transition-all tw-duration-300 tw-ease-in-out tw-overflow-hidden">
                  <div className="tw-flex tw-items-start tw-transition-opacity tw-duration-300 group-hover:tw-opacity-0">
                    <div className="tw-mr-5 tw-flex-shrink-0">
                      <IconComponent className="tw-w-12 tw-h-12 tw-text-yellow-500" strokeWidth={1.5} />
                    </div>
                    <div className="tw-text-left">
                      <h5 className="tw-text-yellow-400 tw-font-semibold tw-text-xl tw-mb-2">{feature.title}</h5>
                      <p className="tw-text-[#1f1e1d] tw-text-base tw-mb-0">{feature.description}</p>
                    </div>
                  </div>
                  <div className="tw-absolute tw-inset-0 tw-p-6 tw-flex tw-items-center tw-justify-center tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-300">
                    <p className="tw-text-[#1f1e1d] tw-text-base tw-text-center tw-mb-0">{feature.description}</p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

function MainContentSeo(  { seoContent, cityName }) {
  const contentBlock = seoContent[0];
  const mainSection = contentBlock.sections[0];
  const otherSections = contentBlock.sections.slice(1);

  return (
    <section className="tw-bg-[#ffcc00] tw-py-16">
      <Container>
        <div className="tw-text-center tw-mb-12">
          <h2 className="tw-font-bold tw-text-4xl tw-text-gray-800">
            {mainSection.title}
          </h2>
          <div className="tw-mt-2 tw-mx-auto tw-w-24 tw-h-1 tw-bg-[#f6e6aa]"></div>
        </div>

        <Row className="tw-items-center">
          {contentBlock.image && (
            <Col md={5} className="tw-mb-8 md:tw-mb-0">
              <img
                src={contentBlock.image}
                alt={`Industrial Flowmeter Manufacturer in ${cityName}`}
                loading="lazy"
                className="tw-rounded-lg tw-shadow-lg tw-w-full"
              />
            </Col>
          )}

          <Col md={contentBlock.image ? 7 : 12}>
            {/* Paragraphs */}
            <div className="tw-space-y-4">
              {mainSection.paragraphs?.map((paragraph, pIndex) => (
                <p key={pIndex} className="tw-text-black tw-leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Bullet Points (Strengths) */}
            {mainSection.listItems && mainSection.listItems.length > 0 && (
              <div className="tw-mt-6">
                {mainSection.listTitle && (
                  <h3 className="tw-font-semibold tw-text-xl tw-text-gray-800 tw-mb-3">
                    {mainSection.listTitle}
                  </h3>
                )}
                <ul className="tw-list-disc tw-pl-6 tw-space-y-2">
                  {mainSection.listItems.map((item, index) => (
                    <li key={index} className="tw-text-black">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Closing Paragraph (AFTER points) */}
            {mainSection.closingParagraph && (
              <p className="tw-text-black tw-leading-relaxed tw-mt-6">
                {mainSection.closingParagraph}
              </p>
            )}

            {/* Other Sections (if any) */}
            {otherSections.map((section, secIndex) => (
              <div key={secIndex} className="tw-mt-8">
                <h2 className="tw-font-bold tw-text-3xl tw-text-gray-800 tw-mb-4">
                  {section.title}
                </h2>
                <div className="tw-space-y-4">
                  {section.paragraphs?.map((paragraph, pIndex) => (
                    <p key={pIndex} className="tw-text-black tw-leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function ProductsSeo() {
  const products = Object.values(productData);
  return (
    <section className="tw-bg-white tw-py-20">
      <Container>
        <div className="tw-text-center tw-mb-12">
          <h2 className="tw-font-bold tw-text-4xl tw-relative tw-pb-4">
            Our Products
            <span className="tw-absolute tw-bottom-0 tw-left-1/2 tw--translate-x-1/2 tw-w-24 tw-h-1 tw-bg-yellow-400"></span>
          </h2>
        </div>
        <Row>
          {products.map((product, index) => (
            <Col key={index} md={6} lg={4} className="tw-mb-8">
              <Link to={product.link} onClick={() => window.scrollTo(0, 0)} className="tw-block tw-group">
                <div className="tw-relative tw-overflow-hidden tw-rounded-lg tw-shadow-lg tw-aspect-video">
                  <img src={product.image} alt={product.name} loading="lazy" className="tw-w-full tw-h-full tw-object-cover tw-transition-transform tw-duration-500 tw-ease-in-out group-hover:tw-scale-110 tw-will-change-transform" />
                  <div className="tw-absolute tw-inset-0 tw-bg-black/50 tw-transition-all tw-duration-300 group-hover:tw-bg-black/70"></div>
                  <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-p-4">
                    <h5 className="tw-text-white tw-font-bold tw-text-xl tw-text-center tw-transition-transform tw-duration-300 group-hover:tw-scale-105">{product.name}</h5>
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

function OurClients() {

  const clientLogos = [
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
        <Swiper slidesPerView={4} spaceBetween={24} loop={true} autoplay={{ delay: 2000, disableOnInteraction: false }} modules={[Autoplay]} breakpoints={{ 0: { slidesPerView: 2 }, 576: { slidesPerView: 3 }, 992: { slidesPerView: 4 } }}>
          {clientLogos.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="tw-bg-white tw-rounded-xl tw-shadow-md tw-h-[300px] tw-flex tw-items-center tw-justify-center">
                <img src={src} alt="Trusted Industrial Clients of IotaFlow" className="tw-max-h-[200px] tw-max-w-[90%] tw-object-contain tw-grayscale-[20%] tw-transition-all tw-duration-300 hover:tw-grayscale-0 hover:tw-scale-105" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}

function YtSeo() {
  // Safety check (prevents crash if videos missing)
  if (!videoData?.videos || videoData.videos.length === 0) return null;

  return (
    <section className="tw-bg-gray-100 tw-py-20">
      <Container>
        <Row className="justify-content-center">
          {videoData.videos.map((video, index) => {
            if (!video.videoId) return null; // prevents blank iframe

            return (
              <Col key={index} md={10} lg={6} className="mb-4">
                <div className="tw-bg-white tw-p-3 tw-rounded-xl tw-shadow-md">
                  <div
                    className="tw-relative tw-w-full tw-overflow-hidden tw-rounded-xl"
                    style={{ paddingBottom: "56.25%" }} // 16:9 aspect ratio
                  >
                    <iframe
                      className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-rounded-xl"
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title || "Industrial Flowmeter Video"}
                      frameBorder="0"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
function Faqs({ faqs }) {
  const [activeKey, setActiveKey] = useState("-1");
  return (
    <section className="tw-py-20 tw-pb-[140px]">
      <Container>
        <h3 className="tw-text-3xl tw-font-bold tw-mb-8"><span className="tw-border-l-4 tw-border-yellow-400 tw-pl-3">FAQ’S</span></h3>
        <Accordion activeKey={activeKey} onSelect={(k) => setActiveKey(k ?? "")}>
          {faqs.map((f, idx) => {
            const key = String(idx);
            const isOpen = activeKey === key;
            return (
              <Card key={f.q} className="tw-border-2 tw-border-black tw-rounded-lg tw-mb-3 tw-overflow-hidden !tw-bg-transparent">
                <Card.Header className="!tw-p-0 !tw-border-0">
                  <CustomToggle eventKey={key} activeKey={activeKey}>{f.q}</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey={key}>
                  <Card.Body className={`!tw-p-6 ${isOpen ? 'tw-bg-black' : 'tw-bg-white'}`}>
                    <p className={`tw-text-base tw-leading-relaxed tw-m-0 ${isOpen ? 'tw-text-white' : 'tw-text-gray-700'}`}>{f.a}</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            );
          })}
        </Accordion>
      </Container>
    </section>
  );
}

// 🟢 NEW COMPONENT: Industrial Instrumentation Suppliers
function InstrumentationSuppliersSeo({ instrumentation, cityName }) {
  if (!instrumentation) return null;

  return (
    <section className="tw-bg-black tw-text-white tw-py-20">
      <Container>
        <div className="tw-max-w-4xl tw-mx-auto">
          <div className="tw-text-center tw-mb-10">
            <h2 className="tw-font-bold tw-text-3xl md:tw-text-4xl tw-mb-4">
              Industrial Instrumentation Suppliers in {cityName}
            </h2>
            <div className="tw-w-24 tw-h-1 tw-bg-yellow-400 tw-mx-auto"></div>
          </div>
          
          <div className="tw-space-y-6 tw-text-gray-300 tw-text-lg tw-leading-relaxed tw-text-center md:tw-text-left">
            {instrumentation.paragraphs?.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            {instrumentation.highlight && (
              <div className="tw-bg-white/10 tw-p-6 tw-rounded-lg tw-border-l-4 tw-border-yellow-400 tw-mt-8">
                <p className="tw-font-medium tw-text-white tw-m-0">
                  {instrumentation.highlight}
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

// 🟢 NEW COMPONENT: Product Categories
function ProductCategoriesSeo({ categoriesData }) {
  return (
    <section className="tw-bg-gray-50 tw-py-20">
      <Container>
        <div className="tw-text-center tw-mb-12">
          <h2 className="tw-font-bold tw-text-4xl tw-relative tw-pb-4 tw-text-gray-900">
            Product Categories
            <span className="tw-absolute tw-bottom-0 tw-left-1/2 tw--translate-x-1/2 tw-w-24 tw-h-1 tw-bg-yellow-400"></span>
          </h2>
        </div>
        <Row>
          {categoriesData.map((cat, idx) => (
            <Col key={idx} md={6} className="tw-mb-6">
              <div className="tw-bg-white tw-p-8 tw-rounded-xl tw-shadow-sm tw-border-l-4 tw-border-yellow-400 tw-h-full tw-transition-all tw-duration-300 hover:tw-shadow-xl hover:tw--translate-y-1">
                <h4 className="tw-font-bold tw-text-xl tw-mb-3 tw-text-black">{cat.title}</h4>
                <p className="tw-text-gray-600 tw-leading-relaxed tw-text-base m-0">{cat.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

// ====================================================================
// 🔹 MAIN COMPONENT
// ====================================================================

const SeoPage = () => {
  const { city } = useParams();

  // fallback to mumbai if invalid city
  const seoData = cityDataMap[city?.toLowerCase()] || mumbaiSeoData;

  const {
  featuresData,
  seoContent,
  categoriesData,
  faqs,
  instrumentation,
  
} = seoData;

const formattedCityName =
  (city && city.charAt(0).toUpperCase() + city.slice(1)) || "Mumbai";

const slidesWithImages = (seoData.slides || []).map((slide, index) => ({
  img: slide.img || [slide2, slide1, slide3][index % 3],
  ...slide,
}));
  return (
    <>
      <BannerSliderSeo slides={slidesWithImages} />
      <RightChoiceSeo featuresData={featuresData} />
      <MainContentSeo seoContent={seoContent} cityName={formattedCityName} />
      <ProductsSeo />
      <OurClients />
      <InstrumentationSuppliersSeo instrumentation={instrumentation} cityName={formattedCityName } />
      <ProductCategoriesSeo categoriesData={categoriesData} />
      <YtSeo />
      <Faqs faqs={faqs} />
    </>
  );
};

export default SeoPage;