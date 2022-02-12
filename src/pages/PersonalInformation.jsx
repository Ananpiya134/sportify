import React, { useState } from "react";

function PersonalInformation() {
  return (
    <div>
      <div style={{ marginTop: "69px" }}>
        <h4>Additional Information</h4>
        <p>Hold and drag your photos to change the order </p>
      </div>

      <form>
        <label>
          <p className="label-txt">Email</p>
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
          <p className="label-txt">Phone Number</p>
          <input type="text" className="input" />
          <div className="line-box">
            <div className="line"></div>
          </div>
        </label>
        <label>
          <p className="label-txt">Date of Birth</p>
          <input type="text" className="input" />
          <div className="line-box">
            <div className="line"></div>
          </div>
        </label>
        <label>
          <p className="label-txt">Gender</p>
          <input type="text" className="input" />
          <div className="line-box">
            <div className="line"></div>
          </div>
        </label>
        <div
          style={{
            marginTop: "30px",
            paddingLeft: "0px",
            // backgroundColor: "green",
          }}
        >
          <button>NEXT</button>
          {/* <a href="#">NEXT</a> */}
        </div>
      </form>
    </div>
  );
}

export default PersonalInformation;
