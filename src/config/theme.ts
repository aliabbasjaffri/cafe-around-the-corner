import { createMuiTheme } from '@material-ui/core/styles';

const themeColors = {
  primary: {
    main: '#90caf9',
    light: '#a6d4fa',
    dark: '#648dae',
    contrastText: '#a6d4fa'
  },
  secondary: {
    main: '#2196f3',
    light: '#64b5f6',
    dark: '#1976d2',
    contrastText: '#64b5f6'
  }
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: themeColors.primary.main,
      light: themeColors.primary.light,
      dark: themeColors.primary.dark,
      contrastText: themeColors.primary.contrastText
    },
    secondary: {
      main: themeColors.secondary.main,
      light: themeColors.secondary.light,
      dark: themeColors.secondary.dark,
      contrastText: themeColors.secondary.contrastText
    }
  }
});

export { theme };
