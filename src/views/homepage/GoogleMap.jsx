import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import CustomMarker from "./GoogleMarker";
export const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div>Loading...</div>,
    containerElement: <div className="gMap mx-auto" />,
    mapElement: <div className="h-100 w-100" />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={9} defaultCenter={{ lat: 38.77808, lng: -90.199402 }}>
    {props.isMarkerShown && (
      <>
        {props.filterHousing.map((house) => {
          return (
            <CustomMarker
              key={house.property_id}
              house={house}
              history={props.history}
            />
          );
        })}
      </>
    )}
  </GoogleMap>
));

export default MyMapComponent;
