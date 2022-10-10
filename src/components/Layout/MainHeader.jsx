import React, { useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/features/authSlice";
import Logo from "../../assets/Logo.png";
import { TiThMenu } from "react-icons/ti";
import { CgClose } from "react-icons/cg";
import { FaUser } from "react-icons/fa";

const MainHeader = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const menuHandler = () => {
    setIsMobileMenu((isMobileMenu) => !isMobileMenu);
  };

  const handleLogout = () => {
    dispatch(logout());
    menuHandler();
    history.replace("/login");
  };

  let newStr = "";

  for (const s of user) {
    newStr += s;
    if (s === "@") {
      break;
    }
  }
  const truncatedString = newStr.replace("@", "");
  // console.log(truncatedString);

  const btnContent = isAuthenticated ? "Logout" : "Login";
  const getStartedContent = isAuthenticated
    ? ` ${truncatedString}`
    : "Get Started";

  const mobileMenu = (
    <div className="w-11/12 max-w-2xl mt-4 lg:hidden">
      <ul className=" flex-col px-6 text-ash  ">
        <li className="py-3">
          <NavLink to="/home" activeClassName="text-blue" onClick={menuHandler}>
            Home
          </NavLink>
        </li>
        <li className="py-3">
          <NavLink
            to="/listings"
            activeClassName="text-blue"
            onClick={menuHandler}
          >
            Properties
          </NavLink>
        </li>
        <li className="py-3">
          <NavLink
            to="/agent"
            activeClassName="text-blue"
            onClick={menuHandler}
          >
            Agents
          </NavLink>
        </li>
        <li className="py-3">
          <NavLink to="/blog" activeClassName="text-blue" onClick={menuHandler}>
            Blog
          </NavLink>
        </li>
      </ul>
      <div className="flex justify-between py-3 pl-6">
        <button
          className="text-blue font-medium text-base pr-5"
          onClick={isAuthenticated ? handleLogout : menuHandler}
        >
          {!isAuthenticated ? <Link to="/login">{btnContent}</Link> : "Logout"}
        </button>
        <button
          className="flex items-center ml-6 bg-blue text-white font-bold text-xs p-3 px-3 rounded-lg shadow-md "
          onClick={menuHandler}
        >
          {" "}
          {isAuthenticated && (
            <div className="mr-3">
              <FaUser />
            </div>
          )}
          <Link to="/signup">{getStartedContent}</Link>
        </button>
      </div>
    </div>
  );

  return (
    <header className="z-10 w-full fixed bg-white top-0 p-4 px-6 lg:px-20 ">
      <nav className="flex lg:flex items-center justify-between px-6  font-Poppins">
        <div className="flex  items-center ">
          <div className="w-28 ">
            <img src={Logo} alt="macho-logo" className="w-full" />
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
          <button
            className="text-blue font-medium text-base pr-5"
            onClick={isAuthenticated ? handleLogout : () => null}
          >
            {!isAuthenticated ? (
              <Link to="/login">{btnContent}</Link>
            ) : (
              "Logout"
            )}
          </button>
          <button className="flex items-center bg-blue text-white border-2 border-blue font-bold text-xs py-2 px-4 hover:text-blue hover:bg-white  hover:outline-blue rounded-lg shadow-md ">
            {isAuthenticated && (
              <div className="mr-3 ">
                <FaUser />
              </div>
            )}
            <Link to="/signup">{getStartedContent}</Link>
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
