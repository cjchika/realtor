import React from "react";
import { useParams } from "react-router-dom";

const ListingDetail = () => {
  const params = useParams();

  const { listingId } = params;

  return <div>{listingId}</div>;
};

export default ListingDetail;
