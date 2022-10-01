import React, { Fragment } from "react";

import { RiHotelBedFill } from "react-icons/ri";
import { FaBath } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";

const PropertyDetailItems = ({
  id,
  price,
  address,
  numOfBed,
  numOfBath,
  image,
  size,
  state,
  rentType,
  description,
  amenities,
  photos,
}) => {
  const shortSize = size.toFixed(3);
  return (
    <Fragment>
      <div className="w-auto m-2 flex flex-col bg-white rounded-3xl  shadow-md">
        <div>
          <div className="py-2 px-2">
            <div className="w-auto p-1 ">
              <p className="font-Poppins text-xs rounded-full text-blue  absolute bg-white p-2 py-1 mt-2 ml-2">
                {state}
              </p>
              <img
                className=" h-60 md:h-72 lg:h-[25rem] xl:h-[30rem] w-full object-cover rounded-2xl"
                src={image}
                alt="real estate"
              />
            </div>
            <div className=" px-1 mt-2 mb-1">
              <div className="flex items-center">
                <div className="mr-2 md:mr-4">
                  <HiOutlineLocationMarker className="font-Poppins  text-ash text-sm md:text-lg lg:text-xl" />
                </div>
                <h1 className="font-Poppins text-sm md:text-lg lg:text-2xl text-ash capitalize">
                  {address}
                </h1>
              </div>
              <div className="flex flex-wrap justify-center my-2">
                {amenities?.map((feature) => (
                  <span
                    key={feature.externalGroupID}
                    className="font-Poppins text-center bg-liteBlue text-[8px] lg:text-[10px] mx-1 p-[2px] my-[2px] lg:my-0 px-2 rounded-full text-white"
                  >
                    {feature.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-between px-4 md:mx-32 lg:mx-52 xl:mx-60 mb-3">
            <div className="flex items-center ">
              <RiHotelBedFill className="text-lg md:text-2xl lg:text-3xl text-blue mr-1" />{" "}
              <p className="text-xs text-ash md:text-xl lg:text-xl">
                {numOfBed} Bed
              </p>
            </div>
            <div className="flex items-center ">
              <FaBath className="text-medium text-blue mr-1 md:text-xl lg:text-2xl" />{" "}
              <p className="text-xs text-ash md:text-xl lg:text-xl">
                {numOfBath} Bath
              </p>
            </div>
            <div className="flex items-center ">
              <MdSpaceDashboard className="text-medium text-blue mr-1 md:text-xl lg:text-2xl" />{" "}
              <p className="text-xs text-ash md:text-xl lg:text-xl">
                {shortSize} sqft
              </p>
            </div>
          </div>
          <div className="flex justify-center px-4 md:mx-32 lg:mx-52 xl:mx-60 pb-3 mb-4">
            <h1 className="font-Poppins text-md md:text-lg lg:text-xl text-blue font-semibold pl-1 py-1">
              {`AED ${price}`}
              <span className="font-Poppins text-liteBlue text-xs">
                /{rentType}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PropertyDetailItems;
