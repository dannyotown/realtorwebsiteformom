import React, { useState } from "react";
import { Marker, InfoWindow } from "react-google-maps";

export const CustomMarker = ({ house, history }) => {
  const [getInfo, showInfo] = useState(false);
  const handleMouseOver = () => {
    showInfo(true);
  };
  const handleMouseExit = () => {
    showInfo(false);
  };
  return (
    <Marker
      onClick={() => {
        history.push(`/property/${house.property_id}`);
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseExit}
      position={{ lat: house.lat, lng: house.long }}
      key={house.property_id}
      animation={window.google.maps.Animation.DROP}
    >
      {getInfo && (
        <InfoWindow>
          <>
            <p>
              <strong>{house.address}</strong> <br />
              Price: {Number(house.price).toLocaleString()}
              <br />
              Square Feet: {Number(house.square_feet).toLocaleString()}
            </p>
          </>
        </InfoWindow>
      )}
    </Marker>
  );
};

export default CustomMarker;
