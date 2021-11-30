import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Link as ReactLink } from "react-router-dom";
import LocalizationContext from "../../services/LocalizationContext";

function Copyright() {
  const locales = useContext(LocalizationContext)
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" component={ReactLink} to="/">
        {locales.strings.prakrshth}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
          My sticky footer can be found here.
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}
