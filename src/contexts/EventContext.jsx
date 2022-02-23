import { createContext, useEffect, useState } from "react";
import axios from "../config/axios";

const EventContext = createContext();

function EventContextProvider({ children }) {
	const [allEvent, setAllEvent] = useState([]);

	useEffect(() => {
		const fetchEvent = async () => {
			const res = await axios.get("/events");
			setAllEvent(res.data);
		};
		fetchEvent();
	}, []);

	console.log(allEvent);

	return <EventContext.Provider value={{}}>{children}</EventContext.Provider>;
}
export default EventContextProvider;

export { EventContext };
