import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function MainLayout() {
  return (
    <div className="main-layout-container">
      <Outlet />
      <div className="under_nav"></div>
      <NavBar />
    </div>
  );
}

export default MainLayout;
