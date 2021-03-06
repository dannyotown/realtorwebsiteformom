import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Footer from "./components/footer/footer.js";
import Navbar from "./components/navbar/navbar.js";
import Homepage from "./views/homepage/HomePageView.js";
import HousePage from "./views/housepage/HousePageView.js";
import api from "./components/axios";
import Loading from "./components/loading/loading";
import PropertyList from "./views/propertylist/PropertyList.js";
import ContactMe from "./views/contactpage/ContactMe.js";

function App() {
  const [properties, setProperties] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const { data } = await api.get("/property");
        setTimeout(() => {
          setProperties(data);
          setDataLoaded(true);
        }, 2000);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProperties();
  }, []);

  return (
    <>
      {!properties && !dataLoaded ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Route
            exact
            path="/"
            render={(props) => <Homepage houses={properties} props={props} />}
          />
          <Route
            exact
            path="/property/:id"
            render={(props) => (
              <HousePage properties={properties} props={props} />
            )}
          />
          <Route
            exact
            path="/properties"
            render={(props) => (
              <PropertyList properties={properties} props={props} />
            )}
          />
          <Route
            exact
            path="/contactme"
            render={(props) => (
              <ContactMe properties={properties} props={props} />
            )}
          />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
