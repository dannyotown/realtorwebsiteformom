import React, { useState } from "react";
import { MDBRow, MDBContainer, MDBInput, MDBCard } from "mdbreact";
import HouseCard from "./HomeBody/HouseCards";
import housingInfo from "./HomeBody/testdata";
import MyMapComponent from "./GoogleMap/GoogleMap";

function HomeBody() {
  const [housing, setHousing] = useState(housingInfo);
  const [filterHousing, setFilterHousing] = useState(housingInfo);
  const [getDropDown, setDropDown] = useState("ZipCode");

  const onSearch = (e) => {
    const data = housing.filter((house) => {
      return house[getDropDown].toString().includes(e.target.value);
    });
    setFilterHousing(data);
  };
  const dropDownOnChange = (e) => {
    setDropDown(e.target.value);
  };

  return (
    <>
      <MDBCard className="mb-5 bg-light">
        <h2 className="text-center mt-5">Search For Houses</h2>
        <div className="mx-auto w-75 mb-4 d-flex flex-row justify-content-center align-items-center">
          <select
            className="form-control form-control-lg bg-white"
            style={{
              width: "15%",
              minWidth: "140px",
              padding: ".5rem .725rem",
              marginRight: "2px",
            }}
            onBlur={dropDownOnChange}
          >
            <option value="ZipCode">Zip Code</option>
            <option value="Street">Street</option>
            <option value="City">City</option>
          </select>
          <MDBInput
            outline
            size="lg"
            className="bg-white mb-0"
            onChange={onSearch}
          />
        </div>
      </MDBCard>
      <MDBContainer>
        <MDBRow>
          {filterHousing.map((info, index) => {
            return <HouseCard housingInfo={info} key={index} />;
          })}
        </MDBRow>
        <MDBRow className="mt-5 mb-5 align-items-center justify-content-center">
          <MyMapComponent isMarkerShown />
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default HomeBody;
