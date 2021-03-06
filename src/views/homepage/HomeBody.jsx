import React, { useState } from "react";
import { MDBRow, MDBContainer, MDBInput, MDBCard } from "mdbreact";
import HouseCard from "./HouseCards";
import MyMapComponent from "./GoogleMap.jsx";
import { useHistory } from "react-router-dom";

function HomeBody({ houses }) {
  const housing = houses;
  const [filterHousing, setFilterHousing] = useState(houses);
  const [getDropDown, setDropDown] = useState("zip_code");

  const onSearch = (e) => {
    const data = housing.filter((house) => {
      return house[getDropDown].toString().includes(e.target.value);
    });
    setFilterHousing(data);
  };
  const dropDownOnChange = (e) => {
    setDropDown(e.target.value);
  };
  const history = useHistory();
  return (
    <>
      <MDBCard className="mb-5 bg-light">
        <h2 className="text-center mt-5">Search For Properties</h2>
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
            <option value="zip_code">Zip Code</option>
            <option value="address">Street</option>
            <option value="city">City</option>
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
          {filterHousing.map((info) => {
            return <HouseCard housingInfo={info} key={info.property_id} />;
          })}
        </MDBRow>
        <MDBRow className="mt-5 mb-5 align-items-center justify-content-center">
          <MyMapComponent
            isMarkerShown
            filterHousing={filterHousing}
            history={history}
            className="test"
          />
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default HomeBody;
