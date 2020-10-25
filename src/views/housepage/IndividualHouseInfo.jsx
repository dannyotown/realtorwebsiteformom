import { MDBCard, MDBIcon, MDBCol, MDBRow } from "mdbreact";
import React from "react";
import IndividualHouseForm from "./IndividualHouseForm";

function IndividualHouseInfo({ getProperty }) {
  return (
    <>
      <MDBCard className="w-100 mx-auto">
        <div className="p-4">
          <h2 className="mb-5 mt-3 text-center">{getProperty.address}</h2>
          <MDBCol>
            <MDBRow className="text-center">
              <MDBCol lg="4" md="8">
                <MDBIcon icon="money-bill-alt" />{" "}
                <span className="font-weight-bold">
                  ${Number(getProperty.price).toLocaleString()}
                </span>
              </MDBCol>
              <MDBCol lg="2" md="4">
                <MDBIcon icon="bed" /> {getProperty.number_of_bedrooms} Beds
              </MDBCol>
              <MDBCol lg="2" md="4">
                <MDBIcon icon="bath" /> {getProperty.number_of_bathrooms} Baths
              </MDBCol>
              <MDBCol lg="4" md="8">
                <MDBIcon icon="shoe-prints" />{" "}
                {Number(getProperty.square_feet).toLocaleString()}sqft
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <div
            className="w-75 mt-5 mb-2 mx-auto"
            style={{ background: "#dcdcdc", height: "2px" }}
          ></div>
          <MDBRow className="p-5">
            <MDBCol md="8">
              <h4 className="mb-3">Description</h4>
              <p>
                Welcome to the sought after Villanova neighborhood! This 3
                bedroom, 2 bath ranch home has much to offer including a wood
                burning fireplace in the living room, separate dining room,
                coved ceilings in the living room and dining room, eat-in
                kitchen, built-in microwave, wood floors, attic fan, finished
                lower level with a walk-out, family room, rec room and wet bar.
                Outside this home offers a fenced lot, attached garage and
                enclosed soffit. You can't beat the location near restaurants,
                shopping and public transportation. Showings to begin at noon on
                Friday, October 2nd.
              </p>
            </MDBCol>
            <MDBCol md="4" className="justify-content-center">
              <h4 className="mb-2">Questions?</h4>
              <IndividualHouseForm />
            </MDBCol>
          </MDBRow>
        </div>
        <button className="w-100 viewMoreImages gbBlueBg">View Images</button>
      </MDBCard>
    </>
  );
}

export default IndividualHouseInfo;
