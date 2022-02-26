import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../config/axios";
import { AuthContext } from "../../contexts/AuthContext";

import validator from "validator";
import { ErrorContext } from "../../contexts/ErrorContext";

function LoginForm() {
	const { user, login } = useContext(AuthContext);
	const { setError } = useContext(ErrorContext);

	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmitLogin = (e) => {
		e.preventDefault();

		setError("");

		if (!validator.isEmail(email)) {
			console.log("Incorrect email");
			return setError("Invalid email ");
		}
		if (validator.isEmpty(password) || password.includes(" ")) {
			console.log("Incorrect password");
			return setError("Invalid password");
		}

		login(email, password);
	};

	return (
		<div>
			<div className="d-flex align-items-center justify-content-start mt-3 ms-2">
				<button
					onClick={() => navigate("/")}
					style={{ backgroundColor: "transparent", fontSize: "24px" }}
				>
					<i className="fa-solid fa-arrow-left" />
				</button>
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
