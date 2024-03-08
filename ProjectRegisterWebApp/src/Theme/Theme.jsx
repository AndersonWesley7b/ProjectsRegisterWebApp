import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily:''
  },
  palette: {
    secondary: {
      light: '#b294ee',
      main: '#9f7aea',
      dark: '#6f55a3',
      contrastText: '#000',
    },
    primary: {
      light: '#9863ae',
      main: '#7F3C9A',
      dark: '#582a6b',
      contrastText: '#FFF',
    },
    background: {
      default: '#eee'
    }
    
  }
});