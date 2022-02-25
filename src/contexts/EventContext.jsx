import { createContext, useEffect, useState } from "react";
import axios from "../config/axios";

const EventContext = createContext();

function EventContextProvider({ children }) {
	const [allEvent, setAllEvent] = useState([]); // all event from database
	const [currentEvent, setCurrentEvent] = useState(null);
	const [eventsLength, setEventsLength] = useState(null);
	const [userLocation, setUserLocation] = useState({
		// user current location
		latitude: 0,
		longitude: 0,
	});

	// fetch all event from db and set userLocation and event location
	useEffect(() => {
		const fetchEvent = async () => {
			try {
				const res = await axios.get("/events");
				setAllEvent(res.data.events);
			} catch (err) {
				console.log(err);
			}
		};
		fetchEvent();
		// setCurrentEvent(allEvent);

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
		setEventsLength(allEvent.length);
	}, [allEvent]);
	return (
		<EventContext.Provider value={{ allEvent, userLocation, eventsLength }}>
			{children}
		</EventContext.Provider>
	);
}
export default EventContextProvider;

export { EventContext };
