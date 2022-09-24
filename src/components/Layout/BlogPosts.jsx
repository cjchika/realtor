import React, { Fragment } from "react";
import BlogItems from "../Data/BlogItems";
import Blog1 from "../../assets/Blog1.jpg";
import Blog2 from "../../assets/Blog2.jpg";
import Blog3 from "../../assets/Blog3.jpg";
import Blog4 from "../../assets/Blog4.jpg";

const blogData = [
  {
    id: "b1",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "2 May 2022",
    image: Blog1,
  },
  {
    id: "b2",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "15 June 2022",
    image: Blog2,
  },
  {
    id: "b3",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "30 June 2022",
    image: Blog3,
  },
  {
    id: "b4",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "20 July 2022",
    image: Blog4,
  },
];

const Blog = () => {
  const mappedList = blogData.map((blog) => {
    return (
      <BlogItems
        key={blog.id}
        id={blog.id}
        title={blog.title}
        date={blog.date}
        image={blog.image}
      />
    );
  });

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
        </div>
        <ul className="flex justify-center flex-col lg:flex-row my-6">
          {mappedList}
        </ul>
      </section>
    </Fragment>
  );
};

export default Blog;
