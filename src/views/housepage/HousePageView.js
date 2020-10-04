import React from "react";
import IndividualHouseImage from "./IndividualHouseImage";
import { MDBContainer } from "mdbreact";
import IndividualHouseInfo from "./IndividualHouseInfo";
import "../../components/globalStyles.css";
import "./styling/HousePageStyling.css";
function HousePage() {
  return (
    <>
      <section className="my-5">
        <MDBContainer>
          <IndividualHouseImage />
          <IndividualHouseInfo />
        </MDBContainer>
      </section>
    </>
  );
}

export default HousePage;
