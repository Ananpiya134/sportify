import { createContext, useEffect, useState } from "react";
import { getPreciseDistance } from "geolib";
import axios from "../config/axios";

const EventContext = createContext();

function EventContextProvider({ children }) {
<<<<<<< Updated upstream
	const [allEvent, setAllEvent] = useState([]);
	const [currentEvent, setCurrentEvent] = useState(null);
	const [eventIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const fetchEvent = async () => {
			const res = await axios.get("/events");
			setAllEvent(res.data);
			setCurrentEvent(res.data.events[0]);
		};
		fetchEvent();
	}, []);

	useEffect(() => {
		if (currentEvent !== null) setCurrentEvent(allEvent[eventIndex]);
	}, [allEvent]);

	console.log(allEvent);
	console.log(currentEvent);

	return <EventContext.Provider value={{}}>{children}</EventContext.Provider>;
=======
	const [allEvent, setAllEvent] = useState([]); // all event from database
	const [currentEvent, setCurrentEvent] = useState(null);
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
				setAllEvent(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchEvent();
		setCurrentEvent(allEvent);

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

	console.log(allEvent);
	return (
		<EventContext.Provider value={{ allEvent, userLocation }}>
			{children}
		</EventContext.Provider>
	);
>>>>>>> Stashed changes
}
export default EventContextProvider;

export { EventContext };
