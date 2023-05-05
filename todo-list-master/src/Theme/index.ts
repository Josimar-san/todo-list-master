import { createTheme} from "@mui/material/styles";
import { dark } from "@mui/material/styles/createPalette";

export const darkTheme = createTheme({
  palette: {
    ...dark,
    mode:"dark",
  }
});


