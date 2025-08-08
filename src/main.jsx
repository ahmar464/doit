import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TaskProvider } from "./context/TaskProvider";
import { ThemeProvider } from "./context/ThemeProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <TaskProvider>
        {" "}
        {/* ✅ this must wrap App */}
        <App />
      </TaskProvider>
    </ThemeProvider>
  </React.StrictMode>
);
