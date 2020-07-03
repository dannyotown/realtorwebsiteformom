import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const HouseCard = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZHRvd24iLCJhIjoiY2tjNmVsYXh4MGVtajJ1amhldGV5c3lwNiJ9.ErWLm9WFcqFDnt6erqHNHA";
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [-90.5, 38.63],
        zoom: 9.5,
      });
      // new mapboxgl.Marker().setLngLat([-90.72571, 38.77808]).addTo(map);

      map.on("load", () => {
        setMap(map);
        map.addSource("places", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {
                  description: "<strong> Town House! </strong>",
                },
                geometry: {
                  type: "Point",
                  coordinates: [-90.72571, 38.77808],
                },
              },
            ],
          },
        });
        map.addLayer({
          id: "places",
          type: "symbol",
          source: "places",
          layout: {
            "icon-image": "rocket-15",
            "icon-allow-overlap": true,
            "icon-size": 1.5,
          },
        });
        map.on("click", "places", function (e) {
          var coordinates = e.features[0].geometry.coordinates.slice();
          var description = e.features[0].properties.description;

          // Ensure that if the map is zoomed out such that multiple
          // copies of the feature are visible, the popup appears
          // over the copy being pointed to.
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }

          new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
        });

        // Change the cursor to a pointer when the mouse is over the places layer.
        map.on("mouseenter", "places", function () {
          map.getCanvas().style.cursor = "pointer";
        });

        // Change it back to a pointer when it leaves.
        map.on("mouseleave", "places", function () {
          map.getCanvas().style.cursor = "";
        });
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return (
    <div
      ref={(el) => (mapContainer.current = el)}
      style={{ width: "80%", margin: "0 auto", height: "calc(100vh - 250px)" }}
    />
  );
};

export default HouseCard;
