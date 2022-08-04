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
import MenuList from "../../components-control/MenuItem.js";
import { createStyles, makeStyles } from "@material-ui/core/styles";

// import Select from "@mui/material/Select";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";

// styling matirial UI date picker and else. //
const useStyles = makeStyles(() => ({
	root: {
		"& .MuiOutlinedInput-input": {
			color: "white",
		},
		"& .MuiInputLabel-root": {
			color: "white",
		},
		list: {
			padding: 0,
		},
		"& .MuiOutlinedInput-input:focus": {
			// boxShadow: "0 0 0 0.15rem rgb(51 168 82)",
		},
		"& .MuiInputLabel-root:focus": {
			// boxShadow: "0 0 0 0.15rem rgb(51 168 82)",
		},
	},
}));

function CreateEventForm() {
	const { user } = useContext(AuthContext);
	const { activityList } = useContext(EventContext);
	const classes = useStyles();
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
	console.log(activityId);
	const handleChooseActivityOption = (e) => {
		console.log(e.target.value);
		setActivityId(e.target.value);
	};

	const handleTimeStartUpdate = (e) => {
		setDateTimeStart(e.target.value);
	};

	const handleTimeEndUpdate = (e) => {
		setDateTimeEnd(e.target.value);
	};


	return (
		<>
			<form
				className={`w-100`}
				onSubmit={handleSubmitCreateEvent}
				style={{ padding: "0" }}
			>
				{/* event name input */}
				<div className="create_event_container ">
					<label
						className="form-label"
						htmlFor={`eventName`}
						style={{ color: "	white" }}
					>
						Event Name
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
					<label
						className="form-label"
						htmlFor={`eventCapacity`}
						style={{ color: "	white" }}
					>
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
					<label
						className="form-label "
						htmlFor={`eventLocation`}
						style={{ color: "	white" }}
					>
						Location
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
						style={{ color: "	white" }}
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
				<FormControl
					fullWidth
					sx={{ width: "390px", border: "1px solid white", margin: "15px 0" }}
				>
					<InputLabel
						id="skill-select-lable"
						className="form-label"
						style={{ color: "	white", borderColor: "inherit" }}
					>
						Skill Level
					</InputLabel>
					<Select
						MenuProps={{ classes: { list: classes.list } }}
						labelId="skill-label"
						id="skill-label"
						label="skill-level"
						value={skillLevel}
						// sx={{ padding: "0px" }}
						onChange={handleChooseSkillOption}
						style={{ backgroundColor: "#323232", color: "	white" }}
					>
						<MenuItem
							value=""
							disabled
							style={{ backgroundColor: "#323232", color: "	white" }}
						>
							Select
						</MenuItem>
						<MenuItem
							value={"BEGINNER"}
							style={{ backgroundColor: "#323232", color: "white" }}
						>
							Beginner
						</MenuItem>
						<MenuItem
							value={"INTERMEDIATE"}
							style={{ backgroundColor: "#323232", color: "	white" }}
						>
							Intermediate
						</MenuItem>
						<MenuItem
							value={"EXPERT"}
							style={{ backgroundColor: "#323232", color: "white" }}
							className={classes.root}
						>
							Expert
						</MenuItem>
					</Select>
				</FormControl>

				{/* activity drop down*/}
				<FormControl
					fullWidth
					sx={{ width: "390px", border: "1px solid white", margin: "15px 0" }}
				>
					<InputLabel
						id="activity-select-lable"
						className="form-label"
						style={{ color: "	white" }}
					>
						Activity type
					</InputLabel>
					<Select
						MenuProps={{ classes: { list: classes.list } }}
						className={`${classes.root} activity-select`}
						labelId="activity-select-label"
						id="activity-label"
						label="activity"
						value={activityId}
						onChange={handleChooseActivityOption}
						style={{ backgroundColor: "#323232", color: "white" }}
					>
						<MenuItem
							value=""
							disabled
							style={{
								backgroundColor: "#323232",
								color: "white",
							}}
						>
							Select
						</MenuItem>
						{activityList.map((item) => {
							return (
								<MenuItem
									value={item.id}
									style={{ backgroundColor: "#323232", color: "	white" }}
								>
									{item.name}
								</MenuItem>
							);
						})}
					</Select>
				</FormControl>

				{/* date time start */}
				<TextField
					className={classes.root}
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
					style={{ backgroundColor: "#323232", color: "white !important" }}
					sx={{ width: "390px", margin: "15px 0" }}
				/>

				{/* date time end */}
				<TextField
					className={classes.root}
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
					style={{ backgroundColor: "#323232" }}
					sx={{
						width: "390px",
						margin: "15px 0",
						// border: "1px solid white !important",
					}}
				/>

				{/* button */}
				<div className={`mt-5`}>
					<button
						className={`add_btn rounded-2 w-50`}
						style={{ fontSize: "1rem", marginBottom: "100px" }}
						onClick={handleSubmitCreateEvent}
					>
						Create Event
					</button>
				</div>
			</form>
		</>
	);
}

export default CreateEventForm;
