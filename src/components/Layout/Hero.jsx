import React from "react";
//import HeroImage from "../../assets/Heroimg.png";
import { BsFillPlayFill } from "react-icons/bs";
import HeroImage from "../../assets/HeroImage.svg";

const Hero = () => {
  return (
    <section className="mb-20 mt-16 w-full bg-silver h-screen">
      <div className="md:flex md:justify-between px-10">
        <div className="lg:px-16 pt-20 ">
          <h2 className="font-Poppins text-3xl font-semibold mb-4">
            Time to Meet Your
          </h2>
          <h1 className="text-5xl mb-4 text-blue font-semibold tracking-widest font-Poppins">
            New Home
          </h1>
          <p className="font-Poppins text-ash mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            blanditiis amet laborum cumque sequi consequatur?
          </p>
          <div className="flex items-center mb-10">
            <button className=" bg-blue text-white font-bold text-xs p-3 px-7 rounded-lg mr-6">
              Learn More
            </button>
            <button className=" bg-blue text-white font-bold text-xs p-3  rounded-full ">
              <BsFillPlayFill className="text-lg" />
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img src={HeroImage} alt="Hero" className="w-auto h-auto " />
        </div>
      </div>
    </section>
  );
};

export default Hero;
