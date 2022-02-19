import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../config/axios";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import GoogleLogin from "react-google-login";
import { REACT_GOOGLE_CLIENT_ID } from "../config/env";

function LandingPage() {
	const navigate = useNavigate();

	const handleLogin = (googleData) => {
		console.log(googleData);
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
			<div style={{ marginTop: "30px" }}>
				<button className="button-facebook" type="button">
					<BsFacebook style={{ width: "50px" }} />
					Continue With Facebook
				</button>
			</div>

			{/* google login component */}
			<GoogleLogin
				clientId={REACT_GOOGLE_CLIENT_ID}
				// style={{ color: "black" }}
				className={`google_btn`}
				buttonText="Continue with Google"
				onSuccess={handleLogin}
				onFailure={handleFailure}
				cookiePolicy={"single_host_origin"}
			></GoogleLogin>

			{/* <div style={{ marginTop: "30px" }}>
				<button className="button-google" type="button">
					<FcGoogle style={{ width: "50px" }} />
					Continue With Google
				</button>
			</div> */}
		</div>
	);
}

export default LandingPage;
