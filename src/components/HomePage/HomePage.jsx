import "../../App.css";
import MainBody from "./MainBody";
import NavBar from "../layout/NavBar";
import FilterButton from "./FilterButton";
import EventItem from "./EventItem";

function HomePage() {
	return (
		<div className={``} style={{ width: "390px", height: "844px" }}>
			<MainBody />
			<FilterButton />
			<EventItem />
		</div>
	);
}

export default HomePage;
