import React, { Suspense, lazy } from "react";
import './index.css';
import "./App.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";








import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { usePopup } from "./context/PopupContext";
import { load } from "./preloadRoute";
import Footer from "./Components/Footer";

// ABOVE-THE-FOLD COMPONENTS (Static)
import BannerSlider from "./Components/Home/BannerSlider";
import HeroSection from "./Components/Home/HeroSection";

// LAZY-LOADED COMPONENTS
const StatsModern = lazy(() => load["./Components/Home/HomeExtra"]().then(m => ({ default: m.StatsModern })));
const ClientsSection = lazy(() => load["./Components/Home/HomeExtra"]().then(m => ({ default: m.ClientsSection })));
const MoreAboutUs = lazy(() => load["./Components/Home/HomeExtra"]().then(m => ({ default: m.MoreAboutUs })));
const FAQSection = lazy(() => load["./Components/Home/HomeExtra"]().then(m => ({ default: m.FAQSection })));
const ProductsSection = lazy(() => load["./Components/Home/ProductsSection"]());
const WhyChooseUs = lazy(() => load["./Components/Home/WhyChooseUs"]());
const CoreValues = lazy(() => load["./Components/Home/CoreValues"]());
const OurPartners = lazy(() => load["./Components/Home/OurPartners"]());

// LAZY-LOADED COMPONENTS
const Product = lazy(() => load["./Components/product"]());
const ServicesPage = lazy(() => load["./Components/ServicesPage"]());
const LeanResourcesPage = lazy(() => load["./Components/LeanResourcesPage"]());
const AboutUsSection = lazy(() => load["./Components/aboutUs/AboutUsSection"]());
const SeoPage = lazy(() => load["./pages/SeoPage"]());
const MarketArea = lazy(() => load["./pages/MarketArea"]());

const Detail2 = lazy(() => load["./Components/productDetails/detail2"]());
const Detail3 = lazy(() => load["./Components/productDetails/detail3"]());
const Detail4 = lazy(() => load["./Components/productDetails/detail4"]());
const Detail5 = lazy(() => load["./Components/productDetails/detail5"]());
const Detail6 = lazy(() => load["./Components/productDetails/detail6"]());
const Detail7 = lazy(() => load["./Components/productDetails/detail7"]());
const Detail7b = lazy(() => load["./Components/productDetails/detail7b"]());
const Detail8 = lazy(() => load["./Components/productDetails/detail8"]());
const Detail9 = lazy(() => load["./Components/productDetails/detail9"]());
const Detail10 = lazy(() => load["./Components/productDetails/detail10"]());
const Detail11 = lazy(() => load["./Components/productDetails/detail11"]());
const Detail12 = lazy(() => load["./Components/productDetails/detail12"]());
const Detail13 = lazy(() => load["./Components/productDetails/detail13"]());
const Detail14 = lazy(() => load["./Components/productDetails/detail14"]());
const Detail15 = lazy(() => load["./Components/productDetails/detail15"]());
const Detail16 = lazy(() => load["./Components/productDetails/detail16"]());
const Detail17 = lazy(() => load["./Components/productDetails/detail17"]());
const Detail18 = lazy(() => load["./Components/productDetails/detail18"]());
const Detail19 = lazy(() => load["./Components/productDetails/detail19"]());
const Detail20 = lazy(() => load["./Components/productDetails/detail20"]());
const Detail21 = lazy(() => load["./Components/productDetails/detail21"]());
const Detail22 = lazy(() => load["./Components/productDetails/detail22"]());
const Detail23 = lazy(() => load["./Components/productDetails/detail23"]());
const Detail24 = lazy(() => load["./Components/productDetails/detail24"]());
const Detail25 = lazy(() => load["./Components/productDetails/detail25"]());
const Detail26 = lazy(() => load["./Components/productDetails/detail26"]());

const Product2 = lazy(() => load["./Components/product2"]());
const Contact = lazy(() => load["./Components/Home/Contact"]());
const IOTsensePage = lazy(() => load["./pages/IOTsensePage"]());
const Accessories = lazy(() => load["./pages/Accessories"]());
const CaseStudies = lazy(() => load["./pages/CaseStudies"]());
const Casestudy1 = lazy(() => load["./pages/particularCasestudies/Casestudy1"]());
const Casestudy2 = lazy(() => load["./pages/particularCasestudies/Casestudy2"]());
const Casestudy3 = lazy(() => load["./pages/particularCasestudies/Casestudy3"]());
const Casestudy4 = lazy(() => load["./pages/particularCasestudies/Casestudy4"]());
const Casestudy5 = lazy(() => load["./pages/particularCasestudies/Casestudy5"]());
const Casestudy6 = lazy(() => load["./pages/particularCasestudies/Casestudy6"]());
const Careers = lazy(() => load["./pages/Careers"]());
const ComplaintForm = lazy(() => load["./pages/ComplaintForm"]());
const ApplicationForm = lazy(() => load["./pages/ApplicationForm"]());
const Certification = lazy(() => load["./pages/Certification"]());
const Approval = lazy(() => load["./pages/Approval"]());
const FlowCalculator = lazy(() => load["./pages/FlowCalculator"]());
const HomePopupForm = lazy(() => load["./Components/Home/HomePopupForm"]());
const NotFound = lazy(() => load["./pages/NotFound"]());

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

  const { isPopupOpen, closePopup, popupPurpose } = usePopup();
  return (
    <>
      <ScrollHandler />
      {/* GLOBAL POPUP (PORTAL SAFE) */}
      <HomePopupForm
        isOpen={isPopupOpen}
        onClose={closePopup}
        purpose={popupPurpose}
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
            <Route path="/iotsense" element={<IOTsensePage />} />
            <Route path="/iotSense" element={<Navigate to="/iotsense" replace />} />
            <Route path="/IOTsense" element={<Navigate to="/iotsense" replace />} />
            <Route path="/Iotsense" element={<Navigate to="/iotsense" replace />} />
            <Route path="/iot-sense" element={<Navigate to="/iotsense" replace />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/complaint" element={<ComplaintForm />} />
            <Route path="/application-form" element={<ApplicationForm />} />
            <Route path="/casestudies" element={<CaseStudies />} />
            <Route path="/flow-calculator" element={<FlowCalculator />} />
            <Route path="/calculator" element={<Navigate to="/flow-calculator" replace />} />
            <Route path="/velocity-calculator" element={<Navigate to="/flow-calculator" replace />} />
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
            <Route path="/product-detail/detail26" element={<Detail26 />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/product2" element={<Product2 />} />

            <Route path="/market-area" element={<MarketArea />} />
            <Route path="/:city" element={<SeoPage />} />
            <Route path="*" element={<NotFound />} />


            
          </Route>
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
