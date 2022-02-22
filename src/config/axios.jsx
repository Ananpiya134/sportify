import axios from "axios";
import { getToken } from "../services/localStorage";

<<<<<<< HEAD
axios.defaults.baseURL = process.env.API_URL;
=======
axios.defaults.baseURL = "http://localhost:8000";
>>>>>>> profile

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
