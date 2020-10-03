import React from "react";
import { Route } from "react-router-dom";
import Footer from "./components/footer/footer.js";
import Navbar from "./components/navbar/navbar.js";
import Homepage from "./views/homepage/HomePageView.js";
import HousePage from "./views/housepage/HousePageView.js";

function App() {
  return (
    <>
      <Navbar />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/house" component={HousePage} />
      <Footer />
    </>
  );
}

export default App;
