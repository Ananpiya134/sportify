import React, { useState } from "react";
import { useContext } from "react";
import Event from "./event/Event";

function EventList({ events }) {
  console.log(events);
  // const [startDate, setStartDate] = useState(new Date());
  //   console.log(startDate);

  return (
    <>
      {/* {events && events.map((item) => <Event />)} */}
      {/* <div classNameName="event-calendar" style={{ padding: "10px" }}>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          inline
          monthsShown={1}
          //   highlightDates={[new Date("2022-01-21")]}
          highlightDates={startDate}
        />
      </div> */}
      {/* {JSON.stringify(data[0].date)} */}

      {events.map((item) => (
        <Event key={item.id} data={item} />
      ))}
    </>
  );
}

export default EventList;
