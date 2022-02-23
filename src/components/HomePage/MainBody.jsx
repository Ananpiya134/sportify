import GoogleMapReact from "google-map-react";
import { useEffect, useState } from "react";
import { GOOGLE_MAP_API } from "../../config/env";
import { getLocName } from "../../utils/getLocName";

function MainBody({ eventData }) {
  const coordinates = {
    lat: Number(eventData.locationLat),
    lng: Number(eventData.locationLng),
  };
  console.log(eventData);

  const center = {
    lat: Number(eventData.locationLat) - 0.005,
    lng: Number(eventData.locationLng),
  };

  return (
    <div className={`main_body`}>
      <GoogleMapReact
        defaultCenter={coordinates}
        center={center}
        defaultZoom={14}
        bootstrapURLKeys={{ key: GOOGLE_MAP_API }}
      >
        <div
          // style={{
          //   position: "absolute",
          //   transform: "translate(-50%, 50%)",
          // }}
          lat={coordinates.lat}
          lng={coordinates.lng}
        >
          <i
            className={`fa-solid fa-location-dot text-black`}
            style={{ fontSize: 30 }}
          />
        </div>
      </GoogleMapReact>
    </div>
  );
}

export default MainBody;
