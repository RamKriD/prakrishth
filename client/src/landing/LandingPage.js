import React, { Fragment } from "react";
import Content from "./components/content/Content";

import Header from "./components/header/Header";

import Box from "@mui/material/Box";

function LandingPage(props) {
  return (
    <Fragment>
      <Box sx={{ display: "flex" }}>
        <Header />
        <Content />
      </Box>
    </Fragment>
  );
}

export default LandingPage;
