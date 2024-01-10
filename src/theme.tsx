import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#f86260',
    },
    secondary: {
      main: '#fffcf8',
    },
    grey: {
      "100": 'rgba(255, 255, 255, 0.5)',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
