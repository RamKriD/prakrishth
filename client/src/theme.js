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
    fontFamily: '"NotoSerifDevanagari", "NotoSansDevanagariRegular"',
    fontWeightRegular: 400,
    fontWeightBold: 600,
    fontWeightLight: 200,
    fontWeightMedium: 500,
    h1: {
      fontFamily: '"NotoSerifDevanagari", "NotoSansDevanagariRegular"',
      fontWeight: 600
    },
    h2: {
      fontFamily: '"NotoSerifDevanagari", "NotoSansDevanagariRegular"',
      fontWeight: 500
    },
    h3: {
      fontFamily: '"NotoSerifDevanagari", "NotoSansDevanagariRegular"',
      fontWeight: 500
    },
    h4: {
      fontFamily: '"NotoSerifDevanagari", "NotoSansDevanagariRegular"',
    },
    h5: {
      fontFamily: '"NotoSerifDevanagari", "NotoSansDevanagariRegular"',
    },
    h6: {
      fontFamily: '"NotoSerifDevanagari", "NotoSansDevanagariRegular"',
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
