import React, { Fragment } from "react";
import PropertiesItem from "../Data/PropertiesItem";

import { useGetProperyListQuery } from "../../redux/services/bayut";
import Loader from "../UI/Loader";
import Error from "../UI/Error";

const Properties = () => {
  const { data, isFetching, error } = useGetProperyListQuery();

  const propertiesData = data?.hits;

  const mappedList = propertiesData?.map((property) => {
    return (
      <PropertiesItem
        key={property?.externalID}
        id={property?.externalID}
        numOfBed={property?.rooms}
        numOfBath={property?.baths}
        size={property?.area}
        price={property?.price}
        address={property?.title}
        image={property?.coverPhoto?.url}
        state={property?.state}
        rentType={property?.rentFrequency}
      />
    );
  });

  return (
    <Fragment>
      <section className="mx-auto bg-silver px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <div className="px-auto lg:px-32">
          <h1 className="font-Poppins font-bold text-4xl text-center tracking-wider mb-4">
            List of <span className="text-blue">Properties</span>
          </h1>
        </div>
        <div>
          <ul className="flex justify-center flex-col lg:flex-row lg:flex-wrap ">
            {isFetching && <Loader />}
            {!isFetching && !error && mappedList}
            {!isFetching && mappedList?.length === 0 && <Error />}
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default Properties;
