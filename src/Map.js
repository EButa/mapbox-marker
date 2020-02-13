import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

export const Map = () => {
  const [mapViewport, setMapViewport] = useState({
    height: "100vh",
    width: "100wh",
    longitude: 2.571606,
    latitude: 45.226913,
    zoom: 5
  });

  return (
    <ReactMapGL
      {...mapViewport}
      mapboxApiAccessToken="pk.eyJ1IjoiZXJuZWJ1dGEiLCJhIjoiY2s2bDVwYTRlMGFwdDNncGE0ZWdjaWZzMCJ9.2PppNmYQsYZ8HDSjEGwjCA"
      mapStyle="mapbox://styles/ernebuta/ck6l5q6me1dmn1ip74713pndm"
      onViewportChange={setMapViewport}
    ></ReactMapGL>
  );
};