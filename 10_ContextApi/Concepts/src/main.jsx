import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MyState from "./context/MyState";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyState>
      <App />
    </MyState>
  </StrictMode>
);
