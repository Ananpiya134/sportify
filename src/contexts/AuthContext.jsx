import { createContext, useEffect, useState, useContext } from "react";
import axios from "../config/axios";
import { clearToken, setToken, getToken } from "../services/localStorage";

import { ErrorContext } from "../contexts/ErrorContext";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const { setError } = useContext(ErrorContext);

  useEffect(() => {
    // console.log("effect eun");
    // console.log(getToken());
    if (getToken()) {
      axios
        .post(`/auth`)
        .then((res) => {
          console.log(res.data);
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
      console.log(err.message);
      setError(err.response.data.message);
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
