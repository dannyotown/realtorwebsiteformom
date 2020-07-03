import React from "react";
import { MDBRow, MDBContainer } from "mdbreact";
import HouseCard from "./HomeBody/HouseCards";
import FooterPage from "./Footer/Footer";

function HomeBody() {
  return (
    <>
      <MDBContainer className="mt-5 mb-5">
        <h1 className="text-center mb-5">Houses For Sale</h1>
        <MDBRow>
          <HouseCard />
        </MDBRow>
      </MDBContainer>
      <FooterPage />
    </>
  );
}

export default HomeBody;
