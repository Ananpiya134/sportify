import { useState } from "react";
import { data } from "../../dbs/testLogic";

function EventItem() {
	const [eventId, setEventId] = useState(3);
	return (
		<div className="z-index-1100">
			<div className="event_container">
				<i
					className="fa-solid fa-angle-left swipe_btn "
					style={{ fontSize: "30px" }}
					onClick={() => {
						setEventId(eventId - 1);
					}}
				/>

				{/* event detail box */}
				<div className={`main_body_eventDetail`}>
					<div className={`event_image`}></div>
					<div className={`mt-3 mx-2`}>
						<h3 className={`event_thumbnail_title text-black`}>
							{data[eventId].title}
						</h3>
						<p className={`b-text`}>
							date:
							<span className="text-black">{data[eventId].date}</span>
							<span className="text-black">{data[eventId].timeStart}</span>
							<span className="text-black"> P.M.</span>
						</p>
						<p className={`b-text mt-4`}>1.3 k.m.</p>
					</div>
				</div>

				{/* right swipe button  */}
				<i
					className="fa-solid fa-angle-right swipe_btn"
					style={{ fontSize: "30px" }}
					onClick={() => setEventId(eventId + 1)}
				/>
			</div>
		</div>
	);
}

export default EventItem;
