import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const socialIcons = [
  { id: 1, icon: <FaTwitter /> },
  { id: 2, icon: <FaFacebookF /> },
  { id: 3, icon: <FaInstagram /> },
  { id: 4, icon: <FaLinkedinIn /> },
];

const propertyText = [
  { id: 1, text: "Learning Modules" },
  { id: 2, text: "Watch Demos" },
  { id: 3, text: "Parnership" },
  { id: 4, text: "Event" },
];

const aboutText = [
  { id: 1, text: "Our Company" },
  { id: 2, text: "Career" },
  { id: 3, text: "Investors Relations" },
  { id: 4, text: "Social Impact" },
];

const resourcesText = [
  { id: 1, text: "Contact" },
  { id: 2, text: "Give Feedback" },
  { id: 3, text: "Privacy Policy" },
  { id: 4, text: "System Status" },
];

const Footer = () => {
  // const mappedList = faqsData.map((item) => (
  //   <FAQsItem key={item.id} id={item.id} que={item.que} ans={item.ans} />
  // ));

  return (
    <Fragment>
      <section className="mx-auto bg-liteBlue px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <div className="flex flex-col lg:flex-row justify-between lg:mx-10 xl:mx-28 mx-0">
          <div className="flex flex-col items-center lg:items-start">
            <div className="w-28 ">
              <img src={Logo} alt="macho-logo" className="w-full" />
            </div>
            <p className="font-Poppins text-lg text-white my-4 text-center lg:text-left">
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Officiis, officia.
            </p>
            <div className="flex">
              {socialIcons.map((item) => (
                <Link to="/home" key={item.id}>
                  <div className="mr-3 bg-white p-2 rounded-full text-blue mb-6 lg:mb-0 ">
                    {item.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="font-Poppins flex flex-col items-center lg:items-start">
            <h1 className="font-Poppins text-lg text-white mb-3 mt-4 lg:mt-0">
              Property
            </h1>
            {propertyText.map((item) => (
              <p key={item.id} className="py-1 text-xs text-white">
                {item.text}
              </p>
            ))}
          </div>

          <div className="font-Poppins flex flex-col items-center lg:items-start">
            <h1 className="font-Poppins text-lg text-white mb-3 mt-4 lg:mt-0">
              About
            </h1>
            {aboutText.map((item) => (
              <p key={item.id} className="py-1 text-xs text-white">
                {item.text}
              </p>
            ))}
          </div>

          <div className="font-Poppins flex flex-col items-center lg:items-start">
            <h1 className="font-Poppins text-lg text-white mb-3 mt-4 lg:mt-0">
              Resources
            </h1>
            {resourcesText.map((item) => (
              <p key={item.id} className="py-1 text-xs text-white">
                {item.text}
              </p>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Footer;
