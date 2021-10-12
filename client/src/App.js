import React from "react";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

import './App.scss';

const theme = createTheme({
  typography: {
    fontFamily: [
      'PoppinsBold',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Prakrishth</h1>
    </ThemeProvider>
  );
}

export default App;