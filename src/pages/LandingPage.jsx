import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../config/axios";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import GoogleLogin from "react-google-login";
import { REACT_GOOGLE_CLIENT_ID } from "../config/env";
import { AuthContext } from "../contexts/AuthContext";

function LandingPage() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (googleData) => {
    const res = await axios.post("auth/login/google", {
      token: googleData.tokenId,
    });
    console.log(res.data);
    // setLoginData(res.data.token);
    setUser(res.data);
    localStorage.setItem("loginData", res.data.token);
    // console.log(googleData);
  };

  const handleFailure = (res) => {
    alert(res);
  };
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
        <button
          className="button-register"
          type="button"
          onClick={() => navigate("/login")}
        >
          Sign in
        </button>
        <button
          className="button-register"
          type="button"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </div>
      <div style={{ marginTop: "30px" }}></div>

      {/* google login component */}

      <GoogleLogin
        clientId={REACT_GOOGLE_CLIENT_ID}
        className={`google_btn`}
        buttonText="Continue with Google"
        onSuccess={handleLogin}
        onFailure={handleFailure}
        cookiePolicy={"single_host_origin"}
      ></GoogleLogin>
    </div>
  );
}

export default LandingPage;
