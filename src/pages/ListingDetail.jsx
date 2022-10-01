import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import FAQs from "../components/Layout/FAQs";

const ListingDetail = () => {
  const params = useParams();
  const { listingId } = params;

  return (
    <Fragment>
      <section className="mx-auto bg-silver px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <div className="my-20">
          <h1 className="text-5xl">ID: {listingId}</h1>
        </div>
      </section>
      <FAQs />
      <Footer />
    </Fragment>
  );
};

export default ListingDetail;
