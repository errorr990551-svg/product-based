// Downloads the code for the page being opened BEFORE React starts, so the
// pre-rendered HTML stays on screen instead of being replaced by a
// "Loading..." placeholder (that swap caused big layout shifts / bad CLS).
// Paths must match the lazy() imports in App.js.

const always = () => [import("./Components/Home/HomePopupForm")];

const exact = {
  "/": () => [import("./Components/Home/CoreValues"), import("./Components/Home/HomeExtra"), import("./Components/Home/OurPartners"), import("./Components/Home/ProductsSection"), import("./Components/Home/WhyChooseUs")],
  "/about-us": () => [import("./Components/aboutUs/AboutUsSection")],
  "/about-us/certification": () => [import("./pages/Certification")],
  "/about-us/approval": () => [import("./pages/Approval")],
  "/product": () => [import("./Components/product")],
  "/services": () => [import("./Components/ServicesPage")],
  "/lean-manufacturing": () => [import("./Components/LeanResourcesPage")],
  "/iotsense": () => [import("./pages/IOTsensePage")],
  "/accessories": () => [import("./pages/Accessories")],
  "/careers": () => [import("./pages/Careers")],
  "/complaint": () => [import("./pages/ComplaintForm")],
  "/application-form": () => [import("./pages/ApplicationForm")],
  "/casestudies": () => [import("./pages/CaseStudies")],
  "/flow-calculator": () => [import("./pages/FlowCalculator")],
  "/case-studies/1": () => [import("./pages/particularCasestudies/Casestudy1")],
  "/case-studies/2": () => [import("./pages/particularCasestudies/Casestudy2")],
  "/case-studies/3": () => [import("./pages/particularCasestudies/Casestudy3")],
  "/case-studies/4": () => [import("./pages/particularCasestudies/Casestudy4")],
  "/case-studies/5": () => [import("./pages/particularCasestudies/Casestudy5")],
  "/case-studies/6": () => [import("./pages/particularCasestudies/Casestudy6")],
  "/product-detail/detail2": () => [import("./Components/productDetails/detail2")],
  "/product-detail/detail3": () => [import("./Components/productDetails/detail3")],
  "/product-detail/detail4": () => [import("./Components/productDetails/detail4")],
  "/product-detail/detail5": () => [import("./Components/productDetails/detail5")],
  "/product-detail/detail6": () => [import("./Components/productDetails/detail6")],
  "/product-detail/detail7": () => [import("./Components/productDetails/detail7")],
  "/product-detail/detail7b": () => [import("./Components/productDetails/detail7b")],
  "/product-detail/detail8": () => [import("./Components/productDetails/detail8")],
  "/product-detail/detail9": () => [import("./Components/productDetails/detail9")],
  "/product-detail/detail10": () => [import("./Components/productDetails/detail10")],
  "/product-detail/detail11": () => [import("./Components/productDetails/detail11")],
  "/product-detail/detail12": () => [import("./Components/productDetails/detail12")],
  "/product-detail/detail13": () => [import("./Components/productDetails/detail13")],
  "/product-detail/detail14": () => [import("./Components/productDetails/detail14")],
  "/product-detail/detail15": () => [import("./Components/productDetails/detail15")],
  "/product-detail/detail16": () => [import("./Components/productDetails/detail16")],
  "/product-detail/detail17": () => [import("./Components/productDetails/detail17")],
  "/product-detail/detail18": () => [import("./Components/productDetails/detail18")],
  "/product-detail/detail19": () => [import("./Components/productDetails/detail19")],
  "/product-detail/detail20": () => [import("./Components/productDetails/detail20")],
  "/product-detail/detail21": () => [import("./Components/productDetails/detail21")],
  "/product-detail/detail22": () => [import("./Components/productDetails/detail22")],
  "/product-detail/detail23": () => [import("./Components/productDetails/detail23")],
  "/product-detail/detail24": () => [import("./Components/productDetails/detail24")],
  "/product-detail/detail25": () => [import("./Components/productDetails/detail25")],
  "/product-detail/detail26": () => [import("./Components/productDetails/detail26")],
  "/contact": () => [import("./Components/Home/Contact")],
  "/product2": () => [import("./Components/product2")],
  "/market-area": () => [import("./pages/MarketArea")],
};

export default function preloadRoute(pathname) {
  const path = (pathname || "/").replace(/\/+$/, "").toLowerCase() || "/";
  let loader = exact[path];
  if (!loader) {
    // Any other single-segment URL is a city page (/:city); everything else is 404.
    loader = /^\/[^/]+$/.test(path)
      ? () => [import("./pages/SeoPage")]
      : () => [import("./pages/NotFound")];
  }
  const timeout = new Promise((resolve) => setTimeout(resolve, 4000));
  return Promise.race([Promise.all([...always(), ...loader()]), timeout]).catch(() => {});
}
