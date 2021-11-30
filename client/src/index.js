import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import "./index.scss";

import theme from "./theme";

import App from "./App";
import { UserContextProvider } from "./services/UserContext";
import { LocalizationProvider } from "./services/LocalizationContext";

ReactDOM.render(
  <React.StrictMode>
    <LocalizationProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </ThemeProvider>
    </LocalizationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
} else if (
  window &&
  typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === "object"
) {
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {};
  __REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {};
}

if (navigator && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
