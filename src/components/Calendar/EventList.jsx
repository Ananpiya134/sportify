import React, { useState } from "react";
import Event from "./event/Event";

function EventList({ events }) {
	return (
		<>
			{events.map((item) => (
				<Event key={item.id} data={item} />
			))}
		</>
	);
}

export default EventList;
