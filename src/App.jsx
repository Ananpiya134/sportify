import RouteConfig from "./routes/RouteConfig";
import { useContext } from "react";
import { ErrorContext } from "./contexts/ErrorContext";
import { useRef, useEffect } from "react";
import { Toast } from "bootstrap";

import "./App.css";

function App() {
  const { error } = useContext(ErrorContext);

  const toastEl = useRef();

  useEffect(() => {
    if (error) {
      const toast = new Toast(toastEl.current);
      toast.show();
    }
  }, [error]);
  return (
    <>
      <div
        className="toast-container position-absolute p-3 start-50 bottom-0 translate-middle-x"
        id="toastPlacement"
      >
        <div
          className="toast
          align-items-center
          text-white
          bg-danger
          border-0"
          ref={toastEl}
        >
          <div className="d-flex">
            <div className="toast-body ">{error}</div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
            ></button>
          </div>
        </div>
      </div>
      <RouteConfig />
    </>
  );
}

export default App;
