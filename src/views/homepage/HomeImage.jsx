import React from "react";
import homepagebg from "../../imgs/homepagebg.jpg";
import "./styling/HomeImage.css";
import { MDBCard } from "mdbreact";

function HomeImage() {
  return (
    <MDBCard>
      <img className="HomeImage" src={homepagebg} alt="Home With Lights" />
    </MDBCard>
  );
}

export default HomeImage;
