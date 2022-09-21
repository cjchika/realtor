import React, { Fragment } from "react";
import PropertiesItem from "../Data/PropertiesItem";
import Property1 from "../../assets/Property1.jpg";
import Property3 from "../../assets/Property3.jpg";
import Property4 from "../../assets/Property4.jpg";
import Property5 from "../../assets/Property5.jpg";

const Properties = () => {
  const propertiesData = [
    {
      id: "p1",
      numOfBed: 4,
      numOfBath: 2,
      size: 1500,
      price: "100,000",
      address: "2601 West 7th St. Fort Worth, Texas",
      image: Property1,
    },
    {
      id: "p2",
      numOfBed: 2,
      numOfBath: 2,
      size: 2000,
      price: "150,000",
      address: "2601 West 7th St. Fort Worth, Texas",
      image: Property3,
    },
    {
      id: "p3",
      numOfBed: 3,
      numOfBath: 4,
      size: 2500,
      price: "140,000",
      address: "2601 West 7th St. Fort Worth, Texas",
      image: Property4,
    },
    {
      id: "p4",
      numOfBed: 4,
      numOfBath: 2,
      size: 1800,
      price: "230,000",
      address: "2601 West 7th St. Fort Worth, Texas",
      image: Property5,
    },
  ];

  const mappedList = propertiesData.map((property) => {
    return (
      <PropertiesItem
        key={property.id}
        id={property.id}
        numOfBed={property.numOfBed}
        numOfBath={property.numOfBath}
        size={property.size}
        price={property.price}
        address={property.address}
        image={property.image}
      />
    );
  });

  return (
    <Fragment>
      <section className="mx-auto bg-silver px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <div className="px-auto lg:px-32">
          <h1 className="font-Poppins font-bold text-3xl text-center tracking-wider mb-4">
            List of <span className="text-blue">Properties</span>
          </h1>
        </div>
        <ul className="flex justify-center flex-col lg:flex-row my-6">
          {mappedList}
        </ul>
      </section>
    </Fragment>
  );
};

export default Properties;
