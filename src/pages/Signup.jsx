import React, { useEffect, useRef } from "react";
//import NotFound from "../components/Layout/NotFound";
import SignupForm from "../components/Forms/SignupForm";
import Footer from "../components/Layout/Footer";

const Signup = () => {
  const divRef = useRef();

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <>
      <section className="mx-auto bg-silverLite pb-80" ref={divRef}>
        <SignupForm />
      </section>
      <Footer />
    </>
  );
};

export default Signup;
