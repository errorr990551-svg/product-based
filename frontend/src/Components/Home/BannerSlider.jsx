// import React, { useState } from "react";
// import { Carousel, Button } from "react-bootstrap";
// import { motion } from "framer-motion";
// import slide1 from "../../images/banner 25.jpg";
// import slide2 from "../../images/bg2.jpg";
// import slide3 from "../../images/Website_banner.png";
// import "./BannerSlider.css";


// function BannerSlider() {
//   const [index, setIndex] = useState(0);

//   const slides = [
//     {
//       img: slide2,
//       heading: "UTILITIES are most Valuable,",
//       subHeading: "When they stay INVISIBLE.",
//       text: "Un-regulated / Un-Monitored utility expenses are draining your Money.",
//     },
//     {
//       img: slide1,
//       heading: "Protecting Your Reputation,",
//       subHeading: "Always.",
//       text: "With IOTAFLOW, you gain a lean, reliable partner ensuring accuracy, efficiency, and peace of mind in flow measurement — year after year.",
//     },
//     {
//       img: slide3,
//       heading: "Your Process is Unique,",
//       subHeading: "So Are Our Solutions.",
//       text: "We don’t believe in one-size-fits-all. At IOTAFLOW, every customer gets custom flow measurement solutions designed to fit their unique needs — without compromise.",
//     },
//   ];

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   const handlePrev = () => {
//     setIndex(index === 0 ? slides.length - 1 : index - 1);
//   };

//   const handleNext = () => {
//     setIndex(index === slides.length - 1 ? 0 : index + 1);
//   };

//   return (
//     <div className="position-relative">
//       <Carousel
//         fade
//         controls={false}
//         indicators={false}
//         interval={4000}
//         pause={false}
//         activeIndex={index}
//         onSelect={handleSelect}
//       >
//         {slides.map((slide, idx) => (
//           <Carousel.Item key={idx}>
//             <motion.div
//               initial={{ scale: 1 }}
//               animate={{ scale: 1.05 }}
//               transition={{ duration: 4, ease: "easeInOut" }}
//             >
//               <img
//                 src={slide.img}
//                 className="d-block w-100 shadow-lg banner-img"
//                 alt={`Slide ${idx}`}
//               />
//               <Carousel.Caption className="text-start mb-5">
//                 <div className="caption-bg">
//                   <h1 className="fw-bold text-warning">{slide.heading}</h1>
//                   <h2 className="fw-bold text-white">{slide.subHeading}</h2>
//                   <p className="fs-5">{slide.text}</p>
//                   <Button variant="warning" className="btnClass">
//                     <span>Our Products</span>
//                   </Button>

//                 </div>
//               </Carousel.Caption>
//             </motion.div>
//           </Carousel.Item>
//         ))}
//       </Carousel>

//       {/* Custom Controls */}
//      <div
//   className="carousel-controls d-flex d-none d-md-flex"
//   style={{
//     position: "absolute",
//     bottom: "20px",
//     right: "20px",
//     zIndex: 10,
//     gap: "8px",
//   }}
// >
//   <Button variant="light" onClick={handlePrev}>
//     &lt;
//   </Button>
//   <Button variant="warning" onClick={handleNext}>
//     &gt;
//   </Button>
// </div>
 
//     </div>
//   );
// }

// export default BannerSlider;


import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import slide1 from "../../images/banner 25.jpg";
import slide2 from "../../images/bg2.jpg";
import slide3 from "../../images/Website_banner.png";
import "./BannerSlider.css";
import { useNavigate } from "react-router-dom";
import EnquiryButton from "../common/EnquiryButton";

const slides = [
  {
    img: slide1,
    heading: "High-Precision Flow Measurement Powered by European Technology",
    subHeading: "",
    text: "Designed with German precision and manufactured in India. Delivering ±0.5% accuracy for critical industrial utilities.",
    ctaText: "View Product Range →",
    ctaLink: "/product",
    alt: "IOTAFLOW High Precision Electromagnetic Flow Meter with Digital Display for Industrial Water Measurement"
  },
  {
    img: slide2,
    heading: "",
    subHeading: "Industrial Flow Meters Delivered in Just 7 Days",
    text: "Eliminate downtime. Our Lean Manufacturing process ensures ISO-certified, factory-calibrated meters reach your site in record time.",
    ctaText: "Request a Quote →",
    ctaLink: "/contact",
    alt: "Industrial Flow Meter ready for 7-day fast delivery from IOTAFLOW Systems manufacturing unit"
  },
  {
    img: slide3,
    heading: "Your Process is Unique,",
    subHeading: "So Are Our Solutions.",
    text: "We don't believe in one-size-fits-all. At IOTAFLOW, every customer gets custom flow measurement solutions designed to fit their unique needs — without compromise.",
    ctaText: "Explore IOT Sense →",
    ctaLink: "/product",
    alt: "IOT Sense Automation Dashboard showing real-time industrial utility and flow measurement data"
  },
];

function BannerSlider() {
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
            alt={slides[index].alt || `Slide ${index + 1}`}
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
              <button onClick={() => navigate(slides[index].ctaLink || "/product")} className="btnClass tw-hidden sm:tw-inline-block tw-bg-yellow-400 tw-text-black tw-font-semibold tw-text-[1.1rem] tw-px-5 tw-py-[10px] tw-rounded-md tw-border-none tw-cursor-pointer tw-overflow-hidden tw-relative">
                <span>{slides[index].ctaText || "Our Products"}</span>
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

export default BannerSlider;
