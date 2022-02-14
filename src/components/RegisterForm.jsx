import React, { useState } from "react";

function RegisterForm() {
  return (
    <div>
      <div style={{ marginTop: "69px" }}>
        <h4>Personal Information</h4>
      </div>

      <form>
        <label className="label-register">
          <p className="label-txt">Name</p>
          <input type="text" className="input" />
          <div className="line-box">
            <div className="line"></div>
          </div>
        </label>
        <label className="label-register">
          <p className="label-txt">Email</p>
          <input type="text" className="input" />
          <div className="line-box">
            <div className="line"></div>
          </div>
        </label>
        <label className="label-register">
          <p className="label-txt">Phone Number</p>
          <input type="text" className="input" />
          <div className="line-box">
            <div className="line"></div>
          </div>
        </label>
        <label className="label-register">
          <p className="label-txt">Date of Birth</p>
          <input
            style={{
              border: "none",
              width: "70vw",
              marginTop: "15px",
              backgroundColor: "white",
              color: "black",
              textAlign: "center",
            }}
            type="date"
            className="form-control"
            // value="2022-01-12"
            id="txtDate"
            name="txtDate"
          />
          <div className="line-box">
            <div className="line"></div>
          </div>
        </label>

        <label className="label-register">
          <p className="label-txt">Password</p>
          <input type="text" className="input" />
          <div className="line-box">
            <div className="line"></div>
          </div>
        </label>
        <label className="label-register">
          <p className="label-txt">Confirm Password</p>
          <input type="text" className="input" />
          <div className="line-box">
            <div className="line"></div>
          </div>
        </label>
        <div
          style={{
            marginTop: "0px",
            paddingLeft: "0px",
          }}
        >
          <button>NEXT</button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
