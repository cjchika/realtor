import React from "react";
import HeroIMG from "../../assets/HeroIMG.png";

const Hero = () => {
  return (
    <section className="mb-20">
      <div className="bg-silver h-screen flex justify-between">
        <div className="w-auto pl-24 pt-20">
          <h2>Time to Meet Your</h2>
          <h1 className="text-6xl text-blue font-semibold tracking-widest font-Poppins">
            New Home
          </h1>
        </div>
        <div className="w-auto">
          <img src={HeroIMG} alt="Hero" className="max-h-screen" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
