import React, { Fragment } from "react";
import Hero from "../components/Layout/Hero";
import Purpose from "../components/Layout/Purpose";
import Properties from "../components/Layout/Properties";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <Purpose />
      <Properties />
    </Fragment>
  );
};

export default HomePage;
