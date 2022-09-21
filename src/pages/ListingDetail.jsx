import React from "react";
import { useParams } from "react-router-dom";

const ListingDetail = () => {
  const params = useParams();
  const { listingId } = params;

  return (
    <div className="mt-36 bg-liteBlue">
      <h1 className="text-5xl">ID: {listingId}</h1>
    </div>
  );
};

export default ListingDetail;
