import { Link } from "react-router-dom";
import "./event.css";

function CalendarDetail({ data }) {
  // console.log(data);

  let timeStart = data.timeStart.split("T")[1].split(".")[0].substr(0, 5);
  let timeEnd = data.timeEnd.split("T")[1].split(".")[0].substr(0, 5);

  return (
    <div className="d-flex justify-content-center">
      <Link to={`/events/${data.id}`}>
        <div className="card bg-secondary" style={{ width: "20rem" }}>
          <div className="card-body">
            <h3 className="card-title text-cd">{data.title}</h3>

            <h6 className="card-subtitle mb-2 text-cd ">
              {new Date(data.timeStart).toDateString()}
            </h6>
            <h6 className="card-subtitle mb-2 text-cd ">
              {timeStart}-{timeEnd}
            </h6>
            <h6 className="card-subtitle mb-2 text-cd ">{data.locationLat}</h6>
            <hr className="line-card" />
            <p className="card-text text-cd">
              Details: {data.detail.substr(0, 50) + "..."}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CalendarDetail;
