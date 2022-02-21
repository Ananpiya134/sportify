import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../config/axios";
import { FcOk } from "react-icons/fc";

function Profile() {
  return (
    <div>
      <div className="profile_image_profile">
        <div className="profile_image_details">
          <div>
            <img
              src="https://res.cloudinary.com/dup2jwtit/image/upload/v1645436464/profile-pic_lny6uc.jpg"
              width="80"
              height="80"
              class="rounded-circle"
              alt="user"
            />
          </div>
          <div className="profile-name">
            <div>Tracy Kemp</div>

            <div>
              <FcOk />
            </div>
          </div>
          <div className="profile-area">
            <p>Rangsit Bkk</p>
          </div>

          <div className="profile-details">
            <div style={{ padding: "30px", textAlign: "center" }}>
              0 K <br />
              Friends
            </div>
            <div style={{ padding: "30px", textAlign: "center" }}>
              112 <br />
              Events
            </div>
            <div style={{ padding: "30px", textAlign: "center" }}>
              12 <br /> Badges
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
