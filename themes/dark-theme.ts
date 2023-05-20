import { createTheme } from "@mui/material";
import { blue, blueGrey, grey, lightBlue, red } from "@mui/material/colors";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: grey[900],
    },
    primary: {
      main: blue[500],
    },
    secondary: {
      main: blueGrey[500],
    },
    error: {
      main: red.A700,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#505962",
        },
      },
    },
  },
});
export default darkTheme;
