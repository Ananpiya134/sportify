import { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import defaultPic from "../../public/image/map.jpeg";
import ShowPictureInput from "./ShowPictureInput";
import Geocode from "react-geocode";
import { GEOCODE_API } from "../../config/env";
import axios from "axios";
import {
	Select,
	InputLabel,
	MenuItem,
	FormControl,
	TextField,
} from "@mui/material";
import { AuthContext } from "../../contexts/AuthContext";
import { EventContext } from "../../contexts/EventContext";
// import Select from "@mui/material/Select";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";

function CreateEventForm() {
	const { user } = useContext(AuthContext);
	const { activityList } = useContext(EventContext);

	const [eventName, setEventName] = useState("");
	const [eventCapacity, setEventCapacity] = useState("");
	const [eventLocation, setEventLocation] = useState("");
	const [locationLatLng, setLocationLatLng] = useState({});
	const [description, setEventDescription] = useState("");
	const [eventImage, setEventImage] = useState("");
	const [dropShow, setDropShow] = useState(false);
	const [skillLevel, setSkillLevel] = useState("");
	const [dateTimeStart, setDateTimeStart] = useState(new Date());
	const [dateTimeEnd, setDateTimeEnd] = useState(new Date());
	const [imageInput, setImageInput] = useState(null);
	const [activityId, setActivityId] = useState("");

	const imageEl = useRef();
	const navigate = useNavigate();

	const handleSubmitCreateEvent = async (e) => {
		e.preventDefault();

		await axios
			.post("/events", {
				title: eventName,
				detail: description,
				lat: locationLatLng.latitude,
				lng: locationLatLng.longitude,
				start: dateTimeStart,
				end: dateTimeEnd,
				level: skillLevel,
				maxPeople: Number(eventCapacity),
				userId: user.id,
				activityId: Number(activityId),
			})
			.then((res) => console.log(res))
			.catch((err) => console.log(err.message));
		navigate("/");
	};

	const findEventLocation = async (e) => {
		e.preventDefault();
		Geocode.setApiKey(GEOCODE_API);
		Geocode.setLanguage("th");
		Geocode.setRegion("th");
		Geocode.setLocationType("ROOFTOP");
		if (eventLocation !== "") {
			await Geocode.fromAddress(eventLocation)
				.then((res) =>
					setLocationLatLng({
						latitude: res.results[0].geometry.location.lat,
						longitude: res.results[0].geometry.location.lng,
					})
				)
				.catch(() => console.log(`invalid address`));
		}
	};

	const handleChooseSkillOption = (e) => {
		setSkillLevel(e.target.value);
	};

	const handleChooseActivityOption = (e) => {
		setActivityId(e.target.value);
	};

	const handleTimeStartUpdate = (e) => {
		setDateTimeStart(e.target.value);
	};

	const handleTimeEndUpdate = (e) => {
		setDateTimeEnd(e.target.value);
	};

	const test = (e) => {
		e.preventDefault();
		if (eventName) console.log(eventName);
		if (description) console.log(description);
		if (locationLatLng)
			console.log(`lat ${locationLatLng.lat} and lang ${locationLatLng.lng}`);
		if (dateTimeStart) console.log(dateTimeStart);
		if (dateTimeEnd) console.log(dateTimeEnd);
		if (eventCapacity) console.log(eventCapacity);
		if (skillLevel) console.log(skillLevel);
		if (activityId) console.log(activityId);
	};

	return (
		<>
			<form className={`w-100`} onSubmit={handleSubmitCreateEvent}>
				{/* event name input */}
				<div className="create_event_container ">
					<label className="form-label" htmlFor={`eventName`}>
						Event name
					</label>
					<input
						type="text"
						className="form-control input"
						value={eventName}
						onChange={(e) => setEventName(e.target.value)}
						aria-describedby="Event Name for the post"
					/>
				</div>

				{/* event capacity input */}
				<div className="create_event_container">
					<label className="form-label" htmlFor={`eventCapacity`}>
						Event Capacity
					</label>
					<input
						type="text"
						className="form-control input"
						value={eventCapacity}
						id={`eventCapacity`}
						onChange={(e) => setEventCapacity(e.target.value)}
						aria-describedby="Event Name for the post"
					/>
				</div>

				{/* location input */}
				<div className="create_event_container">
					<label className="form-label " htmlFor={`eventLocation`}>
						location
					</label>
					<input
						type="text"
						className="form-control input"
						value={eventLocation}
						id={`eventLocation`}
						onChange={(e) => {
							setEventLocation(e.target.value);
							findEventLocation(e);
						}}
						aria-describedby="Event Name for the post"
					/>
				</div>

				{/* description input */}
				<div className="create_event_container">
					<label
						// className="form-label "
						htmlFor={`eventDescription`}
					>
						Description:
					</label>
					<input
						type="text"
						className="form-control input"
						value={description}
						id={`eventDescription`}
						onChange={(e) => setEventDescription(e.target.value)}
						aria-describedby="Event Name for the post"
					/>
				</div>

				{/* level drop down*/}
				<FormControl fullWidth className={`my-5`} sx={{ left: 0 }}>
					<InputLabel id="skill-select-lable" className="form-label">
						Skill Level
					</InputLabel>
					<Select
						labelId="skill-label"
						id="skill-label"
						label="skill-level"
						value={skillLevel}
						sx={{ height: "50px" }}
						onChange={handleChooseSkillOption}
						style={{ backgroundColor: "white", color: "	#90EE90" }}
					>
						<MenuItem
							value=""
							disabled
							style={{ backgroundColor: "black", color: "	#90EE90" }}
						>
							Select
						</MenuItem>
						<MenuItem
							value={"BEGINNER"}
							style={{ backgroundColor: "black", color: "	#90EE90" }}
						>
							Beginner
						</MenuItem>
						<MenuItem
							value={"INTERMEDIATE"}
							style={{ backgroundColor: "black", color: "	#90EE90" }}
						>
							Intermediate
						</MenuItem>
						<MenuItem
							value={"EXPERT"}
							style={{ backgroundColor: "black", color: "	#90EE90" }}
						>
							Expert
						</MenuItem>
					</Select>
				</FormControl>

				{/* activity drop down*/}
				<FormControl fullWidth className={`my-5`} sx={{ left: 0 }}>
					<InputLabel id="activity-select-lable" className="form-label">
						activity type
					</InputLabel>
					<Select
						labelId="activity-select-label"
						id="activity-label"
						label="activity"
						value={activityId}
						sx={{ height: "50px" }}
						onChange={handleChooseActivityOption}
						style={{ backgroundColor: "white", color: "	#90EE90" }}
					>
						<MenuItem
							value=""
							disabled
							style={{ backgroundColor: "black", color: "	#90EE90" }}
						>
							Select
						</MenuItem>
						{activityList.map((item) => {
							return (
								<MenuItem
									value={item.id}
									style={{ backgroundColor: "black", color: "	#90EE90" }}
								>
									{item.name}
								</MenuItem>
							);
						})}
					</Select>
				</FormControl>

				{/* date time start */}
				<div className="create_event_container">
					<TextField
						fullWidth
						id="datetime-local"
						label="date-time start"
						type="datetime-local"
						defaultValue="2017-05-24T10:30"
						InputLabelProps={{
							shrink: true,
						}}
						value={dateTimeStart}
						onChange={handleTimeStartUpdate}
					/>
				</div>

				{/* date time end */}
				<div className="create_event_container">
					<TextField
						fullWidth
						id="datetime-local"
						label="date-time end"
						type="datetime-local"
						defaultValue="2017-05-24T10:30"
						InputLabelProps={{
							shrink: true,
						}}
						value={dateTimeEnd}
						onChange={handleTimeEndUpdate}
					/>
				</div>

				{/* button */}
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

export default CreateEventForm;
