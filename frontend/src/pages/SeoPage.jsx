import React, { useEffect, useState, useCallback } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import SEO from "../Components/common/SEO";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Row, Col, Carousel, Button, Accordion, useAccordionButton, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import EnquiryButton from '../Components/common/EnquiryButton';
import { mumbaiSeoData, delhiSeoData, hyderabadSeoData, chennaiSeoData, anantapurSeoData } from "../data/citySeoData";
import { bengaluruSeoData } from "../data/cities/bengaluru";
import { udupiSeoData } from "../data/cities/udupi";
import { bidarSeoData } from "../data/cities/bidar";
import { hospetSeoData } from "../data/cities/hospet";
import { shivamoggaSeoData } from "../data/cities/shivamogga";
import { vijayapuraSeoData } from "../data/cities/vijayapura";
import { hassanSeoData } from "../data/cities/hassan";
import { gadagBetageriSeoData } from "../data/cities/gadag-betageri";
import { tumakuruSeoData } from "../data/cities/tumakuru";
import { davanagereSeoData } from "../data/cities/davanagere";
import { ballariSeoData } from "../data/cities/ballari";
import { kalaburagiSeoData } from "../data/cities/kalaburagi";
import { belagaviSeoData } from "../data/cities/belagavi";
import { mangaluruSeoData } from "../data/cities/mangaluru";
import { hubballiDharwadSeoData } from "../data/cities/hubballi-dharwad";
import { chittoorSeoData } from "../data/cities/chittoor";
import { eastGodavariSeoData } from "../data/cities/east-godavari";
import { gunturSeoData } from "../data/cities/guntur";
import { kadapaSeoData } from "../data/cities/kadapa";
import { kakinadaSeoData } from "../data/cities/kakinada";
import { krishnaSeoData } from "../data/cities/krishna";
import { kurnoolSeoData } from "../data/cities/kurnool";
import { machilipatnamSeoData } from "../data/cities/machilipatnam";
import { nelloreSeoData } from "../data/cities/nellore";
import { prakasamSeoData } from "../data/cities/prakasam";
import { srikakulamSeoData } from "../data/cities/srikakulam";
import { visakhapatnamSeoData } from "../data/cities/visakhapatnam";
import { vizianagaramSeoData } from "../data/cities/vizianagaram";
import { westGodavariSeoData } from "../data/cities/west-godavari";
import { itanagarSeoData } from "../data/cities/itanagar";
import { naharlagunSeoData } from "../data/cities/naharlagun";
import { pasighatSeoData } from "../data/cities/pasighat";
import { tawangSeoData } from "../data/cities/tawang";
import { ziroSeoData } from "../data/cities/ziro";
import { aaloSeoData } from "../data/cities/aalo";
import { tezuSeoData } from "../data/cities/tezu";
import { namsaiSeoData } from "../data/cities/namsai";
import { roingSeoData } from "../data/cities/roing";
import { daporijoSeoData } from "../data/cities/daporijo";
import { bomdilaSeoData } from "../data/cities/bomdila";
import { khonsaSeoData } from "../data/cities/khonsa";
import { seppaSeoData } from "../data/cities/seppa";
import { changlangSeoData } from "../data/cities/changlang";
import { yingkiongSeoData } from "../data/cities/yingkiong";
import { guwahatiSeoData } from "../data/cities/guwahati";
import { dibrugarhSeoData } from "../data/cities/dibrugarh";
import { jorhatSeoData } from "../data/cities/jorhat";
import { nagaonSeoData } from "../data/cities/nagaon";
import { tinsukiaSeoData } from "../data/cities/tinsukia";
import { tezpurSeoData } from "../data/cities/tezpur";
import { bongaigaonSeoData } from "../data/cities/bongaigaon";
import { dhubriSeoData } from "../data/cities/dhubri";
import { diphuSeoData } from "../data/cities/diphu";
import { northLakhimpurSeoData } from "../data/cities/north-lakhimpur";
import { sivasagarSeoData } from "../data/cities/sivasagar";
import { goalparaSeoData } from "../data/cities/goalpara";
import { barpetaSeoData } from "../data/cities/barpeta";
import { golaghatSeoData } from "../data/cities/golaghat";
import { patnaSeoData } from "../data/cities/patna";
import { gayaSeoData } from "../data/cities/gaya";
import { bhagalpurSeoData } from "../data/cities/bhagalpur";
import { muzaffarpurSeoData } from "../data/cities/muzaffarpur";
import { purniaSeoData } from "../data/cities/purnia";
import { darbhangaSeoData } from "../data/cities/darbhanga";
import { biharSharifSeoData } from "../data/cities/bihar-sharif";
import { arrahSeoData } from "../data/cities/arrah";
import { begusaraiSeoData } from "../data/cities/begusarai";
import { katiharSeoData } from "../data/cities/katihar";
import { mungerSeoData } from "../data/cities/munger";
import { chapraSeoData } from "../data/cities/chapra";
import { saharsaSeoData } from "../data/cities/saharsa";
import { hajipurSeoData } from "../data/cities/hajipur";
import { sasaramSeoData } from "../data/cities/sasaram";
import { raipurSeoData } from "../data/cities/raipur";
import { bhilaiDurgSeoData } from "../data/cities/bhilai-durg";
import { bilaspurSeoData } from "../data/cities/bilaspur";
import { korbaSeoData } from "../data/cities/korba";
import { rajnandgaonSeoData } from "../data/cities/rajnandgaon";
import { raigarhSeoData } from "../data/cities/raigarh";
import { jagdalpurSeoData } from "../data/cities/jagdalpur";
import { ambikapurSeoData } from "../data/cities/ambikapur";
import { dhamtariSeoData } from "../data/cities/dhamtari";
import { navaRaipurSeoData } from "../data/cities/nava-raipur";
import { mahasamundSeoData } from "../data/cities/mahasamund";
import { bhataparaSeoData } from "../data/cities/bhatapara";
import { champaSeoData } from "../data/cities/champa";
import { kawardhaSeoData } from "../data/cities/kawardha";
import { kankerSeoData } from "../data/cities/kanker";
import { panajiSeoData } from "../data/cities/panaji";
import { margaoSeoData } from "../data/cities/margao";
import { mapusaSeoData } from "../data/cities/mapusa";
import { pondaSeoData } from "../data/cities/ponda";
import { porvorimSeoData } from "../data/cities/porvorim";
import { vernaSeoData } from "../data/cities/verna";
import { siolimSeoData } from "../data/cities/siolim";
import { taleigaoSeoData } from "../data/cities/taleigao";
import { sancoaleSeoData } from "../data/cities/sancoale";
import { curchoremSeoData } from "../data/cities/curchorem";
import { bicholimSeoData } from "../data/cities/bicholim";
import { sanquelimSeoData } from "../data/cities/sanquelim";
import { vascoDaGamaSeoData } from "../data/cities/vasco-da-gama";
import { mehsanaSeoData } from "../data/cities/mehsana";
import { bharuchSeoData } from "../data/cities/bharuch";
import { nadiadSeoData } from "../data/cities/nadiad";
import { gandhidhamSeoData } from "../data/cities/gandhidham";
import { morbiSeoData } from "../data/cities/morbi";
import { navsariSeoData } from "../data/cities/navsari";
import { anandSeoData } from "../data/cities/anand";
import { gandhinagarSeoData } from "../data/cities/gandhinagar";
import { junagadhSeoData } from "../data/cities/junagadh";
import { jamnagarSeoData } from "../data/cities/jamnagar";
import { bhavnagarSeoData } from "../data/cities/bhavnagar";
import { rajkotSeoData } from "../data/cities/rajkot";
import { vadodaraSeoData } from "../data/cities/vadodara";
import { suratSeoData } from "../data/cities/surat";
import { ahmedabadSeoData } from "../data/cities/ahmedabad";
import { manaliSeoData } from "../data/cities/manali";
import { bilaspurHpSeoData } from "../data/cities/bilaspur-hp";
import { hamirpurSeoData } from "../data/cities/hamirpur";
import { kulluSeoData } from "../data/cities/kullu";
import { unaSeoData } from "../data/cities/una";
import { chambaSeoData } from "../data/cities/chamba";
import { sundernagarSeoData } from "../data/cities/sundernagar";
import { paontaSahibSeoData } from "../data/cities/paonta-sahib";
import { nahanSeoData } from "../data/cities/nahan";
import { baddiSeoData } from "../data/cities/baddi";
import { palampurSeoData } from "../data/cities/palampur";
import { mandiSeoData } from "../data/cities/mandi";
import { solanSeoData } from "../data/cities/solan";
import { dharamshalaSeoData } from "../data/cities/dharamshala";
import { shimlaSeoData } from "../data/cities/shimla";
import { gumlaSeoData } from "../data/cities/gumla";
import { lohardagaSeoData } from "../data/cities/lohardaga";
import { chaibasaSeoData } from "../data/cities/chaibasa";
import { sahibganjSeoData } from "../data/cities/sahibganj";
import { giridihSeoData } from "../data/cities/giridih";
import { ramgarhSeoData } from "../data/cities/ramgarh";
import { medininagarSeoData } from "../data/cities/medininagar";
import { deogharSeoData } from "../data/cities/deoghar";
import { hazaribaghSeoData } from "../data/cities/hazaribagh";
import { phusroSeoData } from "../data/cities/phusro";
import { bokaroSteelCitySeoData } from "../data/cities/bokaro-steel-city";
import { mangoSeoData } from "../data/cities/mango";
import { dhanbadSeoData } from "../data/cities/dhanbad";
import { ranchiSeoData } from "../data/cities/ranchi";
import { jamshedpurSeoData } from "../data/cities/jamshedpur";
import { greaterKochiSeoData } from "../data/cities/greater-kochi";
import { trivandrumSeoData } from "../data/cities/trivandrum";
import { kochiSeoData } from "../data/cities/kochi";
import { kozhikodeSeoData } from "../data/cities/kozhikode";
import { thrissurSeoData } from "../data/cities/thrissur";
import { kollamSeoData } from "../data/cities/kollam";
import { kannurSeoData } from "../data/cities/kannur";
import { malappuramSeoData } from "../data/cities/malappuram";
import { palakkadSeoData } from "../data/cities/palakkad";
import { alappuzhaSeoData } from "../data/cities/alappuzha";
import { kottayamSeoData } from "../data/cities/kottayam";
import { kasaragodSeoData } from "../data/cities/kasaragod";
import { kanhangadSeoData } from "../data/cities/kanhangad";
import { thodupuzhaSeoData } from "../data/cities/thodupuzha";
import { pathanamthittaSeoData } from "../data/cities/pathanamthitta";
import { hoshangabadSeoData } from "../data/cities/hoshangabad";
import { damohSeoData } from "../data/cities/damoh";
import { chhindwaraSeoData } from "../data/cities/chhindwara";
import { rewaSeoData } from "../data/cities/rewa";
import { ratlamSeoData } from "../data/cities/ratlam";
import { satnaSeoData } from "../data/cities/satna";
import { sagarSeoData } from "../data/cities/sagar";
import { dewasSeoData } from "../data/cities/dewas";
import { katniSeoData } from "../data/cities/katni";
import { pithampurSeoData } from "../data/cities/pithampur";
import { ujjainSeoData } from "../data/cities/ujjain";
import { gwaliorSeoData } from "../data/cities/gwalior";
import { jabalpurSeoData } from "../data/cities/jabalpur";
import { bhopalSeoData } from "../data/cities/bhopal";
import { indoreSeoData } from "../data/cities/indore";

// ====================================================================
// 🟢 IMAGE PLACEHOLDERS (Replace these with your real imports)
// ====================================================================
import slide1 from "../images/banner 25.webp";
import slide2 from "../images/bg2.webp";
import slide3 from "../images/Flow web banner  (1600 x 833 px).webp";

/* === Import every logo that lives under src/images (put correct cases!) === */
import adani from "../images/adani.webp";
import cairn from "../images/Cairn.webp";
import client2 from "../images/client2.webp";
import client3 from "../images/client3.webp";
import client4_1 from "../images/client4 (1).webp";
import client4_180 from "../images/client4-180x96.webp";
import client5_180 from "../images/client5-180x96.webp";
import client5 from "../images/client5.webp";
import client6_180 from "../images/client6-180x96.webp";
import client6 from "../images/client6.webp";
import client7_180 from "../images/client7-180x96.webp";
import client8_180 from "../images/client8-180x96.webp";
import client8 from "../images/client8.webp";
import client9_180 from "../images/client9-180x96.webp";
import client10_180 from "../images/client10-180x96.webp";
import client11_180 from "../images/client11-180x96.webp";
import client12_180 from "../images/client12-180x96.webp";
import drReddys from "../images/Dr.-Reddys.webp";
import essarSteel from "../images/essar-steel.webp";
import gaar from "../images/Gaar.webp";
import hindustan from "../images/hindustan.webp";
import itcHotels from "../images/itc-hotels.webp";
import jindal from "../images/jindal.webp";
import ltLogo from "../images/lt_logo.webp";
import mahindraRise from "../images/Mahindra-rise.webp";
import motherDairy from "../images/mother-dairy.webp";
import ntpc from "../images/NTPC.webp";
import ocmLuxury from "../images/ocm-lxury.webp";
import oilLtd from "../images/oilltd.webp";
import roorkee from "../images/roorkee.webp";
import schneider from "../images/Schneider.webp";
import smec from "../images/smec.webp";
import sterlingWilson from "../images/sterling-wilson.webp";
import taj from "../images/Taj.webp";
import ultratech from "../images/ultratech-cement.webp";
import voltas from "../images/voltas.webp";



// Product Images
import ultrasonicimg from "../images/p1a.webp";
import electromagneticimg from "../images/p7a.webp";
import watermetersimg from "../images/sja.webp";
import podisplacementimg from "../images/p11a.webp";
import rotameterimg from "../images/p24a.webp";
import sappflowmeter from "../images/p23a.webp";
import thermalmassimg from "../images/p15a.webp";
import gasflowmeterimg from "../images/p19a.webp";
import vorteximg from "../images/p16a.webp";


// ================= CITY DATA MAP =================
const cityDataMap = {
  mumbai: mumbaiSeoData,
  delhi: delhiSeoData,
  bengaluru: bengaluruSeoData,
  udupi: udupiSeoData,
  bidar: bidarSeoData,
  hospet: hospetSeoData,
  shivamogga: shivamoggaSeoData,
  vijayapura: vijayapuraSeoData,
  hassan: hassanSeoData,
  "gadag-betageri": gadagBetageriSeoData,
  tumakuru: tumakuruSeoData,
  davanagere: davanagereSeoData,
  ballari: ballariSeoData,
  kalaburagi: kalaburagiSeoData,
  belagavi: belagaviSeoData,
  mangaluru: mangaluruSeoData,
  "hubballi-dharwad": hubballiDharwadSeoData,
  hyderabad: hyderabadSeoData,
  ahmedabad: ahmedabadSeoData,
  chennai: chennaiSeoData,
  anantapur: anantapurSeoData,
  anantpur: anantapurSeoData,
  chittoor: chittoorSeoData,
  "east-godavari": eastGodavariSeoData,
  guntur: gunturSeoData,
  kadapa: kadapaSeoData,
  kakinada: kakinadaSeoData,
  krishna: krishnaSeoData,
  kurnool: kurnoolSeoData,
  machilipatnam: machilipatnamSeoData,
  nellore: nelloreSeoData,
  prakasam: prakasamSeoData,
  srikakulam: srikakulamSeoData,
  visakhapatnam: visakhapatnamSeoData,
  vizianagaram: vizianagaramSeoData,
  "west-godavari": westGodavariSeoData,
  itanagar: itanagarSeoData,
  naharlagun: naharlagunSeoData,
  pasighat: pasighatSeoData,
  tawang: tawangSeoData,
  ziro: ziroSeoData,
  aalo: aaloSeoData,
  tezu: tezuSeoData,
  namsai: namsaiSeoData,
  roing: roingSeoData,
  daporijo: daporijoSeoData,
  bomdila: bomdilaSeoData,
  khonsa: khonsaSeoData,
  seppa: seppaSeoData,
  changlang: changlangSeoData,
  yingkiong: yingkiongSeoData,
  guwahati: guwahatiSeoData,
  dibrugarh: dibrugarhSeoData,
  jorhat: jorhatSeoData,
  nagaon: nagaonSeoData,
  tinsukia: tinsukiaSeoData,
  tezpur: tezpurSeoData,
  bongaigaon: bongaigaonSeoData,
  dhubri: dhubriSeoData,
  diphu: diphuSeoData,
  "north-lakhimpur": northLakhimpurSeoData,
  sivasagar: sivasagarSeoData,
  goalpara: goalparaSeoData,
  barpeta: barpetaSeoData,
  golaghat: golaghatSeoData,
  patna: patnaSeoData,
  gaya: gayaSeoData,
  bhagalpur: bhagalpurSeoData,
  muzaffarpur: muzaffarpurSeoData,
  purnia: purniaSeoData,
  darbhanga: darbhangaSeoData,
  "bihar-sharif": biharSharifSeoData,
  arrah: arrahSeoData,
  begusarai: begusaraiSeoData,
  katihar: katiharSeoData,
  munger: mungerSeoData,
  chapra: chapraSeoData,
  saharsa: saharsaSeoData,
  hajipur: hajipurSeoData,
  sasaram: sasaramSeoData,
  raipur: raipurSeoData,
  "bhilai-durg": bhilaiDurgSeoData,
  bilaspur: bilaspurSeoData,
  korba: korbaSeoData,
  rajnandgaon: rajnandgaonSeoData,
  raigarh: raigarhSeoData,
  jagdalpur: jagdalpurSeoData,
  ambikapur: ambikapurSeoData,
  dhamtari: dhamtariSeoData,
  "nava-raipur": navaRaipurSeoData,
  mahasamund: mahasamundSeoData,
  bhatapara: bhataparaSeoData,
  champa: champaSeoData,
  kawardha: kawardhaSeoData,
  kanker: kankerSeoData,
  panaji: panajiSeoData,
  margao: margaoSeoData,
  mapusa: mapusaSeoData,
  ponda: pondaSeoData,
  porvorim: porvorimSeoData,
  verna: vernaSeoData,
  siolim: siolimSeoData,
  taleigao: taleigaoSeoData,
  sancoale: sancoaleSeoData,
  curchorem: curchoremSeoData,
  bicholim: bicholimSeoData,
  sanquelim: sanquelimSeoData,
  "vasco-da-gama": vascoDaGamaSeoData,
  mehsana: mehsanaSeoData,
  bharuch: bharuchSeoData,
  nadiad: nadiadSeoData,
  gandhidham: gandhidhamSeoData,
  morbi: morbiSeoData,
  navsari: navsariSeoData,
  anand: anandSeoData,
  gandhinagar: gandhinagarSeoData,
  junagadh: junagadhSeoData,
  jamnagar: jamnagarSeoData,
  bhavnagar: bhavnagarSeoData,
  rajkot: rajkotSeoData,
  vadodara: vadodaraSeoData,
  surat: suratSeoData,
  ahmedabad: ahmedabadSeoData,
  manali: manaliSeoData,
  "bilaspur-hp": bilaspurHpSeoData,
  hamirpur: hamirpurSeoData,
  kullu: kulluSeoData,
  una: unaSeoData,
  chamba: chambaSeoData,
  sundernagar: sundernagarSeoData,
  "paonta-sahib": paontaSahibSeoData,
  nahan: nahanSeoData,
  baddi: baddiSeoData,
  palampur: palampurSeoData,
  mandi: mandiSeoData,
  solan: solanSeoData,
  dharamshala: dharamshalaSeoData,
  shimla: shimlaSeoData,
  gumla: gumlaSeoData,
  lohardaga: lohardagaSeoData,
  chaibasa: chaibasaSeoData,
  sahibganj: sahibganjSeoData,
  giridih: giridihSeoData,
  ramgarh: ramgarhSeoData,
  medininagar: medininagarSeoData,
  deoghar: deogharSeoData,
  hazaribagh: hazaribaghSeoData,
  phusro: phusroSeoData,
  "bokaro-steel-city": bokaroSteelCitySeoData,
  mango: mangoSeoData,
  dhanbad: dhanbadSeoData,
  ranchi: ranchiSeoData,
  jamshedpur: jamshedpurSeoData,
  "greater-kochi": greaterKochiSeoData,
  trivandrum: trivandrumSeoData,
  kochi: kochiSeoData,
  kozhikode: kozhikodeSeoData,
  thrissur: thrissurSeoData,
  kollam: kollamSeoData,
  kannur: kannurSeoData,
  malappuram: malappuramSeoData,
  palakkad: palakkadSeoData,
  alappuzha: alappuzhaSeoData,
  kottayam: kottayamSeoData,
  kasaragod: kasaragodSeoData,
  kanhangad: kanhangadSeoData,
  thodupuzha: thodupuzhaSeoData,
  pathanamthitta: pathanamthittaSeoData,
  hoshangabad: hoshangabadSeoData,
  damoh: damohSeoData,
  chhindwara: chhindwaraSeoData,
  rewa: rewaSeoData,
  ratlam: ratlamSeoData,
  satna: satnaSeoData,
  sagar: sagarSeoData,
  dewas: dewasSeoData,
  katni: katniSeoData,
  pithampur: pithampurSeoData,
  ujjain: ujjainSeoData,
  gwalior: gwaliorSeoData,
  jabalpur: jabalpurSeoData,
  bhopal: bhopalSeoData,
  indore: indoreSeoData,
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
            className="tw-block tw-w-full tw-object-cover tw-h-[250px] sm:tw-h-[380px] md:tw-h-[600px]"
          />

          {/* Caption Overlay */}
          <div className="tw-absolute tw-inset-0 tw-flex tw-items-center md:tw-items-end tw-px-6 sm:tw-px-10 md:tw-px-20 lg:tw-px-32 tw-pb-5 md:tw-pb-16 tw-text-left">
            <div className="caption-bg tw-inline-block tw-max-w-[95%] sm:tw-max-w-[90%] md:tw-max-w-[85%] lg:tw-max-w-[650px] tw-bg-black/50 tw-p-2 sm:tw-p-[14px] md:tw-p-5 tw-rounded-lg tw-text-white">
              <h1 className="tw-font-bold tw-text-yellow-400 tw-text-[1rem] sm:tw-text-[1.8rem] md:tw-text-[2rem] lg:tw-text-[2.5rem] tw-leading-tight">
                {slides[index].heading}
              </h1>
              <h2 className="tw-font-bold tw-text-white tw-text-[0.85rem] sm:tw-text-[1.25rem] md:tw-text-[1.4rem] lg:tw-text-[1.8rem] tw-leading-tight">
                {slides[index].subHeading}
              </h2>
              <p className="tw-text-[0.7rem] sm:tw-text-[0.95rem] md:tw-text-[1rem] lg:tw-text-[1.2rem] tw-mb-2">
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
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="tw-bg-white tw-py-20 tw-text-[#1f1e1d]"
    >
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
                <div className="tw-group tw-relative tw-bg-white tw-p-6 tw-rounded-lg tw-h-full hover:tw-bg-[#ffcc00] hover:tw--translate-y-2 tw-transition-all tw-duration-300 tw-ease-in-out tw-overflow-hidden">
                  <div className="tw-flex tw-items-start">
                    <div className="tw-mr-5 tw-flex-shrink-0">
                      <IconComponent className="tw-w-12 tw-h-12 tw-text-yellow-500 group-hover:tw-text-black tw-transition-colors tw-duration-300" strokeWidth={1.5} />
                    </div>
                    <div className="tw-text-left">
                      <h5 className="tw-text-yellow-400 tw-font-semibold tw-text-xl tw-mb-2 group-hover:tw-text-black tw-transition-colors tw-duration-300">{feature.title}</h5>
                      <p className="tw-text-[#1f1e1d] tw-text-base tw-mb-0">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </motion.section>
  );
}

function MainContentSeo(  { seoContent, cityName }) {
  const contentBlock = seoContent[0];
  const mainSection = contentBlock.sections[0];
  const otherSections = contentBlock.sections.slice(1);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="tw-bg-white tw-py-16"
    >
      <Container>
        <Row className="tw-items-center">
          {contentBlock.image && (
            <Col md={5} className="tw-mb-8 md:tw-mb-0">
              <Link to="/product" className="tw-block">
                <img
                  src={contentBlock.image}
                  alt={`Industrial Flowmeter Manufacturer in ${cityName}`}
                  loading="lazy"
                  className="tw-rounded-lg tw-shadow-lg tw-w-full hover:tw-scale-[1.02] tw-transition-transform tw-duration-300"
                />
              </Link>
            </Col>
          )}

          <Col md={contentBlock.image ? 7 : 12}>
            {/* Main Heading centered here in content column */}
            <div className="tw-mb-8 tw-text-center">
              <h2 className="tw-font-bold tw-text-4xl tw-text-black">
                {mainSection.title}
              </h2>
              <div className="tw-mt-2 tw-w-24 tw-h-1 tw-bg-[#ffcc00] tw-mx-auto"></div>
            </div>
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

            <div className="tw-mt-10 tw-text-center md:tw-text-left">
              <EnquiryButton className="tw-bg-[#ffcc00] tw-text-black tw-px-8 tw-py-3 tw-rounded-full tw-font-bold tw-shadow-lg hover:tw-bg-black hover:tw-text-white tw-transition-all tw-duration-300">
                Enquiry Now
              </EnquiryButton>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
}

function ProductsSeo() {
  const products = Object.values(productData);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="tw-bg-white tw-py-20"
    >
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
    </motion.section>
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
                <img src={src} alt="Trusted Industrial Clients of IotaFlow" loading="lazy" className="tw-max-h-[200px] tw-max-w-[90%] tw-object-contain tw-grayscale-[20%] tw-transition-all tw-duration-300 hover:tw-grayscale-0 hover:tw-scale-105" />
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
      <SEO 
        title={seoData.metaTitle || `Flow Meter Manufacturer & Suppliers in ${formattedCityName} | IOTAFLOW`}
        description={seoData.metaDescription || `Leading industrial flow meter manufacturer and supplier in ${formattedCityName}. Expert in electromagnetic, ultrasonic, and thermal mass flow measurement.`}
        keywords={seoData.metaKeywords || `flow meter manufacturer ${formattedCityName}, industrial flow meter supplier ${formattedCityName}, ultrasonic flow meter ${formattedCityName}, electromagnetic flow meter ${formattedCityName}, industrial automation ${formattedCityName}`}
      />
      <BannerSliderSeo slides={slidesWithImages} />
      <RightChoiceSeo featuresData={featuresData} />
      <MainContentSeo seoContent={seoContent} cityName={formattedCityName} />
      <ProductsSeo />
      <OurClients />
      <InstrumentationSuppliersSeo instrumentation={instrumentation} cityName={formattedCityName } />
      <YtSeo />
      <Faqs faqs={faqs} />
    </>
  );
};

export default SeoPage;