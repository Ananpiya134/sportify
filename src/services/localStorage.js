// import { ACCESS_TOKEN } from "../config/data";

// concern browser only

const getToken = () => localStorage.getItem("loginData");
const setToken = (value) => localStorage.setItem("loginData", value);
const clearToken = () => localStorage.removeItem("loginData");

export { getToken, setToken, clearToken };
