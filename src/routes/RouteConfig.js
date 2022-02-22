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
import Profile from "../components/Profile";
import { AuthContext } from "../contexts/AuthContext";
import EventList from "../components/Calendar/EventList";
import EventCalendar from ".././components/Calendar/eventcalender/EventCalendar";

function RouteConfig() {
	const { user } = useContext(AuthContext);
	return (
		<Routes>
			{user ? (
				<Route element={<MainLayout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/events" element={<EventCalendar />} />
					<Route path="/create-event" element={<CreateEvent />} />
					<Route path="/events/:id" element={<EventDetail />} />

					<Route path="*" element={<Navigate to="/" />} />
				</Route>
			) : (
				<Route path="/" element={<PublicLayout />}>
					<Route path="login" element={<LoginForm />} />
					<Route path="register" element={<RegisterForm />} />
					<Route path="" element={<LandingPage />} />
				</Route>
			)}
		</Routes>
	);
}

export default RouteConfig;
