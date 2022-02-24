// import { ACCESS_TOKEN } from "../config/data";

// concern browser only

const getToken = () => localStorage.getItem("token");
const setToken = (value) => localStorage.setItem("token", value);
const clearToken = () => localStorage.removeItem("token");

export { getToken, setToken, clearToken };
