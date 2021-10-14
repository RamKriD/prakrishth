import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';

import "./index.scss";

import App from "./App";

import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
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
  __REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function() {};
}

if (navigator && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}