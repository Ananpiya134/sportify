import { createContext, useEffect, useState, useContext } from "react";
import axios from "../config/axios";
import { clearToken, setToken, getToken } from "../services/localStorage";

import { ErrorContext } from "../contexts/ErrorContext";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
<<<<<<< HEAD
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
=======
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
    <AuthContext.Provider value={{ user, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
>>>>>>> 0096917f073e6004236a8a52a1982f80b8d4962f
}

export default AuthContextProvider;
export { AuthContext };
