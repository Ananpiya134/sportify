import { useNavigate } from "react-router-dom";
import "../../App.css";

function NavBar() {
  const navigate = useNavigate();

  return (
    <div className={`Nav`}>
      <div className={`nav_body d-flex justify-content-around`}>
        {/* home button */}
        <button className={`btn`} onClick={() => navigate("/home")}>
          <i className={`fa-solid fa-house nav_btn`} />
        </button>

        {/* calendar button */}
        <button className={`btn`} onClick={() => navigate("/calendar")}>
          <i className={`fa-solid fa-calendar-days nav_btn`} />
        </button>

        {/* add button */}
        <button
          className={`btn add_btn`}
          onClick={() => navigate("/create-event")}
        >
          <i
            className={`fa-solid fa-plus`}
            style={{ color: "#ffffff", backgroundColor: "#34A853" }}
          />
        </button>

        {/* message button */}
        <button className={`btn`}>
          <i className={`fa-solid fa-message nav_btn`} />
        </button>

        {/* profile setting button */}
        <button className={`btn`} onClick={() => navigate("/Profile")}>
          <i className={`fa-solid fa-user nav_btn`} />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
