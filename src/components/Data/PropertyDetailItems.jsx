import React, { Fragment, useState } from "react";

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
  const photo = photos?.map((image) => image);

  const [chosenPhoto, setChosenPhoto] = useState(photo[0].url);

  return (
    <Fragment>
      <div className="w-auto m-2 flex flex-col bg-white rounded-3xl  shadow-md">
        <div>
          <div className="py-2 px-2">
            <div className="w-auto p-1 ">
              <p className="font-Poppins text-xs lg:text-lg lg:font-medium rounded-full text-[#22c55e]  absolute bg-white p-2 py-1 lg:px-6 mt-2 ml-2">
                {state}
              </p>
              <img
                className="h-60 md:h-72 lg:h-[25rem] xl:h-[30rem] w-full object-cover rounded-2xl"
                src={chosenPhoto || image}
                alt="real estate"
              />
            </div>
            <div className="my-2 mx-1">
              <div className="flex overflow-scroll">
                {photo?.map((snap) => (
                  <img
                    onClick={() => setChosenPhoto(snap.url)}
                    alt="Properties"
                    key={snap.externalID}
                    src={snap.url}
                    className="h-28 w-auto px-1 cursor-pointer"
                  />
                ))}
              </div>
            </div>
            <div className=" px-1 mt-2 mb-1">
              <div className="flex items-center mt-6">
                <div className="mr-2 md:mr-4 ">
                  <HiOutlineLocationMarker className="font-Poppins  text-ash text-sm md:text-lg lg:text-xl" />
                </div>
                <h1 className="font-Poppins text-sm md:text-lg lg:text-2xl text-ash capitalize ">
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
          <div className="flex justify-center px-4 md:mx-32 lg:mx-52 xl:mx-60 py-1 my-2 mb-16">
            <h1 className="font-Poppins text-md md:text-lg lg:text-xl text-white font-semibold py-1 px-5 bg-blue rounded-lg">
              {`AED ${price}`}
              <span className="font-Poppins text-white text-base font-medium">
                /{rentType}
              </span>
            </h1>
          </div>
          <div className="mx-8 mb-6 overflow-hidden">
            <div className="flex justify-center items-center mb-4">
              <hr className="w-20 md:w-30 lg:w-52 text-[#ebebeb]" />
              <h1 className="font-Poppins uppercase font-bold  text-xl text-blue mx-0 md:mx-10 text-center">
                About this property
              </h1>
              <hr className="w-20 md:w-30 lg:w-52 text-[#ebebeb]" />
            </div>
            <p className="font-Poppins text-ash text-justify">{description}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PropertyDetailItems;
