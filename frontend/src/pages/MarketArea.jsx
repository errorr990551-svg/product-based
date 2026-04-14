import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, MapPin } from "lucide-react";
import SEO from "../Components/common/SEO";

const MarketArea = () => {
  const marketData = [
    {
      state: "Andhra Pradesh",
      cities: [
        { name: "Anantapur", link: "/anantapur" },
        { name: "Chittoor", link: "/chittoor" },
        { name: "East Godavari", link: "/east-godavari" },
        { name: "Guntur", link: "/guntur" },
        { name: "Kadapa", link: "/kadapa" },
        { name: "Kakinada", link: "/kakinada" },
        { name: "Krishna", link: "/krishna" },
        { name: "Kurnool", link: "/kurnool" },
        { name: "Machilipatnam", link: "/machilipatnam" },
        { name: "Nellore", link: "/nellore" },
        { name: "Prakasam", link: "/prakasam" },
        { name: "Srikakulam", link: "/srikakulam" },
        { name: "Visakhapatnam", link: "/visakhapatnam" },
        { name: "Vizianagaram", link: "/vizianagaram" },
        { name: "West Godavari", link: "/west-godavari" },
      ],
    },
    {
      state: "Arunachal Pradesh",
      cities: [
        { name: "Itanagar", link: "/itanagar" },
        { name: "Naharlagun", link: "/naharlagun" },
        { name: "Pasighat", link: "/pasighat" },
        { name: "Tawang", link: "/tawang" },
        { name: "Ziro", link: "/ziro" },
        { name: "Aalo", link: "/aalo" },
        { name: "Tezu", link: "/tezu" },
        { name: "Namsai", link: "/namsai" },
        { name: "Roing", link: "/roing" },
        { name: "Daporijo", link: "/daporijo" },
        { name: "Bomdila", link: "/bomdila" },
        { name: "Khonsa", link: "/khonsa" },
        { name: "Seppa", link: "/seppa" },
        { name: "Changlang", link: "/changlang" },
        { name: "Yingkiong", link: "/yingkiong" },
      ],
    },
    {
      state: "Assam",
      cities: [
        { name: "Guwahati", link: "/guwahati" },
        { name: "Dibrugarh", link: "/dibrugarh" },
        { name: "Jorhat", link: "/jorhat" },
        { name: "Nagaon", link: "/nagaon" },
        { name: "Tinsukia", link: "/tinsukia" },
        { name: "Tezpur", link: "/tezpur" },
        { name: "Bongaigaon", link: "/bongaigaon" },
        { name: "Dhubri", link: "/dhubri" },
        { name: "Diphu", link: "/diphu" },
        { name: "North Lakhimpur", link: "/north-lakhimpur" },
        { name: "Sivasagar", link: "/sivasagar" },
        { name: "Goalpara", link: "/goalpara" },
        { name: "Barpeta", link: "/barpeta" },
        { name: "Golaghat", link: "/golaghat" },
      ],
    },
    {
      state: "Bihar",
      cities: [
        { name: "Patna", link: "/patna" },
        { name: "Gaya", link: "/gaya" },
        { name: "Bhagalpur", link: "/bhagalpur" },
        { name: "Muzaffarpur", link: "/muzaffarpur" },
        { name: "Purnia", link: "/purnia" },
        { name: "Darbhanga", link: "/darbhanga" },
        { name: "Bihar Sharif", link: "/bihar-sharif" },
        { name: "Arrah", link: "/arrah" },
        { name: "Begusarai", link: "/begusarai" },
        { name: "Katihar", link: "/katihar" },
        { name: "Munger", link: "/munger" },
        { name: "Chapra", link: "/chapra" },
        { name: "Saharsa", link: "/saharsa" },
        { name: "Hajipur", link: "/hajipur" },
        { name: "Sasaram", link: "/sasaram" },
      ],
    },
    {
      state: "Chhattisgarh",
      cities: [
        { name: "Raipur", link: "/raipur" },
        { name: "Bhilai-Durg", link: "/bhilai-durg" },
        { name: "Bilaspur", link: "/bilaspur" },
        { name: "Korba", link: "/korba" },
        { name: "Rajnandgaon", link: "/rajnandgaon" },
        { name: "Raigarh", link: "/raigarh" },
        { name: "Jagdalpur", link: "/jagdalpur" },
        { name: "Ambikapur", link: "/ambikapur" },
        { name: "Dhamtari", link: "/dhamtari" },
        { name: "Nava Raipur", link: "/nava-raipur" },
        { name: "Mahasamund", link: "/mahasamund" },
        { name: "Bhatapara", link: "/bhatapara" },
        { name: "Champa", link: "/champa" },
        { name: "Kawardha", link: "/kawardha" },
        { name: "Kanker", link: "/kanker" },
      ],
    },
    {
      state: "Goa",
      cities: [
        { name: "Panaji", link: "/panaji" },
        { name: "Margao", link: "/margao" },
        { name: "Mapusa", link: "/mapusa" },
        { name: "Ponda", link: "/ponda" },
        { name: "Porvorim", link: "/porvorim" },
        { name: "Verna", link: "/verna" },
        { name: "Siolim", link: "/siolim" },
        { name: "Taleigao", link: "/taleigao" },
        { name: "Sancoale", link: "/sancoale" },
        { name: "Curchorem", link: "/curchorem" },
        { name: "Bicholim", link: "/bicholim" },
        { name: "Sanquelim", link: "/sanquelim" },
        { name: "Vasco da Gama", link: "/vasco-da-gama" },
      ],
    }
  ];

  return (
    <div className="tw-min-h-screen tw-bg-gray-50 tw-font-sans">
      <SEO 
        title="Market Area | IOTAFLOW Systems"
        description="Explore the regions and cities IOTAFLOW serves across India. providing high-precision flow measurement and IoT solutions."
        keywords="IOTAFLOW cities served, industrial flow meter markets, Andhra Pradesh flow meters, Mumbai flow meter suppliers"
      />

      {/* Breadcrumb Section */}
      <div className="tw-bg-gray-100 tw-py-4">
        <div className="tw-max-w-7xl tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-8">
          <div className="tw-flex tw-items-center tw-text-sm tw-text-gray-500">
            <Link to="/" className="hover:tw-text-[#ffd700] tw-transition-colors">HOME</Link>
            <ChevronRight className="tw-w-4 tw-h-4 tw-mx-2" />
            <span className="tw-text-gray-800 tw-font-medium">MARKET AREA</span>
          </div>
        </div>
      </div>

      <div className="tw-max-w-7xl tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-8 tw-py-12">
        {/* Page Header */}
        <div className="tw-mb-10">
          <h1 className="tw-text-2xl md:tw-text-3xl tw-font-bold tw-text-gray-900">
            India Cities : We Serve
          </h1>
          <div className="tw-mt-2 tw-w-20 tw-h-1 tw-bg-[#ffd700] tw-rounded-full"></div>
        </div>

        {/* States and Cities List */}
        <div className="tw-space-y-12">
          {marketData.map((region, index) => (
            <div key={index} className="tw-animate-fade-in">
              <h2 className="tw-text-lg tw-font-bold tw-text-gray-700 tw-mb-6 tw-uppercase tw-tracking-wide">
                {region.state}
              </h2>

              <div className="tw-grid tw-grid-cols-2 sm:tw-grid-cols-3 md:tw-grid-cols-4 lg:tw-grid-cols-4 tw-gap-3">
                {region.cities.map((city, cityIndex) => (
                  <Link
                    key={cityIndex}
                    to={city.link}
                    className="tw-group tw-no-underline tw-bg-[#f8f9fa] tw-border tw-border-gray-200 tw-py-2.5 tw-px-4 tw-rounded-md tw-text-center hover:tw-bg-white hover:tw-border-[#ffd700] hover:tw-shadow-sm tw-transition-all tw-duration-200"
                  >
                    <span className="tw-text-sm tw-text-gray-600 tw-font-medium group-hover:tw-text-gray-900">
                      {city.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketArea;
