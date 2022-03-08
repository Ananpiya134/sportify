import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { EventContext } from "../../contexts/EventContext";
import { getLocName } from "../../utils/getLocName";

function EventItem({
	eventIndex,
	setEventIndex,
	currentEvent,
	targetDistance,
	targetLocation,
}) {
	const { eventsLength } = useContext(EventContext);
	const [locName, setLocName] = useState("");

	useEffect(() => {
		const getLoc = async () => {
			const name = await getLocName(targetLocation);
			setLocName(name);
		};
		getLoc();
	}, []);

	const handleClickNext = () => {
		eventIndex === eventsLength - 2
			? setEventIndex(0)
			: setEventIndex(eventIndex + 1);
	};

	const handleClickPrev = () => {
		eventIndex === 0
			? setEventIndex(eventsLength - 2)
			: setEventIndex(eventIndex - 1);
	};

	return (
		<div className="z-index-1100">
			<div className="event_container">
				<i
					className="fa-solid fa-angle-left swipe_btn "
					style={{ fontSize: "30px" }}
					onClick={handleClickPrev}
				/>

				{/* event detail box */}
				<Link to={`/events/${currentEvent.id}`}>
					<div className={`main_body_eventDetail`} type="button">
						<div className={`event_image`}></div>
						<div className={`mt-3 mx-2`}>
							<h3 className={`event_thumbnail_title text-black`}>
								{/* title */}
								{currentEvent.title}
							</h3>
							<p>{locName && locName.substr(0, 40) + "..."}</p>
							<p className={`b-text`}>
								date:
								<span className="text-black">
									{new Date(currentEvent.timeStart).toDateString()}
								</span>
								{/* <span className="text-black">{currentEvent.timeStart}</span> */}
								<span className="text-black"> P.M.</span>
							</p>
							{/* target distance */}

							<p className={`b-text mt-4`}>{targetDistance} k.m.</p>
						</div>
					</div>
				</Link>

				{/* right swipe button  */}
				<i
					className="fa-solid fa-angle-right swipe_btn"
					style={{ fontSize: "30px" }}
					onClick={handleClickNext}
				/>
			</div>
		</div>
	);
}

export default EventItem;
