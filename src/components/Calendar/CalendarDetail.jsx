import React from "react";

function CalendarDetail({ data }) {
  //   console.log(data);
  return (
    <>
      <div className="calendar-detail">
        <p>{data.title}</p>
        <p>{data.date}</p>
      </div>
      <hr />
      <div className="event-detail">
        <p>{data.detail}</p>
      </div>
    </>
  );
}

export default CalendarDetail;
