import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function MainLayout() {
  return (
    <>
      <Outlet />
      <div className="under_nav"></div>
      <NavBar />
    </>
  );
}

export default MainLayout;
