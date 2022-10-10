import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import defaultIMG from "../../assets/Blog1.jpg";

import { HiIdentification, HiOutlineLocationMarker } from "react-icons/hi";

const AgentItems = ({ id, address, logo, name, contact }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      <li className="w-auto lg:w-1/4 m-2 flex flex-col bg-white rounded-3xl  shadow-md">
        <div>
          <div className="py-2 px-2">
            <div className="w-auto p-1 ">
              <img
                className="h-60 lg:h-40 xl:h-52 w-full object-cover rounded-2xl"
                src={logo || defaultIMG}
                alt="real estate"
              />
            </div>
            <div className="flex px-1 mt-2 mb-1">
              <div className="mr-1">
                <HiOutlineLocationMarker className="font-Poppins  text-blue" />
              </div>

              <h1 className="font-Poppins text-sm text-black capitalize">
                {address || "Location unavailable"}
              </h1>
            </div>
          </div>
          <div className=" px-3 mb-3">
            <div className="flex items-center ">
              <div>
                <HiIdentification className="text-medium text-blue mr-1" />
              </div>
              <p className="text-[14px] text-black">{name}</p>
            </div>
          </div>
          <div className="flex items-end px-4 pb-3 mb-4">
            <div className=" bg-blue text-white font-bold text-xs px-4 py-2 rounded-lg shadow-lg">
              {(isAuthenticated &&
                (contact?.phone || contact?.mobile || "Unavailable")) || (
                <Link to="/login">
                  <button>Login to view contact</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </li>
    </Fragment>
  );
};

export default AgentItems;
