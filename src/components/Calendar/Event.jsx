import { Link } from "react-router-dom";

function Event({ data }) {
  // console.log(data);

  let timeStart = data.timeStart.split("T")[1].split(".")[0].substr(0, 5);
  let timeEnd = data.timeEnd.split("T")[1].split(".")[0].substr(0, 5);

  return (
    <div className="d-flex justify-content-center">
      <Link to={`/events/${data.id}`}>
        <div className="card bg-secondary" style={{ width: "20rem" }}>
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <h6 className="card-subtitle mb-2 ">
              {new Date(data.timeStart).toDateString()}
            </h6>
            <h6 className="card-subtitle mb-2 ">
              {timeStart}-{timeEnd}
            </h6>
            <h6 className="card-subtitle mb-2 ">{data.locationLat}</h6>
            <p className="card-text">
              Details: {data.detail.substr(0, 50) + "..."}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Event;
