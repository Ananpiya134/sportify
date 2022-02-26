import axios from "axios";
import React, { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";
import validator from "validator";
import { ErrorContext } from "../../contexts/ErrorContext";
import { ToastContext } from "../../contexts/ToastContext";

function RegisterForm() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [dateofBirth, setDateOfBirth] = useState("");
	const [gender, setGender] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const { setError } = useContext(ErrorContext);
	const { setMessage } = useContext(ToastContext);

	const navigate = useNavigate();

	const handleSubmitRegister = async (e) => {
		e.preventDefault();
		setError("");

		if (!validator.isAlpha(firstName, "en-US", { ignore: "_-" })) {
			console.log("Firstname must be characters");
			return setError(
				"First name must be characters; underscore allowed; whitespace not allowed"
			);
		}
		if (!validator.isAlpha(lastName, "en-US", { ignore: "_-" })) {
			console.log("Lastname must be characters");
			return setError(
				"Last name must be characters; underscore allowed; whitespace not allowed"
			);
		}

		if (!validator.isEmail(email)) {
			setMessage("Invalid email");
			return setError("Invalid e-mail address. Please try again ");
		}
		if (!validator.isMobilePhone(phoneNumber, "th-TH")) {
			console.log("Invalid phone number");
			return setError("Invalid phone number");
		}

		if (validator.isEmpty(password) || password.includes(" ")) {
			console.log("Password can't be empty, whitespace not allowed");
			return setError("Password can't be empty, whitespace not allowed");
		}
		if (password.length < 6) {
			console.log("Password is too short.Please enter more");
			return setError("Password should be more than 6 characters");
		}
		if (!validator.equals(password, confirmPassword)) {
			console.log("Passwords did not match");
			return setError("Passwords did not match");
		}

		try {
			const res = await axios.post("/auth/register", {
				firstName,
				lastName,
				email,
				phoneNumber,
				password,
				confirmPassword,
				gender,
			});
			setMessage("Registration Successful, Please Login");
			navigate("/");
		} catch (err) {
			setError(err.response.data.message);
		}
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
				<h4>Register</h4>
			</div>

			<form onSubmit={handleSubmitRegister}>
				<label className="label-register">
					<p className="label-txt">First Name</p>

					<input
						type="text"
						className="input"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
					<div className="line-box">
						<div className="line"></div>
					</div>
				</label>
				<label className="label-register">
					<p className="label-txt">Last Name</p>
					<input
						type="text"
						className="input"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
					<div className="line-box">
						<div className="line"></div>
					</div>
				</label>
				<label className="label-register">
					<p className="label-txt">Email</p>
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
				<label className="label-register">
					<p className="label-txt">Phone Number</p>
					<input
						type="text"
						className="input"
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
					/>
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
						id="txtDate"
						name="txtDate"
						value={dateofBirth}
						onChange={(e) => setDateOfBirth(e.target.value)}
					/>
				</label>
				<div className="radio-check">
					<input
						type="radio"
						value="Male"
						name="gender"
						onClick={(e) => setGender(e.target.value)}
					/>{" "}
					Male
					<input
						type="radio"
						value="Female"
						name="gender"
						onClick={(e) => setGender(e.target.value)}
					/>{" "}
					Female
					<input
						type="radio"
						value="non-binary"
						name="gender"
						onClick={(e) => setGender(e.target.value)}
					/>{" "}
					non-binary
				</div>

				<label className="label-register">
					<p className="label-txt">Password</p>
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
				<label className="label-register">
					<p className="label-txt">Confirm Password</p>
					<input
						type="password"
						className="input"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
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
					<button type="submit">NEXT</button>
				</div>
			</form>
		</div>
	);
}

export default RegisterForm;
