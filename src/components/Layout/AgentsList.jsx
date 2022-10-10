import React, { Fragment } from "react";
import AgentItems from "../Data/AgentItems";

import { useGetAgencyListQuery } from "../../redux/services/bayut";
import Loader from "../UI/Loader";
import Error from "../UI/Error";

const AgentsList = () => {
  const { data, isFetching, error } = useGetAgencyListQuery();

  const agencyData = data?.hits;
  console.log(agencyData);

  const mappedList = agencyData?.map((agent) => {
    return (
      <AgentItems
        key={agent?.externalID}
        id={agent?.externalID}
        address={agent?.location}
        logo={agent?.logo?.url}
        contact={agent?.phoneNumber}
        name={agent?.name}
      />
    );
  });

  return (
    <Fragment>
      <section className="mx-auto bg-silver px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <div className="px-auto lg:px-32">
          <h1 className="font-Poppins font-bold text-4xl text-center tracking-wider mb-10">
            List of verified <span className="text-blue">Agencies</span>
          </h1>
        </div>
        <div>
          <ul className="flex justify-center flex-col lg:flex-row lg:flex-wrap ">
            {isFetching && <Loader />}
            {!isFetching && !error && mappedList}
            {!isFetching && mappedList.length === 0 && <Error />}
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default AgentsList;
