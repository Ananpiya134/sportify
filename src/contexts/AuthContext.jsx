import { createContext, useEffect, useState, useContext } from "react";
import axios from "../config/axios";
import { clearToken, setToken, getToken } from "../services/localStorage";

import { ErrorContext } from "../contexts/ErrorContext";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
	const { setError } = useContext(ErrorContext);

	const [user, setUser] = useState(null);

	useEffect(() => {
		if (getToken()) {
			axios
				.post(`/auth/`)
				.then((res) => {
					setUser(res.data.user);
				})
				.catch((err) => console.log(err));
		}
	}, []);

	const login = async (email, password) => {
		try {
			setError("");
			const res = await axios.post("/auth/login", {
				email,
				password,
			});
			setToken(res.data.token);
			setUser(res.data.user);
			console.log(res.data.user);
		} catch (err) {
			setError(err.response.data.message);
			console.log(err.message);
		}
	};

	const logout = () => {
		clearToken();
		setUser(null);
	};

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthContextProvider;
export { AuthContext };
