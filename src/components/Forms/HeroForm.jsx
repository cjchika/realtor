import React, { useRef } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useHistory } from "react-router-dom";

const HeroForm = () => {
  const phraseInputRef = useRef();
  const history = useHistory();

  const handleSearch = (event) => {
    event.preventDefault();

    const enteredPhrase = phraseInputRef.current.value;

    if (enteredPhrase.trim().length <= 2) {
      return;
    }

    history.replace(`/listings`);
  };

  return (
    <div className=" mx-auto w-11/12 md:w-9/12 lg:w-6/12 mt-20 rounded-lg bg-silverLite shadow-md p-6 px-4 ">
      <h1 className="mb-3 pl-4 md:pl-0 text-blue font-Poppins font-medium tracking-wider text-base md:text-lg">
        Search for available properties
      </h1>
      <div className=" flex items-center justify-center my-2 ">
        <form onSubmit={handleSearch} className="flex  items-center w-full">
          <label htmlFor="text"></label>
          <input
            placeholder="Enter city, e.g dubai"
            type="text"
            className="p-3 px-4 outline-none rounded-l-lg w-full  border-2 border-blue border-r-0 bg-silver"
            ref={phraseInputRef}
          />
          <button className="bg-blue p-4 rounded-r-lg border-2 border-blue ">
            <BiSearchAlt className="text-white font-bold" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeroForm;
