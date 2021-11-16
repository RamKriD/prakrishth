import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
    <Box sx={{ display: "flex" }}>
      <BrowserRouter>
        <Header />
        <Box component="main" sx={{ flexGrow: 1, p: 3, mt: "48px" }}>
          <Routes>
            <Route exact path="/" element={<LandingPage animate={true} />} />
            <Route
              exact
              path="/prakrishth"
              element={<LandingPage animate={true} />}
            />
            <Route exact path="/profile" element={<Profile animate={true} />} />
            <Route exact path="/account" element={<Account animate={true} />} />
            <Route
              exact
              path="/shashtrarth"
              element={<Shashtrarth animate={true} />}
            />
            <Route
              exact
              path="/utkrishth"
              element={<Utkrishth animate={true} />}
            />
            <Route path="*" element={<NoMatch animate={true} />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </Box>
  );
}

export default App;
