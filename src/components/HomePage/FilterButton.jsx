import { Link } from "react-router-dom";

function FilterButton() {
	return (
		<Link to="/filter">
			<div className={`filter_container`}>
				<button className={`btn filter_btn`}>filter activity</button>
			</div>
		</Link>
	);
}

export default FilterButton;
