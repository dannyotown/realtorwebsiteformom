import { MDBCard } from "mdbreact";
import React from "react";

const IndividualHouseImage = ({ getProperty }) => {
  return (
    <MDBCard>
      <img
        className="d-block h-auto w-100"
        src={`https://djangorealtorbackend.s3.us-east-2.amazonaws.com/${getProperty.photo1}`}
        alt="Home"
      />
    </MDBCard>
  );
};

export default IndividualHouseImage;
