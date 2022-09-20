import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const HeroForm = () => {
  return (
    <div className=" mx-auto w-11/12 md:w-9/12 lg:w-6/12 mt-20 rounded-lg bg-white shadow-md p-6 px-4 ">
      {/* <h1 className="mb-4 text-blue font-Poppins font-bold tracking-wider text-lg">
        Search for available properties
      </h1> */}
      <form>
        <div className="flex flex-col px-4 md:px-0 md:flex-row justify-between">
          <div className="flex flex-col pb-2 md:pb-0">
            <label
              htmlFor="location"
              className=" font-Poppins text-blue font-xs lg:font-medium"
            >
              Location
            </label>
            <select
              id="location"
              name="location"
              className="text-sm bg-transparent text-ash outline-0"
            >
              <option>Texas</option>
              <option>Berlin</option>
              <option>Dubai</option>
              <option>Lagos</option>
            </select>
          </div>

          <div className="flex flex-col pb-2 md:pb-0">
            <label
              htmlFor="property"
              className="font-Poppins text-blue font-xs lg:font-medium"
            >
              Property Type
            </label>
            <select
              id="property"
              name="property"
              className="text-sm bg-transparent text-ash outline-0"
            >
              <option>Duplex</option>
              <option>Bungalow</option>
              <option>Terrace</option>
            </select>
          </div>

          <div className="flex flex-col pb-2 md:pb-0">
            <label
              htmlFor="price"
              className="font-Poppins text-blue font-xs lg:font-medium"
            >
              Max Price
            </label>
            <select
              id="price"
              name="price"
              className="text-sm bg-transparent text-ash outline-0"
            >
              <option>$100,000</option>
              <option>$200,000</option>
              <option>$300,000</option>
            </select>
          </div>
          <div className="flex justify-end pt-4 md:pt-0">
            <button
              type="submit"
              className="flex items-center bg-blue text-white font-semibold text-md p-2 px-4 rounded-lg  shadow-md "
            >
              {" "}
              <BiSearchAlt className="mr-2" />
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HeroForm;
