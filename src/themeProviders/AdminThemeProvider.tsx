import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeOverrides, PaletteOverrides } from 'types';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
  // allow configuration using `createTheme`
  interface Theme extends ThemeOverrides {}
  interface ThemeOptions extends ThemeOverrides {}
}

declare module '@mui/material/styles/createPalette' {
  interface Palette extends PaletteOverrides {}
  interface PaletteOptions extends PaletteOverrides {}
}

const baseTheme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 320,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#141414',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#E2FF00',
    },
    neutral: {
      main: '#C8C7C6',
      contrastText: '#fff',
    },
    background: {
      paper: '#FCFBFA',
      default: '#F7F5F2'
    }
  },
  typography: {
    fontFamily: ['century-gothic', 'sans-serif'].join(','),
  },
  zIndex: {
    appBar: 1100,
  },
  spacing: 4,
  maxHeight: 0,
  borderRadius: {
    default: 3,
    circle: '50%',
  },
});

const StageThemeProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default StageThemeProvider;
