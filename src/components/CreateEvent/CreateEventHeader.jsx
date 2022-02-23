import { useNavigate } from "react-router-dom";

function CreateEventHeader() {
  const navigate = useNavigate();

  return (
    <div className={`d-flex mt-4 mx-4 w-100`}>
      <button className={`btn`} onClick={() => navigate("/home")}>
        <i
          className={`w-25 fa-solid fa-arrow-left text-white`}
          style={{ fontSize: "24px" }}
        />
      </button>

      <h3 className="w-75 d-flex align-items-center">CreateEvent</h3>
    </div>
  );
}

export default CreateEventHeader;
