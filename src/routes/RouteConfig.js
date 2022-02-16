import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import MainLayout from "../components/layout/MainLayout";
import EventDetail from "../components/EventDetail/EventDetail";

function RouteConfig() {

    return (
        <Routes>
            {/* <Route path="/" element={<PublicLayout />}>
                <Route path="login" element={<LoginForm />} />
                <Route path="register" element={<RegisterForm />} />
                <Route path="" element={<LandingPage />} />
            </Route> */}
            <Route path="/" element={<MainLayout />}>
                <Route path="home" element={<HomePage />} />
                <Route path="*" element={<HomePage />} />
                <Route path="create-event" element={<EventDetail />} />
            </Route>
        </Routes>
    );
}

export default RouteConfig