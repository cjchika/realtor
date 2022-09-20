import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { TiThMenu } from "react-icons/ti";
import { CgClose } from "react-icons/cg";

const MainHeader = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const menuHandler = () => {
    setIsMobileMenu((isMobileMenu) => !isMobileMenu);
  };

  const mobileMenu = (
    <div className="w-11/12 max-w-2xl mt-4">
      <ul className=" flex-col px-6 text-ash  ">
        <li className="py-3">
          <NavLink to="/home" activeClassName="text-blue">
            Home
          </NavLink>
        </li>
        <li className="py-3">
          <NavLink to="/listings" activeClassName="text-blue">
            Properties
          </NavLink>
        </li>
        <li className="py-3">
          <NavLink to="/agent" activeClassName="text-blue">
            Agents
          </NavLink>
        </li>
        <li className="py-3">
          <NavLink to="/blog" activeClassName="text-blue">
            Blog
          </NavLink>
        </li>
      </ul>
      <div className="flex justify-between py-3 pl-6">
        <button className="text-blue font-medium text-base pr-5">Login</button>
        <button className="ml-6 bg-blue text-white font-bold text-xs p-3 px-3 rounded-lg shadow-md ">
          Get Started
        </button>
      </div>
    </div>
  );

  return (
    <header className="w-full fixed bg-white top-0 p-4 px-6 lg:px-20 ">
      <nav className="flex justify-end lg:flex items-center justify-between px-6  font-Poppins">
        <div className="flex  items-center ">
          <div className="w-28 ">
            <img src={Logo} alt="macho-logo" className="w-full " />
          </div>
        </div>
        <ul className=" hidden lg:flex px-6 text-ash  ">
          <li>
            <NavLink to="/home" activeClassName="text-blue" className="px-4">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/listings"
              activeClassName="text-blue"
              className="px-4"
            >
              Properties
            </NavLink>
          </li>
          <li>
            <NavLink to="/agent" activeClassName="text-blue" className="px-4">
              Agents
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" activeClassName="text-blue" className="px-4 ">
              Blog
            </NavLink>
          </li>
        </ul>
        <div className="pl-18 hidden lg:flex ">
          <button className="text-blue font-medium text-base pr-5">
            Login
          </button>
          <button className=" bg-blue text-white font-bold text-xs p-3 px-5 hover:text-blue hover:bg-white hover:outline hover:outline-blue rounded-lg shadow-md ">
            Get Started
          </button>
        </div>
        <div className="lg:hidden">
          <button onClick={menuHandler}>
            {!isMobileMenu ? (
              <TiThMenu className="text-5xl p-2" />
            ) : (
              <CgClose className="text-5xl p-2" />
            )}
          </button>
        </div>
      </nav>
      {isMobileMenu && mobileMenu}
    </header>
  );
};

export default MainHeader;
