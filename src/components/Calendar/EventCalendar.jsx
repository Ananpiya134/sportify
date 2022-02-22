import React, { useState, useEffect } from "react";
import { useContext } from "react";
// import { eventList } from "../../dbs/testLogic";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/teal.css";
import "react-multi-date-picker/styles/backgrounds/bg-gray.css";
import EventList from "../Calendar/EventList";
import axios from "../../config/axios";
import { useParams } from "react-router-dom";

function EventCalendar() {
  const [show, setShow] = useState("ALL");
  const [hostedEvents, setHostedEvents] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    console.log("in eff");
    Promise.all([
      axios.get(`/users/${3}/events`),
      axios.get(`/users/${3}/participations`),
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

  console.log(result);

  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="mx-1">
          <button
            className={`btn btn-${show === "ALL" ? "" : "outline-"}primary`}
            onClick={() => setShow("ALL")}
          >
            All
          </button>
        </div>
        <div className="mx-1">
          <button
            className={`btn btn-${
              show === "CALENDAR" ? "" : "outline-"
            }primary`}
            onClick={() => setShow("CALENDAR")}
          >
            Calendar
          </button>
        </div>
      </div>
      {show === "CALENDAR" && (
        <Calendar
          className="teal bg-dark"
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
                    // backgroundColor: "#12a688",
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
      )}

      <EventList events={sorted} />
    </div>
  );
}

export default EventCalendar;
