import React, { useEffect, useContext } from "react";
import { useState } from "react";
import FilterItem from "./FilterItem";
import { initial_icon } from "../services/activityData";
import ActivityButton from "./AtivityButton";
import { EventContext } from "../contexts/EventContext";

function ChooseEvent({}) {
	const { activityList, filteredBar, handleChooseEvent, handleCancelFilter } =
		useContext(EventContext);

	return (
		// outer container
		<div style={{ width: "100vw" }}>
			{/* header */}
			<div
				className={`d-flex justify-content-center align-item-center `}
				style={{ marginTop: "69px", marginLeft: "0px" }}
			>
				<h4>Choose Your Event</h4>
			</div>

			{/* filter items */}
			<div className="container w-85">
				<div className="row">
					{filteredBar.map((item) => {
						return (
							<FilterItem item={item} handleCancelFilter={handleCancelFilter} />
						);
					})}
					{/* <FilterItem /> */}
				</div>
			</div>

			{/* activity container */}
			<div className="row choose_event_container">
				{activityList.map((item) => {
					return (
						<ActivityButton
							item={item}
							handleChooseEvent={handleChooseEvent}
							key={item.id}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default ChooseEvent;
