import React, { useState } from "react";
import NavBar from "./NavBar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  //   const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    setStartDate(dates);
    // setEndDate(end);
  };
  return (
    <div>
      <div className="event-calendar">
        <DatePicker
          selected={startDate}
          onChange={onChange}
          //   startDate={startDate}
          //   endDate={endDate}
          //   selectsRange
          inline
        />
      </div>
      <div>
        <NavBar />
      </div>
    </div>
  );
}

export default Calendar;
