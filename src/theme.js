import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Arial", sans-serif',
      fontWeight: 700,
      fontSize: '3rem',
    },
    h2: {
      fontFamily: '"Helvetica", sans-serif',
      fontWeight: 500,
      fontSize: '2.5rem',
    },
    h3: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 400,
      fontSize: '2rem',
    },
    body1: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 300,
      fontSize: '1rem',
    },
    body2: {
      fontFamily: '"Arial", sans-serif',
      fontWeight: 300,
      fontSize: '0.875rem',
    },
    caption: {
      fontFamily: '"Helvetica", sans-serif',
      fontWeight: 200,
      fontSize: '0.75rem',
    },
    // Add more variants as needed
  },
});

export default theme;
