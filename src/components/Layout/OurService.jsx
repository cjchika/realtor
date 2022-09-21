import React, { Fragment } from "react";
import OurServiceImage from "../../assets/OurService.png";
import { MdOutlineEast } from "react-icons/md";
import { MdOutlineRemoveCircle } from "react-icons/md";

const OurService = () => {
  return (
    <Fragment>
      <section className="mx-auto bg-silverLite px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="px-auto md:px-10 md:pl-0">
            <img className="w-full h-1/2" src={OurServiceImage} alt="Scraper" />
          </div>
          <div>
            <h3 className="flex items-center font-Poppins text-ash text-2xl pt-10">
              <MdOutlineEast className="text-ash mr-4" />
              OUR SERVICES
            </h3>

            <h1 className="font-Poppins text-blue font-bold text-2xl py-4">
              Your Comfort Is Our Priority
            </h1>
            <p className="font-Poppins text-ash">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. optio
              laborum sunt molestias necessitatibus!
            </p>
            <div className="mt-6">
              <h2 className="flex text-ash py-2">
                <MdOutlineRemoveCircle className="text-blue mr-4" /> Free
                Marketing
              </h2>
              <h2 className="flex text-ash">
                <MdOutlineRemoveCircle className="text-blue mr-4" /> Free
                Monitored Viewings
              </h2>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default OurService;
