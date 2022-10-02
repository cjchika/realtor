import React from "react";
import BlogPosts from "../components/Layout/BlogPosts";
import FAQs from "../components/Layout/FAQs";
import Footer from "../components/Layout/Footer";

const Blog = () => {
  return (
    <div className="mt-16">
      <BlogPosts />
      <FAQs />
      <Footer />
    </div>
  );
};

export default Blog;
