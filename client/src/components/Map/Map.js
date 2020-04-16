import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

const Map = (props) => {
  const [selectedBank, setSelectedBank] = useState(null);
  //console.log("am i getting props inside map?", props);
  let name = props.location.length ? props.location[0].name : "";
  let lat = props.location.length ? props.location[0].lat : 0;
  let lng = props.location.length ? props.location[0].lng : 0;

  useEffect(() => {
    //closes info window on escape
    //need to bring state up so that it closes window on search

    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedBank(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

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
          onClick={() => {
            setSelectedBank(props.location[0]);
          }}
        />
      )}
      {selectedBank && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedBank(null);
          }}
          position={{
            lat: selectedBank.lat,
            lng: selectedBank.lng,
          }}
        >
          <div>
            <h2>{selectedBank.name}</h2>
            <p>{props.rate}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
