import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLocName } from "../../utils/getLocName";

function EventItem({
	eventIndex,
	setEventIndex,
	currentEvent,
	targetDistance,
	targetLocation,
}) {
	const [locName, setLocName] = useState("");

	useEffect(() => {
		const getLoc = async () => {
			const name = await getLocName(targetLocation);
			setLocName(name);
		};
		getLoc();
	}, []);

	return (
		<div className="z-index-1100">
			<div className="event_container">
				<i
					className="fa-solid fa-angle-left swipe_btn "
					style={{ fontSize: "30px" }}
					onClick={() => setEventIndex(eventIndex - 1)}
				/>

				{/* event detail box */}
				<Link to={`/events/${eventIndex}`}>
					<div className={`main_body_eventDetail`}>
						<div className={`event_image`}></div>
						<div className={`mt-3 mx-2`}>
							<h3 className={`event_thumbnail_title text-black`}>
								{/* title */}
								{/* {currentEvent.title} */}
							</h3>
							<p>{locName && locName.substr(0, 40) + "..."}</p>
							<p className={`b-text`}>
								date:
								{/* <span className="text-black">{currentEvent.date}</span>
								<span className="text-black">{currentEvent.timeStart}</span> */}
								<span className="text-black"> P.M.</span>
							</p>
							<p className={`b-text mt-4`}>
								{/* target distance */}
								{/* {targetDistance}  */}
								k.m.
							</p>
						</div>
					</div>
				</Link>

				{/* right swipe button  */}
				<i
					className="fa-solid fa-angle-right swipe_btn"
					style={{ fontSize: "30px" }}
					onClick={() => setEventIndex(eventIndex + 1)}
				/>
			</div>
		</div>
	);
}

export default EventItem;
