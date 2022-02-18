import axios from "axios";
import { getToken } from "../services/localStorage";

axios.defaults.baseURL = process.env.API_URL;

axios.interceptors.request.use(
	(config) => {
		if (getToken()) {
			config.headers.Authorization = "Bearer " + getToken();
		}
		return config;
	},
	(err) => Promise.reject(err)
);

export default axios;
