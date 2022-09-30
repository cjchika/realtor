import React from "react";
import Footer from "../components/Layout/Footer";
import PropertyListing from "../components/Layout/PropertyListing";

const Listings = () => {
  return (
    <div className="mt-16">
      <PropertyListing />
      <Footer />
    </div>
  );
};

export default Listings;
