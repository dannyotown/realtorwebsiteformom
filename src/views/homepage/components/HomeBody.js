import React, { useState, useCallback } from "react";
import { MDBRow, MDBContainer, MDBInput, MDBCard } from "mdbreact";
import HouseCard from "./HomeBody/HouseCards";
import FooterPage from "../../../components/footer/Footer";
import MapBox from "./Mapbox/MapBox";
import housingInfo from "../components/HomeBody/testdata";

function HomeBody() {
  const [searchInput, setSearchInput] = useState("");
  const [housing, setHousing] = useState(housingInfo);
  const [filterHousing, setFilterHousing] = useState(housingInfo);
  const filterHomes = useCallback(() => {
    const housingInfo = housing.filter((house) => {
      return house.ZipCode.toString().includes(searchInput.toString());
    });
    setFilterHousing(housingInfo);
  }, [searchInput]);
  return (
    <>
      <MDBCard className="mb-5 bg-light">
        <h2 className="text-center mt-5">Search For Houses</h2>
        <div className="mx-auto w-75 mb-3 d-flex flex-row justify-content-center align-items-center">
          <select
            className="form-control form-control-lg bg-white"
            style={{
              width: "10%",
              minWidth: "140px",
              padding: ".5rem .725rem",
            }}
          >
            <option>Search by</option>
            <option value="1">Zip Code</option>
            <option value="2">Address</option>
            <option value="3">Price</option>
          </select>
          <MDBInput
            outline
            size="lg"
            className="bg-white mb-0"
            getValue={setSearchInput}
            onChange={filterHomes}
          />
        </div>
      </MDBCard>
      <MDBContainer>
        <MDBRow>
          {filterHousing.map((info, index) => {
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
