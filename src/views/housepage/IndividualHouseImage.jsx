import { MDBCard } from "mdbreact";
import React from "react";

const IndividualHouseImage = ({ getProperty }) => {
  return (
    <MDBCard>
      <img
        className="d-block w-auto"
        src={`https://djangorealtorbackend.s3.us-east-2.amazonaws.com/${getProperty.photos}`}
        alt="Home"
      />
    </MDBCard>
  );
};

export default IndividualHouseImage;
