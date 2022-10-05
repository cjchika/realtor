import React from "react";
//import NotFound from "../components/Layout/NotFound";
import SignupForm from "../components/Forms/SignupForm";
import Footer from "../components/Layout/Footer";

const Signup = () => {
  return (
    <>
      <section className="mx-auto bg-silverLite pb-80">
        <SignupForm />
      </section>
      <Footer />
    </>
  );
};

export default Signup;
