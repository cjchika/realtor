import React from "react";
import { Link } from "react-router-dom";
import LoginImage from "../../assets/Signup.jpg";

const LoginForm = () => {
  return (
    <>
      <div className="font-Poppins pt-40 flex justify-center lg:justify-between px-4 md:px-16 lg:px-20">
        <div className="bg-white px-4 md:px-7 py-10 w-full lg:w-1/2 rounded-[30px] lg:rounded-[0px] lg:rounded-l-[50px] shadow-md lg:shadow">
          <div className="flex flex-col items-center pt-5">
            <h2 className="text-2xl font-medium mb-3 ">Log in to Macho</h2>
            <p className="text-ash mb-10 text-sm">
              Don't have an account yet?
              <Link to="/signup">
                <span className="text-blue"> Create one for free</span>
              </Link>
            </p>
          </div>
          <div className="text-black mb-8 text-sm p-4 bg-[#f7cfcf] border-[#dc2626] border rounded-lg">
            {" "}
            <p className="text-center text-sm">Error message</p>
          </div>
          <form>
            <div className="flex flex-col mb-5">
              <label className="text-ash pb-2 text-lg" htmlFor="username">
                Username or Email <span className="text-[#dc2626]">*</span>
              </label>
              <input
                className="bg-[#eeecec] border-[#e0dddd] focus:bg-silverLite focus:border-silver border outline-0 h-12 py-2 px-4 rounded-lg"
                id="username"
                type="username"
              />
            </div>

            <div className="flex flex-col mb-12">
              <label className="text-ash text-lg" htmlFor="password">
                Password <span className="text-[#dc2626]">*</span>
              </label>
              <input
                className="bg-[#eeecec] border-[#e0dddd] focus:bg-silverLite focus:border-silver border outline-0 h-12 py-2 px-4 rounded-lg"
                id="password"
                type="password"
              />
            </div>
            <button className="bg-blue font-medium w-full text-white py-3 rounded-lg">
              Log in
            </button>
          </form>
        </div>
        <div className="hidden lg:block w-1/2 ml-12 ">
          <div>
            <img
              alt="real estate"
              className="w-full h-[40rem] rounded-r-[50px]"
              src={LoginImage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
