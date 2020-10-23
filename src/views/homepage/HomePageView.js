import React from "react";
import HomeImage from "./HomeImage";
import HomeBody from "./HomeBody";

function HomePage({ houses }) {
  return (
    <>
      <HomeImage />
      <HomeBody houses={houses} />
    </>
  );
}

export default HomePage;
