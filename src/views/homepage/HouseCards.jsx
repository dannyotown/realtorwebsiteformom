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
          waves="true"
        />
        <MDBCardBody>
          <h5>{housingInfo.address}</h5>
          <MDBCardText>
            <strong>City:</strong> {housingInfo.city}
            <br />
            <strong>State:</strong> {housingInfo.state_abbreviation}
            <br />
            <strong>ZipCode:</strong> {housingInfo.zip_code}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
});

export default HouseCard;
