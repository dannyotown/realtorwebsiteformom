import React from "react";
import { MDBCard, MDBCardBody, MDBCardText, MDBCol } from "mdbreact";
import { Link } from "react-router-dom";

const HouseCard = React.memo(({ housingInfo }) => {
  return (
    <Link to={`/property/${housingInfo.property_id}`} className="mx-auto">
      <MDBCol sm="6" className="mx-auto mb-4" style={{ maxWidth: "22rem" }}>
        <MDBCard>
          <img
            className="img-fluid"
            alt="Home"
            src={`https://djangorealtorbackend.s3.us-east-2.amazonaws.com/${housingInfo.photo1}`}
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
    </Link>
  );
});

export default HouseCard;
