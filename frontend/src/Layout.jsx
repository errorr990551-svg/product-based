import React from "react";
import CustomNavbar from "./Components/Home/Navbar"; // Use your original navbar
import { Outlet } from "react-router-dom";


export default function Layout() {
  return (
    <>
      <CustomNavbar />
      
      <Outlet /> {/* Page content will be rendered here */}
    </>
  );
}
