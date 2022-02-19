import React, { useState } from "react";
import { useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import EventCalendar from "../Calendar/EventCalendar";
import CalendarDetail from "../Calendar/EventCalendar";

function EventList({ data }) {
  const [startDate, setStartDate] = useState(new Date());
  //   console.log(startDate);
  //   console.log(data);
  return (
    <>
      <div className="event-calendar" style={{ padding: "10px" }}>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          inline
          monthsShown={1}
          highlightDates={[new Date("2022-01-21")]}
        />
      </div>
      {/* {JSON.stringify(data[0])} */}
      {data.map((item) => {
        console.log(item);
      })}
      {/* <p>Calendar details</p> */}

      {/* <div className="mapped-event"> */}

      {/* {JSON.stringify(data[0])} */}
      {/* {data[0].date === startDate &&
    data.map((item) => (
      <div key={item.id} className="col-md-6  p-3 card">
        <EventList data={item} />
      </div>
    ))} */}
      {/* {data[0].date === "2022-02-28" &&
          quotations.map((item) => (
            <div key={item.id} className="col-md-6  p-3 card">
              <QuotationDetails
                quotation={item}
                loadQuotation={loadQuotation}
              />
            </div>
          ))} */}

      {/* <p>{data[0].title}</p>
        <p>{data[0].date}</p> */}
      {/* </div>
      <hr />
      <div className="event-detail">
        <p>{data[0].detail}</p>
      </div> */}
    </>
  );
}

export default EventList;
