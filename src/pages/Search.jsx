import React, { useEffect, useRef } from "react";
import SearchList from "../components/Layout/SearchList";
import FAQs from "../components/Layout/FAQs";
import Footer from "../components/Layout/Footer";

const Search = () => {
  const divRef = useRef();

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <div className=" bg-silver pt-20" ref={divRef}>
      <SearchList />
      <FAQs />
      <Footer />
    </div>
  );
};

export default Search;
