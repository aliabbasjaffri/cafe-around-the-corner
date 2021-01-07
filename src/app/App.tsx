import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { themeColors } from '../config/color-config';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: themeColors.primary.main,
      light: themeColors.primary.light,
      dark: themeColors.primary.dark,
      contrastText: ''
    },
    secondary: {
      main: themeColors.secondary.main,
      light: themeColors.secondary.light,
      dark: themeColors.secondary.dark,
      contrastText: themeColors.secondary.contrastText
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <header className="Cafe around the corner" />
      <body>
        <p>Hello to cafe around the corner</p>
      </body>
    </ThemeProvider>
  );
}

export default App;
