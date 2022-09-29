import React, { Fragment } from "react";

import FAQsItem from "../Data/FAQsItem";

const faqsData = [
  {
    id: "q1",
    que: "Lorem ipsum dolor sit amet consectetur?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur qui quaerat consequuntur, nostrum placeat quisquam. Nulla pariatur at voluptatem doloribus quisquam, perspiciatis, ab animi soluta nihil!",
  },
  {
    id: "q2",
    que: "Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur qui quaerat consequuntur, nostrum placeat quisquam. Nulla pariatur at voluptatem doloribus quisquam, perspiciatis, ab animi soluta nihil!",
  },
  {
    id: "q3",
    que: "Lorem ipsum dolor sit ?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur qui quaerat consequuntur, nostrum placeat quisquam. Nulla pariatur at voluptatem doloribus quisquam, perspiciatis, ab animi soluta nihil!",
  },
  {
    id: "q4",
    que: "Lorem ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur qui quaerat consequuntur, nostrum placeat quisquam. Nulla pariatur at voluptatem doloribus quisquam, perspiciatis, ab animi soluta nihil!",
  },
];

const FAQs = () => {
  const mappedList = faqsData.map((item) => (
    <FAQsItem key={item.id} id={item.id} que={item.que} ans={item.ans} />
  ));

  return (
    <Fragment>
      <section className="mx-auto bg-silver px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <h1 className="font-Poppins font-bold text-3xl text-center mb-10">
          Frequently Asked <span className="text-blue">Questions</span>
        </h1>
        <div className="lg:mx-28 mx-0">{mappedList}</div>
      </section>
    </Fragment>
  );
};

export default FAQs;
