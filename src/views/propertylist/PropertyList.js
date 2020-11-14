import React from "react";
import PropertyCarousel from "./PropertySearch";

export const PropertyList = ({ properties }) => {
  const getForSale = properties.filter((data) => {
    return data.lease !== "false";
  });
  const getForLease = properties.filter((data) => {
    return data.lease === "true";
  });
  return (
    <div>
      <PropertyCarousel data={getForSale} type={"Sale"} />
      <PropertyCarousel data={getForLease} type={"Lease"} />
    </div>
  );
};

export default PropertyList;
