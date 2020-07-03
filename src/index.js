import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../src/components/globalStyles.css";
import mapboxgl from "mapbox-gl";
import App from "./App";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZHRvd24iLCJhIjoiY2tjNmVsYXh4MGVtajJ1amhldGV5c3lwNiJ9.ErWLm9WFcqFDnt6erqHNHA";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
