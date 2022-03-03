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
	const [filteredBar, setFilteredBar] = useState([]);
	const [filterIdList, setFilterIdList] = useState([]);
	const [filteredEvent, setFilteredEvent] = useState(null);
	// fetch all event from db and set userLocation and event location
	useEffect(() => {
		if (filteredBar.length === 0) {
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
		} else if (filteredBar.length > 0) {
			fetchEventByFilter();
		}
	}, [filteredBar]);

	useEffect(() => {
		if (allEvent) {
			if (filteredEvent) {
				setEventsLength(filteredEvent.length);
			} else {
				setEventsLength(allEvent.length);
			}
		}
	}, [allEvent, filteredEvent]);

	// function fetching data from database
	const fetchEvent = async () => {
		try {
			const res = await axios.get("/events");
			setAllEvent(res.data.events);
		} catch (err) {
			console.log(err);
		}
	};

	const fetchEventByFilter = async () => {
		try {
			const filterItem = allEvent.filter((item) => {
				for (let i = 0; i <= filterIdList.length; i++) {
					if (item.Activity.id === filterIdList[i]) {
						return true;
					}
				}
			});
			setFilteredEvent(filterItem);
		} catch (err) {
			console.log(err);
		}
	};

	const fetchActivities = async () => {
		try {
			const res = await axios.get("/activities");
			setActivityList(res.data.activities);
		} catch (err) {
			console.log(err);
		}
	};

	const handleChooseEvent = (name, value) => {
		if (name === undefined) return;
		const selectedIndex = filteredBar.findIndex((item) => item === name);

		if (selectedIndex === -1) {
			setFilteredBar((prev) => [...prev, name]);
			setFilterIdList((prev) => [...prev, value]);
		}
	};

	const handleCancelFilter = (name, value) => {
		const deletedIndex = filteredBar.findIndex((el) => el === value);
		const newFilter = [...filteredBar];
		const newFilterById = [...filterIdList];
		newFilter.splice(deletedIndex, 1);
		newFilterById.splice(deletedIndex, 1);
		setFilteredBar(newFilter);
		setFilterIdList(newFilterById);
	};

	return (
		<EventContext.Provider
			value={{
				allEvent: filteredEvent ? filteredEvent : allEvent,
				userLocation,
				eventsLength,
				eventIndex,
				setEventIndex,
				activityList,
				handleChooseEvent,
				handleCancelFilter,
				filteredBar,
				setFilteredBar,
			}}
		>
			{children}
		</EventContext.Provider>
	);
}
export default EventContextProvider;

export { EventContext };
