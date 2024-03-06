import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#553C9A',
    },
    secondary: {
      main: '#9F7AEA',
    },
    error: {
      main: '#E53E3E',
    },
  },
});

export default theme;