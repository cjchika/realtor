import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FAQsItem = ({ id, ans, que }) => {
  const [answerIsOpen, setAnswerIsOpen] = useState(false);

  const handleFAQ = () => {
    setAnswerIsOpen((answerIsOpen) => !answerIsOpen);
  };
  return (
    <>
      <div className="my-2 mb-4 border-b border-ash last:border-none ">
        <div
          key={id}
          className="flex justify-between items-center  cursor-pointer "
          onClick={handleFAQ}
        >
          <h1 className="font-Poppins text-ash text-xl  mb-4">{que}</h1>
          <div>
            {answerIsOpen ? (
              <IoIosArrowUp className="font-Poppins text-ash " />
            ) : (
              <IoIosArrowDown className="font-Poppins text-ash " />
            )}
          </div>
        </div>
        <div>
          {answerIsOpen && (
            <p className="font-Poppins text-ash text-base mb-4 animate-slideup md:animate-slidedown">
              {ans}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default FAQsItem;
