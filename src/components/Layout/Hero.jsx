import React from "react";
import HeroIMG from "../../assets/HeroIMG.png";

const Hero = () => {
  return (
    <section className="bg-silver  ">
      <div></div>
      <div>
        <img src={HeroIMG} alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
