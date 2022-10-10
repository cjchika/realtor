import React, { Fragment, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import FAQs from "../components/Layout/FAQs";
import PropertyDetailItems from "../components/Data/PropertyDetailItems";

import Loader from "../components/UI/Loader";
import Error from "../components/UI/Error";

import { useGetProperyDetailsQuery } from "../redux/services/bayut";

const ListingDetail = () => {
  const params = useParams();
  const { listingId } = params;
  const divRef = useRef();

  const { data, isFetching, error } = useGetProperyDetailsQuery(listingId);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <Fragment>
      <section
        ref={divRef}
        className="mx-auto bg-silver px-2 md:px-16 lg:px-20 py-20 pt-20 md:py-16"
      >
        <div className="my-20">
          {!isFetching && !error && (
            <PropertyDetailItems
              key={data?.externalID}
              id={data?.externalID}
              numOfBed={data?.rooms}
              numOfBath={data?.baths}
              size={data?.area}
              price={data?.price}
              address={data?.title}
              image={data?.coverPhoto?.url}
              state={data?.state}
              rentType={data?.rentFrequency}
              description={data?.description}
              amenities={data?.amenities}
              photos={data?.photos}
              phoneNumber={data?.phoneNumber}
              agencyName={data?.agency?.name}
              contactName={data?.contactName}
              logo={data?.agency?.logo?.url}
            />
          )}
          {isFetching && <Loader />}
          {!isFetching && data.length === 0 && <Error />}
        </div>
      </section>
      <FAQs />
      <Footer />
    </Fragment>
  );
};

export default ListingDetail;
