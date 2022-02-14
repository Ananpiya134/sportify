import React from "react";
import { Link } from "react-router-dom";
import axios from "../config/axios";

function HomePage() {
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
        <button type="submit">Sign in</button>
        <button type="submit">Register</button>
      </div>
    </div>
  );
}

export default HomePage;
