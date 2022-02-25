import { useState } from "react";
import defaultPic from "../../public/image/map.jpeg";
import ShowPictureInput from "./ShowPictureInput";

function CreateEventDetail() {
  const [eventName, setEventName] = useState("");
  const [date, setEventDate] = useState("");
  const [time, setEventTime] = useState("");
  const [eventCapacity, setEventCapacity] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [description, setEventDescription] = useState("");
  const [eventImage, setEventImage] = useState("");

  return (
    <>
      <form className={`w-100`}>
        {/* event name input */}
        <div className="create_event_container ">
          <label
            className="form-label create_event_label"
            htmlFor={`eventName`}
          >
            <h3> Event Name</h3>
          </label>
          <input
            type="text"
            className="form-control create_event_input"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            aria-describedby="Event Name for the post"
          />
        </div>

        {/* date input  */}
        <div className="create_event_container">
          <label className="form-label create_event_label" htmlFor={`date`}>
            Date
          </label>
          <input
            type="text"
            className="form-control create_event_input"
            id={`date`}
            value={date}
            onChange={(e) => setEventDate(e.target.value)}
            aria-describedby="Event Name for the post"
          />
        </div>

        {/* time input */}
        <div className="create_event_container">
          <label className="form-label create_event_label" htmlFor={`time`}>
            Time
          </label>
          <input
            type="text"
            className="form-control create_event_input"
            value={time}
            id={`time`}
            onChange={(e) => setEventTime(e.target.value)}
            aria-describedby="Event Name for the post"
          />
        </div>

        {/* event capacity input */}
        <div className="create_event_container">
          <label
            className="form-label create_event_label"
            htmlFor={`eventCapacity`}
          >
            Event Capacity
          </label>
          <input
            type="text"
            className="form-control create_event_input"
            value={eventCapacity}
            id={`eventCapacity`}
            onChange={(e) => setEventCapacity(e.target.value)}
            aria-describedby="Event Name for the post"
          />
        </div>

        {/* location input */}
        <div className="create_event_container">
          <label
            className="form-label create_event_label"
            htmlFor={`eventLocation`}
          >
            location
          </label>
          <input
            type="text"
            className="form-control create_event_input"
            value={eventLocation}
            id={`eventLocation`}
            onChange={(e) => setEventLocation(e.target.value)}
            aria-describedby="Event Name for the post"
          />
        </div>

        {/* description input */}
        <div className="create_event_container">
          <label
            className="form-label create_event_label"
            htmlFor={`eventDescription`}
          >
            Description:
          </label>
          <input
            type="text"
            className="form-control create_event_input"
            value={description}
            id={`eventDescription`}
            onChange={(e) => setEventDescription(e.target.value)}
            aria-describedby="Event Name for the post"
          />
        </div>

        {/* upload image input */}
        <div className="create_event_container">
          <label
            className="form-label create_event_label"
            htmlFor={`eventImage`}
          >
            Upload event image
          </label>
          <input
            type="file"
            className="form-control create_event_input"
            value={eventImage}
            id={`eventImage`}
            onChange={(e) => setEventImage(e.target.value)}
            aria-describedby="Event Name for the post"
          />
        </div>
        <div className="d-flex justify-content-center">
          <ShowPictureInput />
        </div>
        <div className={`mt-5`}>
          <button
            className={`add_btn rounded-2 w-50`}
            style={{ fontSize: "1rem" }}
          >
            Create Event
          </button>
        </div>
      </form>
    </>
  );
}

export default CreateEventDetail;
