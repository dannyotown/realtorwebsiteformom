import React from "react";
import IndividualHouseImage from "./IndividualHouseImage";
import { MDBContainer } from "mdbreact";
import IndividualHouseInfo from "./IndividualHouseInfo";
import "../../components/globalStyles.css";
import "./styling/HousePageStyling.css";

function HousePage({ properties, props }) {
  const getProperty = properties.find((property) => {
    return property.property_id === parseInt(props.match.params.id);
  });
  return (
    <>
      <section className="my-5">
        <MDBContainer>
          <IndividualHouseImage getProperty={getProperty} />
          <IndividualHouseInfo getProperty={getProperty} />
        </MDBContainer>
      </section>
    </>
  );
}

export default HousePage;
