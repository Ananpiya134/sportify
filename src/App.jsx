import RouteConfig from "./routes/RouteConfig";
import "./App.css";
<<<<<<< HEAD
import { GOOGLE_MAP_API } from "./config/env";
function App() {
  return (
    <>
      <RouteConfig />
    </>
=======

import HomePage from "./components/HomePage";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import EventDetail from "./components/EventDetail/EventDetail";
import ChooseEvent from "./components/ChooseEvent";
import EventCalendar from "./components/Calendar/EventCalendar";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div style={{ width: "390px", height: "788px" }}>
      {/* <HomePage /> */}
      {/* <LoginForm /> */}
      {/* <RegisterForm /> */}
      {/* <EventDetail /> */}
      {/* <ChooseEvent /> */}
      {/* <EventCalendar /> */}
      <Profile />
      <NavBar />
    </div>
>>>>>>> profile
  );
}

export default App;
