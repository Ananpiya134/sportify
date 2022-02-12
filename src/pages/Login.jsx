import React from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div>
      <div style={{ marginTop: "69px" }}>
        <h4> Sign-in</h4>
      </div>

      <form>
        <label>
          <p className="label-txt">Please Enter Email</p>
          <input type="text" className="input" />
          <div className="line-box">
            <div className="line"></div>
          </div>
        </label>
        <label>
          <p className="label-txt">Name</p>
          <input type="text" className="input" />
          <div className="line-box">
            <div className="line"></div>
          </div>
        </label>
        <label>
          <p className="label-txt">Enetr Your Password</p>
          <input type="password" className="input" />
          <div className="line-box">
            <div className="line"></div>
          </div>
        </label>
        <label>
          <p className="label-txt">Repeat Your Password</p>
          <input type="password" className="input" />
          <div className="line-box">
            <div className="line"></div>
          </div>
        </label>
        <div style={{ marginTop: "20px" }}>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
