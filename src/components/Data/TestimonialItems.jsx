import React, { Fragment } from "react";
import { ImQuotesRight } from "react-icons/im";

const TestimonialItems = ({ id, text, name, image }) => {
  return (
    <Fragment>
      <li>
        <div className="flex flex-col  md:flex-row justify-center items-center">
          <div className="w-auto  p-1 ">
            <img
              className="h-72 w-auto md:w-96 md:mr-60 object-cover rounded-2xl"
              src={image}
              alt="real estate"
            />
          </div>
          <div className="lg:px-20">
            <h1 className="font-Poppins text-xl text-ash text-center  mt-10 lg:mt-0 ">
              {text}
            </h1>
            <div className="flex justify-center">
              <div>
                <h2 className="font-Poppins text-blue text-lg text-center  mt-10 lg:mt-5  font-semibold mt-4">
                  {name}
                </h2>
                <p className="font-Poppins text-ash text-center ">Client</p>
              </div>
              <div>
                <ImQuotesRight className="absolute ml-10 md:ml-20 lg:ml-40 text-silver text-6xl" />
              </div>
            </div>
          </div>
        </div>
      </li>
    </Fragment>
  );
};

export default TestimonialItems;
