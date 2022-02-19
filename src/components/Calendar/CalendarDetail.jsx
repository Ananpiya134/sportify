import React from "react";

function CalendarDetail({ data }) {
  console.log(data);
  return (
    <>
      <div>
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
