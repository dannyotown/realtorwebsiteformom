import React from "react";
import HouseCard from "../homepage/HouseCards";
import { MDBRow, MDBContainer } from "mdbreact";

export const PropertyCarousel = ({ data, type }) => {
  return (
    <MDBContainer>
      <h1 className="text-center m-5">Properties For {type}</h1>
      {data.length === 0 ? (
        <h3 className="text-center mb-5">No Properties Currently For {type}</h3>
      ) : (
        <MDBRow>
          {data.map((properties, index) => {
            return <HouseCard housingInfo={properties} key={index} />;
          })}
        </MDBRow>
      )}
    </MDBContainer>
  );
};

export default PropertyCarousel;
