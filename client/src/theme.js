import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FF9933",
      light: "#FFAF5F",
      dark: "#F07800",
    },
    secondary: {
      main: "#3399FF",
      light: "#5FAFFF",
      dark: "#0078F0",
    },
    background: {
      default: "#a6292a",
      paper: "#691722",
    },
  },
  typography: {
    fontFamily: '"PoppinsRegular"',
    h1: {
      fontFamily: '"PoppinsRegular"',
    },
    h2: {
      fontFamily: '"PoppinsRegular"',
    },
    h3: {
      fontFamily: '"PoppinsRegular"',
    },
    h4: {
      fontFamily: '"PoppinsRegular"',
    },
    h5: {
      fontFamily: '"PoppinsRegular"',
    },
    h6: {
      fontFamily: '"PoppinsRegular"',
    },
  },
  props: {
    MuiTooltip: {
      arrow: true,
    },
    MuiButton: {
      size: "small",
    },
    MuiButtonGroup: {
      size: "small",
    },
    MuiCheckbox: {
      size: "small",
    },
    MuiFab: {
      size: "small",
    },
    MuiFormControl: {
      margin: "dense",
      size: "small",
    },
    MuiFormHelperText: {
      margin: "dense",
    },
    MuiIconButton: {
      size: "small",
    },
    MuiInputBase: {
      margin: "dense",
    },
    MuiInputLabel: {
      margin: "dense",
    },
    MuiRadio: {
      size: "small",
    },
    MuiSwitch: {
      size: "small",
    },
    MuiTextField: {
      margin: "dense",
      size: "small",
    },
  },
});

export default theme;
