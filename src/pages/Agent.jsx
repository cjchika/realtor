import React, { useEffect, useRef } from "react";
import NotFound from "../components/Layout/NotFound";

const Agent = () => {
  const divRef = useRef();

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <section ref={divRef}>
      <NotFound />
    </section>
  );
};

export default Agent;
