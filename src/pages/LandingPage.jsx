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
      <div style={{ marginTop: "70px" }}>
        <h2 className="b-text-landing">SPORTIFY</h2>
        <h3>Let's connect and Enjoy the activity.</h3>
      </div>

      <img
        src="https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        alt=""
        height="350"
        width="350"
        style={{ marginTop: "40px" }}
      />

      <div
        className="d-flex justify-content-around "
        style={{
          marginTop: "90px",
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
