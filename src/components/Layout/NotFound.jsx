import React, { Fragment } from "react";
import NotFoundImage from "../../assets/NotFound.svg";

const NotFound = () => {
  return (
    <Fragment>
      <section className="mx-auto bg-silverLite pb-80">
        <div className="px-auto  pt-52">
          <img
            className="w-1/2 h-auto m-auto"
            src={NotFoundImage}
            alt="Not found"
          />
        </div>
      </section>
    </Fragment>
  );
};

export default NotFound;
