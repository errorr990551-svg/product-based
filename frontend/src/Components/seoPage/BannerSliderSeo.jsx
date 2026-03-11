import React, { useState } from "react";
import { Carousel, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import slide1 from "../../images/banner 25.jpg";
import slide2 from "../../images/bg2.jpg";
import slide3 from "../../images/Flow web banner  (1600 x 833 px).jpg";

function BannerSliderSeo() {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      img: slide2,
      heading: "UTILITIES are most Valuable,",
      subHeading: "When they stay INVISIBLE.",
      text: "Un-regulated / Un-Monitored utility expenses are draining your Money.",
    },
    {
      img: slide1,
      heading: "Protecting Your Reputation,",
      subHeading: "Always.",
      text: "With IOTAFLOW, you gain a lean, reliable partner ensuring accuracy, efficiency, and peace of mind in flow measurement — year after year.",
    },
    {
      img: slide3,
      heading: "Your Process is Unique,",
      subHeading: "So Are Our Solutions.",
      text: "We don’t believe in one-size-fits-all. At IOTAFLOW, every customer gets custom flow measurement solutions designed to fit their unique needs — without compromise.",
    },
  ];

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handlePrev = () => {
    setIndex(index === 0 ? slides.length - 1 : index - 1);
  };

  const handleNext = () => {
    setIndex(index === slides.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="tw-relative">
      <Carousel
        fade
        controls={false}
        indicators={false}
        interval={4000}
        pause={false}
        activeIndex={index}
        onSelect={handleSelect}
      >
        {slides.map((slide, idx) => (
          <Carousel.Item key={idx} className="!tw-h-auto">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 4, ease: "easeInOut" }}
            >
              <img
                src={slide.img}
                className="tw-block tw-w-full tw-shadow-lg tw-h-auto tw-max-h-[300px] sm:tw-max-h-[600px] tw-object-cover tw-bg-black"
                alt={`Slide ${idx}`}
              />
              {/* The Carousel.Caption is now positioned to the left and vertically centered */}
              <Carousel.Caption className="!tw-p-6 sm:!tw-p-12 md:!tw-p-24 !tw-top-1/2 !tw-left-0 !tw-right-auto !tw-bottom-auto !-tw-translate-y-1/2 !tw-text-left">
                {/* The inner div no longer has mx-auto, so it aligns left */}
                <div className="tw-bg-black/50 tw-p-7 tw-ml-10 tw-rounded-lg tw-max-w-md lg:tw-max-w-2xl tw-text-white">
                  <h1 className="tw-font-bold tw-text-yellow-400 tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl">
                    {slide.heading}
                  </h1>
                  <h2 className="tw-font-bold tw-text-white tw-text-xl sm:tw-text-2xl lg:tw-text-3xl">
                    {slide.subHeading}
                  </h2>
                  <p className="tw-text-sm sm:tw-text-base lg:tw-text-lg">
                    {slide.text}
                  </p>
                  {/* Replaced react-bootstrap Button with a standard button for full styling control */}
                  <button className="tw-hidden sm:tw-inline-block tw-relative group tw-overflow-hidden tw-border-none tw-text-lg tw-py-2 tw-px-4 tw-rounded-md tw-cursor-pointer hover:tw-scale-105 tw-transition-transform tw-duration-300 tw-bg-yellow-400 tw-text-black ">
                    <span className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-white tw-transform tw--translate-x-full group-hover:tw-translate-x-0 tw-transition-transform tw-duration-500 tw-ease-in-out tw-z-10"></span>
                    {/* The text now changes color on hover */}
                    <span className="tw-relative tw-z-20 tw-transition-colors tw-duration-300 group-hover:tw-text-yellow-500">
                      Our Products
                    </span>
                  </button>
                </div>
              </Carousel.Caption>
            </motion.div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Custom Controls */}
      <div className="tw-hidden md:tw-flex tw-absolute tw-bottom-5 tw-right-5 tw-z-10 tw-gap-2">
        <Button variant="light" onClick={handlePrev}>
          &lt;
        </Button>
        <Button variant="warning" onClick={handleNext}>
          &gt;
        </Button>
      </div>
    </div>
  );
}

export default BannerSliderSeo;