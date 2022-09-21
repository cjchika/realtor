import React, { Fragment } from "react";
import Hero from "../components/Layout/Hero";
import Purpose from "../components/Layout/Purpose";
import Properties from "../components/Layout/Properties";
import OurService from "../components/Layout/OurService";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <Purpose />
      <Properties />
      <OurService />
    </Fragment>
  );
};

export default HomePage;
