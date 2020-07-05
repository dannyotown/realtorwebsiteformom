import React from "react";
import { MDBRow, MDBContainer, MDBInput, MDBCard } from "mdbreact";
import HouseCard from "./HomeBody/HouseCards";
import FooterPage from "../../../components/footer/Footer";
import MapBox from "./Mapbox/MapBox";
import housingInfo from "../components/HomeBody/testdata";

function HomeBody() {
  return (
    <>
      <MDBCard className="mb-5 bg-light">
        <h2 className="text-center mt-5">Search For Houses</h2>
        <div className="mx-auto w-75">
          <MDBInput outline size="lg" className="bg-white" />
        </div>
      </MDBCard>
      <MDBContainer>
        <MDBRow>
          {housingInfo.map((info, index) => {
            return <HouseCard housingInfo={info} key={index} />;
          })}
        </MDBRow>
        <MDBRow className="mt-5 mb-5">
          <MapBox />
        </MDBRow>
      </MDBContainer>
      <FooterPage />
    </>
  );
}

export default HomeBody;
