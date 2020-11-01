import React, { Suspense } from "react";
import HomeBody from "./HomeBody";

const HomePageImage = React.lazy(() => import("./HomeImage"));

function HomePage({ houses }) {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <HomePageImage />
      </Suspense>
      <HomeBody houses={houses} />
    </>
  );
}

export default HomePage;
