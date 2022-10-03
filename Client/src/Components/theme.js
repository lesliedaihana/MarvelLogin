import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fd2e3e",
    },
  },
  typography: {
    h1: {
      fontFamily: "'Heebo', sans-serif",
      fontSize: "60px",
      fontWeight: "500",
    },
    body1: {
      fontFamily: "'Heebo', sans-serif",
      fontSize: "14px",
      fontWeight: "400",
    },
  },
});
