import React, { Fragment, useRef, useState } from "react";
// import AgentItems from "../Data/AgentItems";
import { BiSearchAlt } from "react-icons/bi";

// import { useGetAgencyListQuery } from "../../redux/services/bayut";
// import Loader from "../UI/Loader";
// import Error from "../UI/Error";

const SearchList = ({ onEntered }) => {
  const phraseInputRef = useRef();
  // const [enteredPhrase, setEnteredPhrase] = useState("estate");
  // const { data, isFetching, error } = useGetAgencyListQuery(enteredPhrase);

  // const agencyData = data?.hits;
  // console.log("SearchList", onEntered);

  // const mappedList = agencyData?.map((agent) => {
  //   return (
  //     <AgentItems
  //       key={agent?.externalID}
  //       id={agent?.externalID}
  //       address={agent?.location}
  //       logo={agent?.logo?.url}
  //       contact={agent?.phoneNumber}
  //       name={agent?.name}
  //     />
  //   );
  // });

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredText = phraseInputRef.current.value;

    if (enteredText.trim().length <= 0) {
      return;
    }

    // setEnteredPhrase(enteredText);
  };

  return (
    <Fragment>
      <section className="mx-auto bg-silver px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <div className="px-auto lg:px-32">
          <h1 className="font-Poppins font-bold text-4xl text-center tracking-wider mb-5">
            Search <span className="text-blue">Properties</span>
          </h1>
        </div>
        <div className=" flex items-center justify-center my-10 ">
          <form onSubmit={handleSubmit} className="flex  items-center">
            <label htmlFor="text"></label>
            <input
              placeholder="Enter city, e.g dubai"
              type="text"
              className="p-3 px-4 outline-none rounded-l-xl w-[14rem] sm:w-auto "
              ref={phraseInputRef}
            />
            <button className="bg-blue p-4 rounded-r-xl">
              <BiSearchAlt className="text-white" />
            </button>
          </form>
        </div>

        {/* <div>
          <ul className="flex justify-center flex-col lg:flex-row lg:flex-wrap ">
            {isFetching && <Loader />}
            {!isFetching && !error && mappedList}
            {!isFetching && mappedList.length === 0 && <Error />}
          </ul>
        </div> */}
      </section>
    </Fragment>
  );
};

export default SearchList;
