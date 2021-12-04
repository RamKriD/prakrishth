import React, { Fragment } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LocalizationContext from "../services/LocalizationContext";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function SideDrawer(props) {
  const locales = React.useContext(LocalizationContext);
  const drawer = (
    <Fragment>
      <DrawerHeader
        sx={{
          backgroundColor: "#FF9933",
          backgroundImage: "none",
          color: "#000",
          width: props.isOpen ? "240px" : "",
        }}
      >
        <IconButton onClick={() => props.onClose()}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider
        sx={{
          width: props.isOpen ? "240px" : "",
        }}
      />
      <List
        sx={{
          width: props.isOpen ? "240px" : "",
        }}
      >
        <ListItem
          button
          key={index}
          component={Link}
          to={"/prakrishth"}
          sx={{ ":hover": { textDecoration: "underline" } }}
          onClick={() => props.onClose()}
        >
          <ListItemText primary={locales.strings.prakrishth} />
        </ListItem>
        <ListItem
          button
          key={index}
          component={Link}
          to={"/utkrishth"}
          sx={{ ":hover": { textDecoration: "underline" } }}
          onClick={() => props.onClose()}
        >
          <ListItemText primary={locales.strings.utkrishth} />
        </ListItem>
        <ListItem
          button
          key={index}
          component={Link}
          to={"/shashtrarth"}
          sx={{ ":hover": { textDecoration: "underline" } }}
          onClick={() => props.onClose()}
        >
          <ListItemText primary={locales.strings.shashtrarth} />
        </ListItem>
      </List>
      <DrawerHeader
        sx={{
          backgroundColor: "#FF9933",
          backgroundImage: "none",
          color: "#000",
          width: props.isOpen ? "240px" : "",
          position: "absolute",
          bottom: "0",
        }}
      >
        <IconButton onClick={() => props.onClose()}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
    </Fragment>
  );
  return (
    <Drawer
      anchor="left"
      open={props.isOpen}
      ModalProps={{ onBackdropClick: props.onClose }}
      onClose={() => props.onClose()}
      sx={{
        width: props.isOpen ? "240px" : "",
      }}
    >
      {drawer}
    </Drawer>
  );
}

export default SideDrawer;
