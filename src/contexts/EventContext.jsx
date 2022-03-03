import { createContext, useEffect, useState } from "react";
import axios from "../config/axios";

const EventContext = createContext();

function EventContextProvider({ children }) {
	const [allEvent, setAllEvent] = useState(null); // all event from database
	const [eventIndex, setEventIndex] = useState(0);
	const [eventsLength, setEventsLength] = useState(null);
	const [userLocation, setUserLocation] = useState({
		// user current location
		latitude: 0,
		longitude: 0,
	});
	const [activityList, setActivityList] = useState([]);
	const [filterList, setFilterList] = useState(null);
	console.log(allEvent);
	// fetch all event from db and set userLocation and event location
	useEffect(() => {
		fetchEvent();
		fetchActivities();
		navigator.geolocation.getCurrentPosition((pos) => {
			try {
				if (pos.coords) {
					setUserLocation((prev) => ({
						...prev,
						latitude: pos.coords.latitude,
						longitude: pos.coords.longitude,
					}));
				}
			} catch (err) {
				console.log(err.message);
			}
		});
	}, []);

	useEffect(() => {
		if (allEvent) setEventsLength(allEvent.length);
	}, [allEvent]);

	// function fetching data from database
	const fetchEvent = async () => {
		try {
			const res = await axios.get("/events");
			console.log(res.data.events);
			setAllEvent(res.data.events);
		} catch (err) {
			console.log(err);
		}
	};

	const fetchActivities = async () => {
		try {
			const res = await axios.get("/activities");
			console.log(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	console.log(allEvent);
	console.log(eventsLength);

	return (
		<EventContext.Provider
			value={{
				allEvent,
				userLocation,
				eventsLength,
				eventIndex,
				setEventIndex,
			}}
		>
			{children}
		</EventContext.Provider>
	);
}
export default EventContextProvider;

export { EventContext };
