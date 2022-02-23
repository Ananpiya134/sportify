import { useState, useEffect, useContext } from "react";
import "../../App.css";
import MainBody from "./MainBody";
import NavBar from "../layout/NavBar";
import FilterButton from "./FilterButton";
import EventItem from "./EventItem";
import { data } from "../../dbs/testLogic";
import { getPreciseDistance } from "geolib";
import axios from "../../config/axios";
import { EventContext } from "../../contexts/EventContext";

function HomePage() {
	const {} = useContext(EventContext);
	const [id, setId] = useState(3);
	// const [data, setData] = useState(null);
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

		// axios.get('events').then
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
		<div className={`homepage`}>
			<MainBody eventData={eventData} />
			<FilterButton />
			<EventItem
				id={id}
				setId={setId}
				eventData={eventData}
				targetLocation={targetLocation}
				targetDistance={targetDistance}
			/>
		</div>
	);
}

export default HomePage;
