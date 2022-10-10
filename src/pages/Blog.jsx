import React, { useEffect, useRef } from "react";
import BlogPosts from "../components/Layout/BlogPosts";
import FAQs from "../components/Layout/FAQs";
import Footer from "../components/Layout/Footer";

const Blog = () => {
  const divRef = useRef();

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <div ref={divRef} className="bg-silver pt-20">
      <BlogPosts />
      <FAQs />
      <Footer />
    </div>
  );
};

export default Blog;
