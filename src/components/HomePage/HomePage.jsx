import { useState, useEffect } from "react";
import "../../App.css";
import MainBody from "./MainBody";
import NavBar from "../layout/NavBar";
import FilterButton from "./FilterButton";
import EventItem from "./EventItem";
import { data } from "../../dbs/testLogic";
import { getPreciseDistance } from "geolib";

function HomePage() {
	const [id, setId] = useState(3);
	const [eventData, setEventData] = useState(data[id]);
	const [userLat, setUserLat] = useState(null);
	const [userLng, setUserLng] = useState(null);
	const [targetDistance, setTargetDistance] = useState(null);

	const coordinates = {
		lat: Number(eventData.locationLat),
		lng: Number(eventData.locationLng),
	};

	useEffect(() => {
		setEventData(data[id]);

		try {
			navigator.geolocation.getCurrentPosition((pos) => {
				setUserLat(pos.coords.latitude);
				setUserLng(pos.coords.longitude);
			});
			const targetDistanceCalulation = getPreciseDistance(
				{ lat: userLat, lng: userLng },
				coordinates
			);
			console.log(targetDistanceCalulation);
			setTargetDistance((targetDistanceCalulation / 1000).toFixed(2));
		} catch (err) {
			console.log(err);
		}
	}, [id]);

	return (
		<div className={``} style={{ width: "390px", height: "844px" }}>
			<MainBody eventData={eventData} />
			<FilterButton />
			<EventItem
				id={id}
				setId={setId}
				eventData={eventData}
				targetDistance={targetDistance}
			/>
			<NavBar />
		</div>
	);
}

export default HomePage;
