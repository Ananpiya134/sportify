import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../App.css";
import { getLocName } from "../../utils/getLocName";

function EventDetail() {
  const [event, setEvent] = useState(null);
  const [locName, setLocName] = useState("");

  const { id } = useParams();

  useEffect(() => {
    console.log("in");
    axios.get(`events/${id}`).then((res) => {
      console.log(res);
      setEvent(res.data.events);
    });
  }, [id]);

  useEffect(() => {
    if (event) {
      getLocName({
        latitude: event.locationLat,
        longitude: event.locationLng,
      }).then((res) => setLocName(res));
    }
  }, [event]);

  console.log(event);

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      {event && (
        <>
          {/* header imgae */}
          <div className={`event_detail_image_header`} />

          {/* event header */}
          <div className={`mt-2  mx-3`}>
            <h1 className={`event_detail_header`} style={{ fontSize: "32px" }}>
              {" "}
              {event.title}
            </h1>
            <h6 className={`event_detail_location`}>{locName}</h6>
            <div>
              <p className={`b-text`}>
                {/* date: Thursday, 28 April, 2022. 5:45 P.M. */}
                {new Date(event.timeStart).toDateString()}
              </p>
              <p className={`b-text`}>
                {event.timeStart.split("T")[1].split(".")[0].substr(0, 5)}
                {"-"}
                {event.timeEnd.split("T")[1].split(".")[0].substr(0, 5)}
              </p>
              {/* <p className={`b-text`}> 1.3 k.m.</p> */}
            </div>
            <p
              className={`b-text`}
              style={{ fontSize: "12px", lineHeight: "14px" }}
            >
              {event.detail}
            </p>
          </div>

          {/* event stats */}
          <div className={`event_stats d-flex justify-content-around`}>
            <div
              className={`d-flex flex-column align-items-center event_stats_element justify-content-around`}
            >
              <p className={`b-text `}>Event Capacity</p>
              <p className={`b-text`}>{event.maxPeople}</p>
            </div>
            <div
              className={`d-flex flex-column align-items-center event_stats_element justify-content-around`}
            >
              <p className={`b-text `}>Going</p>
              <p className={`b-text`}>{event.Participations.length}</p>
            </div>
            <div
              className={`d-flex flex-column align-items-center event_stats_element justify-content-around`}
            >
              <p className={`b-text `}>Skill Level</p>
              <p className={`b-text`}>{event.level}</p>
            </div>
          </div>

          {/* join button */}
          <div className={`d-flex justify-content-center my-3`}>
            <button className={`add_btn`} style={{ width: "301px" }}>
              Join
            </button>
          </div>

          {/* location detail */}
          <div className={`mx-3 `}>
            <b style={{}}>location</b>
            <p
              className={`b-text`}
              style={{ fontSize: "12px", lineHeight: "14px" }}
            >
              {" "}
              77/2 Chakkapetch Road, Wangburapapirom, phranakorn district,
              bangkok 10200
            </p>
            <div className={`event_detail_map`} />
          </div>
        </>
      )}
    </div>
  );
}

export default EventDetail;
