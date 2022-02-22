import GoogleMapReact from "google-map-react";
import { useEffect, useState } from "react";
import { GOOGLE_MAP_API } from "../../config/env";

function MainBody({ eventData }) {
	const coordinates = {
		lat: Number(eventData.locationLat),
		lng: Number(eventData.locationLng),
	};

	return (
		<div className={`main_body`}>
			<GoogleMapReact
				defaultCenter={coordinates}
				center={coordinates}
				defaultZoom={14}
				bootstrapURLKeys={{ key: GOOGLE_MAP_API }}
			>
				<div
					style={{
						position: "absolute",
						transform: "translate(-50%, 50%)",
					}}
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
