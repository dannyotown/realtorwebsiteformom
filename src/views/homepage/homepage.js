import React from "react";
import Navbar from "../../components/navbar/navbar.js";
import HomeImage from "./components/HomeImage.js";
import HomeBody from "./components/HomeBody";

function HomePage() {
  return (
    <>
      <HomeImage />
      <Navbar />
      <HomeBody />
    </>
  );
}

export default HomePage;
