import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

const Map = (props) => {
  console.log("am i getting props inside map?", props);
  let name = props.location.length ? props.location[0].name : "";
  let lat = props.location.length ? props.location[0].lat : 0;
  let lng = props.location.length ? props.location[0].lng : 0;

  console.log("name map", name);
  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 40.181119, lng: 44.514658 }}
    >
      {name && (
        <Marker
          key={name}
          position={{
            lat: lat,
            lng: lng,
          }}
        />
      )}
    </GoogleMap>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
