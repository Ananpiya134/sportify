import { useState, useEffect, useContext } from "react";
import "../../App.css";
import MainBody from "./MainBody";
import FilterButton from "./FilterButton";
import EventItem from "./EventItem";
import { getPreciseDistance } from "geolib";
import { EventContext } from "../../contexts/EventContext";

function HomePage() {
	const { allEvent, userLocation, eventIndex, setEventIndex } =
		useContext(EventContext);

	const [targetLocation, setTargetLocation] = useState({
		longitude: 0,
		latitude: 0,
	});
	const [targetDistance, setTargetDistance] = useState(null);
	// set target distance onChanging of event item
	useEffect(() => {
		if (allEvent !== null) {
			setTargetLocation({
				latitude: allEvent[eventIndex + 1].locationLat,
				longitude: allEvent[eventIndex + 1].locationLng,
			});
		}
		if (userLocation !== {} && targetLocation !== null) {
			const calculatedDistance = calculateDistance(
				userLocation,
				targetLocation
			);
			setTargetDistance(calculatedDistance);
		}
		console.log(eventIndex);
		console.log(targetLocation);
	}, [userLocation, eventIndex]);

	// calculate distance between user's location and event's location
	function calculateDistance(startPoint, endPoint) {
		if (!startPoint && !endPoint) return;
		const distance = getPreciseDistance(
			{
				latitude: startPoint.latitude,
				longitude: startPoint.longitude,
			},
			{
				latitude: endPoint.latitude,
				longitude: endPoint.longitude,
			}
		);

		const distanceInKm = (distance / 1000).toFixed(2);
		return distanceInKm;
	}
	return (
		// <div
		// 	style={{ height: "100vh", width: "100vw", backgroundColor: "grey" }}
		// ></div>
		<div className={`homepage`}>
			{allEvent && (
				<>
					<MainBody currentEvent={allEvent[eventIndex]} />
					<FilterButton />
					<EventItem
						eventIndex={eventIndex}
						setEventIndex={setEventIndex}
						currentEvent={allEvent[eventIndex]}
						targetLocation={targetLocation}
						targetDistance={targetDistance}
					/>
				</>
			)}
		</div>
	);
}

export default HomePage;
