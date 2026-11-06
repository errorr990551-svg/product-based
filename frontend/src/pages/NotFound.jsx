import React from "react";
import { Link } from "react-router-dom";
import SEO from "../Components/common/SEO";

function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | IOTAFLOW Systems"
        description="The page you are looking for does not exist."
        noindex
      />
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-min-h-[60vh] tw-px-4 tw-text-center">
        <h1 className="tw-text-4xl tw-font-bold tw-text-black tw-mb-4">Page Not Found</h1>
        <p className="tw-text-gray-600 tw-mb-6">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <div className="tw-flex tw-gap-4">
          <Link to="/" className="tw-bg-[#ffd700] tw-text-black tw-font-semibold tw-px-6 tw-py-2 tw-rounded">
            Go to Home
          </Link>
          <Link to="/market-area" className="tw-border tw-border-black tw-text-black tw-font-semibold tw-px-6 tw-py-2 tw-rounded">
            Cities We Serve
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
