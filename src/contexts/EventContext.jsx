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
	console.log(allEvent);
	console.log(eventsLength);

	// fetch all event from db and set userLocation and event location
	useEffect(() => {
		fetchEvent();

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
			setAllEvent(res.data.events);
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
