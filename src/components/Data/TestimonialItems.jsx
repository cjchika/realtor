import React, { Fragment } from "react";
import { ImQuotesRight } from "react-icons/im";

import Client1 from "../../assets/Client1.jpg";
import Client2 from "../../assets/Client2.jpg";
import Client3 from "../../assets/Client3.jpg";
import Client4 from "../../assets/Client4.jpg";

const testimonialData = [
  {
    id: "p1",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, eaque blanditiis! Esse nostrum deleniti asperiores blanditiis rerum illo hic eius magni ratione. Repellendus, rerum veritatis!",
    name: "Emily Josh",
    image: Client1,
  },
  {
    id: "p2",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, eaque blanditiis! Esse nostrum deleniti asperiores blanditiis rerum illo hic eius magni ratione. Repellendus, rerum veritatis!",
    name: "Robert Jack",
    image: Client2,
  },
  {
    id: "p3",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, eaque blanditiis! Esse nostrum deleniti asperiores blanditiis rerum illo hic eius magni ratione. Repellendus, rerum veritatis!",
    name: "Olivia Ava",
    image: Client3,
  },
  {
    id: "p4",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, eaque blanditiis! Esse nostrum deleniti asperiores blanditiis rerum illo hic eius magni ratione. Repellendus, rerum veritatis!",
    name: "Noah Emma",
    image: Client4,
  },
];

const TestimonialItems = () => {
  // const testimonialHandler = () => {};
  const matchId = testimonialData.findIndex((item) => item === item.id);

  return (
    <Fragment>
      <li id={matchId}>
        <div className="flex flex-col  md:flex-row justify-center items-center">
          <div className="w-auto  p-1 ">
            <img
              className="h-72 w-80 md:w-96 md:mr-60 object-cover rounded-2xl"
              src={testimonialData[0].image}
              alt="real estate"
            />
          </div>
          <div className="lg:px-21">
            <h1 className="font-Poppins text-xl text-ash text-center  mt-11 md:mt-4  lg:mt-0 ">
              {testimonialData[0].text}
            </h1>
            <div className="flex justify-center">
              <div className="mb-10 md:mb-5 lg:mb-10">
                <h2 className="font-Poppins text-blue text-lg text-center  mt-10 lg:mt-5  font-semibold mt-4">
                  {testimonialData[0].name}
                </h2>
                <p className="font-Poppins text-ash text-center ">Client</p>
              </div>

              <div>
                <ImQuotesRight className="absolute ml-10 md:ml-20 lg:ml-40 text-silver text-6xl" />
              </div>
            </div>
            <div className="flex items-center justify-center ">
              <span id="p1" className="bg-blue py-1 w-10 rounded mx-1" />
              <span id="p2" className="bg-blue py-1 w-10 rounded mx-1" />
              <span id="p3" className="bg-blue py-1 w-10 rounded mx-1" />
              <span id="p4" className="bg-blue py-1 w-10 rounded mx-1" />
            </div>
          </div>
        </div>
      </li>
    </Fragment>
  );
};

export default TestimonialItems;
