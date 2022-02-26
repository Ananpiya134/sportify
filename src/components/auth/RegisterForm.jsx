import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [dateofBirth, setDateOfBirth] = useState("");
	const [gender, setGender] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const navigate = useNavigate();

	const handleSubmitRegister = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post("/auth/register", {
				firstName,
				lastName,
				email,
				phoneNumber,
				password,
				confirmPassword,
			});
			navigate("/");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			<div style={{ marginTop: "69px", marginLeft: "51px" }}>
				<h4>Personal Information</h4>
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
