import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Redirect 
} from "react-router-dom";
import Box from "@mui/material/Box";

import LandingPage from "./layout/landing/LandingPage";
import Header from "./layout/header/Header";
import Profile from "./views/profile/Profile";
import Account from "./views/account/Account";
import Shashtrarth from "./views/shashtrarth/Shashtrarth";
import Utkrishth from "./views/utkrishth/Utkrishth";

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
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/prakrishth" render={() => (<Redirect to="/" />)} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/shashtrarth" component={Shashtrarth} />
            <Route exact path="/utkrishth" component={Utkrishth} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </Box>
      </Router>
    </Box>
  );
}

export default App;
