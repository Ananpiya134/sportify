import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./eventdetail.css";
import { getLocName } from "../../utils/getLocName";

function EventDetail() {
	const [event, setEvent] = useState(null);
	const [locName, setLocName] = useState("");

	const { id } = useParams();

	useEffect(() => {
		console.log("in");
		axios.get(`events/${id}`).then((res) => {
			console.log(res);
			setEvent(res.data.event);
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
					<div className={`event_stats `}>
						<div className={`d-flex stats `}>
							<p className={`b-text title-stats`}>Event Capacity</p>
							<p className={`b-text value-stats`}>{20}</p>
						</div>
						<div className={`d-flex stats `}>
							<p className={`b-text title-stats`}>Going</p>
							<p className={`b-text value-stats`}>
								{event.Participations.length}
							</p>
						</div>
						<div className={`d-flex stats  `}>
							<p className={`b-text title-stats`}>Skill Level</p>
							<p className={`b-text value-stats`}>{"INTERMEDIATEDs"}</p>
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
							className={`b-text location-detail`}
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
