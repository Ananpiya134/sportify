import { Calendar } from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/teal.css";
import "react-multi-date-picker/styles/backgrounds/bg-gray.css";
import { useState } from "react";

const event = ["2022-02-22", "2022-02-23", "2022-02-25"];

const TestCalendar = () => {
  // const [events, setEvents] = useState(null);

  // const dates = events.map((e) => new Date(e.startTime));
  return (
    <div>
      <Calendar
        className="teal bg-dark"
        mapDays={({ date, today, selectedDate, isSameDate, currentMonth }) => {
          let props = {};
          // dates.forEach((d) => {
          //   if (currentMonth.index === d.getMonth()) {
          //     if (date === d.getDate()) {
          //       props.style = {
          //         backgroundColor: "#12a688",
          //       };
          //     }
          //   }
          // });

          // props.style = {
          //   backgroundColor: "#12a688",
          // };
          if (isSameDate(date, selectedDate)) {
            props.style = {
              backgroundColor: "#888",
            };
          }
          return props;
        }}
        // mapDays={({ date, today, selectedDate, isSameDate, currentMonth }) => {
        //   let props = {};

        //   props.style = {
        //     // borderRadius: "3px",
        //     backgroundColor:
        //       date.month.index === currentMonth.index ? "#ccc" : "",
        //     color: "#000",
        //   };

        //   console.log(currentMonth);
        //   // console.log(date, new Date());
        //   console.log(date.day === new Date().getDate());

        //   event.forEach((day) => {
        //     if (isSameDate(date, new Date(day)))
        //       props.style.backgroundColor = "red";
        //   });

        //   if (isSameDate(date, today)) props.style.color = "green";
        //   if (isSameDate(date, selectedDate))
        //     props.style = {
        //       ...props.style,
        //       color: "#000",
        //       backgroundColor: "#61b8ff",
        //       fontWeight: "bold",
        //       border: "1px solid #777",
        //     };

        //   return props;
        // }}
      />
    </div>
  );
};

export default TestCalendar;
