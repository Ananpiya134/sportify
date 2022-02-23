import { createContext, useEffect, useState } from "react";
import axios from "../config/axios";

const EventContext = createContext();

function EventContextProvider({ children }) {
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
}
export default EventContextProvider;

export { EventContext };
