import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { RiHotelBedFill } from "react-icons/ri";
import { FaBath } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";

const PropertiesItem = ({
  id,
  price,
  address,
  numOfBed,
  numOfBath,
  image,
  size,
  state,
  rentType,
}) => {
  const shortSize = size.toFixed(2);

  return (
    <Fragment>
      <li className="w-auto lg:w-1/4 m-2 flex flex-col bg-white rounded-3xl  shadow-md">
        <div>
          <div className="py-2 px-2">
            <div className="w-auto p-1 ">
              <p className="font-Poppins text-xs rounded-full text-blue  absolute bg-white p-2 py-1 mt-2 ml-2">
                {state}
              </p>
              <img
                className="h-60 lg:h-40 xl:h-52 w-full object-cover rounded-2xl"
                src={image}
                alt="real estate"
              />
            </div>
            <div className="flex px-1 mt-2 mb-1">
              <div className="mr-1">
                <HiOutlineLocationMarker className="font-Poppins  text-ash" />
              </div>
              <Link to={`/listings/${id}`} className="truncate">
                <h1 className="font-Poppins text-xs text-ash truncate capitalize">
                  {address}
                </h1>
              </Link>
            </div>
          </div>
          <div className="flex justify-between px-4 mb-3">
            <div className="flex items-center ">
              <RiHotelBedFill className="text-medium text-blue mr-1" />{" "}
              <p className="text-xs text-ash">{numOfBed} Bed</p>
            </div>
            <div className="flex items-center ">
              <FaBath className="text-medium text-blue mr-1" />{" "}
              <p className="text-xs text-ash">{numOfBath} Bath</p>
            </div>
            <div className="flex items-center ">
              <MdSpaceDashboard className="text-medium text-blue mr-1" />{" "}
              <p className="text-xs text-ash">{shortSize} sqft</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-between  px-4 pb-3 mb-4">
            <Link to={`/listings/${id}`}>
              <button className=" bg-blue text-white font-bold text-xs px-4 py-2 rounded-lg shadow-lg">
                Book Now
              </button>
            </Link>
            <h1 className="font-Poppins text-md text-blue font-semibold pl-1 py-1">
              {`AED ${price}`}
              <span className="font-Poppins text-liteBlue text-xs">
                /{rentType}
              </span>
            </h1>
          </div>
        </div>
      </li>
    </Fragment>
  );
};

export default PropertiesItem;
