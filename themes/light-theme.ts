import { createTheme } from "@mui/material";
import { grey, blue, red, lightBlue } from "@mui/material/colors";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: grey[300],
    },
    primary: {
      main: blue[500],
    },
    secondary: {
      main: lightBlue[500],
    },
    error: {
      main: red[700],
    },
  },
  components: {},
});
export default lightTheme;
