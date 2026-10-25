import React from "react";
import CustomNavbar from "./Components/Home/Navbar"; // Use your original navbar
import { Outlet } from "react-router-dom";
import SEO from "./Components/common/SEO";


export default function Layout() {
  return (
    <>
      {/* Per-route title, description, canonical & OG tags from src/data/routeMeta.json */}
      <SEO />
      <CustomNavbar />
      
      <Outlet /> {/* Page content will be rendered here */}
    </>
  );
}
