import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { RiHotelBedFill } from "react-icons/ri";
import { FaBath } from "react-icons/fa";
import { HiSquare2Stack } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const PropertiesItem = ({
  id,
  price,
  address,
  numOfBed,
  numOfBath,
  image,
  size,
}) => {
  return (
    <Fragment>
      <Link to={`/listingDetail/${id}`}>
        <li className="m-2  flex flex-col bg-white rounded-3xl  shadow-md">
          <div className="py-2 px-2">
            <div className="w-full p-1 ">
              <p className="font-Poppins text-xs rounded-full text-blue  absolute bg-white p-2 py-1 mt-2 ml-2">
                Available Now
              </p>
              <img
                className="h-60 lg:h-40 xl:h-52 w-full object-cover rounded-2xl"
                src={image}
              />
            </div>
            <div>
              <h1 className="font-Poppins text-md text-blue font-semibold pl-1 py-1">{`$${price}`}</h1>
            </div>
          </div>
        </li>
      </Link>
    </Fragment>
  );
};

export default PropertiesItem;
