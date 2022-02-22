import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function MainLayout() {
	return (
		<>
			<Outlet />
			<NavBar />
		</>
	);
}

export default MainLayout;
