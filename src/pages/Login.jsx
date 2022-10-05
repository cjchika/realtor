import React from "react";
import LoginForm from "../components/Forms/LoginForm";
import Footer from "../components/Layout/Footer";

const Login = () => {
  return (
    <>
      <section className="mx-auto bg-silverLite pb-80">
        <LoginForm />
      </section>
      <Footer />
    </>
  );
};

export default Login;
