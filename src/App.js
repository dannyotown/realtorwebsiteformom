import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Footer from "./components/footer/footer.js";
import Navbar from "./components/navbar/navbar.js";
import Homepage from "./views/homepage/HomePageView.js";
import HousePage from "./views/housepage/HousePageView.js";
import api from "./components/axios";

function App() {
  const [houses, setHouses] = useState(null);
  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const { data } = await api.get("/property");
        setHouses(data);
      } catch (err) {
        console.log(err);
      }
    };
    setTimeout(() => {
      fetchHouses();
    }, 2000);
  }, []);

  return (
    <>
      {!houses ? (
        <div>loading</div>
      ) : (
        <>
          <Navbar />
          <Route exact path="/" render={() => <Homepage houses={houses} />} />
          <Route exact path="/house" component={HousePage} />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
