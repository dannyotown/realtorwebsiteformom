import React from "react";
import { MDBCard, MDBCardBody, MDBCardText, MDBCol } from "mdbreact";

const HouseCard = React.memo(({ housingInfo }) => {
  return (
    <MDBCol sm="6" className="mx-auto mb-4" style={{ maxWidth: "22rem" }}>
      <MDBCard>
        <img
          className="img-fluid"
          alt="Home"
          src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          waves
        />
        <MDBCardBody>
          <h5>{housingInfo.Street}</h5>
          <MDBCardText>
            <strong>City:</strong> {housingInfo.City}
            <br />
            <strong>State:</strong> {housingInfo.State}
            <br />
            <strong>ZipCode:</strong> {housingInfo.ZipCode}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
});

export default HouseCard;
