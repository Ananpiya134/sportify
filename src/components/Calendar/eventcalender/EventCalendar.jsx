import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Calendar } from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/teal.css";
import "react-multi-date-picker/styles/backgrounds/bg-gray.css";
import "react-multi-date-picker/styles/layouts/mobile.css";
import "./eventcalender.css";
import EventList from "../EventList";
import axios from "../../../config/axios";
import { AuthContext } from "../../../contexts/AuthContext";

function EventCalendar() {
	const { user } = useContext(AuthContext);
	const [show, setShow] = useState("ALL");
	const [hostedEvents, setHostedEvents] = useState([]);
	const [events, setEvents] = useState([]);
	const [selectedDate, setSelectedDate] = useState(new Date());

	useEffect(() => {
		Promise.all([
			axios.get(`/users/${user.id}/events`),
			axios.get(`/users/${user.id}/participations`),
		]).then((res) => {
			setHostedEvents(res[0].data.events);
			setEvents(res[1].data.events);
		});
	}, []);

	const eventDates = events && events.map((e) => new Date(e.timeStart));
	const hostedEventDates =
		hostedEvents && hostedEvents.map((e) => new Date(e.timeStart));

	const result =
		events && hostedEvents && show === "ALL"
			? events.concat(hostedEvents)
			: events
					.concat(hostedEvents)
					.filter(
						(e) =>
							new Date(e.timeStart).toLocaleDateString() ===
							selectedDate.toLocaleDateString()
					);

	const sorted =
		result &&
		result.sort((a, b) => new Date(a.startTime) - new Date(b.startTime));

	return (
		<div className="event-calendar-container">
			<div className="d-flex justify-content-center">
				<div className="mx-1">
					<button
						className={`btn btn-${
							show === "ALL" ? "" : "outline-"
						}success btn-calender`}
						onClick={() => setShow("ALL")}
					>
						All
					</button>
				</div>
				<div className="mx-1">
					<button
						className={`btn btn-${
							show === "CALENDAR" ? "" : "outline-"
						}success btn-calender`}
						onClick={() => setShow("CALENDAR")}
					>
						Calendar
					</button>
				</div>
			</div>
			{show === "CALENDAR" && (
				<div className="d-flex justify-content-center">
					<Calendar
						className="teal bg-dark mobile"
						mapDays={({
							date,
							today,
							selectedDate,
							isSameDate,
							currentMonth,
						}) => {
							let props = {};
							eventDates.forEach((d) => {
								if (currentMonth.index === d.getMonth()) {
									if (date.day === d.getDate()) {
										props.style = {
											backgroundColor: "#126ba6",
										};
									}
								}
							});
							hostedEventDates.forEach((d) => {
								if (currentMonth.index === d.getMonth()) {
									if (date.day === d.getDate()) {
										props.style = {
											backgroundColor: "#a61275",
										};
									}
								}
							});

							if (isSameDate(date, selectedDate)) {
								props.style = {
									backgroundColor: "#888",
								};
							}
							return props;
						}}
						value={selectedDate}
						onChange={(d) => setSelectedDate(new Date(d))}
					/>
				</div>
			)}

			<EventList events={sorted} />
		</div>
	);
}

export default EventCalendar;
