import React, { useState, useEffect } from "react";
import { useContext } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import EventList from "../Calendar/EventList";
import axios from "../../config/axios";
import { useParams } from "react-router-dom";

function EventCalendar() {
  const [event, setEvent] = useState(null);

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

  // const data = [
  //   {
  //     id: 1,
  //     userId: "11",
  //     title: "BasketBall Thammasat",
  //     detail:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     active: true,
  //     locationLat: "13.743562",
  //     locationLng: "100.498950",
  //     timeStart: "17:45:00",
  //     date: "2022-02-28",
  //   },
  //   {
  //     id: 56,
  //     userId: "234",
  //     title: "skate at park",
  //     detail:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     active: true,
  //     locationLat: "13.746130",
  //     locationLng: "100.491214",
  //     timeStart: "17:45:00",
  //     date: "2022-02-20",
  //   },
  //   {
  //     id: 225,
  //     userId: "4556",
  //     title: "yoga at suanluang",
  //     detail:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     active: true,
  //     locationLat: "13.753107",
  //     locationLng: "100.489410",
  //     timeStart: "17:45:00",
  //     date: "2021-04-28",
  //   },
  //   {
  //     id: 112,
  //     userId: "34",
  //     title: "biking",
  //     detail:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     active: true,
  //     locationLat: "13.758051",
  //     locationLng: "100.490143",
  //     timeStart: "17:45:00",
  //     date: "2022-04-28",
  //   },
  //   {
  //     id: 1,
  //     userId: "11",
  //     title: "BasketBall Thammasat",
  //     detail:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     active: true,
  //     locationLat: "13.758352",
  //     locationLng: "100.490130",
  //     timeStart: "17:45:00",
  //     date: "2022-04-28",
  //   },
  //   {
  //     id: 56,
  //     userId: "234",
  //     title: "skate at park",
  //     detail:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     active: true,
  //     locationLat: "13.760423",
  //     locationLng: "100.489410",
  //     timeStart: "17:45:00",
  //     date: "2022-04-28",
  //   },
  //   {
  //     id: 225,
  //     userId: "4556",
  //     title: "yoga at suanluang",
  //     detail:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     active: true,
  //     locationLat: "13.760423",
  //     locationLng: "100.491376",
  //     timeStart: "17:45:00",
  //     date: "2022-04-28",
  //   },
  //   {
  //     id: 112,
  //     userId: "34",
  //     title: "biking",
  //     detail:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     active: true,
  //     locationLat: "13.765337",
  //     locationLng: "100.500191",
  //     timeStart: "17:45:00",
  //     date: "2022-04-28",
  //   },
  //   {
  //     id: 1,
  //     userId: "11",
  //     title: "BasketBall Thammasat",
  //     detail:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     active: true,
  //     locationLat: "13.743562",
  //     locationLng: "100.500191",
  //     timeStart: "17:45:00",
  //     date: "2021-04-28",
  //   },
  //   {
  //     id: 56,
  //     userId: "234",
  //     title: "skate at park",
  //     detail:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     active: true,
  //     locationLat: "13.760423",
  //     locationLng: "100.491376",
  //     timeStart: "17:45:00",
  //     date: "2022-03-10",
  //   },
  //   {
  //     id: 225,
  //     userId: "4556",
  //     title: "yoga at suanluang",
  //     detail:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     active: true,
  //     locationLat: "13.746130",
  //     locationLng: "100.491214",
  //     timeStart: "17:45:00",
  //     date: "2022-04-28",
  //   },
  //   {
  //     id: 112,
  //     userId: "34",
  //     title: "biking",
  //     detail:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     active: true,
  //     locationLat: "13.743562",
  //     locationLng: "100.498950",
  //     timeStart: "17:45:00",
  //     date: "2022-03-01",
  //   },
  //   {
  //     id: 1,
  //     userId: "11",
  //     title: "BasketBall Thammasat",
  //     detail:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     active: true,
  //     locationLat: "13.743562",
  //     locationLng: "100.491214",
  //     timeStart: "17:45:00",
  //     date: "2022-04-22",
  //   },
  //   {
  //     id: 56,
  //     userId: "234",
  //     title: "skate at park",
  //     detail:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     active: true,
  //     locationLat: "13.765337",
  //     locationLng: "100.500191",
  //     timeStart: "17:45:00",
  //     date: "2022-03-20",
  //   },
  //   {
  //     id: 225,
  //     userId: "4556",
  //     title: "yoga at suanluang",
  //     detail:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     active: true,
  //     locationLat: "13.760423",
  //     locationLng: "100.491376",
  //     timeStart: "17:45:00",
  //     date: "2022-03-15",
  //   },
  //   {
  //     id: 112,
  //     userId: "34",
  //     title: "biking",
  //     detail:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //     active: true,
  //     locationLat: "13.760423",
  //     locationLng: "100.489410",
  //     timeStart: "17:45:00",
  //     date: "2022-05-28",
  //   },
  // ];
  // console.log(data);

  return (
    <div>
      {/* <EventList data={data} /> */}
      <EventList event={event} />
    </div>
  );
}

export default EventCalendar;
