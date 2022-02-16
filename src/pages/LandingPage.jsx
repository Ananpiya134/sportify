import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../config/axios";

function LandingPage() {

  const navigate = useNavigate();
  return (
    <div>
      <div style={{ marginTop: "69px" }}>
        <h2>Sportify</h2>
      </div>
      <img
        src="https://res.cloudinary.com/dup2jwtit/image/upload/v1644769593/david-tran-g-dZ1h7nQ0E-unsplash_1_grmrea.jpg"
        alt=""
        height="300"
        width="300"
      />

      <div
        className="d-flex flex-wrap "
        style={{ marginTop: "120px", alignItems: "center" }}
      >
        <button
          type="button"
          onClick={() => navigate('/login')}
        >
          Sign in
        </button>
        <button
          type="button"
          onClick={() => navigate('/register')}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
