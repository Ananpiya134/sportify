import RouteConfig from "./routes/RouteConfig";
import { useLoadScript, GoogleMap } from "@react-google-maps/api";
import "./App.css";
import { GOOGLE_MAP_API } from "./config/env";
function App() {
	return (
		<>
			<RouteConfig />
		</>
	);
}

export default App;
