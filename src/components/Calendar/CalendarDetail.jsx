import React from "react";

function CalendarDetail({ data }) {
  // console.log(data);

  let timeStart = data.timeStart.split("T")[1].split(".")[0];
  let timeEnd = data.timeEnd.split("T")[1].split(".")[0];

  // formatTime(new Date(event.startTime)) => string

  return (
    <div className="d-flex justify-content-center">
      <div className="card bg-secondary" style={{ width: "20rem" }}>
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <h6 className="card-subtitle mb-2 ">
            {new Date().toDateString(data.timeStart)}
          </h6>
          <h6 className="card-subtitle mb-2 ">
            {timeStart}-{timeEnd}
          </h6>
          <h6 className="card-subtitle mb-2 ">{data.locationLat}</h6>
          <p className="card-text">Details: {data.detail}</p>
        </div>
      </div>
    </div>
  );
}

export default CalendarDetail;
