import React, { Fragment } from "react";
import PropertiesItem from "../Data/PropertiesItem";

const Properties = () => {
  const propertiesData = [
    {
      id: "p1",
      numOfBed: 4,
      numOfBath: 2,
      size: 1500,
      price: "100,000",
      address: "2601 West 7th St. Fort Worth, Texas",
    },
  ];

  const mappedList = propertiesData.map((property) => {
    return <Properties key={property.id} />;
  });

  return (
    <Fragment>
      <section className="mx-auto bg-silver px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <div className="px-auto lg:px-32">
          <h1 className="font-Poppins font-bold text-3xl text-center mb-4">
            Our Most Popular <span className="text-blue">Trending</span>
          </h1>
          <p className="text-center text-ash">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            facilis libero, esse recusandae nam veniam aut accusamus.
          </p>
        </div>
        {/* <ul className="flex flex-col lg:flex-row my-6">{mappedList}</ul> */}
      </section>
    </Fragment>
  );
};

export default Properties;
