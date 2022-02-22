import { useNavigate } from "react-router-dom";

function FilterButton() {
	const navigate = useNavigate();
	return (
		<div className={`filter_container`}>
			<button
				className={`btn filter_btn`}
				onClick={() => navigate("/choose-event")}
			>
				filter activity
			</button>
		</div>
	);
}

export default FilterButton;
