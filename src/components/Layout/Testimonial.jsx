import React, { Fragment } from "react";

import TestimonialItems from "../Data/TestimonialItems";

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

const Testimonial = () => {
  const mappedList = <TestimonialItems data={testimonialData} />;
  return (
    <Fragment>
      <section className="mx-auto bg-silverLite px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <div className="flex flex-col md:flex-row justify-between px-auto">
          <div>
            <h1 className="font-Poppins font-bold text-3xl text-left mb-3">
              What Our Client <span className="text-blue">Say</span>
            </h1>
            <p className="text-left text-ash">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              amet!
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-col lg:flex-row my-6">
          {mappedList}
        </div>
      </section>
    </Fragment>
  );
};

export default Testimonial;
