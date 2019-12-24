import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = () => {
  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 40.173969, lng: 44.50275 }}
    />
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
