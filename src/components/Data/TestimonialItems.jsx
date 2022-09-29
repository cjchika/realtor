import React, { Fragment, useState } from "react";
import { ImQuotesRight } from "react-icons/im";

const TestimonialItems = ({ data }) => {
  const [current, setCurrent] = useState(data[0]);
  const [active, setActive] = useState(current);

  const handleClick = (e) => {
    setCurrent(data[e.target.getAttribute("data-testimonial")]);
    setActive(e.target.getAttribute("data-testimonial"));
  };

  return (
    <Fragment>
      <div>
        <div className="flex flex-col  md:flex-row justify-center items-center">
          <div className="w-auto  p-1 ">
            <img
              className="h-72 w-80 md:w-96 md:mr-60 object-cover rounded-2xl"
              src={current.image}
              alt="real estate"
            />
          </div>
          <div className="lg:px-21">
            <h1 className="font-Poppins text-xl text-ash text-center  mt-11 md:mt-4  lg:mt-0 ">
              {current.text}
            </h1>
            <div className="flex justify-center">
              <div className="mb-10 md:mb-5 lg:mb-10">
                <h2 className="font-Poppins text-blue text-lg text-center mt-10 lg:mt-5  font-semibold ">
                  {current.name}
                </h2>
                <p className="font-Poppins text-ash text-center ">Client</p>
              </div>

              <div>
                <ImQuotesRight className="absolute ml-10 md:ml-20 lg:ml-40 text-silver text-6xl" />
              </div>
            </div>
            <div className="flex items-center justify-center">
              {Object.keys(data).map((index) => (
                <span
                  id={index}
                  key={index}
                  data-testimonial={index}
                  onClick={handleClick}
                  className={`py-1 w-10 rounded mx-1 cursor-pointer  ${
                    active === index ? "bg-blue" : "bg-[#d4d4d4] "
                  }`}
                />
              ))}

              {/* <span id="p2" className="bg-blue py-1 w-10 rounded mx-1" />
              <span id="p3" className="bg-blue py-1 w-10 rounded mx-1" />
              <span id="p4" className="bg-blue py-1 w-10 rounded mx-1" /> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TestimonialItems;
