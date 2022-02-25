import { useState, useEffect, useContext } from "react";
import "../../App.css";
import MainBody from "./MainBody";
import FilterButton from "./FilterButton";
import EventItem from "./EventItem";
import { getPreciseDistance } from "geolib";
import { EventContext } from "../../contexts/EventContext";

function HomePage() {
	const { allEvent, userLocation } = useContext(EventContext);
	const [eventIndex, setEventIndex] = useState(0);
	const [currentEvent, setCurrentEvent] = useState(allEvent[0]);
	const [targetLocation, setTargetLocation] = useState(null);
	const [targetDistance, setTargetDistance] = useState(null);
	// set target distance onChanging of event item
	useEffect(() => {
		setCurrentEvent(allEvent[eventIndex]);
		setTargetLocation({
			latitude: currentEvent.locationLat,
			longitude: currentEvent.locationLng,
		});
		if (userLocation !== {} && targetLocation !== null) {
			const calculatedDistance = calculateDistance(
				userLocation,
				targetLocation
			);
			setTargetDistance((calculatedDistance / 1000).toFixed(2));
		}
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

		return distance;
	}
	return (
		<div className={`homepage`}>
			{allEvent && allEvent.length > 0 && (
				<>
					<MainBody currentEvent={currentEvent} />
					<FilterButton />
					<EventItem
						eventIndex={eventIndex}
						setEventIndex={setEventIndex}
						currentEvent={currentEvent}
						targetLocation={targetLocation}
						targetDistance={targetDistance}
					/>
				</>
			)}
		</div>
	);
}

export default HomePage;
