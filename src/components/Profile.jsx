import React, { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "../config/axios";
import { FcOk } from "react-icons/fc";
import NavBar from "./layout/NavBar";
import Input from "./layout/Input";
import defaultImg from "../assets/images/profileImg.png";
import { AuthContext } from "../contexts/AuthContext";
import { Modal } from "bootstrap";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [profile, setProfile] = useState([]);
  const [isEditBio, setIseditBio] = useState(false);
  const modalEl = useRef();
  const imgInputEl = useRef();
  const [img, setImg] = useState("");
  const [modal, setModal] = useState(null);

  const handleClick = () => {
    const modalObj = new Modal(modalEl.current);
    setModal(modalObj);

    modalObj.show();
  };

  const handleSubmitForm = async (e) => {
    console.log(e);
    e.preventDefault();
    const formData = new FormData();
    formData.append("profile", img);
    try {
      const res = await axios.patch(`/users/profile/${user.id}`, formData);
      console.log(res.data.user);
      setProfile(res.data.user);
      modal.hide();
      setImg("");
      // setTitle("");
      imgInputEl.current.value = null;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (profile.length < 1) {
      axios
        .get(`/users/${user.id}`)
        .then((res) => {
          // console.log(event);
          setProfile(res.data.user); // set new state
          console.log(res.data.user);
        })
        .catch((err) => console.log(err));
    }
    console.log(user);
    // console.log(profile);
  }, [profile]);

  // const fetchProfile = async () => {
  //   try {
  //     const res = await axios.get(`/users/${user.id}`);
  //     setProfile(res.data.user); // set new state
  //     console.log(res.data.user);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchProfile();
  // }, []);

  const updateBio = (id, bio) => {
    axios
      .put("http://localhost:8000/profile", { bio: "" })
      .then((response) => {});
  };

  console.log(profile);
  console.log(profile.imgUrl);
  console.log(typeof profile);

  return (
    <div>
      {profile && (
        <div className="profile_image_profile">
          <div>
            <div className="profile_image_details">
              <div>
                <i className="fa-solid fa-camera " onClick={handleClick}></i>
                <img
                  src={
                    profile.imgUrl && profile.imgUrl.length > 0
                      ? profile.imgUrl
                      : defaultImg
                  }
                  width="80"
                  height="80"
                  className="rounded-circle"
                  alt="user"
                />
              </div>
            </div>

            <div className="modal" ref={modalEl}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Create Post</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      onClick={() => {
                        setImg("");

                        imgInputEl.current.value = null;
                      }}
                    ></button>
                  </div>

                  <div className="modal-body">
                    <form onSubmit={handleSubmitForm}>
                      <div className="mb-5">
                        {/* <textarea
                          className="form-control mb-3"
                          rows="3"
                          placeholder="What's on your mind?"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        /> */}
                        {img && (
                          <img
                            src={URL.createObjectURL(img)}
                            className="img-fluid"
                            alt="post-img"
                          />
                        )}
                        <div className="input-group mt-3">
                          <input
                            type="file"
                            className="form-control"
                            ref={imgInputEl}
                            onChange={(e) => {
                              if (e.target.files[0]) setImg(e.target.files[0]);
                            }}
                          />
                          <button
                            className="btn btn-outline-danger"
                            type="button"
                            onClick={() => {
                              imgInputEl.current.value = null;
                              setImg("");
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      <div className="d-grid">
                        <button
                          className="btn btn-primary"
                          onClick={() => navigate("/profile")}
                        >
                          Upload Picture
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
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
            <div className="profile-details"></div>
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
                  marginTop: "25px",
                }}
                onChange={(e) => {
                  setProfile({ ...profile, bio: e.target.value });
                }}
                value={profile && profile.bio ? profile.bio : ""}
              />
              <button
                className="btn btn-success"
                onClick={() => {
                  let bio = profile.bio;
                  axios
                    .put(`/users/bio/${user.id}`, { bio: bio })
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
                className="btn btn-secondary"
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
