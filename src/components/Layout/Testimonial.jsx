import React, { Fragment } from "react";

import TestimonialItems from "../Data/TestimonialItems";

const Testimonial = () => {
  //   const mappedList = (
  //     <TestimonialItems
  //       key={testimonialData[0].id}
  //       id={testimonialData[0].id}
  //       name={testimonialData[0].name}
  //       text={testimonialData[0].text}
  //       image={testimonialData[0].image}
  //     />
  //   );
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
        <ul className="flex justify-center flex-col lg:flex-row my-6">
          <TestimonialItems />
        </ul>
      </section>
    </Fragment>
  );
};

export default Testimonial;
