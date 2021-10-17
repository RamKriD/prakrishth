import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Box from "@mui/material/Box";

import "./App.scss";

import LandingPage from "./layout/landing/LandingPage";

import Header from "./layout/header/Header";

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

function App() {
  return (
    <Box sx={{ display: "flex"}}>
      <Router>
        <Header />
        <Box component="main" sx={{ flexGrow: 1, p: 3, mt: "48px" }}>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Box>
      </Router>
    </Box>
  );
}

export default App;
