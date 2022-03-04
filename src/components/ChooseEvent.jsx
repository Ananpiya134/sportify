import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterItem from "./FilterItem";
import { initial_icon } from "../services/activityData";
import ActivityButton from "./AtivityButton";
import { EventContext } from "../contexts/EventContext";

function ChooseEvent({}) {
	const { activityList, filteredBar, handleChooseEvent, handleCancelFilter } =
		useContext(EventContext);

	const navigate = useNavigate();
	return (
		// outer container
		<div style={{ width: "100vw" }}>
			{/* header */}
			<div
				className={`d-flex justify-content-center align-items-center my-4 position-relative`}
			>
				<button
					className="fa-solid fa-arrow-left btn btn-secondary border-0 bg-transparent position-absolute start-0"
					style={{ marginLeft: "15px", fontSize: "30px" }}
					onClick={() => navigate("/")}
				/>
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
