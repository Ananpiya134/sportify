import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import HeaderGuest from "./HeaderGuest";

function PublicLayout() {
  return (
    <>
      <Home />
      <Outlet />
    </>
  );
}

export default PublicLayout;
