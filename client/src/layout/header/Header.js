import React, { Fragment, useState } from "react";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import SideDrawer from "../../components/SideDrawer";
import MuiLink from "@mui/material/Link";
import LanguageIcon from "@mui/icons-material/Language";

import { Link } from "react-router-dom";

import ScrollTop from "../../components/ScrollTop";
import UserContext from "../../services/UserContext";
import LocalizationContext from "../../services/LocalizationContext";

export default function Header(props) {
  const user = React.useContext(UserContext).user;
  const locales = React.useContext(LocalizationContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [languageAnchorEl, setLanguageAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isLangMenuOpen = Boolean(languageAnchorEl);

  const availableLanguages = locales.strings.getAvailableLanguages();
  console.log(availableLanguages);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuOpen = (event) => {
    setLanguageAnchorEl(event.currentTarget);
  };
  const handleLanguageMenuClose = (event, lang) => {
    if (lang) {
      locales.setLanguage(lang);
    }
    setLanguageAnchorEl(null);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuId = "primary-search-account-menu";
  const langId = "languageId";
  const renderMenu = user ? (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        component={Link}
        to="/profile"
        sx={{ ":hover": { textDecoration: "underline" } }}
        onClick={handleMenuClose}
      >
        {locales.strings.profile}
      </MenuItem>
      <MenuItem
        component={Link}
        to="/account"
        sx={{ ":hover": { textDecoration: "underline" } }}
        onClick={handleMenuClose}
      >
        {locales.strings.myAccount}
      </MenuItem>
      <MenuItem
        sx={{ ":hover": { textDecoration: "underline" }, color: "white" }}
      >
        <MuiLink href="/logout" color="inherit">
          {locales.strings.signOut}
        </MuiLink>
      </MenuItem>
    </Menu>
  ) : (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        sx={{ ":hover": { textDecoration: "underline" }, color: "white" }}
      >
        <MuiLink href="/login" color="inherit">
          {locales.strings.signIn}
        </MuiLink>
      </MenuItem>
    </Menu>
  );
  const renderLanguageButton = (
    <Menu
      anchorEl={languageAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={langId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isLangMenuOpen}
      onClose={(event) => handleLanguageMenuClose(event, null)}
    >
      {availableLanguages.map((lang, index) => (
        <MenuItem key={index} onClick={(event) => handleLanguageMenuClose(event, lang)}>
          <div>
            {index} : {lang}
          </div>
        </MenuItem>
      ))}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleLanguageMenuOpen}>
        <IconButton
          size="large"
          aria-label="change language"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <LanguageIcon />
        </IconButton>
        <p>{locales.strings.language}</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>{locales.strings.messages}</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>{locales.strings.notifications}</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>{locales.strings.profile}</p>
      </MenuItem>
    </Menu>
  );
  return (
    <Fragment>
      <AppBar
        position="fixed"
        open={mobileOpen}
        sx={{
          backgroundColor: "#FF9933",
          backgroundImage: "none",
          color: "#000",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "block" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, textAlign: "right" }}
          >
            <IconButton component={Link} to="/" sx={{ color: "#000" }}>
              {locales.strings.prakrshth}
            </IconButton>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="change language"
              aria-controls={langId}
              aria-haspopup="true"
              onClick={handleLanguageMenuOpen}
              color="inherit"
            >
              <LanguageIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box>
        <Toolbar id="back-to-top-anchor" sx={{ padding: "0px !important" }} />
      </Box>
      {renderMobileMenu}
      {renderMenu}
      {renderLanguageButton}
      <Box component="nav" aria-label="Applications">
        <SideDrawer isOpen={mobileOpen} onClose={handleDrawerToggle} />
      </Box>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Fragment>
  );
}
