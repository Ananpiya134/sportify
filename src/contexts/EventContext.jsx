import { createContext, useEffect, useState } from "react";
import axios from "../config/axios";

const EventContext = createContext();

function EventContextProvider() {
	const [event, setEvent] = useState(null);

	useEffect(() => {
		const res = axios
			.get("/events/")
			.then((res) => setEvent(res.data.events))
			.catch((err) => console.log(err));
	}, []);

	return <EventContext.Provider>{children}</EventContext.Provider>;
}
export default EventContextProvider;
