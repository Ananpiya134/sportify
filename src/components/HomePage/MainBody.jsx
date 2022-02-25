import GoogleMapReact from "google-map-react";
import { useEffect, useState } from "react";
import { GOOGLE_MAP_API } from "../../config/env";
import { getLocName } from "../../utils/getLocName";

function MainBody({ currentEvent }) {
	const coordinates = {
		lat: Number(currentEvent.locationLat),
		lng: Number(currentEvent.locationLng),
	};
	console.log(coordinates);
	const center = {
		lat: Number(currentEvent.locationLat) - 0.005,
		lng: Number(currentEvent.locationLng),
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
