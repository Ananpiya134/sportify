import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../config/axios";
import { AuthContext } from "../../contexts/AuthContext";

import validator from "validator";
import { ErrorContext } from "../../contexts/ErrorContext";
import { ToastContext } from "../../contexts/ToastContext";

function LoginForm() {
  const { login } = useContext(AuthContext);
  const { setError } = useContext(ErrorContext);
  const { setMessage } = useContext(ToastContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    setError("");

    if (!validator.isEmail(email)) {
      console.log("Invalid email format");
      return setError("Invalid email format");
    }
    if (validator.isEmpty(password) || password.includes(" ")) {
      console.log("Password can't be empty, whitespace not allowed");
      return setError("Password can't be empty, whitespace not allowed");
    }
    login(email, password);
  };

  return (
    <div>
      <div style={{ marginTop: "69px", marginLeft: "51px" }}>
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
