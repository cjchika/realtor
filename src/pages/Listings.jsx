import React from "react";
import Footer from "../components/Layout/Footer";
import PropertyListing from "../components/Layout/PropertyListing";
import FAQs from "../components/Layout/FAQs";

const Listings = () => {
  return (
    <div className="mt-16">
      <PropertyListing />
      <FAQs />
      <Footer />
    </div>
  );
};

export default Listings;
