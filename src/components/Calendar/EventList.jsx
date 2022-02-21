import React, { useState } from "react";
import { useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarDetail from "./CalendarDetail";

function EventList({ data }) {
  const [startDate, setStartDate] = useState(new Date());
  //   console.log(startDate);

  return (
    <>
      <div className="event-calendar" style={{ padding: "10px" }}>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          inline
          monthsShown={1}
          //   highlightDates={[new Date("2022-01-21")]}
          highlightDates={startDate}
        />
      </div>
      {/* {JSON.stringify(data[0].date)} */}

      {data.map((item) => (
        <CalendarDetail data={item} />
      ))}
    </>
  );
}

export default EventList;
