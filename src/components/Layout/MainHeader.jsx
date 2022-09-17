import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { TiThMenu } from "react-icons/ti";

const MainHeader = () => {
  const bigScreen = (
    <div>
      <div className="w-28  ">
        <img src={Logo} alt="macho-logo" className="w-full " />
      </div>
      <button>
        <TiThMenu className="text-5xl p-2 " />
      </button>
    </div>
  );

  return (
    <header className="w-full fixed bg-white top-0 p-4 px-10 lg:px-20 ">
      <nav className="lg:flex items-center justify-between px-6  font-Poppins">
        <div className="w-28 ">
          <img src={Logo} alt="macho-logo" className="w-full " />
        </div>
        <ul className="flex px-6 text-ash invisible lg:visible ">
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
        <div className="pl-18">
          <button className=" invisible lg:visible bg-blue text-white font-bold text-xs p-3 px-5  hover:text-blue hover:bg-white rounded-lg shadow-md ">
            Get Started
          </button>
          <button>
            <TiThMenu className="text-5xl p-2 lg:hidden " />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
