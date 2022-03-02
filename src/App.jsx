import RouteConfig from "./routes/RouteConfig";
import { toast, ToastContainer } from "react-toastify";
import { useContext } from "react";
import { ErrorContext } from "./contexts/ErrorContext";
import { useEffect } from "react";

import { ToastContext } from "./contexts/ToastContext";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

function App() {
	const { error, setError } = useContext(ErrorContext);
	const { message, setMessage } = useContext(ToastContext);
	useEffect(() => {
		if (error && error !== "") {
			toast.error(error);
			return setError("");
		}
	}, [error]);

	useEffect(() => {
		if (message && message !== "") {
			return setMessage("");
		}
	}, [message]);

	return (
		<>
			<ToastContainer
				position="top-left"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<RouteConfig />
		</>
	);
}

export default App;
