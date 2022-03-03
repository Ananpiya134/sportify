import React, { useEffect, useContext } from "react";
import { useState } from "react";
import FilterItem from "./FilterItem";
import { initial_icon } from "../services/activityData";
import ActivityButton from "./AtivityButton";

function ChooseEvent() {
	const [filter, setFilter] = useState([]);
	console.log(filter);
	const handleChooseEvent = (value) => {
		if (value === undefined) return;
		const selectedIndex = filter.findIndex((item) => item === value);

		if (selectedIndex === -1) {
			setFilter((prev) => [...prev, value]);
		}
	};

	const handleCancelFilter = (value) => {
		const deletedIndex = filter.findIndex((el) => el === value);
		const newFilter = [...filter];
		newFilter.splice(deletedIndex, 1);
		setFilter(newFilter);
		console.log(newFilter);
	};

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
					{filter.map((item) => {
						return (
							<FilterItem item={item} handleCancelFilter={handleCancelFilter} />
						);
					})}
					{/* <FilterItem /> */}
				</div>
			</div>

			{/* activity container */}
			<div className="row choose_event_container">
				{initial_icon.map((item) => {
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
