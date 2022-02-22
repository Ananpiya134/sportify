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
	const [userLocation, setUserLocation] = useState({
		latitude: 0,
		longitude: 0,
	});
	const [targetDistance, setTargetDistance] = useState(null);

	const targetLocation = {
		latitude: Number(eventData.locationLat),
		longitude: Number(eventData.locationLng),
	};

	// function calculate distance
	function calculateDistance(startPoint, endPoint) {
		if (!startPoint && !endPoint) return;
		const distance = getPreciseDistance(
			{
				latitude: Number(startPoint.latitude),
				longitude: Number(startPoint.longitude),
			},
			{
				latitude: Number(endPoint.latitude),
				longitude: Number(endPoint.longitude),
			}
		);

		return distance;
	}

	// find user location
	useEffect(() => {
		navigator.geolocation.getCurrentPosition((pos) => {
			try {
				if (pos.coords) {
					setUserLocation((prev) => ({
						...prev,
						latitude: Number(pos.coords.latitude),
						longitude: Number(pos.coords.longitude),
					}));
				}
			} catch (err) {
				console.log(err);
			}
		});
	}, []);

	// set target distance onChanging of event item
	useEffect(() => {
		setEventData(data[id]);
		if (userLocation !== {} && targetLocation !== null) {
			const calculatedDistance = calculateDistance(
				userLocation,
				targetLocation
			);
			setTargetDistance((calculatedDistance / 1000).toFixed(2));
		}
	}, [userLocation, id]);

	return (
		<div className={``} style={{ width: "390px", height: "844px" }}>
			<MainBody eventData={eventData} />
			<FilterButton />
<<<<<<< HEAD
			<EventItem />
=======
			<EventItem
				id={id}
				setId={setId}
				eventData={eventData}
				targetDistance={targetDistance}
			/>
			<NavBar />
>>>>>>> google_map_test
		</div>
	);
}

export default HomePage;
