import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useParams } from "react-router-dom";
import "./eventdetail.css";
import { getLocName } from "../../utils/getLocName";

function EventDetail() {
	const [event, setEvent] = useState(null);
	const [locName, setLocName] = useState("");
	const [goingStatus, setGoingStatus] = useState(false);

	const { id } = useParams();
	const { user } = useContext(AuthContext);

	useEffect(() => {
		axios.get(`events/${id}`).then((res) => {
			setEvent(res.data.events);
		});
	}, [id]);

	useEffect(() => {
		if (event) {
			getLocName({
				latitude: event.locationLat,
				longitude: event.locationLng,
			}).then((res) => setLocName(res));
			event.Participations.forEach((item) => {
				if (item.User.id === user.id) setGoingStatus(true);
			});
		}
	}, [event]);

	const handleJoinStatus = async () => {
		await axios.post(`/events/${id}/participation`);
		setGoingStatus(true);
	};

	const handleLeaveStatus = async () => {
		await axios.delete(`/events/${id}/participation/${user.id}`);
		setGoingStatus(false);
	};
	return (
		<div className="main-eventdetail" style={{ backgroundColor: "#ffffff" }}>
			{event && (
				<>
					{/* header imgae */}
					<div className={`event_detail_image_header`} />

					{/* event header */}
					<div className={`mt-2  mx-3 header-eventdetail`}>
						<h1 className="event_detail_header"> {event.title}</h1>

						<hr className="line-ed" />
						<h6 className="event_detail_location">{locName}</h6>

						<hr className="line-ed" />
						<div>
							<p className={`b-text time-detail`}>
								{/* date: Thursday, 28 April, 2022. 5:45 P.M. */}
								{new Date(event.timeStart).toDateString()}
							</p>
							<p className={`b-text time-detail`}>
								{event.timeStart.split("T")[1].split(".")[0].substr(0, 5)}
								{"-"}
								{event.timeEnd.split("T")[1].split(".")[0].substr(0, 5)}
							</p>
							{/* <p className={`b-text`}> 1.3 k.m.</p> */}
						</div>

						<hr className="line-ed" />

						<p className={`b-text event-detail `}>{event.detail}</p>
					</div>

					{/* event stats */}
					<div className="event_stats  event-stat-item">
						<div className={"d-flex stats event-capacity"}>
							<p className={`b-text title-stats`}>Event Capacity</p>
							<p className={"b-text value-stats"}>{event.maxPeople}</p>
						</div>
						<div className={`d-flex stats event-going`}>
							<p className={`b-text title-stats`}>Going</p>
							<p className={`b-text value-stats`}>
								{event.Participations.length}
							</p>
						</div>
						<div className={`d-flex stats event-skill `}>
							<p className={`b-text title-stats`}>Skill Level</p>
							<p className={`b-text value-stats`}>{event.level}</p>
						</div>
					</div>

					{/* join button */}
					<div className={`d-flex flex-column justify-content-center my-3`}>
						<button
							className={` my-2 ${
								goingStatus ? "going_status_true" : "add_btn"
							}`}
							disabled={goingStatus}
							style={{ width: "301px" }}
							onClick={handleJoinStatus}
						>
							{goingStatus ? "joined" : "join"}
						</button>
						{goingStatus ? (
							<button
								className={`add_btn my-2`}
								style={{ width: "301px", backgroundColor: "red" }}
								onClick={handleLeaveStatus}
							>
								Cancel Event
							</button>
						) : (
							""
						)}
					</div>

					{/* location detail */}
					<div className={`mx-3 `}>
						<b style={{}}>location</b>
						<p
							className={`b-text location-detail`}
							style={{ fontSize: "12px", lineHeight: "14px" }}
						>
							{" "}
							{locName}
							{/* 77/2 Chakkapetch Road, Wangburapapirom, phranakorn district,
							bangkok 10200 */}
						</p>
						{/* <div className={`event_detail_map`} /> */}
					</div>
				</>
			)}
		</div>
	);
}

export default EventDetail;
