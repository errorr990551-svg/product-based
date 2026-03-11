// src/Components/Breadcrumbs.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumbs.css";

export default function Breadcrumbs() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="breadcrumb">
      {/* Always show "product" first */}
      <span>product</span>

      {/* Case 1: If we are NOT on /product2, show product2 as link */}
      {path !== "/product2" && (
        <span>
          {" / "}
          <Link to="/product2">product2</Link>
        </span>
      )}

      {/* Case 2: If we ARE on /product2, show product > product2 */}
      {path === "/product2" && (
        <span>
          {" > "}
          product2
        </span>
      )}
    </nav>
  );
}
