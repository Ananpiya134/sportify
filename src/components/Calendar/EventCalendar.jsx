import React, { useState, useEffect } from "react";
import { useContext } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import EventList from "../Calendar/EventList";
import axios from "../../config/axios";
import { useParams } from "react-router-dom";

function EventCalendar() {
  const [event, setEvent] = useState([]);

  // const { ID } = useParams();

  useEffect(() => {
    axios
      // .get(`/users/${ID}/events`)
      // .get(`/users/${3}/events`)
      .get(`/users/${1}/events`)

      .then((res) => {
        console.log(event);
        setEvent(res.data.events); // set new state
        console.log(res.data.events);
      })
      .catch((err) => console.log(err));
  }, []);

  return <div>{event && <EventList event={event} />}</div>;
}

export default EventCalendar;
