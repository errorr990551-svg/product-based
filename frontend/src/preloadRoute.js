import { loadCity } from "./data/cityLoaders";

// Downloads the code for the page being opened BEFORE React starts, so the
// pre-rendered HTML stays on screen instead of being replaced by a
// "Loading..." placeholder (that swap caused big layout shifts / bad CLS).
// Paths must match the lazy() imports in App.js.

// One shared, memoised loader per lazily-loaded file. preloadRoute() and the
// lazy() components in App.js use the SAME loader, and once a file has been
// downloaded the loader hands it back synchronously, so React renders it
// straight away instead of briefly showing the "Loading..." fallback
// (that flash caused a big layout shift on slower connections).
const resolved = (value) => ({
  then(onFulfilled) {
    return resolved(onFulfilled ? onFulfilled(value) : value);
  },
});
const memo = (factory) => {
  let mod;
  let pending;
  return () => {
    if (mod) return resolved(mod);
    if (!pending) {
      pending = factory().then(
        (m) => (mod = m),
        (err) => {
          pending = undefined; // allow a retry after a failed download
          throw err;
        }
      );
    }
    return pending;
  };
};

export const load = {
  "./Components/Home/Contact": memo(() => import("./Components/Home/Contact")),
  "./Components/Home/CoreValues": memo(() => import("./Components/Home/CoreValues")),
  "./Components/Home/HomeExtra": memo(() => import("./Components/Home/HomeExtra")),
  "./Components/Home/HomePopupForm": memo(() => import("./Components/Home/HomePopupForm")),
  "./Components/Home/OurPartners": memo(() => import("./Components/Home/OurPartners")),
  "./Components/Home/ProductsSection": memo(() => import("./Components/Home/ProductsSection")),
  "./Components/Home/WhyChooseUs": memo(() => import("./Components/Home/WhyChooseUs")),
  "./Components/LeanResourcesPage": memo(() => import("./Components/LeanResourcesPage")),
  "./Components/ServicesPage": memo(() => import("./Components/ServicesPage")),
  "./Components/aboutUs/AboutUsSection": memo(() => import("./Components/aboutUs/AboutUsSection")),
  "./Components/product": memo(() => import("./Components/product")),
  "./Components/product2": memo(() => import("./Components/product2")),
  "./Components/productDetails/detail10": memo(() => import("./Components/productDetails/detail10")),
  "./Components/productDetails/detail11": memo(() => import("./Components/productDetails/detail11")),
  "./Components/productDetails/detail12": memo(() => import("./Components/productDetails/detail12")),
  "./Components/productDetails/detail13": memo(() => import("./Components/productDetails/detail13")),
  "./Components/productDetails/detail14": memo(() => import("./Components/productDetails/detail14")),
  "./Components/productDetails/detail15": memo(() => import("./Components/productDetails/detail15")),
  "./Components/productDetails/detail16": memo(() => import("./Components/productDetails/detail16")),
  "./Components/productDetails/detail17": memo(() => import("./Components/productDetails/detail17")),
  "./Components/productDetails/detail18": memo(() => import("./Components/productDetails/detail18")),
  "./Components/productDetails/detail19": memo(() => import("./Components/productDetails/detail19")),
  "./Components/productDetails/detail2": memo(() => import("./Components/productDetails/detail2")),
  "./Components/productDetails/detail20": memo(() => import("./Components/productDetails/detail20")),
  "./Components/productDetails/detail21": memo(() => import("./Components/productDetails/detail21")),
  "./Components/productDetails/detail22": memo(() => import("./Components/productDetails/detail22")),
  "./Components/productDetails/detail23": memo(() => import("./Components/productDetails/detail23")),
  "./Components/productDetails/detail24": memo(() => import("./Components/productDetails/detail24")),
  "./Components/productDetails/detail25": memo(() => import("./Components/productDetails/detail25")),
  "./Components/productDetails/detail26": memo(() => import("./Components/productDetails/detail26")),
  "./Components/productDetails/detail3": memo(() => import("./Components/productDetails/detail3")),
  "./Components/productDetails/detail4": memo(() => import("./Components/productDetails/detail4")),
  "./Components/productDetails/detail5": memo(() => import("./Components/productDetails/detail5")),
  "./Components/productDetails/detail6": memo(() => import("./Components/productDetails/detail6")),
  "./Components/productDetails/detail7": memo(() => import("./Components/productDetails/detail7")),
  "./Components/productDetails/detail7b": memo(() => import("./Components/productDetails/detail7b")),
  "./Components/productDetails/detail8": memo(() => import("./Components/productDetails/detail8")),
  "./Components/productDetails/detail9": memo(() => import("./Components/productDetails/detail9")),
  "./pages/Accessories": memo(() => import("./pages/Accessories")),
  "./pages/ApplicationForm": memo(() => import("./pages/ApplicationForm")),
  "./pages/Approval": memo(() => import("./pages/Approval")),
  "./pages/Careers": memo(() => import("./pages/Careers")),
  "./pages/CaseStudies": memo(() => import("./pages/CaseStudies")),
  "./pages/Certification": memo(() => import("./pages/Certification")),
  "./pages/ComplaintForm": memo(() => import("./pages/ComplaintForm")),
  "./pages/FlowCalculator": memo(() => import("./pages/FlowCalculator")),
  "./pages/IOTsensePage": memo(() => import("./pages/IOTsensePage")),
  "./pages/MarketArea": memo(() => import("./pages/MarketArea")),
  "./pages/NotFound": memo(() => import("./pages/NotFound")),
  "./pages/SeoPage": memo(() => import("./pages/SeoPage")),
  "./pages/particularCasestudies/Casestudy1": memo(() => import("./pages/particularCasestudies/Casestudy1")),
  "./pages/particularCasestudies/Casestudy2": memo(() => import("./pages/particularCasestudies/Casestudy2")),
  "./pages/particularCasestudies/Casestudy3": memo(() => import("./pages/particularCasestudies/Casestudy3")),
  "./pages/particularCasestudies/Casestudy4": memo(() => import("./pages/particularCasestudies/Casestudy4")),
  "./pages/particularCasestudies/Casestudy5": memo(() => import("./pages/particularCasestudies/Casestudy5")),
  "./pages/particularCasestudies/Casestudy6": memo(() => import("./pages/particularCasestudies/Casestudy6")),
};

const always = () => [load["./Components/Home/HomePopupForm"]()];

const exact = {
  "/": () => [load["./Components/Home/CoreValues"](), load["./Components/Home/HomeExtra"](), load["./Components/Home/OurPartners"](), load["./Components/Home/ProductsSection"](), load["./Components/Home/WhyChooseUs"]()],
  "/about-us": () => [load["./Components/aboutUs/AboutUsSection"]()],
  "/about-us/certification": () => [load["./pages/Certification"]()],
  "/about-us/approval": () => [load["./pages/Approval"]()],
  "/product": () => [load["./Components/product"]()],
  "/services": () => [load["./Components/ServicesPage"]()],
  "/lean-manufacturing": () => [load["./Components/LeanResourcesPage"]()],
  "/iotsense": () => [load["./pages/IOTsensePage"]()],
  "/accessories": () => [load["./pages/Accessories"]()],
  "/careers": () => [load["./pages/Careers"]()],
  "/complaint": () => [load["./pages/ComplaintForm"]()],
  "/application-form": () => [load["./pages/ApplicationForm"]()],
  "/casestudies": () => [load["./pages/CaseStudies"]()],
  "/flow-calculator": () => [load["./pages/FlowCalculator"]()],
  "/case-studies/1": () => [load["./pages/particularCasestudies/Casestudy1"]()],
  "/case-studies/2": () => [load["./pages/particularCasestudies/Casestudy2"]()],
  "/case-studies/3": () => [load["./pages/particularCasestudies/Casestudy3"]()],
  "/case-studies/4": () => [load["./pages/particularCasestudies/Casestudy4"]()],
  "/case-studies/5": () => [load["./pages/particularCasestudies/Casestudy5"]()],
  "/case-studies/6": () => [load["./pages/particularCasestudies/Casestudy6"]()],
  "/product-detail/detail2": () => [load["./Components/productDetails/detail2"]()],
  "/product-detail/detail3": () => [load["./Components/productDetails/detail3"]()],
  "/product-detail/detail4": () => [load["./Components/productDetails/detail4"]()],
  "/product-detail/detail5": () => [load["./Components/productDetails/detail5"]()],
  "/product-detail/detail6": () => [load["./Components/productDetails/detail6"]()],
  "/product-detail/detail7": () => [load["./Components/productDetails/detail7"]()],
  "/product-detail/detail7b": () => [load["./Components/productDetails/detail7b"]()],
  "/product-detail/detail8": () => [load["./Components/productDetails/detail8"]()],
  "/product-detail/detail9": () => [load["./Components/productDetails/detail9"]()],
  "/product-detail/detail10": () => [load["./Components/productDetails/detail10"]()],
  "/product-detail/detail11": () => [load["./Components/productDetails/detail11"]()],
  "/product-detail/detail12": () => [load["./Components/productDetails/detail12"]()],
  "/product-detail/detail13": () => [load["./Components/productDetails/detail13"]()],
  "/product-detail/detail14": () => [load["./Components/productDetails/detail14"]()],
  "/product-detail/detail15": () => [load["./Components/productDetails/detail15"]()],
  "/product-detail/detail16": () => [load["./Components/productDetails/detail16"]()],
  "/product-detail/detail17": () => [load["./Components/productDetails/detail17"]()],
  "/product-detail/detail18": () => [load["./Components/productDetails/detail18"]()],
  "/product-detail/detail19": () => [load["./Components/productDetails/detail19"]()],
  "/product-detail/detail20": () => [load["./Components/productDetails/detail20"]()],
  "/product-detail/detail21": () => [load["./Components/productDetails/detail21"]()],
  "/product-detail/detail22": () => [load["./Components/productDetails/detail22"]()],
  "/product-detail/detail23": () => [load["./Components/productDetails/detail23"]()],
  "/product-detail/detail24": () => [load["./Components/productDetails/detail24"]()],
  "/product-detail/detail25": () => [load["./Components/productDetails/detail25"]()],
  "/product-detail/detail26": () => [load["./Components/productDetails/detail26"]()],
  "/contact": () => [load["./Components/Home/Contact"]()],
  "/product2": () => [load["./Components/product2"]()],
  "/market-area": () => [load["./pages/MarketArea"]()],
};

export default function preloadRoute(pathname) {
  const path = (pathname || "/").replace(/\/+$/, "").toLowerCase() || "/";
  let loader = exact[path];
  if (!loader) {
    // Any other single-segment URL is a city page (/:city); everything else is 404.
    loader = /^\/[^/]+$/.test(path)
      ? () => [load["./pages/SeoPage"](), loadCity(path.slice(1))]
      : () => [load["./pages/NotFound"]()];
  }
  const timeout = new Promise((resolve) => setTimeout(resolve, 4000));
  return Promise.race([Promise.all([...always(), ...loader()]), timeout]).catch(() => {});
}
