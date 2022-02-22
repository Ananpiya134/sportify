import React, { useState } from "react";
import { useContext } from "react";
import Event from "./Event";

function EventList({ events }) {
  console.log(events);
  // const [startDate, setStartDate] = useState(new Date());
  //   console.log(startDate);

  return (
    <>
      {events &&
        events.map((item) => (
          // <div key={item.id} className="col-md-6">
          /* <CalendarDetail data={item} /> */
          <Event />
          // </div>
        ))}
    </>
  );
}

export default EventList;
