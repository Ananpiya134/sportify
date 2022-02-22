import { useState } from "react";

function EventItem({ id, setId, eventData, targetDistance }) {
	return (
		<div className="z-index-1100">
			<div className="event_container">
				<i
					className="fa-solid fa-angle-left swipe_btn "
					style={{ fontSize: "30px" }}
					onClick={() => setId(id - 1)}
				/>

				{/* event detail box */}
				<div className={`main_body_eventDetail`}>
					<div className={`event_image`}></div>
					<div className={`mt-3 mx-2`}>
						<h3 className={`event_thumbnail_title text-black`}>
							{eventData.title}
						</h3>
						<p className={`b-text`}>
							date:
							<span className="text-black">{eventData.date}</span>
							<span className="text-black">{eventData.timeStart}</span>
							<span className="text-black"> P.M.</span>
						</p>
						<p className={`b-text mt-4`}>{targetDistance} k.m.</p>
					</div>
				</div>

				{/* right swipe button  */}
				<i
					className="fa-solid fa-angle-right swipe_btn"
					style={{ fontSize: "30px" }}
					onClick={() => setId(id + 1)}
				/>
			</div>
		</div>
	);
}

export default EventItem;
