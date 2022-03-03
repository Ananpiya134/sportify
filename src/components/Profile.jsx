import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../config/axios";
import { FcOk } from "react-icons/fc";
import NavBar from "./layout/NavBar";
import Input from "./layout/Input";

function Profile() {
  const [profile, setProfile] = useState(null);
  const [isEditBio, setIseditBio] = useState(false);

  useEffect(() => {
    if (!profile) {
      axios
        .get(`/users/${1}`)
        .then((res) => {
          // console.log(event);
          setProfile(res.data.user); // set new state
          console.log(res.data.user);
        })
        .catch((err) => console.log(err));
    }
    console.log(profile);
  }, [profile]);

  const updateBio = (id, bio) => {
    axios
      .put("http://localhost:8000/profile", { bio: "" })
      .then((response) => {});
  };

  return (
    <div>
      {profile && (
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
              <div> {profile.firstName}</div>
              <div>
                <FcOk />
              </div>
            </div>
            <div className="profile-area">
              <p>Rangsit Bkk</p>
            </div>
            <div className="profile-details">
              {/* <div style={{ padding: "30px", textAlign: "center" }}>
                0 K <br />
                Friends
              </div> */}
              {/* <div
                style={{
                  paddingTop: "40px",
                  paddingBottom: "15px",
                  textAlign: "center",
                }}
              >
                112 <br />
                Events
              </div> */}
              {/* <div style={{ padding: "30px", textAlign: "center" }}>
                12 <br /> Badges
              </div> */}
            </div>
            {/* <div className="line-box">
              <div className="line"></div>
            </div> */}
          </div>

          {!isEditBio ? ( //edit bio section //
            <div className="bio-details" style={{ marginTop: "30px" }}>
              {profile.bio}
            </div>
          ) : (
            <div className="d-flex">
              <textarea
                type="text"
                name="bio"
                placeholder="Enter your bio here"
                style={{
                  width: "100%",
                  minHeight: "150px",
                  backgroundColor: "	#404040",
                }}
                onChange={(e) => {
                  setProfile({ ...profile, bio: e.target.value });
                }}
                value={profile && profile.bio ? profile.bio : ""}
              />
              <button
                className="btn btn-warning"
                onClick={() => {
                  let bio = profile.bio;
                  axios
                    .put(`/users/bio/${1}`, { bio: bio })
                    .then((res) => {
                      let data = res.data;
                      if (data.status) {
                        alert(data.msg);
                        setIseditBio(false);
                      } else {
                        alert(data.msg);
                      }
                    })
                    .catch((err) => console.log(err));
                }}
              >
                Update
              </button>
              <button
                className="btn btn-danger"
                onClick={() => {
                  setIseditBio(false);
                }}
                style={{ alignItems: "bottom" }}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      )}
      <NavBar />
      <button
        className="btn btn-success"
        onClick={() => {
          setIseditBio(true);
        }}
        style={{ width: "100%" }}
      >
        UPDATE BIO
      </button>
    </div>
  );
}
export default Profile;
