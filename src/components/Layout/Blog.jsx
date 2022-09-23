import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <Fragment>
      <section className="mx-auto bg-silver px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <div className="flex flex-col md:flex-row justify-between px-auto">
          <div>
            <h1 className="font-Poppins font-bold text-2xl text-left mb-3">
              Latest Information From Our{" "}
              <span className="text-blue">Blog</span>
            </h1>
            <p className="text-left text-ash">
              Stay up to date with all the information about our listed
              properties.
            </p>
          </div>
          <div className="lg:pr-4 pb-3 pt-5">
            <Link to="/blog">
              <button className="font-Poppins bg-silverLite border-2 border-blue text-blue font-medium text-base px-8 py-2 rounded-md shadow-lg hover:bg-blue hover:text-white">
                See More
              </button>
            </Link>
          </div>
        </div>
        {/* <ul className="flex justify-center flex-col lg:flex-row my-6">
      {mappedList}
    </ul> */}
      </section>
    </Fragment>
  );
};

export default Blog;
