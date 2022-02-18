import GoogleMapReact from "google-map-react";
import { GOOGLE_MAP_API } from "../../config/env";

function MainBody() {
	const coordinates = {
		lat: 13.7437,
		lng: 100.4985,
	};
	return (
		<>
			<GoogleMapReact
				defaultCenter={coordinates}
				center={coordinates}
				defaultZoom={18}
				bootstrapURLKeys={{ key: GOOGLE_MAP_API }}
				style={{ width: "390px", height: "844px", margin: "0", padding: "0" }}
				className={`main_body`}
			></GoogleMapReact>
		</>
	);
}

export default MainBody;
