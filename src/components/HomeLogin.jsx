import React from "react";
import { Link } from "react-router-dom";
import axios from "../config/axios";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

function HomeLogin() {
  return (
    <div className={`d-flex flex-column align-items-center`}>
      <div style={{ marginTop: "69px" }}>
        <h2 className="b-text">Sportify</h2>
      </div>
      <img
        src="https://res.cloudinary.com/dup2jwtit/image/upload/v1644769593/david-tran-g-dZ1h7nQ0E-unsplash_1_grmrea.jpg"
        alt=""
        height="300"
        width="300"
      />

      <div
        className="d-flex justify-content-around "
        style={{
          marginTop: "120px",
          marginLeft: "5px",
          marginRight: "5px",
          alignItems: "center",
          width: "350px",
        }}
      >
        {/* <Link
          to="/"
          style={{
            padding: "10px",
            textDecoration: "none",
            color: "rgb(0, 51, 153)",
          }}
        > */}
        <button className="button-register " type="submit">
          Sign in
        </button>
        {/* </Link> */}

        <button className="button-register" type="submit">
          Register
        </button>
      </div>
      <div style={{ marginTop: "30px" }}>
        <button className="button-facebook" type="submit">
          <BsFacebook style={{ width: "50px" }} /> Continue With Facebook
        </button>
      </div>
      <div style={{ marginTop: "30px" }}>
        <button className="button-google" type="submit">
          <FcGoogle style={{ width: "50px" }} /> Continue With Google
        </button>
      </div>
    </div>
  );
}

export default HomeLogin;
