import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../config/axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.table({
      // login(email, password);
      email,
      password,
    });
  };

  return (
    <div>
      <div style={{ marginTop: "69px" }}>
        <h4> Sign-in</h4>
      </div>

      <form onSubmit={handleSubmitLogin}>
        <label style={{ lineHeight: "0px" }}>
          <p className="label-txt">Please Enter Email</p>
          <input
            type="text"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="line-box">
            <div className="line"></div>
          </div>
        </label>

        <label>
          <p className="label-txt">Enter Your Password</p>
          <input
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="line-box">
            <div className="line"></div>
          </div>
        </label>

        <div style={{ marginTop: "120px" }}>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
