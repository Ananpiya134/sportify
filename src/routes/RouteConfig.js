import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import HomePage from "../components/HomePage/HomePage";
import MainLayout from "../components/layout/MainLayout";
import EventDetail from "../components/EventDetail/EventDetail";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import LandingPage from "../pages/LandingPage";
import PublicLayout from "../components/layout/PublicLayout";
import CreateEvent from "../components/CreateEvent/CreateEvent";
import { AuthContext } from "../contexts/AuthContext";

function RouteConfig() {
	const { user } = useContext(AuthContext);
	return (
		<Routes>
			{/* {user ? ( */}
			<Route path="/" element={<MainLayout />}>
				<Route path="" element={<HomePage />} />
				<Route path="*" element={<Navigate to="/" />} />
				<Route path="create-event" element={<CreateEvent />} />
			</Route>
			{/* ) : (
				<Route path="/" element={<PublicLayout />}>
					<Route path="login" element={<LoginForm />} />
					<Route path="register" element={<RegisterForm />} />
					<Route path="" element={<LandingPage />} />
				</Route>
			)} */}
		</Routes>
	);
}

export default RouteConfig;
