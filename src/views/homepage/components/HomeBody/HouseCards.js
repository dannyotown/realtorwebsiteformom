import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

const HouseCard = ({ houseInfo }) => {
  return (
    <MDBCol style={{ maxWidth: "22rem" }}>
      <MDBCard>
        <img
          className="img-fluid"
          alt="Home"
          src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          waves
        />
        <MDBCardBody>
          <MDBCardTitle>House Info</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default HouseCard;
