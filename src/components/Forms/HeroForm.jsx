import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const HeroForm = () => {
  return (
    <div className=" mt-20 w-auto lg:max-w-3xl rounded-lg bg-white shadow-md p-6 px-10 ">
      <h1 className="mb-4 text-blue font-Poppins font-bold tracking-wider text-lg">
        Search for available properties
      </h1>
      <form className="flex items-center justify-between">
        <div className="flex flex-col">
          <label
            htmlFor="location"
            className=" font-Poppins text-blue font-medium"
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
            <option>UAE</option>
            <option>Lagos</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="property"
            className="font-Poppins text-blue font-medium"
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

        <div className="flex flex-col">
          <label htmlFor="price" className="font-Poppins text-blue font-medium">
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

        <button
          type="submit"
          className="flex items-center bg-blue text-white font-bold text-md p-2 px-4 rounded-lg ml-6 shadow-md"
        >
          {" "}
          <BiSearchAlt className="mr-2" />
          Search
        </button>
      </form>
    </div>
  );
};

export default HeroForm;
