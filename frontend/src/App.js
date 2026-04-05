import React, { Suspense, lazy } from "react";
import './index.css';
import "./App.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";








import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import SEO from "./Components/common/SEO";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { usePopup } from "./context/PopupContext";
import Footer from "./Components/Footer";

// ABOVE-THE-FOLD COMPONENTS (Static)
import BannerSlider from "./Components/Home/BannerSlider";
import HeroSection from "./Components/Home/HeroSection";

// LAZY-LOADED COMPONENTS
const StatsModern = lazy(() => import("./Components/Home/HomeExtra").then(m => ({ default: m.StatsModern })));
const ClientsSection = lazy(() => import("./Components/Home/HomeExtra").then(m => ({ default: m.ClientsSection })));
const MoreAboutUs = lazy(() => import("./Components/Home/HomeExtra").then(m => ({ default: m.MoreAboutUs })));
const FAQSection = lazy(() => import("./Components/Home/HomeExtra").then(m => ({ default: m.FAQSection })));
const ProductsSection = lazy(() => import("./Components/Home/ProductsSection"));
const WhyChooseUs = lazy(() => import("./Components/Home/WhyChooseUs"));
const CoreValues = lazy(() => import("./Components/Home/CoreValues"));
const OurPartners = lazy(() => import("./Components/Home/OurPartners"));

// LAZY-LOADED COMPONENTS
const Product = lazy(() => import("./Components/product"));
const ServicesPage = lazy(() => import("./Components/ServicesPage"));
const LeanResourcesPage = lazy(() => import("./Components/LeanResourcesPage"));
const AboutUsSection = lazy(() => import("./Components/aboutUs/AboutUsSection"));
const SeoPage = lazy(() => import("./pages/SeoPage"));

const Detail2 = lazy(() => import("./Components/productDetails/detail2"));
const Detail3 = lazy(() => import("./Components/productDetails/detail3"));
const Detail4 = lazy(() => import("./Components/productDetails/detail4"));
const Detail5 = lazy(() => import("./Components/productDetails/detail5"));
const Detail6 = lazy(() => import("./Components/productDetails/detail6"));
const Detail7 = lazy(() => import("./Components/productDetails/detail7"));
const Detail7b = lazy(() => import("./Components/productDetails/detail7b"));
const Detail8 = lazy(() => import("./Components/productDetails/detail8"));
const Detail9 = lazy(() => import("./Components/productDetails/detail9"));
const Detail10 = lazy(() => import("./Components/productDetails/detail10"));
const Detail11 = lazy(() => import("./Components/productDetails/detail11"));
const Detail12 = lazy(() => import("./Components/productDetails/detail12"));
const Detail13 = lazy(() => import("./Components/productDetails/detail13"));
const Detail14 = lazy(() => import("./Components/productDetails/detail14"));
const Detail15 = lazy(() => import("./Components/productDetails/detail15"));
const Detail16 = lazy(() => import("./Components/productDetails/detail16"));
const Detail17 = lazy(() => import("./Components/productDetails/detail17"));
const Detail18 = lazy(() => import("./Components/productDetails/detail18"));
const Detail19 = lazy(() => import("./Components/productDetails/detail19"));
const Detail20 = lazy(() => import("./Components/productDetails/detail20"));
const Detail21 = lazy(() => import("./Components/productDetails/detail21"));
const Detail22 = lazy(() => import("./Components/productDetails/detail22"));
const Detail23 = lazy(() => import("./Components/productDetails/detail23"));
const Detail24 = lazy(() => import("./Components/productDetails/detail24"));
const Detail25 = lazy(() => import("./Components/productDetails/detail25"));

const Product2 = lazy(() => import("./Components/product2"));
const Contact = lazy(() => import("./Components/Home/Contact"));
const IOTsensePage = lazy(() => import("./pages/IOTsensePage"));
const Accessories = lazy(() => import("./pages/Accessories"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Casestudy1 = lazy(() => import("./pages/particularCasestudies/Casestudy1"));
const Casestudy2 = lazy(() => import("./pages/particularCasestudies/Casestudy2"));
const Casestudy3 = lazy(() => import("./pages/particularCasestudies/Casestudy3"));
const Casestudy4 = lazy(() => import("./pages/particularCasestudies/Casestudy4"));
const Casestudy5 = lazy(() => import("./pages/particularCasestudies/Casestudy5"));
const Casestudy6 = lazy(() => import("./pages/particularCasestudies/Casestudy6"));
const Careers = lazy(() => import("./pages/Careers"));
const ComplaintForm = lazy(() => import("./pages/ComplaintForm"));
const ApplicationForm = lazy(() => import("./pages/ApplicationForm"));
const Certification = lazy(() => import("./pages/Certification"));
const Approval = lazy(() => import("./pages/Approval"));
const HomePopupForm = lazy(() => import("./Components/Home/HomePopupForm"));

// Sleek loading fallback
const LoadingFallback = () => (
  <div className="tw-flex tw-items-center tw-justify-center tw-min-h-screen tw-bg-white">
    <div className="tw-flex tw-flex-col tw-items-center">
      <div className="tw-w-12 tw-h-12 tw-border-4 tw-border-gray-200 tw-border-t-[#ffd700] tw-rounded-full tw-animate-spin"></div>
      <p className="tw-mt-4 tw-text-gray-500 tw-font-medium">Loading...</p>
    </div>
  </div>
);




function HomePage() {
  return (
    <>
        <SEO 
          title="Industrial Flow Meter Manufacturer in India | IOTAFLOW Systems"
          description="Leading ZED Gold Certified manufacturer of high-accuracy Electromagnetic, Vortex, and Ultrasonic flow meters. Fast 7-day delivery & IoT AMR solutions. Enquire now!"
          keywords="industrial flow meter manufacturer, electromagnetic flow meter india, vortex steam flow meter, ultrasonic water meter, digital flow meter price, IOTAFLOW systems, IoT flow monitoring, AMR data logger India, thermal mass flow meter, oil and gas flow measurement"
        />
      <BannerSlider />
      <Suspense fallback={<div className="tw-py-20 tw-text-center">Loading section...</div>}>
        <ProductsSection />
        <WhyChooseUs />
        <CoreValues />
        <OurPartners />
        <HeroSection />
        <StatsModern />
        <ClientsSection />
        <MoreAboutUs />
        <FAQSection />
      </Suspense>
    </>
  );
}

function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {

  const { isPopupOpen, closePopup } = usePopup();
  return (
    <>
      <ScrollHandler />
      {/* GLOBAL POPUP (PORTAL SAFE) */}
      <HomePopupForm
        isOpen={isPopupOpen}
        onClose={closePopup}
      />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsSection />} />
            <Route path="/about-us/certification" element={<Certification/>} />
            <Route path="/about-us/approval" element={<Approval />} />
            <Route path="/product" element={<Product />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/lean-manufacturing" element={<LeanResourcesPage />} />
            <Route path="/:city" element={<SeoPage />} />
            <Route path="/iotsense" element={<IOTsensePage />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/complaint" element={<ComplaintForm />} />
            <Route path="/application-form" element={<ApplicationForm />} />
            <Route path="/casestudies" element={<CaseStudies />} />
            <Route path="/case-studies/1" element={<Casestudy1/>} />
            <Route path="/case-studies/2" element={<Casestudy2/>} />
            <Route path="/case-studies/3" element={<Casestudy3/>} />
            <Route path="/case-studies/4" element={<Casestudy4/>} />
            <Route path="/case-studies/5" element={<Casestudy5/>} />
            <Route path="/case-studies/6" element={<Casestudy6/>} />

            {/* Product Detail Routes */}
            <Route path="/product-detail/detail2" element={<Detail2 />} />
            <Route path="/product-detail/detail3" element={<Detail3 />} />
            <Route path="/product-detail/detail4" element={<Detail4 />} />
            <Route path="/product-detail/detail5" element={<Detail5 />} />
            <Route path="/product-detail/detail6" element={<Detail6 />} />
            <Route path="/product-detail/detail7" element={<Detail7 />} />
            <Route path="/product-detail/detail7b" element={<Detail7b />} />

            <Route path="/product-detail/detail8" element={<Detail8 />} />
            <Route path="/product-detail/detail9" element={<Detail9 />} />
            <Route path="/product-detail/detail10" element={<Detail10 />} />
            <Route path="/product-detail/detail11" element={<Detail11 />} />
            <Route path="/product-detail/detail12" element={<Detail12 />} />
            <Route path="/product-detail/detail13" element={<Detail13 />} />
            <Route path="/product-detail/detail14" element={<Detail14 />} />
            <Route path="/product-detail/detail15" element={<Detail15 />} />
            <Route path="/product-detail/detail16" element={<Detail16 />} />
            <Route path="/product-detail/detail17" element={<Detail17 />} />
            <Route path="/product-detail/detail18" element={<Detail18 />} />
            <Route path="/product-detail/detail19" element={<Detail19 />} />
            <Route path="/product-detail/detail20" element={<Detail20 />} />
            <Route path="/product-detail/detail21" element={<Detail21 />} />
            <Route path="/product-detail/detail22" element={<Detail22 />} />
            <Route path="/product-detail/detail23" element={<Detail23 />} />
            <Route path="/product-detail/detail24" element={<Detail24 />} />
            <Route path="/product-detail/detail25" element={<Detail25 />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/product2" element={<Product2 />} />

            
          </Route>
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
